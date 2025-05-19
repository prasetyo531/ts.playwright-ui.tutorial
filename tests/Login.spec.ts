// tests/login.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TestSetup } from '../helpers/TestSetup';

test.describe('Login Tests', () => {
  let loginPage: LoginPage;
  let testSetup: TestSetup;

  test.beforeAll(async ({ browser }) => {
    // Create a new page only once before all tests
    const context = await browser.newContext();
    const page = await context.newPage();
    testSetup = new TestSetup(page);
    await testSetup.navigateToEnvUrl();

    loginPage = new LoginPage(page);
  });

  test('should log in with valid credentials', async () => {
    await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
    await expect(loginPage.page).toHaveURL(/logged-in-successfully/);
  });
});
