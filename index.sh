#!/bin/bash

bun run index.ts
git add pending.json
git commit -m 'Update pending.json'
git push
