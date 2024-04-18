# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1.1.3-alpine as base
WORKDIR /usr/src/app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# install with --production (exclude devDependencies)
RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# envs
ENV NODE_ENV=production
ENV PORT=3000

# build the project
RUN bun run build

# release image
FROM node:lts-alpine3.19 AS release
WORKDIR /usr/src/app
COPY --from=prerelease /usr/src/app/.output .

# note: bun is incopatable with og-image generator right now.
# see: https://github.com/nuxt-modules/og-image/issues/112
CMD ["node", "./server/index.mjs"]
