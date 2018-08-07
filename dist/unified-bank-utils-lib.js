/*! unified-bank-utils, version 0.2.4 */
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
    regex: /^(966[0-9])([0-9]{7})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
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
    name: 'Ikano Bank',
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
    name: 'Landshypotek Bank',
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
    name: 'Royal Bank of Scotland',
    regex: /^(909[0-9])([0-9]{7})$/,
    modulus: 11,
    lengths: {
      clearing: 4,
      account:  7,
      control:  11
    }
  },
  {
    name: 'Santander Consumer Bank',
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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Build of https://github.com/believer/clearingnummer (0.4.4) */


module.exports = [{
  bank: 'Royal Bank of Scotland',
  ranges: [{
    min: 9090,
    max: 9099
  }]
}, {
  bank: 'Amfa Bank',
  ranges: [{
    min: 9660,
    max: 9669
  }]
}, {
  bank: 'Avanza Bank',
  ranges: [{
    min: 9550,
    max: 9569
  }]
}, {
  bank: 'Marginalen Bank',
  ranges: [{
    min: 9230,
    max: 9239
  }]
}, {
  bank: 'Bluestep Finans',
  ranges: [{
    min: 9680,
    max: 9689
  }]
}, {
  bank: 'Calyon Bank',
  ranges: [{
    min: 9080,
    max: 9089
  }]
}, {
  bank: 'Citibank',
  ranges: [{
    min: 9040,
    max: 9049
  }]
}, {
  bank: 'Danske Bank',
  ranges: [{
    min: 1200,
    max: 1399
  }, {
    min: 2400,
    max: 2499
  }, {
    min: 9180,
    max: 9189
  }]
}, {
  bank: 'DNB Bank',
  ranges: [{
    min: 9190,
    max: 9199
  }, {
    min: 9260,
    max: 9269
  }]
}, {
  bank: 'Ekobanken',
  ranges: [{
    min: 9700,
    max: 9709
  }]
}, {
  bank: 'Folkia',
  ranges: [{
    min: 9690,
    max: 9699
  }]
}, {
  bank: 'Forex Bank',
  ranges: [{
    min: 9400,
    max: 9449
  }]
}, {
  bank: 'Fortis Bank',
  ranges: [{
    min: 9470,
    max: 9479
  }]
}, {
  bank: 'Santander Consumer Bank',
  ranges: [{
    min: 9460,
    max: 9469
  }]
}, {
  bank: 'Handelsbanken',
  ranges: [{
    min: 6000,
    max: 6999
  }]
}, {
  bank: 'ICA Banken',
  ranges: [{
    min: 9270,
    max: 9279
  }]
}, {
  bank: 'Ikano Bank',
  ranges: [{
    min: 9170,
    max: 9179
  }]
}, {
  bank: 'JAK Medlemsbank',
  ranges: [{
    min: 9670,
    max: 9679
  }]
}, {
  bank: 'Landshypotek Bank',
  ranges: [{
    min: 9390,
    max: 9399
  }]
}, {
  bank: 'Länsförsäkringar Bank',
  ranges: [{
    min: 3400,
    max: 3409
  }, {
    min: 9020,
    max: 9029
  }, {
    min: 9060,
    max: 9069
  }]
}, {
  bank: 'Lönneberga-Tuna-Vena Sparbank',
  ranges: [{
    min: '8393-1',
    max: '8393-1'
  }]
}, {
  bank: 'MedMera Bank',
  ranges: [{
    min: 9650,
    max: 9659
  }]
}, {
  bank: 'Nordea',
  ranges: [{
    min: 1100,
    max: 1199
  }, {
    min: 1400,
    max: 2099
  }, {
    min: 3000,
    max: 3299
  }, {
    min: 3301,
    max: 3399
  }, {
    min: 3410,
    max: 3781
  }, {
    min: 3783,
    max: 4999
  }, {
    min: 9500,
    max: 9549
  }, {
    min: 9960,
    max: 9969
  }]
}, {
  bank: 'Nordea Personkonto',
  ranges: [{
    min: 3300,
    max: 3300
  }, {
    min: 3782,
    max: 3782
  }]
}, {
  bank: 'Nordnet Bank',
  ranges: [{
    min: 9100,
    max: 9109
  }]
}, {
  bank: 'Nasdaq-OMX',
  ranges: [{
    min: 9870,
    max: 9879
  }]
}, {
  bank: 'Riksgälden',
  ranges: [{
    min: 9880,
    max: 9889
  }]
}, {
  bank: 'Nykredit',
  ranges: [{
    min: 9950,
    max: 9950
  }]
}, {
  bank: 'Teller Branch Norway',
  ranges: [{
    min: 9951,
    max: 9951
  }]
}, {
  bank: 'Bankernas Automatbolag',
  ranges: [{
    min: 9952,
    max: 9952
  }]
}, {
  bank: 'Teller Branch Sweden',
  ranges: [{
    min: 9953,
    max: 9953
  }]
}, {
  bank: 'Kortaccept Nordic',
  ranges: [{
    min: 9954,
    max: 9954
  }]
}, {
  bank: 'Exchange Finans Europe',
  ranges: [{
    min: 9580,
    max: 9589
  }]
}, {
  bank: 'Erik Penser Bankaktiebolag',
  ranges: [{
    min: 9590,
    max: 9599
  }]
}, {
  bank: 'Volvofinans Bank',
  ranges: [{
    min: 9610,
    max: 9619
  }]
}, {
  bank: 'Bank of China (Luxembourg)',
  ranges: [{
    min: 9620,
    max: 9629
  }]
}, {
  bank: 'Lån & Spar Bank',
  ranges: [{
    min: 9630,
    max: 9639
  }]
}, {
  bank: 'Nordax Finans',
  ranges: [{
    min: 9640,
    max: 9649
  }]
}, {
  bank: 'Pareto Öhman',
  ranges: [{
    min: 9380,
    max: 9389
  }]
}, {
  bank: 'Parex Bank',
  ranges: [{
    min: 9480,
    max: 9489
  }]
}, {
  bank: 'Privatgirot',
  ranges: [{
    min: 9860,
    max: 9869
  }]
}, {
  bank: 'Resurs Bank',
  ranges: [{
    min: 9280,
    max: 9289
  }]
}, {
  bank: 'Sala Sparbank',
  ranges: [{
    min: 8284,
    max: 8284
  }]
}, {
  bank: 'SalusAnsvar Bank',
  ranges: [{
    min: 9231,
    max: 9239
  }]
}, {
  bank: 'Sambox',
  ranges: [{
    min: 2950,
    max: 2950
  }]
}, {
  bank: 'SBAB Bank',
  ranges: [{
    min: 9250,
    max: 9259
  }]
}, {
  bank: 'SEB',
  ranges: [{
    min: 5000,
    max: 5999
  }, {
    min: 9120,
    max: 9124
  }, {
    min: 9130,
    max: 9149
  }]
}, {
  bank: 'Skandiabanken',
  ranges: [{
    min: 9150,
    max: 9169
  }]
}, {
  bank: 'Sparbanken i Enköping',
  ranges: [{
    min: 7121,
    max: 7122
  }, {
    min: '8305-5',
    max: '8305-5'
  }]
}, {
  bank: 'Sparbanken Skåne',
  ranges: [{
    min: '8313-9',
    max: '8313-9'
  }]
}, {
  bank: 'Sparbanken Alingsås',
  ranges: [{
    min: '8304-8',
    max: '8304-8'
  }]
}, {
  bank: 'Sparbanken Nord',
  ranges: [{
    min: 8264,
    max: 8264
  }]
}, {
  bank: 'Sparbanken Syd',
  ranges: [{
    min: 9570,
    max: 9579
  }]
}, {
  bank: 'Sveriges riksbank',
  ranges: [{
    min: 1000,
    max: 1099
  }]
}, {
  bank: 'Swedbank',
  ranges: [{
    min: 8000,
    max: 8999
  }, {
    min: 7000,
    max: 7999
  }, {
    min: 7123,
    max: 8104
  }, {
    min: 9300,
    max: 9349
  }, {
    min: '8383-2',
    max: '8383-2'
  }, {
    min: '8006-9',
    max: '8006-9'
  }, {
    min: '8018-4',
    max: '8018-4'
  }, {
    min: '8021-8',
    max: '8021-8'
  }, {
    min: '8024-2',
    max: '8024-2'
  }, {
    min: '8030-9',
    max: '8030-9'
  }, {
    min: '8032-5',
    max: '8032-5'
  }, {
    min: '8050-7',
    max: '8050-7'
  }, {
    min: '8059-8',
    max: '8059-8'
  }, {
    min: '8077-0',
    max: '8077-0'
  }, {
    min: '8079-6',
    max: '8079-6'
  }, {
    min: '8103-4',
    max: '8103-4'
  }, {
    min: '8105-9',
    max: '8105-9'
  }, {
    min: '8114-1',
    max: '8114-1'
  }, {
    min: '8129-9',
    max: '8129-9'
  }, {
    min: '8138-0',
    max: '8138-0'
  }, {
    min: '8143-0',
    max: '8143-0'
  }, {
    min: '8147-1',
    max: '8147-1'
  }, {
    min: '8150-5',
    max: '8150-5'
  }, {
    min: '8153-9',
    max: '8153-9'
  }, {
    min: '8156-2',
    max: '8156-2'
  }, {
    min: '8166-1',
    max: '8166-1'
  }, {
    min: '8169-5',
    max: '8169-5'
  }, {
    min: '8177-7',
    max: '8177-7'
  }, {
    min: '8182-8',
    max: '8182-8'
  }, {
    min: '8183-6',
    max: '8183-6'
  }, {
    min: '8187-7',
    max: '8187-7'
  }, {
    min: '8201-6',
    max: '8201-6'
  }, {
    min: '8214-9',
    max: '8214-9'
  }, {
    min: '8222-2',
    max: '8222-2'
  }, {
    min: '8239-6',
    max: '8239-6'
  }, {
    min: '8240-4',
    max: '8240-4'
  }, {
    min: '8242-0',
    max: '8242-0'
  }, {
    min: '8257-8',
    max: '8257-8'
  }, {
    min: '8264-4',
    max: '8264-4'
  }, {
    min: '8270-1',
    max: '8270-1'
  }, {
    min: '8284-2',
    max: '8284-2'
  }, {
    min: '8299-0',
    max: '8299-0'
  }, {
    min: '8304-8',
    max: '8304-8'
  }, {
    min: '8305-5',
    max: '8305-5'
  }, {
    min: '8313-9',
    max: '8313-9'
  }, {
    min: '8327-9',
    max: '8327-9'
  }, {
    min: '8346-9',
    max: '8346-9'
  }, {
    min: '8353-5',
    max: '8353-5'
  }, {
    min: '8354-3',
    max: '8354-3'
  }, {
    min: '8368-3',
    max: '8368-3'
  }, {
    min: '8381-6',
    max: '8381-6'
  }, {
    min: '8393-1',
    max: '8393-1'
  }, {
    min: '8401-2',
    max: '8401-2'
  }, {
    min: '8403-8',
    max: '8403-8'
  }, {
    min: '8405-3',
    max: '8405-3'
  }, {
    min: '8417-8',
    max: '8417-8'
  }, {
    min: '8420-2',
    max: '8420-2'
  }, {
    min: '8431-9',
    max: '8431-9'
  }, {
    min: '8434-3',
    max: '8434-3'
  }, {
    min: '8440-0',
    max: '8440-0'
  }, {
    min: '8452-5',
    max: '8452-5'
  }, {
    min: '8464-0',
    max: '8464-0'
  }, {
    min: '8480-6',
    max: '8480-6'
  }, {
    min: '8860-9',
    max: '8860-9'
  }, {
    min: '8901-1',
    max: '8901-1'
  }]
}, {
  bank: 'Sparbanken Gotland',
  ranges: [{
    min: '8055-6',
    max: '8055-6'
  }]
}, {
  bank: 'Falkenbergs sparbank',
  ranges: [{
    min: '8060-6',
    max: '8060-6'
  }]
}, {
  bank: 'Sölvesborg-Mjällby sparbank',
  ranges: [{
    min: '8321-2',
    max: '8321-2'
  }]
}, {
  bank: 'Markaryds sparbank',
  ranges: [{
    min: '8217-2',
    max: '8217-2'
  }]
}, {
  bank: 'Fryksdalens sparbank',
  ranges: [{
    min: '8336-0',
    max: '8336-0'
  }]
}, {
  bank: 'Häradssparbanken Mönsterås',
  ranges: [{
    min: '8331-1',
    max: '8331-1'
  }]
}, {
  bank: 'Närs sparbank',
  ranges: [{
    min: '8250-3',
    max: '8250-3'
  }]
}, {
  bank: 'Sparbanken Skaraborg',
  ranges: [{
    min: '8289-1',
    max: '8289-1'
  }]
}, {
  bank: 'Sparbanken Alingsås',
  ranges: [{
    min: '8304-8',
    max: '8304-8'
  }]
}, {
  bank: 'Skurups sparbank',
  ranges: [{
    min: '8295-8',
    max: '8295-8'
  }]
}, {
  bank: 'Lekebergs sparbank',
  ranges: [{
    min: '8164-6',
    max: '8164-6'
  }]
}, {
  bank: 'Sparbanken Lidköping',
  ranges: [{
    min: '8314-7',
    max: '8314-7'
  }]
}, {
  bank: 'Kinda-Ydre sparbank',
  ranges: [{
    min: '8158-8',
    max: '8158-8'
  }]
}, {
  bank: 'Varbergs sparbank',
  ranges: [{
    min: '8388-1',
    max: '8388-1'
  }]
}, {
  bank: 'Ålandsbanken',
  ranges: [{
    min: 2300,
    max: 2399
  }]
}];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Build of https://github.com/believer/clearingnummer (0.4.4) */


var banks = __webpack_require__(1);

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

var CN = __webpack_require__(2);
var accountFormats = __webpack_require__(0);

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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var SE = __webpack_require__(3);

var BankUtils = {
  'SE': SE
};

module.exports = BankUtils;

/***/ })
/******/ ]);