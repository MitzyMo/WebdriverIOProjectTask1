## WebdriverIO Task 1
# Criteria:
1. Create 'New Paste' with the following attributes:
 * Code: "Hello from WebDriver"
 * Paste Expiration: "10 Minutes"
 * Paste Name / Title: "helloweb"

## WebdriverIO Task 2
# Criteria:
1. Create 'New Paste' with the following attributes:
 * Code:
   - git config --global user.name  "New Sheriff in Town"
   - git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
   - git push origin master --force
 * Syntax Highlighting: "Bash"
 * Paste Expiration: "10 Minutes"
 * Paste Name / Title: "how to gain dominance among developers"
2. Save 'paste' and check the following:
 * Browser page title matches 'Paste Name / Title'
 * Syntax is highlighted for bash
 * Check that the code matches the one from paragraph 2

# pastebinSkeleton.spec.js 
This is the test without page object model for task 1 and 2.
# pastebin.test.js
This is the Test with with page object model for task 1 and 2.
# test.e2e.js
This is just a sample test from WebdriverIO