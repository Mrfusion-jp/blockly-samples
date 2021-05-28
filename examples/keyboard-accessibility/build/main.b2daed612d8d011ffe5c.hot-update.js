webpackHotUpdate("main",{

/***/ "./src/music_game_controller.js":
/*!**************************************!*\
  !*** ./src/music_game_controller.js ***!
  \**************************************/
/*! exports provided: MusicGameController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MusicGameController\", function() { return MusicGameController; });\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\n/* harmony import */ var _music__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./music */ \"./src/music.js\");\n/* harmony import */ var _help_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help_modal */ \"./src/help_modal.js\");\n/* harmony import */ var _key_press_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./key_press_modal */ \"./src/key_press_modal.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar MusicGameController = /*#__PURE__*/function () {\n  /**\n   * The constructor for the music game controller.\n   */\n  function MusicGameController() {\n    _classCallCheck(this, MusicGameController);\n\n    micromodal__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init({\n      onClose: function onClose() {\n        return speaker.cancel();\n      }\n    });\n    this.game = new _music__WEBPACK_IMPORTED_MODULE_1__[\"Music\"]();\n    this.game.loadLevel(1);\n    var helpModal = new _help_modal__WEBPACK_IMPORTED_MODULE_2__[\"HelpModal\"]('modal-1', 'modalButton');\n    helpModal.init();\n    var keyPressModal = new _key_press_modal__WEBPACK_IMPORTED_MODULE_3__[\"KeyPressModal\"]();\n    keyPressModal.init();\n  }\n  /**\n   * Get the current game object.\n   * @return {Music}\n   */\n\n\n  _createClass(MusicGameController, [{\n    key: \"getGame\",\n    value: function getGame() {\n      return this.game;\n    }\n  }]);\n\n  return MusicGameController;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbXVzaWNfZ2FtZV9jb250cm9sbGVyLmpzPzczYTYiXSwibmFtZXMiOlsiTXVzaWNHYW1lQ29udHJvbGxlciIsIk1pY3JvTW9kYWwiLCJpbml0Iiwib25DbG9zZSIsInNwZWFrZXIiLCJjYW5jZWwiLCJnYW1lIiwiTXVzaWMiLCJsb2FkTGV2ZWwiLCJoZWxwTW9kYWwiLCJIZWxwTW9kYWwiLCJrZXlQcmVzc01vZGFsIiwiS2V5UHJlc3NNb2RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHTyxJQUFNQSxtQkFBYjtBQUNFO0FBQ0Y7QUFDQTtBQUNFLGlDQUFjO0FBQUE7O0FBQ1pDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0I7QUFDZEMsYUFBTyxFQUFFO0FBQUEsZUFBTUMsT0FBTyxDQUFDQyxNQUFSLEVBQU47QUFBQTtBQURLLEtBQWhCO0FBR0EsU0FBS0MsSUFBTCxHQUFZLElBQUlDLDRDQUFKLEVBQVo7QUFDQSxTQUFLRCxJQUFMLENBQVVFLFNBQVYsQ0FBb0IsQ0FBcEI7QUFDQSxRQUFNQyxTQUFTLEdBQUcsSUFBSUMscURBQUosQ0FBYyxTQUFkLEVBQXlCLGFBQXpCLENBQWxCO0FBQ0FELGFBQVMsQ0FBQ1AsSUFBVjtBQUNBLFFBQU1TLGFBQWEsR0FBRyxJQUFJQyw4REFBSixFQUF0QjtBQUNBRCxpQkFBYSxDQUFDVCxJQUFkO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTs7O0FBbkJBO0FBQUE7QUFBQSw4QkFvQlk7QUFDUixhQUFPLEtBQUtJLElBQVo7QUFDRDtBQXRCSDs7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vc3JjL211c2ljX2dhbWVfY29udHJvbGxlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IE1pY3JvTW9kYWwgZnJvbSAnbWljcm9tb2RhbCc7XG5pbXBvcnQge011c2ljfSBmcm9tICcuL211c2ljJztcbmltcG9ydCB7SGVscE1vZGFsfSBmcm9tICcuL2hlbHBfbW9kYWwnO1xuaW1wb3J0IHtLZXlQcmVzc01vZGFsfSBmcm9tICcuL2tleV9wcmVzc19tb2RhbCc7XG5cblxuZXhwb3J0IGNsYXNzIE11c2ljR2FtZUNvbnRyb2xsZXIge1xuICAvKipcbiAgICogVGhlIGNvbnN0cnVjdG9yIGZvciB0aGUgbXVzaWMgZ2FtZSBjb250cm9sbGVyLlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgTWljcm9Nb2RhbC5pbml0KHtcbiAgICAgIG9uQ2xvc2U6ICgpID0+IHNwZWFrZXIuY2FuY2VsKCksXG4gICAgfSk7XG4gICAgdGhpcy5nYW1lID0gbmV3IE11c2ljKCk7XG4gICAgdGhpcy5nYW1lLmxvYWRMZXZlbCgxKTtcbiAgICBjb25zdCBoZWxwTW9kYWwgPSBuZXcgSGVscE1vZGFsKCdtb2RhbC0xJywgJ21vZGFsQnV0dG9uJyk7XG4gICAgaGVscE1vZGFsLmluaXQoKTtcbiAgICBjb25zdCBrZXlQcmVzc01vZGFsID0gbmV3IEtleVByZXNzTW9kYWwoKTtcbiAgICBrZXlQcmVzc01vZGFsLmluaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgZ2FtZSBvYmplY3QuXG4gICAqIEByZXR1cm4ge011c2ljfVxuICAgKi9cbiAgZ2V0R2FtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nYW1lO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/music_game_controller.js\n");

/***/ })

})