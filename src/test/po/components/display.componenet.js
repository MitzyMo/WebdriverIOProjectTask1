class PasteDisplay {
    get pasteName() {
        return $('div.info-top h1');
    }
    get pasteContent() {
        return $('div.de1');
    }
    // Adjusted to locate only the first occurrence of .source.bash
    get syntaxHighlighting() {
        return $('.source.bash'); // Assuming there's only one instance of .source.bash
    }
    get expirationTime() {
        return $('div[title="When this paste gets automatically deleted"]');
    }
    async getPasteName() {
        return await this.pasteName.getText();
    }
    async getSyntaxHighlighting() {
        return await this.syntaxHighlighting.getText();
    }
    async getPasteContent() {
        return await this.pasteContent.getText();
    }
    async getExpirationTime() {
        return await this.expirationTime.getText();
    }
}

module.exports = PasteDisplay;
