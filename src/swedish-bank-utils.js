var CN = require('../src/clearingnummer.js');
var accountFormats = require('../src/swedish-account-formats.js');

/**
* Main set of features for the Swedish locale.
*/
var SwedishBankUtils = {};
/**
* Looks up and returns the bank that corresponds to the supplied clearing number.
* Tries to normalize the clearing number when passed as a string. This means that
* `82990`, `'8299-0'` and `8299 0` will all be valid, although four digit
* clearing numbers are the most common.
* @param  {number|string} clearingNumber
* @return {string} - name of corresponding bank, empty if no match
*/
SwedishBankUtils.getBankName = function (clearingNumber) {
  var clearingStr = SwedishBankUtils.normalizeClearingNumber(clearingNumber);
  // For five-digit variants, clearingnummer.js requires hyphen between fourth
  // and fifth characters. 
  if (clearingStr.length > 4) {
    clearingStr = clearingStr.substring(0, 4) + '-' + clearingStr.substring(4);
  }
  return CN.bankName(clearingStr);
};

/**
* @param  {number|string} clearingNumber
* @return {string} - clearing number string with spaces and hyphens removed
*/
SwedishBankUtils.normalizeClearingNumber = function (clearingNumber) {
  var clearingStr = clearingNumber + '';
  return clearingStr.replace(/[- ]+/gi, '');
};

/**
 * Looks up account format objects (typically one). Objects look like this:
 * {
 *   name: String,
 *   regex: RegExp,
 *   modulus: Number,
 *   lengths: {
 *     clearing: Number,
 *     account:  Number,
 *     control:  Number
 *   }
 * }
 * @param  {number|string} clearingNumber
 * @return {array} - account format entries, typically 0 or 1 objects
 */
SwedishBankUtils.getAccountNumberFormats = function(clearingNumber) {
  var matching = accountFormats.filter(function (format) {
    var additionalClearingChars = format.lengths.clearing - clearingNumber.length > 0 ? format.lengths.clearing - clearingNumber.length : 0;
    var toMatch = clearingNumber + new Array(format.lengths.account + additionalClearingChars + 1).join('0');
    if(toMatch.match(format.regex)) {
      return true;
    }
    return false;
  });
  return matching;
};

/**
* @param  {number|string} clearingNumber
* @param  {number|string} accountNumber
* @param  {boolean} normalize - whether account object should store normalized data
* @return {SwedishBankAccount}
*/
SwedishBankUtils.account = function (clearingNumber, accountNumber, normalize) {
  normalize = normalize === undefined ? true : normalize;
  return new SwedishBankAccount(clearingNumber, accountNumber, normalize);
};

/**
* @param {string} accountNumber 
* @returns {boolean}
*/
SwedishBankUtils._mod10 = function (accountNumber) {
  var len = accountNumber.length, bit = 1, sum = 0, val, arr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
  while (len) {
    val = parseInt(accountNumber.charAt(--len), 10);
    sum += (bit ^= 1) ? arr[val] : val;
  }
  return sum && sum % 10 === 0;
};

/**
* @param {string} accountNumber
* @returns {boolean}
*/
SwedishBankUtils._mod11 = function (accountNumber) {
  var len = accountNumber.length, sum = 0, val, weights = [1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  var arr = weights.splice(weights.length-len, weights.length-(weights.length-len));
  while (len) {
    val = parseInt(accountNumber.charAt(--len), 10);
    sum += arr[len] * val;
  }
  return sum && sum % 11 === 0;
};

/* --- */

/**
* Represents a single Swedish bank account.
* @param {number|string} clearingNumber 
* @param {number|string} accountNumber 
* @param {boolean} normalizeClearingNumber - whether clearing number should be stored normalized
* 
*/
var SwedishBankAccount = function (clearingNumber, accountNumber, normalizeClearingNumber) {
  normalizeClearingNumber = normalizeClearingNumber === undefined ? true : normalizeClearingNumber;
  this.clearingNumber = normalizeClearingNumber ? SwedishBankUtils.normalizeClearingNumber(clearingNumber) : clearingNumber;
  this.accountNumber = accountNumber;
  this.bankName = '';
};

/**
* Joins clearing and account numbers as a single string.
* @return {string}
*/
SwedishBankAccount.prototype.unifiedAccountString = function () {
  return this.clearingNumber && this.accountNumber ? this.clearingNumber + this.accountNumber + '' : '';
};

/**
* Checks if both clearing and account numbers are valid.
* @return {boolean} - true if valid, otherwise false
*/
SwedishBankAccount.prototype.isValid = function () {
  this._isValid = this.validateClearingNumber() && this.validateAccountNumber();
  return this._isValid;
};

/**
* Validates clearing number. If valid, the `bankName` property is also updated.
* @return {boolean} - true if valid, otherwise false
*/
SwedishBankAccount.prototype.validateClearingNumber = function () {
  if (this.clearingNumber) {
    var bankName = SwedishBankUtils.getBankName(this.clearingNumber);
    if (bankName) {
      this.bankName = bankName;
      return true;
    }
  }
  return false;
};

/**
* @return {boolean} - true if account number valid for this account's bank
*/
SwedishBankAccount.prototype.validateAccountNumber = function () {
  // All valid account numbers are 7 or more characters long
  if (this.accountNumber && this.accountNumber.length >= 7) {
    if (this.validateClearingNumber()) {
      // Get all known accountFormats that match this bank
      var matching = accountFormats.filter(function (bank) {
        if (bank.name == this.bankName) {
          return true;
        }
      }, this);
      // Try to validate for each matching account format.
      // The account format also determines what parts of the clearing+account
      // string should be used.
      var cn, b, n = this.unifiedAccountString();
      for(var i = 0; i < matching.length; i++) {
        b = matching[i];
        cn = n.substr(-b.lengths.control, b.lengths.control);
        //console.log('Account: ' + this.clearingNumber + ' ' + this.accountNumber + '...Trying to match with mod: ' + matching[i].modulus);
        if ((matching[i].modulus === 11 && SwedishBankUtils._mod11(cn))
          || (matching[i].modulus === 10 && SwedishBankUtils._mod10(cn))) {
          return true;
        }
      }
    }
  }
  return false;
};

module.exports = SwedishBankUtils;