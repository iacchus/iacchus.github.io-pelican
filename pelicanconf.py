#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'Iacchus Mercurius'
SITENAME = "The Philosopher's Workbench"
SITEURL = 'https://iacchus.github.io/site'

PATH = 'content'
OUTPUT_PATH = 'site' # also in Makefile

THEME = 'themes/attila'

#PLUGIN_PATHS = 'plugins/'
#PLUGINS = ['slim',]

TIMEZONE = 'America/Sao_Paulo'

DEFAULT_LANG = 'en'

DEFAULT_DATE = 'fs'
SUMMARY_MAX_LENGTH = None

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

MARKDOWN = {
        'extensions_configs':
            {
                'markdown.extensions.extra': {},
                'markdown.extensions.meta': {},
                'markdown.extensions.toc': {},
            }
        }
['extra']

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 11

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
