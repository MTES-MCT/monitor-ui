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
