import { test, expect } from '@playwright/test';

test('Hyland Careers Job Search', async ({ page }) => {

  await page.goto('https://www.hyland.com/en');

  await page.getByRole('link', { name: 'Careers' }).click();

  const popupPromise = page.waitForEvent('popup');

  await page
    .getByTestId('HeroDefault')
    .getByRole('link', { name: 'Join our team' })
    .click();

  const careersPage = await popupPromise;

  const frame = careersPage
    .locator('iframe[name="icims_content_iframe"]')
    .contentFrame();

  await frame
    .getByRole('textbox', { name: 'Start your job search here' })
    .fill('playwright');

  await frame
    .getByRole('button', { name: 'Search' })
    .click();

  await careersPage.waitForTimeout(3000);

  await frame
    .getByRole('link', { name: 'Job Title Senior Software' })
    .click();

  await careersPage.waitForTimeout(4000);

  const pageText = await frame.locator('body').innerText();

  const match = pageText.match(/Job ID\s+(\d{4}-\d+)/);

  if (match) {
    console.log("================================");
    console.log("Job ID:", match[1]);
    console.log("================================");
  } else {
    console.log("Job ID not found");
  }

});