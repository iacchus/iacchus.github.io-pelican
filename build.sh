#!/usr/bin/env bash

make clean
make publish
git add .
git commit -a -m 'okz'
git push

