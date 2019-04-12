/*! unified-bank-utils, version 0.3.1 */
window["BankUtils"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var SE = __webpack_require__(1);

var BankUtils = {
  'SE': SE
};

module.exports = BankUtils;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var CN = __webpack_require__(2);
var accountFormats = __webpack_require__(4);

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
  if (SwedishBankUtils.getAccountNumberFormats(clearingStr).length > 0) {
    // For five-digit variants, clearingnummer.js requires hyphen between fourth
    // and fifth characters.
    if (clearingStr.length > 4) {
      clearingStr = clearingStr.substring(0, 4) + '-' + clearingStr.substring(4);
    }
    return CN.bankName(clearingStr);
  }
  // clearingnummer.js return empty string for no match
  return '';
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
    if (clearingNumber.length == format.lengths.clearing) {
      var additionalClearingChars = format.lengths.clearing - clearingNumber.length > 0 ? format.lengths.clearing - clearingNumber.length : 0;
      var toMatch = clearingNumber + new Array(format.lengths.account + additionalClearingChars + 1).join('0');
      if(toMatch.match(format.regex)) {
        return true;
      }
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
        if (b.regex.test(n) &&
           ((b.modulus === 11 && SwedishBankUtils._mod11(cn)) ||
            (b.modulus === 10 && SwedishBankUtils._mod10(cn))) ||
            b.modulus === false) {
          return true;
        }
      }
    }
  }
  return false;
};

module.exports = SwedishBankUtils;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Build of https://github.com/believer/clearingnummer (0.4.4) */


var banks = __webpack_require__(3);

function bankName(number) {
  var numberString = number.toString();

  var found = banks.map(function (bank) {
    var foundBank = bank.ranges.filter(function (range) {
      var min = range.min.toString();
      var max = range.max.toString();

      if (min === numberString || max === numberString || number > range.min && number < range.max) {
        return true;
      }

      return false;
    });

    if (foundBank.length) {
      return bank;
    }
  }).filter(Boolean);

  return found.length ? found[0].bank : '';
}

function clearingNumbers(bankName) {
  var bank = banks.filter(function (bank) {
    return bank.bank === bankName;
  });

  return bank.length ? bank[0].ranges : [];
}

function allBanks() {
  return banks.map(function (bank) {
    return bank.bank;
  });
}

module.exports = {
  bankName: bankName,
  clearingNumbers: clearingNumbers,
  allBanks: allBanks
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Build of https://github.com/believer/clearingnummer (0.6.2)
 * 
 * Modification from that is to keep 'Nordea Personkonto' separate
*/


module.exports = exports.default = [
  {
    bank: 'RBS',
    ranges: [
      {
        max: 9099,
        min: 9090,
      },
    ],
  },
  {
    bank: 'Kommuninvest',
    ranges: [
      {
        max: 9955,
        min: 9955,
      },
    ],
  },
  {
    bank: 'Amfa Bank',
    ranges: [
      {
        max: 9669,
        min: 9660,
      },
    ],
  },
  {
    bank: 'Avanza Bank',
    ranges: [
      {
        max: 9569,
        min: 9550,
      },
    ],
  },
  {
    bank: 'Marginalen Bank',
    ranges: [
      {
        max: 9239,
        min: 9230,
      },
    ],
  },
  {
    bank: 'Bluestep Finans',
    ranges: [
      {
        max: 9689,
        min: 9680,
      },
    ],
  },
  {
    bank: 'Calyon Bank',
    ranges: [
      {
        max: 9089,
        min: 9080,
      },
    ],
  },
  {
    bank: 'Citibank',
    ranges: [
      {
        max: 9049,
        min: 9040,
      },
    ],
  },
  {
    bank: 'Danske Bank',
    ranges: [
      {
        max: 1399,
        min: 1200,
      },
      {
        max: 2499,
        min: 2400,
      },
      {
        max: 9189,
        min: 9180,
      },
    ],
  },
  {
    bank: 'DNB Bank',
    ranges: [
      {
        max: 9199,
        min: 9190,
      },
      {
        max: 9269,
        min: 9260,
      },
    ],
  },
  {
    bank: 'Ekobanken',
    ranges: [
      {
        max: 9709,
        min: 9700,
      },
    ],
  },
  {
    bank: 'Folkia',
    ranges: [
      {
        max: 9699,
        min: 9690,
      },
    ],
  },
  {
    bank: 'Forex Bank',
    ranges: [
      {
        max: 9449,
        min: 9400,
      },
    ],
  },
  {
    bank: 'Fortis Bank',
    ranges: [
      {
        max: 9479,
        min: 9470,
      },
    ],
  },
  {
    bank: 'GE Money Bank',
    ranges: [
      {
        max: 9469,
        min: 9460,
      },
    ],
  },
  {
    bank: 'Handelsbanken',
    ranges: [
      {
        max: 6999,
        min: 6000,
      },
    ],
  },
  {
    bank: 'ICA Banken',
    ranges: [
      {
        max: 9279,
        min: 9270,
      },
    ],
  },
  {
    bank: 'IKANO Bank',
    ranges: [
      {
        max: 9179,
        min: 9170,
      },
    ],
  },
  {
    bank: 'JAK Medlemsbank',
    ranges: [
      {
        max: 9679,
        min: 9670,
      },
    ],
  },
  {
    bank: 'Landshypotek',
    ranges: [
      {
        max: 9399,
        min: 9390,
      },
    ],
  },
  {
    bank: 'Netfonds Bank (ub)',
    ranges: [
      {
        max: 9729,
        min: 9720,
      },
    ],
  },
  {
    bank: 'Länsförsäkringar Bank',
    ranges: [
      {
        max: 3409,
        min: 3400,
      },
      {
        max: 9029,
        min: 9020,
      },
      {
        max: 9069,
        min: 9060,
      },
    ],
  },
  {
    bank: 'MedMera Bank',
    ranges: [
      {
        max: 9659,
        min: 9650,
      },
    ],
  },
  {
    bank: 'Nordea',
    ranges: [
      {
        max: 1199,
        min: 1100,
      },
      {
        max: 2099,
        min: 1400,
      },
      {
        max: 3299,
        min: 3000,
      },
      {
        max: 3399,
        min: 3301,
      },
      {
        max: 3781,
        min: 3410,
      },
      {
        max: 4999,
        min: 3783,
      },
      {
        max: 9549,
        min: 9500,
      },
      {
        max: 9969,
        min: 9960,
      },
    ],
  },
  {
    bank: 'Nordea Personkonto',
    ranges: [
      {
        min: 3300,
        max: 3300
      },
      {
        min: 3782,
        max: 3782
      }
    ]
  },
  {
    bank: 'Nordnet Bank',
    ranges: [
      {
        max: 9109,
        min: 9100,
      },
    ],
  },
  {
    bank: 'Nasdaq-OMX',
    ranges: [
      {
        max: 9879,
        min: 9870,
      },
    ],
  },
  {
    bank: 'Riksgälden',
    ranges: [
      {
        max: 9899,
        min: 9880,
      },
    ],
  },
  {
    bank: 'Teller Branch Norway',
    ranges: [
      {
        max: 9951,
        min: 9951,
      },
    ],
  },
  {
    bank: 'Bankernas Automatbolag',
    ranges: [
      {
        max: 9952,
        min: 9952,
      },
    ],
  },
  {
    bank: 'Teller Branch Sweden',
    ranges: [
      {
        max: 9953,
        min: 9953,
      },
    ],
  },
  {
    bank: 'Kortaccept Nordic',
    ranges: [
      {
        max: 9954,
        min: 9954,
      },
    ],
  },
  {
    bank: 'Exchange Finans Europe',
    ranges: [
      {
        max: 9589,
        min: 9580,
      },
    ],
  },
  {
    bank: 'Erik Penser Bankaktiebolag',
    ranges: [
      {
        max: 9599,
        min: 9590,
      },
    ],
  },
  {
    bank: 'Volvofinans Bank',
    ranges: [
      {
        max: 9619,
        min: 9610,
      },
    ],
  },
  {
    bank: 'Bank of China (Luxembourg)',
    ranges: [
      {
        max: 9629,
        min: 9620,
      },
    ],
  },
  {
    bank: 'Lån & Spar Bank',
    ranges: [
      {
        max: 9639,
        min: 9630,
      },
    ],
  },
  {
    bank: 'Nordax Finans',
    ranges: [
      {
        max: 9649,
        min: 9640,
      },
    ],
  },
  {
    bank: 'Pareto Öhman',
    ranges: [
      {
        max: 9389,
        min: 9380,
      },
    ],
  },
  {
    bank: 'Privatgirot',
    ranges: [
      {
        max: 9869,
        min: 9860,
      },
    ],
  },
  {
    bank: 'Resurs Bank',
    ranges: [
      {
        max: 9289,
        min: 9280,
      },
    ],
  },
  {
    bank: 'SalusAnsvar Bank',
    ranges: [
      {
        max: 9239,
        min: 9231,
      },
    ],
  },
  {
    bank: 'SBAB Bank',
    ranges: [
      {
        max: 9259,
        min: 9250,
      },
    ],
  },
  {
    bank: 'SEB',
    ranges: [
      {
        max: 5999,
        min: 5000,
      },
      {
        max: 9124,
        min: 9120,
      },
      {
        max: 9149,
        min: 9130,
      },
    ],
  },
  {
    bank: 'Skandiabanken',
    ranges: [
      {
        max: 9169,
        min: 9150,
      },
    ],
  },
  {
    bank: 'Sparbanken Syd',
    ranges: [
      {
        max: 9579,
        min: 9570,
      },
    ],
  },
  {
    bank: 'Sveriges Riksbank',
    ranges: [
      {
        max: 1099,
        min: 1000,
      },
    ],
  },
  {
    bank: 'Swedbank',
    ranges: [
      {
        max: 8999,
        min: 7000,
      },
      {
        max: 9349,
        min: 9300,
      },
      {
        max: '8305-5',
        min: '8305-5',
      },
      {
        max: '8383-2',
        min: '8383-2',
      },
      {
        max: '8006-9',
        min: '8006-9',
      },
      {
        max: '8018-4',
        min: '8018-4',
      },
      {
        max: '8021-8',
        min: '8021-8',
      },
      {
        max: '8024-2',
        min: '8024-2',
      },
      {
        max: '8030-9',
        min: '8030-9',
      },
      {
        max: '8032-5',
        min: '8032-5',
      },
      {
        max: '8050-7',
        min: '8050-7',
      },
      {
        max: '8059-8',
        min: '8059-8',
      },
      {
        max: '8060-6',
        min: '8060-6',
      },
      {
        max: '8077-0',
        min: '8077-0',
      },
      {
        max: '8079-6',
        min: '8079-6',
      },
      {
        max: '8103-4',
        min: '8103-4',
      },
      {
        max: '8105-9',
        min: '8105-9',
      },
      {
        max: '8114-1',
        min: '8114-1',
      },
      {
        max: '8129-9',
        min: '8129-9',
      },
      {
        max: '8138-0',
        min: '8138-0',
      },
      {
        max: '8143-0',
        min: '8143-0',
      },
      {
        max: '8147-1',
        min: '8147-1',
      },
      {
        max: '8150-5',
        min: '8150-5',
      },
      {
        max: '8153-9',
        min: '8153-9',
      },
      {
        max: '8156-2',
        min: '8156-2',
      },
      {
        max: '8166-1',
        min: '8166-1',
      },
      {
        max: '8169-5',
        min: '8169-5',
      },
      {
        max: '8177-7',
        min: '8177-7',
      },
      {
        max: '8182-8',
        min: '8182-8',
      },
      {
        max: '8183-6',
        min: '8183-6',
      },
      {
        max: '8187-7',
        min: '8187-7',
      },
      {
        max: '8201-6',
        min: '8201-6',
      },
      {
        max: '8214-9',
        min: '8214-9',
      },
      {
        max: '8222-2',
        min: '8222-2',
      },
      {
        max: '8239-6',
        min: '8239-6',
      },
      {
        max: '8240-4',
        min: '8240-4',
      },
      {
        max: '8242-0',
        min: '8242-0',
      },
      {
        max: '8257-8',
        min: '8257-8',
      },
      {
        max: '8264-4',
        min: '8264-4',
      },
      {
        max: '8270-1',
        min: '8270-1',
      },
      {
        max: '8284-2',
        min: '8284-2',
      },
      {
        max: '8299-0',
        min: '8299-0',
      },
      {
        max: '8304-8',
        min: '8304-8',
      },
      {
        max: '8305-5',
        min: '8305-5',
      },
      {
        max: '8313-9',
        min: '8313-9',
      },
      {
        max: '8314-7',
        min: '8314-7',
      },
      {
        max: '8327-9',
        min: '8327-9',
      },
      {
        max: '8346-9',
        min: '8346-9',
      },
      {
        max: '8353-5',
        min: '8353-5',
      },
      {
        max: '8354-3',
        min: '8354-3',
      },
      {
        max: '8368-3',
        min: '8368-3',
      },
      {
        max: '8381-6',
        min: '8381-6',
      },
      {
        max: '8393-1',
        min: '8393-1',
      },
      {
        max: '8401-2',
        min: '8401-2',
      },
      {
        max: '8403-8',
        min: '8403-8',
      },
      {
        max: '8405-3',
        min: '8405-3',
      },
      {
        max: '8417-8',
        min: '8417-8',
      },
      {
        max: '8420-2',
        min: '8420-2',
      },
      {
        max: '8424-4',
        min: '8424-4',
      },
      {
        max: '8431-9',
        min: '8431-9',
      },
      {
        max: '8434-3',
        min: '8434-3',
      },
      {
        max: '8440-0',
        min: '8440-0',
      },
      {
        max: '8452-5',
        min: '8452-5',
      },
      {
        max: '8464-0',
        min: '8464-0',
      },
      {
        max: '8480-6',
        min: '8480-6',
      },
      {
        max: '8860-9',
        min: '8860-9',
      },
      {
        max: '8901-1',
        min: '8901-1',
      },
    ],
  },
  {
    bank: 'Sparbanken Gotland',
    ranges: [
      {
        max: '8055-6',
        min: '8055-6',
      },
    ],
  },
  {
    bank: 'Sölvesborg-Mjällby sparbank',
    ranges: [
      {
        max: '8321-2',
        min: '8321-2',
      },
    ],
  },
  {
    bank: 'Markaryds sparbank',
    ranges: [
      {
        max: '8217-2',
        min: '8217-2',
      },
    ],
  },
  {
    bank: 'Fryksdalens sparbank',
    ranges: [
      {
        max: '8336-0',
        min: '8336-0',
      },
    ],
  },
  {
    bank: 'Häradssparbanken Mönsterås',
    ranges: [
      {
        max: '8331-1',
        min: '8331-1',
      },
    ],
  },
  {
    bank: 'Närs sparbank',
    ranges: [
      {
        max: '8250-3',
        min: '8250-3',
      },
    ],
  },
  {
    bank: 'Sparbanken Skaraborg',
    ranges: [
      {
        max: '8289-1',
        min: '8289-1',
      },
    ],
  },
  {
    bank: 'Skurups sparbank',
    ranges: [
      {
        max: '8295-8',
        min: '8295-8',
      },
    ],
  },
  {
    bank: 'Lekebergs sparbank',
    ranges: [
      {
        max: '8164-6',
        min: '8164-6',
      },
    ],
  },
  {
    bank: 'Kinda-Ydre sparbank',
    ranges: [
      {
        max: '8158-8',
        min: '8158-8',
      },
    ],
  },
  {
    bank: 'Varbergs sparbank',
    ranges: [
      {
        max: '8388-1',
        min: '8388-1',
      },
    ],
  },
  {
    bank: 'VP Securities A/S',
    ranges: [
      {
        max: 9956,
        min: 9956,
      },
    ],
  },
  {
    bank: 'Ålandsbanken',
    ranges: [
      {
        max: 2399,
        min: 2300,
      },
    ],
  },
];


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/* This file is adapted from Jonas Persson's `kontonummer.js` project,
 * available with MIT license at https://github.com/jop-io/kontonummer.js.
 */
module.exports = [
  {
    name: 'Avanza Bank',
    regex: /^(95[5-6][0-9])([0-9]{7})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  11
    }
  },
  {
    name: 'Amfa Bank',
    regex: /^(966[0-9])([0-9]{8})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  8,
      control:  10
    }
  },
  {
    name: 'Bluestep Finans',
    regex: /^(968[0-9])([0-9]{7})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  10
    }
  },
  {
    name: 'Fortis Bank',
    regex: /^(947[0-9])([0-9]{7})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  11
    }
  },
  {
    name: 'Citibank',
    regex: /^(904[0-9])([0-9]{7})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  11
    }
  },
  {
    name: 'Danske Bank',
    regex: /^(1[2-3][0-9][0-9]|24[0-9][0-9])([0-9]{7})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  10
    }
  },
  {
    name: 'Danske Bank',
    regex: /^(918[0-9])([0-9]{10})$/,
    modulus: 10,
    lengths: {
      clearing: 4,
      account:  10,
      control:  10
    }
  },
  {
    name: 'DNB Bank',
    regex: /^(919[0-9]|926[0-9])([0-9]{7})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  11
    }
  },
  {
    name: 'Ekobanken',
    regex: /^(970[0-9])([0-9]{8})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  11
    }
  },
  {
    name: 'Erik Penser Bankaktiebolag',
    regex: /^(959[0-9])([0-9]{7})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  11
    }
  },
  {
    name: 'Forex Bank',
    regex: /^(94[0-4][0-9])([0-9]{7})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  10
    }
  },
  {
    name: 'Handelsbanken',
    regex: /^(6[0-9][0-9][0-9])([0-9]{9})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  9,
      control:  9
    }
  },
  {
    name: 'ICA Banken',
    regex: /^(927[0-9])([0-9]{7})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  10
    }
  },
  {
    name: 'IKANO Bank',
    regex: /^(917[0-9])([0-9]{7})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  10
    }
  },
  {
    name: 'JAK Medlemsbank',
    regex: /^(967[0-9])([0-9]{8})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  11
    }
  },
  {
    name: 'Landshypotek',
    regex: /^(939[0-9])([0-9]{7})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  11
    }
  },
  {
    name: 'Lån & Spar Bank',
    regex: /^(963[0-9])([0-9]{7})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  10
    }
  },
  {
    name: 'Länsförsäkringar Bank',
    regex: /^(340[0-9]|906[0-9])([0-9]{7})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  10
    }
  },
  {
    name: 'Länsförsäkringar Bank',
    regex: /^(902[0-9])([0-9]{7})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  11
    }
  },
  {
    name: 'Marginalen Bank',
    regex: /^(923[0-9])([0-9]{7})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  10
    }
  },
  {
    name: 'Nordax Finans',
    regex: /^(964[0-9])([0-9]{7})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  11
    }
  },
  {
    name: 'Nordea',
    regex: /^(?!3782|11[0-9][0-9]|1[4-9][0-9][0-9]|20[0-9][0-9]|30[0-9][0-9]|330[1-9]|33[1-9][0-9]|34[1-9][0-9]|3[5-9][0-9][0-9])([0-9]{7})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  10
    }
  },
  {
    name: 'Nordea',
    regex: /^(4[0-9][0-9][0-9])([0-9]{7})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  11
    }
  },
  {
    name: 'Nordea Personkonto',
    regex: /^(3300|3782)([0-9]{10})$/,
    modulus: 10,
    lengths: {
      clearing: 4,
      account:  10,
      control:  10
    }
  },
  {
    name: 'Nordea',
    regex: /^([0-9][0-9])(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])([0-9]{4})$/,
    modulus: 10,
    lengths: {
      clearing: 0,
      account:  10,
      control:  10
    }
  },
  {
    name: 'Nordea',
    regex: /^(95[0-4][0-9]|996[0-9])([0-9]{10})$/,
    modulus: 10,
    lengths: {
      clearing: 0,
      account:  10,
      control:  10
    }
  },
  {
    name: 'Nordnet Bank',
    regex: /^(910[0-9])([0-9]{7})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  11
    }
  },
  {
    name: 'Resurs Bank',
    regex: /^(928[0-9])([0-9]{7})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  10
    }
  },
  {
    name: 'Riksgälden',
    regex: /^(989[0-9])([0-9]{10})$/,
    modulus: 10,
    lengths: {
      clearing: 4,
      account:  10,
      control:  10
    }
  },
  {
    name: 'RBS',
    regex: /^(909[0-9])([0-9]{7})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  11
    }
  },
  {
    name: 'GE Money Bank',
    regex: /^(946[0-9])([0-9]{7})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  10
    }
  },
  {
    name: 'SBAB Bank',
    regex: /^(925[0-9])([0-9]{7})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  10
    }
  },
  {
    name: 'SEB',
    regex: /^(5[0-9][0-9][0-9]|912[0-4]|91[3-4][0-9])([0-9]{7})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  10
    }
  },
  {
    name: 'Skandiabanken',
    regex: /^(91[5-6][0-9])([0-9]{7})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  11
    }
  },
  {
    name: 'Sparbanken Syd',
    regex: /^(957[0-9])([0-9]{10})$/,
    modulus: 10,
    lengths: {
      clearing: 4,
      account:  10,
      control:  10
    }
  },
  {
    name: 'Swedbank',
    regex: /^(7[0-9][0-9][0-9])([0-9]{7})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  10
    }
  },
  {
    name: 'Swedbank',
    regex: /^(93[0-2][0-9])([0-9]{10})$/,
    modulus: 10,
    lengths: {
      clearing: 4,
      account:  10,
      control:  10
    }
  },
  {
    name: 'Swedbank',
    regex: /^(?!83881|81646)(8[0-9]{4})([0-9]{10})$/,
    modulus: 10,
    lengths: {
      clearing: 5,
      account:  10,
      control:  10
    }
  },
  {
    name: 'Varbergs sparbank',
    regex: /^(83881)([0-9]{10})$/,
    modulus: false, // Skip modulus validation
    lengths: {
      clearing: 5,
      account: 10,
      control: 11
    }
  },
  {
    name: 'Lekebergs sparbank',
    regex: /^(81646)([0-9]{10})$/,
    modulus: false, // Skip modulus validation
    lengths: {
      clearing: 5,
      account: 10,
      control: 10
    }
  },
  {
    name: 'Ålandsbanken',
    regex: /^(23[0-9][0-9])([0-9]{7})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  11
    }
  }
];

/***/ })
/******/ ]);