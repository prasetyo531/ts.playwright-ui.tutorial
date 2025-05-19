// helpers/TestSetup.ts
import { Page } from '@playwright/test';

export class TestSetup {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToEnvUrl() {
    const url = process.env.BASE_URL;
    if (!url) throw new Error(`Missing WEB_URL in environment variables`);
    await this.page.goto(url);
  }
}
