describe('Pastebin New Paste', () => {
    beforeEach(async () => {
        await browser.url('https://pastebin.com');
    });

    it('should create a new paste with specified attributes', async () => {
        // Write in the paste text area
        const pasteTextArea = await $('#postform-text');
        await pasteTextArea.setValue("Hello from WebDriver");

        // Select the expiration dropdown
        const expirationDropdown = await $('#select2-postform-expiration-container');
        await expirationDropdown.click();

        // Choose the "10 Minutes" option
        const tenMinutesOption = await $('//li[contains(@class, "select2-results__option") and text()="10 Minutes"]');
        await tenMinutesOption.click();

        // Enter the post name
        const postNameInput = await $('#postform-name');
        await postNameInput.setValue("helloweb");

        // Press the "Create New Paste" button
        const createPasteButton = await $('button.btn.-big');
        await createPasteButton.click();

        // Verify the new page URL contains a random ID
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toMatch("https://pastebin.com/");

        // Verify the paste name
        const pasteName = await $('div.info-top h1');
        const pasteNameText = await pasteName.getText();
        expect(pasteNameText).toBe("helloweb");

        // Verify the paste content
        const pasteContent = await $('div.de1');
        const pasteContentText = await pasteContent.getText();
        expect(pasteContentText).toBe("Hello from WebDriver");

        // Verify the expiration time
        const expirationTime = await $('div[title="When this paste gets automatically deleted"]');
        const expirationTimeText = await expirationTime.getText();
        expect(expirationTimeText).toContain("10 MIN");
    });
});
