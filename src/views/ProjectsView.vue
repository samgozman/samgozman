<script setup lang="ts">
import HeaderMax from '@/components/elements/HeaderMax.vue'
import ArticleProse from '@/components/elements/ArticleProse.vue'
import ProjectItem from '@/components/projects/ProjectItem.vue'
</script>

<template>
  <HeaderMax value="My projects." />

  <ArticleProse class="text-justify text-xl">
    <p>
      Over the last several years, besides my regular job, I've been chipping away at my own
      open-source side projects whenever I could. It's been a hobby I've poured time into, tinkering
      with it during weekends and evenings. It's my way of exploring my interests outside of work
      and giving back to the community in a small way.
    </p>
    <p>
      Not all my hobbies were strictly bound to web development; some involved creating my own
      workshop, building 3D printers and laser cutters, programming CNC and Arduino micro
      controllers, soldering, and much more.
    </p>
    <ul
      class="not-prose timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-lg"
    >
      <ProjectItem
        date="2024 1/4"
        title="go-bloggy & my blog 2.0"
        side="left"
        type="start"
        backendSourceLink="https://github.com/samgozman/go-bloggy"
        frontendSourceLink="https://github.com/samgozman/samgozman"
      >
        Since February 2024, I've been working on restoring my own developer blog. I used to write
        about 3D printers and CMS systems a while back, but I stopped around 2017. Now, I'm
        determined to breathe new life into it focusing on backend development and system design.
        I'm building the backend of the blog, called go-bloggy, using Golang, and the frontend with
        VueJS.
      </ProjectItem>
      <ProjectItem
        date="2023 4/4 - 2024 1/4"
        title="FinThread AI news bot"
        side="right"
        type="middle"
        backendSourceLink="https://github.com/samgozman/fin-thread"
        telegramLink="https://t.me/finthread"
      >
        FinThread is designed to aggregate financial news from a dozens of sources, analyze the
        content using the cutting edge in AI technology, and deliver concise and relevant news
        directly through Telegram public channel (proof of concept). Written in Golang and
        PostgreSQL.
      </ProjectItem>
      <ProjectItem
        date="2023 3/4"
        title="Hopa Bot"
        side="left"
        type="middle"
        backendSourceLink="https://github.com/Batumi-IT/hopa-bot"
        telegramLink="https://t.me/batumi_hopa_bot"
      >
        A tiny comic telegram bot project based on a local meme from the Georgian IT community.
        Written in Go using Redis for request limiting and OpenAI LLM.
      </ProjectItem>
      <ProjectItem
        date="2023 1/4"
        title="RVP - Remote Value Parser"
        side="right"
        type="middle"
        sourceLink="https://github.com/samgozman/rvp"
      >
        RVP is a CLI tool written in Rust for parsing string values from static web pages. With RVP,
        you can create configurations for each site to parse and retrieve information as a table or
        as JSON.
      </ProjectItem>
      <ProjectItem
        date="2023 1/4"
        title="Short-Fork 2.0"
        side="left"
        type="middle"
        sourceLink="https://github.com/samgozman/short-fork"
        websiteLink="https://short-fork.extr.app/"
      >
        I recently overhauled my old but fairly popular stock viewer Short-Fork from scratch, now
        rebuilt using NestJS for the backend, VueJS for the frontend, and transitioning exclusively
        from MongoDB to Redis.
      </ProjectItem>
      <ProjectItem
        date="2022 2/4 - 2023 1/4"
        title="Validity.Red - document validity manager"
        side="right"
        type="middle"
        sourceLink="https://github.com/samgozman/validity.red"
        websiteLink="https://validity.red/"
      >
        Validity.Red is a free web service for managing the expiration dates of documents
        (passports, travel cards, vaccinations, insurance, etc) and synchronizing them with your
        calendar. It is written in Go, TypeScript, Vue, and Rust on top of gRPC. <br />
        Despite pouring considerable effort and affection into this side project, it ultimately
        ended up being a complete flop.
      </ProjectItem>
      <ProjectItem
        date="2021 2/4 - 2022 2/4"
        title="TightShorts - FINRA screener"
        side="left"
        type="middle"
        backendSourceLink="https://github.com/samgozman/finra-short-api"
        frontendSourceLink="https://github.com/samgozman/tightshorts"
        websiteLink="https://tightshorts.extr.app/"
      >
        The Tightshorts Screener is a daily short volume screener tailored for the US stock market,
        leveraging FINRA data. Developed with TypeScript, NestJS, Golang with MongoDB the project
        serves its purpose despite harboring a codebase deemed a complete mess, arguably one of the
        worst I've ever produced, plagued by numerous N+1 issues and suboptimal design choices
        leading to slow queries. In 2023, I attempted a ground-up refactoring but abandoned the
        endeavor for newer projects.
      </ProjectItem>
    </ul>
  </ArticleProse>
</template>
