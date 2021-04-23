/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/js/app.js":
/*!***********************!*\
  !*** ./app/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar NegotiationController_1 = __webpack_require__(/*! ./controllers/NegotiationController */ \"./app/js/controllers/NegotiationController.js\");\n\nvar negotiationController = new NegotiationController_1[\"default\"]();\n$('.form').on('submit', negotiationController.addNegotiations.bind(negotiationController));\n$('#import-button').on('click', negotiationController.importNegotiations.bind(negotiationController));\n\n//# sourceURL=webpack://alurabank/./app/js/app.js?");

/***/ }),

/***/ "./app/js/controllers/NegotiationController.js":
/*!*****************************************************!*\
  !*** ./app/js/controllers/NegotiationController.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar __decorate = this && this.__decorate || function (decorators, target, key, desc) {\n  var c = arguments.length,\n      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,\n      d;\n  if ((typeof Reflect === \"undefined\" ? \"undefined\" : _typeof(Reflect)) === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {\n    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n  }\n  return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar Decorators_module_1 = __webpack_require__(/*! ../helpers/decorators/Decorators.module */ \"./app/js/helpers/decorators/Decorators.module.js\");\n\nvar Services_module_1 = __webpack_require__(/*! ../helpers/services/Services.module */ \"./app/js/helpers/services/Services.module.js\");\n\nvar Models_module_1 = __webpack_require__(/*! ../models/Models.module */ \"./app/js/models/Models.module.js\");\n\nvar Views_module_1 = __webpack_require__(/*! ../views/Views.module */ \"./app/js/views/Views.module.js\");\n\nvar NegotiationController = /*#__PURE__*/function () {\n  function NegotiationController() {\n    _classCallCheck(this, NegotiationController);\n\n    this.negotiations = new Models_module_1.NegotiationsData();\n    this.negotiationsView = new Views_module_1.NegotiationsView('#negotiationsView', true);\n    this.messageView = new Views_module_1.MessageView('#messageView');\n    this.negotiationsService = new Services_module_1.NegotiationsService();\n    this.negotiationsView.update(this.negotiations);\n  }\n\n  _createClass(NegotiationController, [{\n    key: \"importNegotiations\",\n    value: function importNegotiations() {\n      var _this = this;\n\n      this.negotiationsService.getNegotiaions(this.validateResponse).then(function (response) {\n        var latestNegotiations = _this.negotiations.getNegotiations();\n\n        response.filter(function (negotiation) {\n          !latestNegotiations.some(function (latestNegotiation) {\n            return negotiation.isEquals(latestNegotiation);\n          });\n        }).forEach(function (negotiation) {\n          return _this.negotiations.addNegotiations(negotiation);\n        });\n      })[\"catch\"](function (error) {\n        return _this.messageView.update(error);\n      });\n    }\n  }, {\n    key: \"addNegotiations\",\n    value: function addNegotiations(event) {\n      var negotiation = new Models_module_1.Negotiation(new Date(String(this.inputDate.val()).replace(/-/g, ',')), Number(this.inputQuantity.val()), Number(this.inputValue.val()));\n\n      if (this.isWeekend(negotiation.date)) {\n        return this.messageView.update('Negotiations accepted on business days only');\n      }\n\n      this.negotiations.addNegotiations(negotiation);\n      this.messageView.update('The negotiation was successfully created!');\n      this.negotiationsView.update(this.negotiations);\n    }\n  }, {\n    key: \"validateResponse\",\n    value: function validateResponse(response) {\n      if (response.ok) {\n        return response;\n      } else {\n        throw new Error(response.statusText);\n      }\n    }\n  }, {\n    key: \"isWeekend\",\n    value: function isWeekend(date) {\n      if (date.getDay() === DaysOfTheWeek.SUNDAY || date.getDay() === DaysOfTheWeek.SATURDAY) {\n        return true;\n      } else {\n        return false;\n      }\n    }\n  }]);\n\n  return NegotiationController;\n}();\n\n__decorate([Decorators_module_1.domInject('#date')], NegotiationController.prototype, \"inputDate\", void 0);\n\n__decorate([Decorators_module_1.domInject('#quantity')], NegotiationController.prototype, \"inputQuantity\", void 0);\n\n__decorate([Decorators_module_1.domInject('#value')], NegotiationController.prototype, \"inputValue\", void 0);\n\n__decorate([Decorators_module_1.throttle()], NegotiationController.prototype, \"importNegotiations\", null);\n\n__decorate([Decorators_module_1.throttle()], NegotiationController.prototype, \"addNegotiations\", null);\n\nexports.default = NegotiationController;\nvar DaysOfTheWeek;\n\n(function (DaysOfTheWeek) {\n  DaysOfTheWeek[DaysOfTheWeek[\"SUNDAY\"] = 0] = \"SUNDAY\";\n  DaysOfTheWeek[DaysOfTheWeek[\"MONDAY\"] = 1] = \"MONDAY\";\n  DaysOfTheWeek[DaysOfTheWeek[\"TUESDAY\"] = 2] = \"TUESDAY\";\n  DaysOfTheWeek[DaysOfTheWeek[\"WEDNESDAY\"] = 3] = \"WEDNESDAY\";\n  DaysOfTheWeek[DaysOfTheWeek[\"THURSDAY\"] = 4] = \"THURSDAY\";\n  DaysOfTheWeek[DaysOfTheWeek[\"FRYDAY\"] = 5] = \"FRYDAY\";\n  DaysOfTheWeek[DaysOfTheWeek[\"SATURDAY\"] = 6] = \"SATURDAY\";\n})(DaysOfTheWeek || (DaysOfTheWeek = {}));\n\n//# sourceURL=webpack://alurabank/./app/js/controllers/NegotiationController.js?");

/***/ }),

/***/ "./app/js/helpers/decorators/Decorators.module.js":
/*!********************************************************!*\
  !*** ./app/js/helpers/decorators/Decorators.module.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function get() {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __exportStar = this && this.__exportStar || function (m, exports) {\n  for (var p in m) {\n    if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n  }\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\n__exportStar(__webpack_require__(/*! ./DomInject.decorator */ \"./app/js/helpers/decorators/DomInject.decorator.js\"), exports);\n\n__exportStar(__webpack_require__(/*! ./LogExecutionTime.decorator */ \"./app/js/helpers/decorators/LogExecutionTime.decorator.js\"), exports);\n\n__exportStar(__webpack_require__(/*! ./Throattle.decorator */ \"./app/js/helpers/decorators/Throattle.decorator.js\"), exports);\n\n//# sourceURL=webpack://alurabank/./app/js/helpers/decorators/Decorators.module.js?");

/***/ }),

/***/ "./app/js/helpers/decorators/DomInject.decorator.js":
/*!**********************************************************!*\
  !*** ./app/js/helpers/decorators/DomInject.decorator.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.domInject = void 0;\n\nfunction domInject(selector) {\n  return function (target, key) {\n    var element;\n\n    var getter = function getter() {\n      if (!element) {\n        element = $(selector);\n        console.log(\"Recuperando o input \".concat(selector));\n      }\n\n      return element;\n    };\n\n    Object.defineProperty(target, key, {\n      get: getter\n    });\n  };\n}\n\nexports.domInject = domInject;\n\n//# sourceURL=webpack://alurabank/./app/js/helpers/decorators/DomInject.decorator.js?");

/***/ }),

/***/ "./app/js/helpers/decorators/LogExecutionTime.decorator.js":
/*!*****************************************************************!*\
  !*** ./app/js/helpers/decorators/LogExecutionTime.decorator.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.logExecutionTime = void 0;\n\nfunction logExecutionTime() {\n  var timeInSeconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n  return function (target, propertyKey, descriptor) {\n    var originalMethod = descriptor.value;\n    var timeType = timeInSeconds ? 's' : 'ms';\n    var divider = timeInSeconds ? 1000 : 1;\n\n    descriptor.value = function () {\n      var initialTime = performance.now();\n\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      var result = originalMethod.apply(this, args);\n      var finalTime = performance.now();\n      console.log(\"Tempo de execu\\xE7\\xE3o do m\\xE9todo \".concat(propertyKey, \": \").concat((finalTime - initialTime) / divider, \" \").concat(timeType));\n      return result;\n    };\n\n    return descriptor;\n  };\n}\n\nexports.logExecutionTime = logExecutionTime;\n\n//# sourceURL=webpack://alurabank/./app/js/helpers/decorators/LogExecutionTime.decorator.js?");

/***/ }),

/***/ "./app/js/helpers/decorators/Throattle.decorator.js":
/*!**********************************************************!*\
  !*** ./app/js/helpers/decorators/Throattle.decorator.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.throttle = void 0;\n\nfunction throttle() {\n  var milliseconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;\n  return function (target, propertyKey, descriptor) {\n    var originalMethod = descriptor.value;\n    var timer = 0;\n\n    descriptor.value = function () {\n      var _this = this;\n\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      var event = args[0];\n      if (event) event.preventDefault();\n      clearInterval(timer);\n      timer = Number(setTimeout(function () {\n        return originalMethod.apply(_this, args);\n      }, milliseconds));\n    };\n\n    return descriptor;\n  };\n}\n\nexports.throttle = throttle;\n\n//# sourceURL=webpack://alurabank/./app/js/helpers/decorators/Throattle.decorator.js?");

/***/ }),

/***/ "./app/js/helpers/services/Negotiations.service.js":
/*!*********************************************************!*\
  !*** ./app/js/helpers/services/Negotiations.service.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.NegotiationsService = void 0;\n\nvar Models_module_1 = __webpack_require__(/*! ../../models/Models.module */ \"./app/js/models/Models.module.js\");\n\nvar NegotiationsService = /*#__PURE__*/function () {\n  function NegotiationsService() {\n    _classCallCheck(this, NegotiationsService);\n  }\n\n  _createClass(NegotiationsService, [{\n    key: \"getNegotiaions\",\n    value: function getNegotiaions(handler) {\n      return fetch('http://localhost:8080').then(function (response) {\n        return handler(response);\n      }).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        data.map(function (negotiation) {\n          return new Models_module_1.Negotiation(new Date(), negotiation.vezes, negotiation.montante);\n        });\n      })[\"catch\"](function (error) {\n        return error;\n      });\n    }\n  }]);\n\n  return NegotiationsService;\n}();\n\nexports.NegotiationsService = NegotiationsService;\n\n//# sourceURL=webpack://alurabank/./app/js/helpers/services/Negotiations.service.js?");

/***/ }),

/***/ "./app/js/helpers/services/Services.module.js":
/*!****************************************************!*\
  !*** ./app/js/helpers/services/Services.module.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function get() {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __exportStar = this && this.__exportStar || function (m, exports) {\n  for (var p in m) {\n    if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n  }\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\n__exportStar(__webpack_require__(/*! ./Negotiations.service */ \"./app/js/helpers/services/Negotiations.service.js\"), exports);\n\n//# sourceURL=webpack://alurabank/./app/js/helpers/services/Services.module.js?");

/***/ }),

/***/ "./app/js/models/Models.module.js":
/*!****************************************!*\
  !*** ./app/js/models/Models.module.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function get() {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __exportStar = this && this.__exportStar || function (m, exports) {\n  for (var p in m) {\n    if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n  }\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\n__exportStar(__webpack_require__(/*! ./Negotiations */ \"./app/js/models/Negotiations.js\"), exports);\n\n__exportStar(__webpack_require__(/*! ./NegotiationsData */ \"./app/js/models/NegotiationsData.js\"), exports);\n\n__exportStar(__webpack_require__(/*! ./PartialNegotiationsData.model */ \"./app/js/models/PartialNegotiationsData.model.js\"), exports);\n\n//# sourceURL=webpack://alurabank/./app/js/models/Models.module.js?");

/***/ }),

/***/ "./app/js/models/Negotiations.js":
/*!***************************************!*\
  !*** ./app/js/models/Negotiations.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Negotiation = void 0;\n\nvar Negotiation = /*#__PURE__*/function () {\n  function Negotiation(date, quantity, value) {\n    _classCallCheck(this, Negotiation);\n\n    this.date = date;\n    this.quantity = quantity;\n    this.value = value;\n  }\n\n  _createClass(Negotiation, [{\n    key: \"volume\",\n    get: function get() {\n      return this.quantity * this.value;\n    }\n  }, {\n    key: \"isEquals\",\n    value: function isEquals(object) {\n      if (this.date === object.date && this.quantity === object.quantity && this.value === object.value) {\n        return true;\n      }\n\n      return false;\n    }\n  }]);\n\n  return Negotiation;\n}();\n\nexports.Negotiation = Negotiation;\n\n//# sourceURL=webpack://alurabank/./app/js/models/Negotiations.js?");

/***/ }),

/***/ "./app/js/models/NegotiationsData.js":
/*!*******************************************!*\
  !*** ./app/js/models/NegotiationsData.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.NegotiationsData = void 0;\n\nvar NegotiationsData = /*#__PURE__*/function () {\n  function NegotiationsData() {\n    _classCallCheck(this, NegotiationsData);\n\n    this.negotiations = [];\n  }\n\n  _createClass(NegotiationsData, [{\n    key: \"addNegotiations\",\n    value: function addNegotiations(negotiation) {\n      this.negotiations.push(negotiation);\n    }\n  }, {\n    key: \"getNegotiations\",\n    value: function getNegotiations() {\n      return [].concat(this.negotiations);\n    }\n  }]);\n\n  return NegotiationsData;\n}();\n\nexports.NegotiationsData = NegotiationsData;\n\n//# sourceURL=webpack://alurabank/./app/js/models/NegotiationsData.js?");

/***/ }),

/***/ "./app/js/models/PartialNegotiationsData.model.js":
/*!********************************************************!*\
  !*** ./app/js/models/PartialNegotiationsData.model.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\n//# sourceURL=webpack://alurabank/./app/js/models/PartialNegotiationsData.model.js?");

/***/ }),

/***/ "./app/js/views/MessageView.js":
/*!*************************************!*\
  !*** ./app/js/views/MessageView.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.MessageView = void 0;\n\nvar View_1 = __webpack_require__(/*! ./View */ \"./app/js/views/View.js\");\n\nvar MessageView = /*#__PURE__*/function (_View_1$default) {\n  _inherits(MessageView, _View_1$default);\n\n  var _super = _createSuper(MessageView);\n\n  function MessageView() {\n    _classCallCheck(this, MessageView);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(MessageView, [{\n    key: \"template\",\n    value: function template(message) {\n      return \"\\n                <div class=\\\"alert alert-success\\\" role=\\\"alert\\\">\\n                    \".concat(message, \"\\n                </div>\\n            \");\n    }\n  }]);\n\n  return MessageView;\n}(View_1[\"default\"]);\n\nexports.MessageView = MessageView;\n\n//# sourceURL=webpack://alurabank/./app/js/views/MessageView.js?");

/***/ }),

/***/ "./app/js/views/NegotiationsView.js":
/*!******************************************!*\
  !*** ./app/js/views/NegotiationsView.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.NegotiationsView = void 0;\n\nvar View_1 = __webpack_require__(/*! ./View */ \"./app/js/views/View.js\");\n\nvar NegotiationsView = /*#__PURE__*/function (_View_1$default) {\n  _inherits(NegotiationsView, _View_1$default);\n\n  var _super = _createSuper(NegotiationsView);\n\n  function NegotiationsView() {\n    _classCallCheck(this, NegotiationsView);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(NegotiationsView, [{\n    key: \"template\",\n    value: function template(model) {\n      return \"\\n                <table class=\\\"table table-hover table-bordered\\\">\\n                    <thead>\\n                        <tr>\\n                            <th>DATE</th>\\n                            <th>QUANTITY</th>\\n                            <th>VALUE</th>\\n                            <th>VOLUME</th>\\n                        </tr>\\n                    </thead>\\n                    \\n                    <tbody>\\n                        \".concat(model.getNegotiations().map(function (negotiation) {\n        return \"\\n                            <tr>\\n                                <td>\".concat(negotiation.date.getDate(), \"/\").concat(negotiation.date.getMonth() + 1, \"/\").concat(negotiation.date.getFullYear(), \"</td>\\n                                <td>\").concat(negotiation.quantity, \"</td>\\n                                <td>\").concat(negotiation.value, \"</td>\\n                                <td>\").concat(negotiation.volume, \"</td>\\n                            </tr>\\n                        \");\n      }).join(''), \"\\n                    </tbody>\\n                    \\n                    <tfoot>\\n                    </tfoot>\\n                </table>\\n                <script>alert('Welcome!')</script>\\n            \");\n    }\n  }]);\n\n  return NegotiationsView;\n}(View_1[\"default\"]);\n\nexports.NegotiationsView = NegotiationsView;\n\n//# sourceURL=webpack://alurabank/./app/js/views/NegotiationsView.js?");

/***/ }),

/***/ "./app/js/views/View.js":
/*!******************************!*\
  !*** ./app/js/views/View.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar __decorate = this && this.__decorate || function (decorators, target, key, desc) {\n  var c = arguments.length,\n      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,\n      d;\n  if ((typeof Reflect === \"undefined\" ? \"undefined\" : _typeof(Reflect)) === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {\n    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n  }\n  return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar Decorators_module_1 = __webpack_require__(/*! ../helpers/decorators/Decorators.module */ \"./app/js/helpers/decorators/Decorators.module.js\");\n\nvar View = /*#__PURE__*/function () {\n  function View(selector) {\n    var escape = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n\n    _classCallCheck(this, View);\n\n    this.element = $(selector);\n    this.escape = escape;\n  }\n\n  _createClass(View, [{\n    key: \"update\",\n    value: function update(model) {\n      var template = this.template(model);\n\n      if (this.escape) {\n        template = template.replace(/<script>[\\s\\S]*?<\\/script>/g, '');\n      }\n\n      this.element.html(template);\n    }\n  }]);\n\n  return View;\n}();\n\n__decorate([Decorators_module_1.logExecutionTime()], View.prototype, \"update\", null);\n\nexports.default = View;\n\n//# sourceURL=webpack://alurabank/./app/js/views/View.js?");

/***/ }),

/***/ "./app/js/views/Views.module.js":
/*!**************************************!*\
  !*** ./app/js/views/Views.module.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function get() {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __exportStar = this && this.__exportStar || function (m, exports) {\n  for (var p in m) {\n    if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n  }\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\n__exportStar(__webpack_require__(/*! ./View */ \"./app/js/views/View.js\"), exports);\n\n__exportStar(__webpack_require__(/*! ./MessageView */ \"./app/js/views/MessageView.js\"), exports);\n\n__exportStar(__webpack_require__(/*! ./NegotiationsView */ \"./app/js/views/NegotiationsView.js\"), exports);\n\n//# sourceURL=webpack://alurabank/./app/js/views/Views.module.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/js/app.js");
/******/ 	
/******/ })()
;