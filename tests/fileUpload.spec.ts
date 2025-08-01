import { test, expect } from '@playwright/test';
import path from 'path';

const baseUrl = 'https://the-internet.herokuapp.com/upload';

test.describe('File Upload Tests', () => {

  test('TC01 - Upload a valid .txt file', async ({ page }) => {
    await page.goto(baseUrl);
    const filePath = path.resolve(__dirname, '../test-files/sample.txt');
    await page.locator('#file-upload').setInputFiles(filePath);
    await page.click('#file-submit');
    await expect(page.locator('h3')).toHaveText('File Uploaded!');
    await expect(page.locator('#uploaded-files')).toHaveText('sample.txt');
  });

  test('TC02 - Upload a valid .png image', async ({ page }) => {
    await page.goto(baseUrl);
    const filePath = path.resolve(__dirname, '../test-files/image.png');
    await page.locator('#file-upload').setInputFiles(filePath);
    await page.click('#file-submit');
    await expect(page.locator('h3')).toHaveText('File Uploaded!');
    await expect(page.locator('#uploaded-files')).toHaveText('image.png');
  });

  test('TC03 - Submit without selecting a file', async ({ page }) => {
    await page.goto(baseUrl);
    await page.click('#file-submit');
    await expect(page.locator('#uploaded-files')).toHaveText('');
  });

  test('TC04 - Upload an empty file', async ({ page }) => {
    const filePath = path.resolve(__dirname, '../test-files/empty.txt');
    await page.goto(baseUrl);
    await page.locator('#file-upload').setInputFiles(filePath);
    await page.click('#file-submit');
    await expect(page.locator('h3')).toHaveText('File Uploaded!');
    await expect(page.locator('#uploaded-files')).toHaveText('empty.txt');
  });

  test('TC05 - Upload file with special characters in name', async ({ page }) => {
    const filePath = path.resolve(__dirname, '../test-files/test@#$.txt');
    await page.goto(baseUrl);
    await page.locator('#file-upload').setInputFiles(filePath);
    await page.click('#file-submit');
    await expect(page.locator('h3')).toHaveText('File Uploaded!');
    await expect(page.locator('#uploaded-files')).toHaveText('test@#$.txt');
  });

});
