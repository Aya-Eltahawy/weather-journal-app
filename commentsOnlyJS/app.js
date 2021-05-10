// Personal API Key for OpenWeatherMap API

// Event listener to add function to existing HTML DOM element

/* Function called by event listener */

/* Function to GET Web API Data*/

/* Function to POST data */


/* Function to GET Project Data */


const app = require('./server')
const request = require('supertest');

/**
 * Set the app environment to be test
 */
beforeAll(() => {
    process.env.NODE_ENV = 'test';
})


test('getData', async () => {
    const res = await request(app).get('/feeling');
    expect(res.status).toBe(200);
    expect(res.body.success).toBeTruthy();
})

test('sendData', async () => {
    const data = {
        date: "11.4.2021",
        temp: 63.1,
        content: "Happy"
    }
    let postRes = await request(app)
            .post('/feeling')
            .send(data)
    expect(postRes.status).toBe(200);
    expect(postRes.body.success).toBeTruthy();

    const getRes = await request(app).get('/feeling');
    expect(getRes.status).toBe(200);
    expect(getRes.body.success).toBeTruthy();
    expect(getRes.body.data).toEqual(data);
})