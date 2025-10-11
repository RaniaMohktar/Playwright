import { expect, type Locator, type Page } from '@playwright/test';

export class Signuppage {
 readonly page: Page;

 // =======================Variables=====================
 readonly Gender: Locator;
 readonly password: Locator;
 readonly  days: Locator;
  readonly months: Locator;
  readonly years: Locator;
  readonly linktext: Locator;
  readonly Fname: Locator;
  readonly Lname: Locator;
  readonly company: Locator;
  readonly address1: Locator;
  readonly address2: Locator;
  readonly country: Locator;
  readonly state: Locator;
  readonly city: Locator;
  readonly zipCode: Locator;
  readonly mobile: Locator;
  readonly submit: Locator;
  readonly assertionText : Locator;
  //============================================constuctor ====================================
  constructor(page: Page) {
   this.page = page;
    this.Gender =  page.getByRole('radio', { name: 'Mrs.' });
    this.password = page.getByRole('textbox', { name: 'Password *' });
    this.days = page.locator('#days');
    this.months = page.locator('#months');
    this.years =  page.locator('#years');
    this.linktext = page.getByText('Sign up for our newsletter!');
    this.Fname = page.getByRole('textbox', { name: 'First name *' });
    this.Lname = page.getByRole('textbox', { name: 'Last name *' });
    this.company = page.getByRole('textbox', { name: 'Company', exact: true });
    this.address1 =page.getByRole('textbox', { name: 'Address * (Street address, P.' });
    this.address2 = page.getByRole('textbox', { name: 'Address 2' });
    this.country = page.getByLabel('Country *');
    this.state =page.getByRole('textbox', { name: 'State *' });
    this.city = page.getByRole('textbox', { name: 'City * Zipcode *' });
    this.zipCode = page.locator('#zipcode');
    this.mobile = page.getByRole('textbox', { name: 'Mobile Number *' });
    this.submit = page.getByRole('button', { name: 'Create Account' });
    this.assertionText =page.getByText('Account Created!');
  }

 

  async fillData() {
   await this.Gender.click();
   await this.password.fill('R@ania123');
   await this.days.selectOption('5');
   await this.months.selectOption('6');
   await this.years.selectOption('2017');
   await this.linktext.click();
   await this.Fname.fill('Rania');
   await this.Lname.fill('Mokhtar');
   await this.company.fill('VOIS');
   await this.address1.fill('address1');
   await this.address2.fill('address2');
   await this.country.selectOption('Australia');
   await this.state.fill('state');
   await this.city.fill('city');
   await this.zipCode.fill('3244');
   await this.mobile.fill('01022333');
   await this.submit.click();
  }
async Assertion(){
    await expect(this.assertionText).toBeVisible();
}

}