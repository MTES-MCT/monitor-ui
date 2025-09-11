#!/bin/bash

#this file looks very hacky
#it copies node_modules from root to this subproject for e2e
yarn build

cd ./e2e/release/sample
rm -Rf ./node_modules
npm i

mkdir ./node_modules/@mtes-mct
cp -R ../../../dist ./node_modules/@mtes-mct/monitor-ui

npm run dev -- --host
