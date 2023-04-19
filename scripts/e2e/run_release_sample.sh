#!/bin/bash

yarn build
cd ./e2e/release/sample
npm i
rm -Rf ./node_modules/@mtes-mct
mkdir ./node_modules/@mtes-mct
cp -R ../../../dist ./node_modules/@mtes-mct/monitor-ui
npm run dev
