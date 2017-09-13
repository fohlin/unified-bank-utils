var CN = require('clearingnummer');
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
* @param  {number|string} clearingNumber
* @param  {number|string} accountNumber
* @param  {boolean} normalize - whether account object should store normalized data
* @return {SwedishBankAccount}
*/
SwedishBankUtils.account = function (clearingNumber, accountNumber, normalize = true) {
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
var SwedishBankAccount = function (clearingNumber, accountNumber, normalizeClearingNumber = true) {
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
  if (this.accountNumber) {
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

/**
* Tries to create a SwedishBankAccount object based on a string containing
* both clearing and account numbers.
* @param  {string} accountStr
* @return {SwedishBankAccount}
*/
SwedishBankAccount.fromSingleString = function (accountStr) {
  // TODO
};

/**
* TODO: Generates PlusGiro-compatible account string
* @return {string} - empty if invalid account
*/
// SwedishBankAccount.prototype.plusGiroString = function () {
//   // TODO
// };
/**
* TODO: Generates a Bankgiro-compatible account string
* @return {string} - empty if invalid account
*/
// SwedishBankAccount.prototype.bankgiroString = function () {
//   // TODO
// };


module.exports = SwedishBankUtils;