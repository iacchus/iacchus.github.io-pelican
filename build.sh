#!/usr/bin/env bash

# exit on error
set -e

#source ~/git-stuff/jupyter-venv/venv/bin/activate
#source ~/git-stuff/VENV/bin/activate


make clean
make publish

cd ../iacchus.github.io
git add .
git commit -a -m 'okz'
git push

cd -
