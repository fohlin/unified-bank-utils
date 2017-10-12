/* Build of https://github.com/believer/clearingnummer (0.4.4) */
'use strict';

var banks = require('./clearingNumbers');

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