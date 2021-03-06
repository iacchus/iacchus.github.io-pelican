#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals
import sys
import os

AUTHOR = 'Iacchus Mercurius'
SITENAME = "The Philosopher's Workbench"
SITEURL = 'https://iacchus.github.io/'
SITESUBTITLE = 'Playing around with ideas'

PATH = 'content'
OUTPUT_PATH = '../iacchus.github.io' # also in Makefile

THEME = 'themes/attila'
#THEME = 'themes/html5-dopetrope'

TIMEZONE = 'America/Sao_Paulo'

DEFAULT_LANG = 'en'

DEFAULT_DATE = 'fs'
DEFAULT_DATE_FORMAT = '%a %d %b %Y %H:%M:%S'
ARTICLE_ORDER_BY = 'reversed-modified'


#SUMMARY_MAX_LENGTH = None

#MARKUP = ('md', 'ipynb')
MARKUP = ('md')


IPYNB_MARKUP_USE_FIRST_CELL = True


DISPLAY_PAGES_ON_MENU = True

PLUGIN_PATHS = [
    'plugins/'
]

PLUGINS = [
    #'just_table',
    #'liquid_tags.youtube',
    #'liquid_tags.notebook',
    #'pelican_jupyter.markup',
    'pin_to_top',
    #'post_revision',
    #'render_math',
    #'rmd_reader',
    'show_source',
    # 'summary',
]

# Feed generation is usually not desired when developing
# FEED_ALL_ATOM = None
# CATEGORY_FEED_ATOM = None
# TRANSLATION_FEED_ATOM = None
# AUTHOR_FEED_ATOM = None
# AUTHOR_FEED_RSS = None

# for post_revision
#GITHUB_URL = 'https://github.com/iacchus/iacchus.github.io'
#PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))

SHOW_FULL_ARTICLE = True

#RMD_READER_KNITR_OPTS_CHUNK = {
#    'class.output': 'knitr-output',
#    'collapse': True,
#    'comment': '',
#    # 'prompt': True,
#    'results': 'asis',
#}

#RMD_READER_KNITR_OPTS_KNIT = None

# https://github.com/danielfrg/pelican-jupyter
IPYNB_MARKUP_USE_FIRST_CELL = True
#IPYNB_SKIP_CSS = True
IGNORE_FILES = [".ipynb_checkpoints"]

MARKDOWN = {
        'extensions_configs':
           {
                'markdown.extensions.extra': {},
                'markdown.extensions.footnotes': {},
                'markdown.extensions.meta': {},
                'markdown.extensions.nl2br': {},
                'markdown.extensions.toc': {},
                'markdown.extensions.attr_list': {},
            },
        'extensions': ['extra', 'footnotes', 'meta', 'nl2br', 'toc',
                       'attr_list']

        }

#MATH_JAX = {
#    'message_style': None,
#}

SHOW_SOURCE_IN_SECTION = True
SHOW_SOURCE_ALL_POSTS = True

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('github','https://github.com/iacchus/'),)

DEFAULT_PAGINATION = 17

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

AUTHORS_BIO = {
  "iacchus mercurius": {
    "name": "IACCHVS",
    "cover": "https://avatars2.githubusercontent.com/u/881531?v=3&u=ced26c8fd97409f69ee0237da7b87cce1790fb16&s=700",
    "image": "https://avatars2.githubusercontent.com/u/881531?v=3&u=ced26c8fd97409f69ee0237da7b87cce1790fb16&s=400",
    "website": "https://iacchus.github.io",
    "location": "cyber space",
    "bio": "My interests are in the fields of philosophy as well as arts & culture; I love music; very interested in e-learning; Also like spirituality, and humanities."
  }
}

GOOGLE_ANALYTICS = "UA-100408965-1"


