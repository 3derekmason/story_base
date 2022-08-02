import { expect, test } from '@playwright/test';

test('Start reading button loads text', async ({ page }) => {
	await page.goto('/about');
	expect(await page.innerText('button')).toBe('START READING!');
});

test('Buttons set correct selection', async ({ page }) => {
	await page.goto('/');
	expect(await page.innerText('h4')).toBe('read about everything...');
	await page.locator('text=training').click();
	expect(await page.innerText('h4')).toBe('read about training.');
	await page.locator('text=programming').click();
	expect(await page.innerText('h4')).toBe('read about programming.');
	await page.locator('text=wellness').click();
	expect(await page.innerText('h4')).toBe('read about wellness.');
	await page.locator('text=life').click();
	expect(await page.innerText('h4')).toBe('read about life.');
});

test('Correct email for submissions loads', async ({ page }) => {
	await page.goto('/submit');
	const email = await page.locator('.email');
	expect(await email.innerText()).toBe('thestorybase@gmail.com');
});
