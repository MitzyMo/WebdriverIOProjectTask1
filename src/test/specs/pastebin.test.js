const pastebinPage = require("../po/pages/pastebin.page.js");

describe('Pastebin New Paste Test Suite POM', () => {
    beforeEach(async () => {
        await pastebinPage.open();
    });

    describe("Task 1", () => {
        it("should create a new paste with specified attributes", async () => {
            const pasteCreationForm = pastebinPage.pasteCreationForm;
            const pasteDisplay = pastebinPage.pasteDisplay;
            await pasteCreationForm.createPaste(
                "Hello from WebDriver",
                "helloweb",
                "10 Minutes"
            );
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

    describe("Task 2", () => {
        it("should create a new paste with specified attributes and validate input", async () => {
            const pasteCreationForm = pastebinPage.pasteCreationForm;
            const pasteDisplay = pastebinPage.pasteDisplay;
            await pasteCreationForm.createPaste(
                "git config --global user.name  \"New Sheriff in Town\"\n" +
                "git reset $(git commit-tree HEAD^{tree} -m \"Legacy code\")\n" +
                "git push origin master --force",
                "how to gain dominance among developers",
                "10 Minutes"
            );
            const currentUrl = await browser.getUrl();
            expect(currentUrl).toMatch("https://pastebin.com/");

            const pasteNameText = await pasteDisplay.getPasteName();
            expect(pasteNameText).toBe("how to gain dominance among developers");

            const highlightedCodeText = await pasteDisplay.getSyntaxHighlighting();
            expect(highlightedCodeText).toContain("git config");
            expect(highlightedCodeText).toContain("git reset");
            expect(highlightedCodeText).toContain("git push");

            const pageTitle = await browser.getTitle();
            expect(pageTitle).toBe("how to gain dominance among developers - Pastebin.com");
        });
    });
});
