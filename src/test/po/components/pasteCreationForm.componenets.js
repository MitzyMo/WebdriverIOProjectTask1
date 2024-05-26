class PasteCreationForm {
    get pasteTextArea() {
        return $('#postform-text');
    }
    get syntaxHighlightingDropdown() {
        return $('#select2-postform-format-container');
    }
    get bashSyntaxOption() {
        return $('//li[contains(@class, "select2-results__option") and text()="Bash"]');
    }
    get expirationDropdown() {
        return $('#select2-postform-expiration-container');
    }
    get tenMinutesOption() {
        return $('//li[contains(@class, "select2-results__option") and text()="10 Minutes"]');
    }
    get postNameInput() {
        return $('#postform-name');
    }
    get createPasteButton() {
        return $('button.btn.-big');
    }
    async createPaste(pasteText, pasteName, expirationTime) {
        await this.pasteTextArea.setValue(pasteText);
        await this.syntaxHighlightingDropdown.click();
        await this.bashSyntaxOption.click(); // Clicking on Bash syntax option
        await this.expirationDropdown.click();
        await this.tenMinutesOption.click();
        await this.postNameInput.setValue(pasteName);
        await this.createPasteButton.click();
    }
}

module.exports = PasteCreationForm;
