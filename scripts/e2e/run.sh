#!/bin/bash

yarn build
cd ./dist
yarn link
cd ../e2e
yarn i
yarn link @mtes-mct/monitor-ui
cd ..
