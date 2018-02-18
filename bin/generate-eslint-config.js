#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const { configs } = require('../index');

const configFile = path.join(__dirname, '..', '.eslintrc.json');
const content = JSON.stringify(configs.recommended, null, 2);

fs.writeFileSync(configFile, content, { encoding: 'utf-8' });
