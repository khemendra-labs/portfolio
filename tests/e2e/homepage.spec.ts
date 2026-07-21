import { test, expect } from '@playwright/test'

test('homepage loads successfully', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Khemendra Labs/)
})

test('navigation links work', async ({ page }) => {
  await page.goto('/')
  
  await page.click('text=About')
  await expect(page).toHaveURL('/about')
  
  await page.click('text=Projects')
  await expect(page).toHaveURL('/projects')
})

test('theme toggle works', async ({ page }) => {
  await page.goto('/')
  
  const themeToggle = page.locator('[aria-label="Toggle theme"]')
  await themeToggle.click()
  
  // Check if theme changed (would need to check HTML class or localStorage)
  const html = page.locator('html')
  const classList = await html.getAttribute('class')
  expect(classList).toContain('dark')
})
