#!/usr/bin/env bash

# exit on error
set -e

make clean
make publish
git add .
git commit -a -m 'okz'
git push

