#!/usr/bin/env bash

rsync -azvh -P --exclude={'.*.swp','.*.un~'} *.html *.js *.json *.css *.ico *.php chars /var/www/adam
