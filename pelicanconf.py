#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals
import os

AUTHOR = 'Iacchus Mercurius'
SITENAME = "The Philosopher's Workbench"
SITEURL = 'https://iacchus.github.io/site'
SITESUBTITLE = 'giving substractum to ideas'

PATH = 'content'
OUTPUT_PATH = 'site' # also in Makefile

#THEME = 'themes/attila'
THEME = 'themes/html5-dopetrope'

TIMEZONE = 'America/Sao_Paulo'

DEFAULT_LANG = 'en'

DEFAULT_DATE = 'fs'
#SUMMARY_MAX_LENGTH = None

MARKUP = ('md', 'ipynb')

DISPLAY_PAGES_ON_MENU = True

PLUGIN_PATHS = [
    'plugins/'
]

PLUGINS = [
    #'just_table',
    'liquid_tags.youtube',
    #'liquid_tags.notebook',
    #'ipynb.markup',
    'pin_to_top',
    # 'post_revision',
    #'render_math',
    #'rmd_reader',
    'show_source',
    # 'summary',
]

# Feed generation is usually not desired when developing
#FEED_ALL_ATOM = 'feeds/all.atom.xml'
# CATEGORY_FEED_ATOM = 'feeds/%s.atom.xml'
#TRANSLATION_FEED_ATOM = None
#AUTHOR_FEED_ATOM = None
#AUTHOR_FEED_RSS = None

# for post_revision
GITHUB_URL = 'https://github.com/iacchus/iacchus.github.io'
PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))

SHOW_FULL_ARTICLE = True

RMD_READER_KNITR_OPTS_CHUNK = {
    'class.output': 'knitr-output',
    'collapse': True,
    'comment': '',
    # 'prompt': True,        
    'results': 'asis',
}

RMD_READER_KNITR_OPTS_KNIT = None

MARKDOWN = {
        'extensions_configs':
            {
                'markdown.extensions.extra': {},
                'markdown.extensions.meta': {},
                'markdown.extensions.toc': {},
            },
        'extensions': ['extra', 'meta', 'toc']

        }

MATH_JAX = {
    'message_style': None,
}

SHOW_SOURCE_IN_SECTION = True
SHOW_SOURCE_ALL_POSTS = True

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('github','https://github.com/iacchus/'),)

DEFAULT_PAGINATION = 11

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

AUTHORS_BIO = {
  "iacchus mercurius": {
    "name": "IACCHVS",
    "cover": "https://avatars2.githubusercontent.com/u/881531?v=3&u=ced26c8fd97409f69ee0237da7b87cce1790fb16&s=700",
    "image": "https://avatars2.githubusercontent.com/u/881531?v=3&u=ced26c8fd97409f69ee0237da7b87cce1790fb16&s=400",
    "website": "https://iacchus.github.io",
    "location": "Querência Amada",
    "bio": "My interests are in the fields of philosophy as well as arts & culture; I love music; very interested in e-learning; Also like spirituality, and humanities."
  }
}

GOOGLE_ANALYTICS = "UA-100408965-1"

# dopetrope

ADDRESS = "nope"
MAIL = 'frk@no!'
PHONE = 'nos'
TWITTER_USER = 'nope'
GOOGLEPLUS_USER = 'no'
LINKEDIN_USER = 'n o n e'
FACEBOOK_USER = 'n o n e'
ABOUT_TEXT  = AUTHORS_BIO['iacchus mercurius']['bio']
ABOUT_IMAGE ="okay"
ABOUT_LINK = "nope"
COPYRIGHT = "Sure."
SHOW_COPYRIGHT = True
