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
bold=$(tput bold)
normal=$(tput sgr0)

age=$(years_from_now "1997-06-01")
exerience=$(years_from_now "2016-07-01")
echo "My name is ${bold}Sam Gozman${normal}, ${age} years old.
I am a ${bold}backend engineer${normal} with ${bold}${exerience}+ years${normal} of experience."
