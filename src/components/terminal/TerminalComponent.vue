<script setup lang="ts">
import hljs from 'highlight.js/lib/core'
import bashExtended from './languages/bashExtended'
import RowBash from './RowBash.vue'
import Row from './RowText.vue'
import Link from './SimpleLink.vue'

hljs.registerLanguage('bash', bashExtended)

function yearsFrom(date: Date) {
  const now = new Date()
  return now.getFullYear() - date.getFullYear()
}

const age = yearsFrom(new Date('1997-06-01'))
const experience = yearsFrom(new Date('2016-07-01'))
</script>

<style>
@import 'highlight.js/styles/github-dark.css';

/* Modify `pre` margins for mobile */
.mockup-code pre:before {
  margin-right: 1ch;
}
.mockup-code pre[data-prefix]:before {
  width: 1.5rem;
}
@media (min-width: 640px) {
  .mockup-code pre:before {
    margin-right: 2ch;
  }
  .mockup-code pre[data-prefix]:before {
    width: 2rem;
  }
}
</style>

<template>
  <div
    class="mockup-code bg-inherit sm:bg-neutral font-mono h-full sm:h-fit text-sm sm:text-base py-4 sm:py-6"
  >
    <RowBash :hljs="hljs" class="sm:hidden" value="ssh sam@gozman.space -i ~/.ssh/dev_rsa" />
    <RowBash
      :hljs="hljs"
      class="hidden sm:block"
      value="ssh sam@gozman.space -i ~/.ssh/backend_dev_rsa"
    />
    <RowBash :hljs="hljs" value="curl -s https://gozman.space/me.sh | bash" />
    <Row class="text-justify sm:text-left">
      👋 Hi! My name is <span class="font-bold bg-fuchsia-900 text-slate-200">Sam Gozman</span>,
      {{ age }}
      years old.
    </Row>
    <Row class="text-justify sm:text-left">
      I'm an experienced <span class="font-bold">Backend Engineer</span> with expertise in
      <span class="underline">Go lang</span> and <span class="underline">NodeJS</span>.
    </Row>
    <Row class="text-justify sm:text-left">
      I've been working as a developer over the course of the last
      <span class="font-bold">{{ experience }}+ years</span>.
    </Row>
    <Row class="text-justify sm:text-left">
      In my free time, I work on personal open-source projects on GitHub.
    </Row>
    <br />
    <Row class="text-justify sm:text-left">
      <span class="bg-gray-100 text-gray-900">Stack:</span> NodeJS, Go lang, TypeScript, Rust,
      PostgreSQL, Redis, NestJS, VueJS, Docker, Linux, Git.
    </Row>
    <br />
    <Row>
      <span class="bg-gray-100 text-gray-900">Links:</span>
      <ul class="list-disc list-inside">
        <li>GitHub: <Link value="https://github.com/samgozman" /></li>
        <li>LinkedIn: <Link value="https://www.linkedin.com/in/samgozman" /></li>
      </ul>
    </Row>
    <br />
    <Row>
      <span class="bg-gray-100 text-gray-900">Open-source projects:</span>
      <ul class="list-disc list-inside">
        <li>
          RVP, Rust CLI tool for parsing static web pages -
          <Link value="https://github.com/samgozman/rvp" />
        </li>
        <li>
          Validity.Red, track expirations and calendar sync -
          <Link value="https://github.com/samgozman/validity.red" />
        </li>
        <li>
          Short-Fork, financial data for US stocks -
          <Link value="https://github.com/samgozman/short-fork" />
        </li>
        <li>
          TightShorts, stocks short volume analysis -
          <Link value="https://github.com/samgozman/tightshorts" />
        </li>
        <li>
          YoptaScript, programming language for degenerates -
          <Link value="https://github.com/samgozman/YoptaScript" />
        </li>
      </ul>
    </Row>
    <Row>... and many more on my GitHub profile.</Row>
  </div>
</template>
