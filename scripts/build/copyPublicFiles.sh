#!/bin/bash

mkdir -p ./dist/assets
cp -R ./src/assets/fonts ./dist/assets
cp -R ./src/assets/stylesheets ./dist/assets

cp ./CHANGELOG.md ./dist/CHANGELOG.md
cp ./LICENSE ./dist/LICENSE
cp ./README.md ./dist/README.md

cp ./src/cypress/global.d.ts ./dist/cypress/global.d.ts
