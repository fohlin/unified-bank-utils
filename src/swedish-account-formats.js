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
    regex: /^(?!83881)(8[0-9]{4})([0-9]{10})$/,
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