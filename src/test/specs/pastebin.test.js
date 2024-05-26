const pastebinPage = require("../po/pages/pastebin.page.js");

describe("Pastebin New Paste", () => {
  beforeEach(async () => {
    await pastebinPage.open();
  });
  it("should create a new paste with specified attributes", async () => {
    const pasteCreationForm = pastebinPage.pasteCreationForm;
    const pasteDisplay = pastebinPage.pasteDisplay;
/* Criteria:
Create 'New Paste' with the following attributes:
* Code: "Hello from WebDriver"
* Paste Expiration: "10 Minutes"
* Paste Name / Title: "helloweb" 
*/
    await pasteCreationForm.createPaste(
      "Hello from WebDriver",
      "helloweb",
      "10 Minutes"
    );
    //Vlidatng Automated criteria.
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toMatch("https://pastebin.com/");

    const pasteNameText = await pasteDisplay.getPasteName();
    expect(pasteNameText).toBe("helloweb");

    const pasteContentText = await pasteDisplay.getPasteContent();
    expect(pasteContentText).toBe("Hello from WebDriver");

    const expirationTimeText = await pasteDisplay.getExpirationTime();
    expect(expirationTimeText).toContain("10 MIN");
  });
});
