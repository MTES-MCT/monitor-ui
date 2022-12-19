#!/bin/bash

yarn build
cd ./example
npm i
npm link ../dist
npm run dev
