var CN = require('clearingnummer');

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
 * @return {string} - string of digit-only characters
 */
SwedishBankUtils.normalizeClearingNumber = function (clearingNumber) {
  var clearingStr = clearingNumber + '';
  return clearingStr.replace(/\D+/, '');
};

/**
 * @param  {number|string} clearingNumber
 * @param  {number|string} accountNumber
 * @return {SwedishBankAccount}
 */
SwedishBankUtils.account = function (clearingNumber, accountNumber) {
  return new SwedishBankAccount(clearingNumber, accountNumber);
};

/* --- */

/**
 * Represents a single Swedish bank account.
 * @param {number|string} clearingNumber 
 * @param {number|string} accountNumber 
 */
var SwedishBankAccount = function (clearingNumber, accountNumber) {
  this.clearingNumber = clearingNumber;
  this.accountNumber = accountNumber;
  this.bankName = '';
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

SwedishBankAccount.prototype.validateAccountNumber = function () {
  if (this.accountNumber) {
    // TODO
  }
  return false;
};

/**
 * TODO: Generates a standard-length string zeroes as middle padding between
 * clearing and account numbers.
 * @return {string} - empty if invalid account
 */
SwedishBankAccount.prototype.generateFullAccountString = function () {
  // TODO
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

module.exports = SwedishBankUtils;