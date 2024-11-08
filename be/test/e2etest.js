const { Builder, By } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;

// End-to-End test for Backend API
describe('Backend API E2E Test', function () {
  this.timeout(10000); // Timeout for the entire test

  let driver;

  before(async function () {
    // Start the Selenium WebDriver (using headless Chrome)
    driver = await new Builder().forBrowser('chrome')
      .setChromeOptions(new (require('selenium-webdriver').chrome.Options)().headless())
      .build();
  });

  after(async function () {
    await driver.quit(); // Close the WebDriver after the test
  });

  it('should return the correct message from the root endpoint', async function () {
    // Navigate to the backend API
    await driver.get('http://localhost:5000'); // Assuming your backend runs on port 5000

    // Get the response text (body)
    const pageText = await driver.getPageSource();

    // Assert the response contains expected text
    expect(pageText).to.include('Backend is running');
  });
});
