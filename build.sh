#!/usr/bin/env bash

pyvenv
make clean
make publish
git add .
git commit -a -m 'okz'
git push

