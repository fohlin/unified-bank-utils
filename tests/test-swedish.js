var test = require('tape');
var CN = require('clearingnummer');
var SE = require('../src/swedish-bank-utils.js');
var ACC = require('../src/swedish-account-formats.js');

test('SE: Clearing number lookup and validation', function (t) {
  t.equals(SE.getBankName(9270), 'ICA Banken', 'Clearing 9270 is ICA Banken');

  var b9259 = SE.getBankName(9259);
  t.notEquals(b9259, 'ICA Banken', 'Clearing 9259 is not ICA Banken');
  t.equals(b9259, 'SBAB Bank', 'Clearing 9259 is SBAB');

  t.equals(SE.getBankName(82990), 'Swedbank', 'Clearing 82990 (int) is Swedbank');
  t.equals(SE.getBankName('8299-0'), 'Swedbank', 'Clearing 8299-0 (str) is Swedbank');
  t.equals(SE.getBankName('8299 0'), 'Swedbank', 'Clearing 8299 0 (str) is Swedbank');
  
  t.end();
});

test('SE: Invalid clearing numbers should be invalid', function (t) {
  t.equals(SE.getBankName('0001'), '');
  t.equals(SE.getBankName('0999'), '');
  t.equals(SE.getBankName(1), '');
  t.equals(SE.getBankName(999), '');
  t.equals(SE.getBankName('lorem'), '');
  t.equals(SE.getBankName(''), '');

  t.end();
});

test('SE: Account number validation format should correspond to a bank that can be looked up from clearing number',
  function (t) {
    ACC.forEach(function (aBank) {
      t.assert(CN.clearingNumbers(aBank.name).length > 0,
        aBank.name + ': has both account format and clearing number entry'
      );
    });
    t.end();
  }
);

/*
test('SE: Bank name from clearing number should correspond to an account number validation format', function (t) {
  var l = [];
  CN.allBanks().forEach(function (cBank) {
    l = ACC.filter(function (aBank) {
      return aBank.name == cBank;
    });
    t.assert(l.length > 0, cBank + ': has known account format');
  });
  t.end();
});
*/
