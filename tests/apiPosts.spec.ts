// tests/apiPosts.spec.ts
import { test, expect, request } from '@playwright/test';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test.describe('JSONPlaceholder API Tests', () => {
  let apiContext;

  test.beforeAll(async ({ playwright }) => {
    apiContext = await request.newContext({ baseURL: BASE_URL });
  });

  test('GET /posts returns 100 posts', async () => {
    const response = await apiContext.get('/posts');
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body.length).toBe(100);
  });

  test('GET /posts/1 returns a post with ID 1', async () => {
    const response = await apiContext.get('/posts/1');
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body.id).toBe(1);
  });

  test('POST /posts creates a new post', async () => {
    const newPost = {
      title: 'Test Post',
      body: 'This is a test post body.',
      userId: 1
    };
    const response = await apiContext.post('/posts', { data: newPost });
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.title).toBe(newPost.title);
    expect(body.body).toBe(newPost.body);
  });

  test('PUT /posts/1 updates a post', async () => {
    const updatedPost = {
      id: 1,
      title: 'Updated Title',
      body: 'Updated body content.',
      userId: 1
    };
    const response = await apiContext.put('/posts/1', { data: updatedPost });
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body.title).toBe(updatedPost.title);
  });

  test('DELETE /posts/1 deletes the post', async () => {
    const response = await apiContext.delete('/posts/1');
    expect(response.ok()).toBeTruthy();
  });
});
