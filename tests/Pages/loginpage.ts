import { expect, type Locator, type Page } from '@playwright/test';

export class loginpage {
  readonly page: Page;
  readonly name: Locator;
  readonly email: Locator;
  readonly  signButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.name = page.getByRole('textbox', { name: 'Name' });
    this.email = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
    this.signButton= page.getByRole('button', { name: 'Signup' });
   
  }

  async goto() {
    await this.page.goto('');
  }

  async enterLoginData(name , email) {
    await this.name.fill(name);
    await this.email.fill(email);
    await this.signButton.click();
    await this.page.waitForTimeout(5000);
  }

 
}