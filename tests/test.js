import { expect, test } from '@playwright/test';

test('Start reading button loads text', async ({ page }) => {
	await page.goto('/about');
	expect(await page.innerText('button')).toBe('START READING!');
});

test('Start reading button redirects to home', async ({ page }) => {
	await page.goto('/about');
	await page.locator('text=START READING!').click();
	expect(await page.innerText('h2')).not.toBe('Welcome');
});
