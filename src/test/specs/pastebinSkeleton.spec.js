describe('Pastebin New Paste Test Suite SKELETON', () => {
    beforeEach(async () => {
        await browser.url('https://pastebin.com');
    });
 
    describe('Task 1', () => {
        it('should create a new paste with specified attributes', async () => {
            await $('#postform-text').setValue("Hello from WebDriver");
            await $('#select2-postform-expiration-container').click();
            await $('//li[contains(@class, "select2-results__option") and text()="10 Minutes"]').click();
            await $('#postform-name').setValue("helloweb");
            await $('button.btn.-big').click();
 
            const currentUrl = await browser.getUrl();
            expect(currentUrl).toMatch("https://pastebin.com/");
 
            const pasteNameText = await $('div.info-top h1').getText();
            expect(pasteNameText).toBe("helloweb");
 
            const pasteContentText = await $('div.de1').getText();
            expect(pasteContentText).toBe("Hello from WebDriver");
 
            const expirationTimeText = await $('div[title="When this paste gets automatically deleted"]').getText();
            expect(expirationTimeText).toContain("10 MIN");
        });
    });
 
    describe('Task 2', () => {
        it('should create a new paste with specified attributes and validate input', async () => {
            await $('#postform-text').setValue("git config --global user.name  \"New Sheriff in Town\"\n" +
                                                "git reset $(git commit-tree HEAD^{tree} -m \"Legacy code\")\n" +
                                                "git push origin master --force");
            await $('#select2-postform-format-container').click();
            await $('//li[contains(@class, "select2-results__option") and text()="Bash"]').click();
            await $('#select2-postform-expiration-container').click();
            await $('//li[contains(@class, "select2-results__option") and text()="10 Minutes"]').click();
            await $('#postform-name').setValue("how to gain dominance among developers");
            await $('button.btn.-big').click();
 
            const currentUrl = await browser.getUrl();
            expect(currentUrl).toMatch("https://pastebin.com/");
 
            const pasteNameText = await $('div.info-top h1').getText();
            expect(pasteNameText).toBe("how to gain dominance among developers");
 
            const highlightedCodeText = await $('div.source.bash').getText();
            expect(highlightedCodeText).toContain("git config");
            expect(highlightedCodeText).toContain("git reset");
            expect(highlightedCodeText).toContain("git push");
 
            const pageTitle = await browser.getTitle();
            expect(pageTitle).toBe("how to gain dominance among developers - Pastebin.com");
        });
    });
 });
 