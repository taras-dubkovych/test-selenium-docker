const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('Google Search', () => {
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async () => {
    await driver.quit();
  });

  it('should open Google and search for Selenium', async () => {
    await driver.get('http://www.google.com');
    const searchBox = await driver.findElement(By.name('q'));
    await searchBox.sendKeys('Selenium');
    await searchBox.submit();
    await driver.wait(until.titleContains('Selenium'), 1000);
    const title = await driver.getTitle();
    expect(title).to.include('Selenium');
  });
});