const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
    it('returns hi html', async () => {
        const response = await request(app)
            .get('/');

    expect(response.text)
        .toEqual(`<html><body><h1>Hi!</h1></body></html>`)
    });
    it('returns red html', async () => {
        const response = await request(app)
            .get('/red');

    expect(response.text)
        .toEqual(`<html><body><h1>red</h1></body></html>`)
    });
    it('returns green html', async () => {
        const response = await request(app)
            .get('/green');

    expect(response.text)
        .toEqual(`<html><body><h1>green</h1></body></html>`)
    });
    it('returns blue html', async () => {
        const response = await request(app)
            .get('/blue');

    expect(response.text)
        .toEqual(`<html><body><h1>blue</h1></body></html>`)
    });
});
