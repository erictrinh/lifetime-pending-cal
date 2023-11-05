#!/bin/bash

bun run index.ts
git add .
git commit -am 'Update pending.ics'
git push
