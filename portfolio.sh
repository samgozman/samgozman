#!/bin/bash

years_from_now() {
  local start_date="$1"
  local end_date
  local start_epoch
  local end_epoch
  end_date="$(date '+%Y-%m-%d')"
  start_epoch=$(date -j -f "%Y-%m-%d" "$start_date" "+%s")
  end_epoch=$(date -j -f "%Y-%m-%d" "$end_date" "+%s")
  local diff=$(((end_epoch - start_epoch) / (86400 * 365)))
  echo "$diff"
}

# tput line formatting
B=$(tput bold)               # bold
N=$(tput sgr0)               # normal
U=$(tput smul)               # underline
purple_back=$(tput setab 57) # purple background
white_back=$(tput setab 15)  # white background

age=$(years_from_now "1997-06-01")
exerience=$(years_from_now "2016-07-01")

echo "👋 Hi! My name is ${B}${purple_back}Sam Gozman${N}, ${age} years old.
I'm an experienced ${B}Backend Engineer${N} with expertise in ${U}Go lang${N} and ${U}NodeJS${N}.
I've been working as a developer over the course of the last ${B}${exerience}+ years${N}.
In my free time, I work on personal open-source projects on GitHub.

${white_back}Stack:${N} NodeJS, Go lang, TypeScript, Rust, PostgreSQL, Redis, NestJS, VueJS, Docker, Linux, Git.

Links:
• GitHub:   ${U}https://github.com/samgozman${N}.
• LinkedIn: ${U}https://www.linkedin.com/in/samgozman${N}.

My recent major open-source projects:
• RVP, Rust CLI tool for parsing static web pages - ${U}https://github.com/samgozman/rvp${N}
• Validity.Red, track expirations and calendar sync - ${U}https://github.com/samgozman/validity.red${N}
• Short-Fork, financial data for US stocks - ${U}https://github.com/samgozman/short-fork${N}
• TightShorts, stocks short volume analysis - ${U}https://github.com/samgozman/tightshorts${N}
• YoptaScript, programming language for degenerates - ${U}https://github.com/samgozman/YoptaScript${N}
... and many more on my GitHub profile."
