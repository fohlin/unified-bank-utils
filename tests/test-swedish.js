var test = require('tape');
var CN = require('clearingnummer');
var SE = require('../src/swedish-bank-utils.js');
var ACC = require('../src/swedish-account-formats.js');

var testAccounts = [
  {'clearing': '6189', 'account': '834435918', 'bank': 'Handelsbanken'},
  {'clearing': '9420', 'account': '4172385', 'bank': 'Forex Bank'},
  {'clearing': '5177', 'account': '0278249', 'bank': 'SEB'},
  {'clearing': '9252', 'account': '0782455', 'bank': 'SBAB'},
  {'clearing': '82990', 'account': '2814958514', 'bank': 'Swedbank'},
  {'clearing': '8299-0', 'account': '2814958514', 'bank': 'Swedbank'},
  {'clearing': '9550', 'account': '6724278', 'bank': 'Avanza Bank'},
  {'clearing': '9020', 'account': '6886413', 'bank': 'Länsförsäkringar Bank'},
  {'clearing': '4051', 'account': '0071917', 'bank': 'Nordea'},
  {'clearing': '3300', 'account': '8112189876', 'bank': 'Nordea Personkonto'}
];
var invalidTestAccounts = [
  {'clearing': '8299-0', 'account': '281495851', 'bank': 'Swedbank'},
  {'clearing': '902', 'account': '6886413', 'bank': 'Länsförsäkringar Bank'},
  {'clearing': '4051', 'account': '00716917', 'bank': 'Nordea'},
  {'clearing': '4051', 'account': '00716917u', 'bank': 'Nordea'}
];

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

test('SE: Validation of test accounts', function (t) {
  testAccounts.forEach(function (testData) {
    var a = SE.account(testData.clearing, testData.account);
    t.equals(a.clearingNumber, testData.clearing, 'Clearing is correct');
    t.equals(a.accountNumber, testData.account, 'Account number is correct');
    t.assert(a.validateClearingNumber, a.clearingNumber + ' is valid clearing number');
    t.equals(a.bank, testData.bankName, 'Bank from clearing number is actually correct');
    t.assert(a.isValid(), 'Overall validation correct');
    t.assert(a.validateAccountNumber(), a.accountNumber + ' is valid account number for ' + a.bankName);
  });
  t.end();
});

test('SE: Invalid accounts should be invalid', function (t) {
  invalidTestAccounts.forEach(function (testData) {
    var a = SE.account(testData.clearing, testData.account);
    t.assert(!a.isValid(), a.unifiedAccountString() + ' should be invalid account');
  });
  t.end();
});
