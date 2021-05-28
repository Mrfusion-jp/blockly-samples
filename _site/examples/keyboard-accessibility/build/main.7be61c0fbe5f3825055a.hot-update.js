webpackHotUpdate("main",{

/***/ "./src/tutorial.js":
/*!*************************!*\
  !*** ./src/tutorial.js ***!
  \*************************/
/*! exports provided: Tutorial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tutorial\", function() { return Tutorial; });\n/* harmony import */ var _tutorial_step__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial_step */ \"./src/tutorial_step.js\");\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Tutorial = /*#__PURE__*/function () {\n  function Tutorial() {\n    _classCallCheck(this, Tutorial);\n\n    this.steps = Tutorial.STEPS_TEXT.map(function (text) {\n      return new _tutorial_step__WEBPACK_IMPORTED_MODULE_0__[\"TutorialStep\"](text);\n    });\n    this.curStepIndex = 0;\n    this.curStep = this.steps[this.curStepIndex];\n    this.curStep.init();\n  }\n\n  _createClass(Tutorial, [{\n    key: \"nextStep\",\n    value: function nextStep() {\n      this.curStepIndex++;\n\n      if (this.curStepIndex < this.steps.length) {\n        this.curStep = this.steps[this.curStepIndex];\n        this.curStep.init();\n      }\n    }\n  }, {\n    key: \"addStep\",\n    value: function addStep() {\n      this.steps.push(new _tutorial_step__WEBPACK_IMPORTED_MODULE_0__[\"TutorialStep\"]('Instructions'));\n    }\n  }]);\n\n  return Tutorial;\n}();\nTutorial.STEPS_TEXT = ['Hit enter to move focus to the workspace', 'Enable keyboard nav by pressing Cmd+Shift+K', 'Press X to navigate to the first stack of blocks', 'Press Y to navigate to the first block', 'Press enter to mark the first block'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHV0b3JpYWwuanM/MjQzOCJdLCJuYW1lcyI6WyJUdXRvcmlhbCIsInN0ZXBzIiwiU1RFUFNfVEVYVCIsIm1hcCIsInRleHQiLCJUdXRvcmlhbFN0ZXAiLCJjdXJTdGVwSW5kZXgiLCJjdXJTdGVwIiwiaW5pdCIsImxlbmd0aCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRU8sSUFBTUEsUUFBYjtBQUNFLHNCQUFjO0FBQUE7O0FBQ1osU0FBS0MsS0FBTCxHQUFhRCxRQUFRLENBQUNFLFVBQVQsQ0FBb0JDLEdBQXBCLENBQXdCLFVBQUFDLElBQUk7QUFBQSxhQUFLLElBQUlDLDJEQUFKLENBQWlCRCxJQUFqQixDQUFMO0FBQUEsS0FBNUIsQ0FBYjtBQUVBLFNBQUtFLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBS04sS0FBTCxDQUFXLEtBQUtLLFlBQWhCLENBQWY7QUFDQSxTQUFLQyxPQUFMLENBQWFDLElBQWI7QUFDRDs7QUFQSDtBQUFBO0FBQUEsK0JBU2E7QUFDVCxXQUFLRixZQUFMOztBQUNBLFVBQUksS0FBS0EsWUFBTCxHQUFvQixLQUFLTCxLQUFMLENBQVdRLE1BQW5DLEVBQTJDO0FBQ3pDLGFBQUtGLE9BQUwsR0FBZSxLQUFLTixLQUFMLENBQVcsS0FBS0ssWUFBaEIsQ0FBZjtBQUNBLGFBQUtDLE9BQUwsQ0FBYUMsSUFBYjtBQUNEO0FBRUY7QUFoQkg7QUFBQTtBQUFBLDhCQWlCWTtBQUNSLFdBQUtQLEtBQUwsQ0FBV1MsSUFBWCxDQUFnQixJQUFJTCwyREFBSixDQUFpQixjQUFqQixDQUFoQjtBQUNEO0FBbkJIOztBQUFBO0FBQUE7QUFzQkFMLFFBQVEsQ0FBQ0UsVUFBVCxHQUFzQixDQUNwQiwwQ0FEb0IsRUFFcEIsNkNBRm9CLEVBR3BCLGtEQUhvQixFQUlwQix3Q0FKb0IsRUFLcEIscUNBTG9CLENBQXRCIiwiZmlsZSI6Ii4vc3JjL3R1dG9yaWFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBUdXRvcmlhbFN0ZXAgfSBmcm9tICcuL3R1dG9yaWFsX3N0ZXAnO1xuaW1wb3J0IE1pY3JvTW9kYWwgZnJvbSAnbWljcm9tb2RhbCc7XG5cbmV4cG9ydCBjbGFzcyBUdXRvcmlhbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3RlcHMgPSBUdXRvcmlhbC5TVEVQU19URVhULm1hcCh0ZXh0ID0+ICBuZXcgVHV0b3JpYWxTdGVwKHRleHQpKTtcblxuICAgIHRoaXMuY3VyU3RlcEluZGV4ID0gMDtcbiAgICB0aGlzLmN1clN0ZXAgPSB0aGlzLnN0ZXBzW3RoaXMuY3VyU3RlcEluZGV4XTtcbiAgICB0aGlzLmN1clN0ZXAuaW5pdCgpO1xuICB9XG5cbiAgbmV4dFN0ZXAoKSB7XG4gICAgdGhpcy5jdXJTdGVwSW5kZXgrKztcbiAgICBpZiAodGhpcy5jdXJTdGVwSW5kZXggPCB0aGlzLnN0ZXBzLmxlbmd0aCkge1xuICAgICAgdGhpcy5jdXJTdGVwID0gdGhpcy5zdGVwc1t0aGlzLmN1clN0ZXBJbmRleF07XG4gICAgICB0aGlzLmN1clN0ZXAuaW5pdCgpO1xuICAgIH1cblxuICB9XG4gIGFkZFN0ZXAoKSB7XG4gICAgdGhpcy5zdGVwcy5wdXNoKG5ldyBUdXRvcmlhbFN0ZXAoJ0luc3RydWN0aW9ucycpKTtcbiAgfVxufVxuXG5UdXRvcmlhbC5TVEVQU19URVhUID0gW1xuICAnSGl0IGVudGVyIHRvIG1vdmUgZm9jdXMgdG8gdGhlIHdvcmtzcGFjZScsXG4gICdFbmFibGUga2V5Ym9hcmQgbmF2IGJ5IHByZXNzaW5nIENtZCtTaGlmdCtLJyxcbiAgJ1ByZXNzIFggdG8gbmF2aWdhdGUgdG8gdGhlIGZpcnN0IHN0YWNrIG9mIGJsb2NrcycsXG4gICdQcmVzcyBZIHRvIG5hdmlnYXRlIHRvIHRoZSBmaXJzdCBibG9jaycsXG4gICdQcmVzcyBlbnRlciB0byBtYXJrIHRoZSBmaXJzdCBibG9jaycsXG5dXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/tutorial.js\n");

/***/ })

})