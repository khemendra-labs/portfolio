import { test, expect } from '@playwright/test'

test('projects page loads', async ({ page }) => {
  await page.goto('/projects')
  await expect(page.locator('h1')).toContainText('Projects')
})

test('project filtering works', async ({ page }) => {
  await page.goto('/projects')
  
  await page.click('text=DFIR')
  await expect(page.locator('text=OIntel')).toBeVisible()
})
