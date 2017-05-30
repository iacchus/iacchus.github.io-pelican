#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

# This file is only used if you use `make publish` or
# explicitly specify it as your config file.

import os
import sys
sys.path.append(os.curdir)
from pelicanconf import *

SITEURL = 'https://iacchus.github.io/site'
RELATIVE_URLS = False
#RELATIVE_URLS = True

FEED_ALL_ATOM = 'feeds/all.atom.xml'
CATEGORY_FEED_ATOM = 'feeds/%s.atom.xml'

#DELETE_OUTPUT_DIRECTORY = True
DELETE_OUTPUT_DIRECTORY = False

DEFAULT_DATE = 'fs'
# SUMMARY_MAX_LENGTH = None
SUMMARY_MAX_LENGTH = False

# Following items are often useful when publishing

#DISQUS_SITENAME = ""
#GOOGLE_ANALYTICS = ""
