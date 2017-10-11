#!/usr/bin/env bash

# exit on error
set -e

source ~/git-stuff/jupyter-venv/venv/bin/activate

make clean
make publish
git add .
git commit -a -m 'okz'
git push

