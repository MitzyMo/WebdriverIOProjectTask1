class PasteDisplay {
    get pasteName() {
        return $('div.info-top h1');
    }
    get pasteContent() {
        return $('div.de1');
    }
    get expirationTime() {
        return $('div[title="When this paste gets automatically deleted"]');
    }
    async getPasteName() {
        return await this.pasteName.getText();
    }
    async getPasteContent() {
        return await this.pasteContent.getText();
    }
    async getExpirationTime() {
        return await this.expirationTime.getText();
    }
}

module.exports = PasteDisplay;
