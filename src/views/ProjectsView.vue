<script setup lang="ts">
import { useSeoMeta } from 'unhead'
import HeaderMax from '@/components/elements/HeaderMax.vue'
import ArticleProse from '@/components/elements/ArticleProse.vue'
import ProjectItem from '@/components/projects/ProjectItem.vue'

useSeoMeta({
  title: 'Projects | Sam Gozman',
  description: "Sam Gozman's open-source projects timeline.",
  ogDescription: "Sam Gozman's open-source projects timeline.",
  ogTitle: 'Projects | Sam Gozman',
  ogType: 'website',
  ogUrl: 'https://gozman.space/projects',
  ogSiteName: 'Sam Gozman',
  twitterCard: 'summary_large_image',
  twitterImageAlt: 'Projects | Sam Gozman'
})
</script>

<template>
  <HeaderMax value="My projects." />

  <ArticleProse class="text-justify">
    <p>
      Over the last several years, besides my regular job as backend engineer, I've been chipping
      away at my own <strong>open-source</strong> side projects whenever I could. It's been a hobby I've poured time
      into, tinkering with it during weekends and evenings. It's my way of exploring new things and
      ideas outside of work and giving back to the community in a small way.
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
      <ProjectItem
        date="2021 1/4 - 2021 3/4"
        title="Short-Fork 1.0"
        side="right"
        type="middle"
        sourceLink="https://github.com/samgozman/short-fork"
        websiteLink="https://short-fork.extr.app/"
      >
        Stock market helper: financial data, multipliers (PE, PS, PEG etc), insider selling, debt
        and short volume charts from various sources. The project was not originally conceived as a
        big service. Initially it was just a copy-paste of data from a couple of different financial
        resources that I used myself. <br />
        During this time I've built multiple public NPM packages for fetching financial data from
        various sources.
      </ProjectItem>
      <ProjectItem
        date="2021 2/4 - 2021 3/4"
        title="TradingView scripts"
        side="left"
        type="middle"
        websiteLink="https://www.tradingview.com/u/samgozman/#published-scripts"
      >
        I've been diving into writing TradingView scripts using PineScript, and it's been quite the
        journey. Despite not trading based on technical analysis myself, I've found joy in building
        oscillators and charts, even cultivating a small community around it. This venture has
        reignited my passion for open-source coding after a period of quiet reflection.
      </ProjectItem>
      <ProjectItem date="2016-2021" title="CNC, 3D printers & lasers" side="right" type="middle">
        Between 2016 and 2021, after landing my first job as a web developer, I shifted my focus
        away from building websites for myself and friends. Instead, I embarked on a period of
        self-discovery, channeling all my spare time and resources into crafting CNC machines,
        assembling 3D printers, programming micro controllers, and working on large CO2 laser
        cutter. I immersed myself in soldering and designing microelectronics using Attiny85 or
        Arduino boards in Autodesk Eagle and 3D modeling with Autodesk Fusion. <br />
        Establishing my own workshop initially for 3D printing and later for producing wooden gifts
        from laser cutting, I poured my heart into these endeavors. Fortunately (yes), despite my
        dedication, these ventures ultimately faltered due to various challenges and personal
        reasons.
      </ProjectItem>
      <ProjectItem
        date="2016 4/4"
        title="YoptaScript: 2k stars on GitHub"
        side="left"
        type="middle"
        sourceLink="https://github.com/samgozman/YoptaScript"
        websiteLink="https://yopta.space/"
      >
        In 2016, I created a humorous programming language for Russian "gopniks" called YoptaScript.
        Essentially, it was a transpiled programming language into JavaScript. Through word of
        mouth, it quickly gained popularity, becoming the second fastest-growing project in the
        region on GitHub that year. Media outlets often interviewed me, and I became recognizable
        within Slavic IT communities. <br />
        <i>What better way to enter the profession than with a bit of humor and creativity?</i>
      </ProjectItem>
      <ProjectItem date="2010 - 2016" title="My path into programming" side="right" type="middle">
        From 2010 to 2016, while I was still studying, I spent a lot of time creating websites for
        friends and acquaintances. Besides those, I also started several projects that are now
        inactive, like a website teaching how to develop modules for CMF MODX using PHP & Fenom, a
        site for a local auto repair shop, and one for a musical group. There were many more, but
        they've been forgotten. One of the projects that survived until today is my personal blog -
        the reincarnation of which you are currently witnessing.
      </ProjectItem>
      <ProjectItem date="2009" title="The Game" side="left" type="end">
        Back in 2009, when I was just 12 years old, I got seriously into programming for the first
        time. It all started with creating mods for computer game Stalker, initially by tweaking
        other people's work. Soon, I had a small group of followers, which encouraged me to make my
        own website for game mods.
        <i>And that's how gaming became my gateway into a professional career!</i>
      </ProjectItem>
    </ul>
  </ArticleProse>
</template>
