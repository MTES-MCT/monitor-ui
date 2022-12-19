import { test, expect } from '@playwright/test'

test('Fields', async ({ page }) => {
  await page.goto('http://localhost:4000')

  // <DatePicker />

  await page.getByTestId('fields-datepicker').locator('[aria-label="Jour"]').fill('19')
  await page.getByTestId('fields-datepicker').locator('[aria-label="Mois"]').fill('12')
  await page.getByTestId('fields-datepicker').locator('[aria-label="Année"]').fill('2022')
  await page.getByTestId('fields-datepicker').locator('[aria-label="Heure"]').fill('09')
  await page.getByTestId('fields-datepicker').locator('[aria-label="Minute"]').fill('45')

  const datePickerOutput = page.getByTestId('fields-datepicker-output')
  await expect(datePickerOutput).toHaveText('"2022-12-19T09:45:00.000Z"')

  // <DateRangePicker />

  await page.getByTestId('fields-daterangepicker').locator('[aria-label="Jour de début"]').fill('18')
  await page.getByTestId('fields-daterangepicker').locator('[aria-label="Mois de début"]').fill('11')
  await page.getByTestId('fields-daterangepicker').locator('[aria-label="Année de début"]').fill('2022')
  await page.getByTestId('fields-daterangepicker').locator('[aria-label="Heure de début"]').fill('05')
  await page.getByTestId('fields-daterangepicker').locator('[aria-label="Minute de début"]').fill('50')
  await page.getByTestId('fields-daterangepicker').locator('[aria-label="Jour de fin"]').fill('20')
  await page.getByTestId('fields-daterangepicker').locator('[aria-label="Mois de fin"]').fill('12')
  await page.getByTestId('fields-daterangepicker').locator('[aria-label="Année de fin"]').fill('2022')
  await page.getByTestId('fields-daterangepicker').locator('[aria-label="Heure de fin"]').fill('19')
  await page.getByTestId('fields-daterangepicker').locator('[aria-label="Minute de fin"]').fill('30')

  const dateRangePickerOutput = page.getByTestId('fields-daterangepicker-output')
  await expect(dateRangePickerOutput).toHaveText('["2022-11-18T05:50:00.000Z","2022-12-20T19:30:59.000Z"]')
})
