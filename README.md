# unified-bank-utils

A unified API for looking up and validating bank account details. There are a
lot of initiatives in this space, and a goal of this project is to provide
curated and simple-as-possible use.

## Usage

Sweden (SE) is the first locale to be supported.

```js
var BankUtils = require('unified-bank-utils');
// Get a bank account object from clearing and account numbers:
var account = BankUtils.SE.account('9252', '0782455');

// Then do stuff like
account.validateClearingNumber() // true
account.bankName // 'SBAB'
account.validateAccountNumber() // true - valid for this bank
account.isValid() // true - since both of the above are true

// You can also access some functions without going through an account object
BankUtils.SE.getBankName('5177') // 'SEB'
BankUtils.SE.getBankName('8299-0') // 'Swedbank'
```

## Library build

Please see the `dist` directory for a version of this project built as a standalone library, ready for execution in the browser. Note that it adds a global object `window.BankUtils`, and that the file is not minimized.

## Tests

```
npm test
```

## Acknowledgements

These projects are currently used:

* [believer/clearingnummer](https://github.com/believer/clearingnummer)
* [jop-io/kontonummer.js](https://github.com/jop-io/kontonummer.js)

## Additional resources

Related projects:

* DE: [jhermsmeier/fints-institute-db](https://github.com/jhermsmeier/fints-institute-db)
* FI: [vkomulai/finnish-bank-utils](https://github.com/vkomulai/finnish-bank-utils)
* NO: [zrrrzzt/is-valid-account-number](https://github.com/zrrrzzt/is-valid-account-number)
* SE: [jelveby/bankverify](https://github.com/jelveby/bankverify)
* UK: [franciscocardoso/uk-modulus-checking](https://github.com/uphold/uk-modulus-checking)
* US: [braintree/us-bank-account-validator](https://github.com/braintree/us-bank-account-validator)
