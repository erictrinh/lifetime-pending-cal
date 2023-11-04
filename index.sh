#!/bin/bash

/opt/homebrew/bin/bun run index.ts
/opt/homebrew/bin/git add .
/opt/homebrew/bin/git commit -am 'Update pending.ics'
/opt/homebrew/bin/git push
