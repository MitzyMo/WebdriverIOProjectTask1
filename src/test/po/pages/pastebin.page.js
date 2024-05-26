const PasteCreationForm = require("../components/PasteCreationForm.componenets.js");
const PasteDisplay = require("../components/display.componenet.js");

class PastebinPage {
    get pasteCreationForm() {
        return new PasteCreationForm();
    }
    get pasteDisplay() {
        return new PasteDisplay();
    }
    async open() {
        await browser.url('https://pastebin.com');
    }
}

module.exports = new PastebinPage();
