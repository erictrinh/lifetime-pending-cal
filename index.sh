#!/bin/bash

bun run index.ts
git commit -am 'Update pending.ics'
git push
