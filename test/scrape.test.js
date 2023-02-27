'use strict';

const scrape = require('../lib/scrape.js');

test('is it define', async () => {
    // is res define
    expect(await scrape('https://dev.amidstyle.com')).toBeDefined();
});

test('', async() => {
    //is "sign" define?
    expect(await scrape('https://dev.amidstyle.com').sign).toBeDefined();
});
