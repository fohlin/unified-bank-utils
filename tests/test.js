var test = require('tape');
var CN = require('clearingnummer');
var BankUtils = require('../src/unified-bank-utils.js');

test('Dependency - clearing number validation (SE)', function (t){
  t.equal(CN.bankName(5202), 'SEB', 'Clearing 5202 is SEB');

  t.deepEquals(CN.clearingNumbers('Ålandsbanken'),
    [{ 'min': 2300, 'max': 2399}],
    'Ålandsbanken can be looked up'
  );
  t.end();
});

test('Main API - validation SE', function (t) {
  // Forex account: '9420', '4172385' 
  var a = BankUtils.SE.account();
  t.assert(a.isValid() === false, 'SE: empty account should be invalid');
  a.clearingNumber = '9420';
  t.assert(a.isValid() === false, 'SE: account with only clearing should be invalid');
  a.accountNumber = '4172385';
  t.assert(a.isValid(), 'SE: complete account should be valid');
  t.equal(a.bankName, 'Forex Bank', 'SE: bank name lookup after validation');

  var b = BankUtils.SE.account('9420', '4172385');
  t.assert(b.isValid(), 'SE: account created from main API should be valid');
  t.assert(b.bankName, 'Forex Bank', 'SE: account created from main API: bank name lookup');
  t.end();
});