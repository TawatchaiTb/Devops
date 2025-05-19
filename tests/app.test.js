const request = require('supertest');
const app = require('../app');

describe('API Tests', () => {
  test('GET / should return welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  test('GET /api/status should return status', async () => {
    const response = await request(app).get('/api/status');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status');
  });
});
