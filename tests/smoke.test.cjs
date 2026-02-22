const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

test('env-guard-webui has index and command files', () => {
  assert.equal(fs.existsSync('index.html'), true);
  assert.equal(fs.existsSync('src/index.js'), true);
});
