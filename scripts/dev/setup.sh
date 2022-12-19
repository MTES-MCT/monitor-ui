#!/bin/bash

echo 'Installing Git hooks...'
husky install

yarn playwright install
if ! sudo true; then
    echo 'Installing Playwright dependencies...'
    yarn playwright install-deps
else
    echo 'Installing Playwright dependencies with sudo...'
    sudo yarn playwright install-deps
fi

echo 'Initializing E2E tests...'
yarn e2e:setup
