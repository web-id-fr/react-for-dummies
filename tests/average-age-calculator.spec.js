import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
});

test('Page render correctly', async ({ page }) => {
    await expect(page).toHaveTitle(/Average age calculator/);
    await expect(page.locator('h1')).toHaveText(/Average age calculator/);
});

test('Can select users', async ({ page }) => {
    await page.pause()
    await page.getByText('Robinet Jimpson').click();
    await page.getByText('Fonzie Meekins').click();
    await page.getByText('Artur Fishlee').click();
    await page.waitForLoadState('networkidle')
    await expect(page.locator('[data-test-id="average-result"]')).toHaveText(/26 ans/);
});

test('Can select last user and render feedback', async ({ page }) => {
    await page.getByText('Jecho Thompson').click();
    await page.locator('[data-test-id="average-feedback"]').click();
    await expect(page.locator('[data-test-id="average-feedback"]')).toHaveText(/Il manque l'âge de/);
});
