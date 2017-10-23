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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(1);\n\n\n\nconst controller = {\n    activateListeners: (() => __WEBPACK_IMPORTED_MODULE_0__view__[\"a\" /* default */].addTaskEvent())(),\n    view: __WEBPACK_IMPORTED_MODULE_0__view__[\"a\" /* default */],\n    model: __WEBPACK_IMPORTED_MODULE_1__model__[\"a\" /* default */],\n    updateModel: (data) => {\n        controller.model.addData({title: data.title, id: data.id});\n    },\n    updateView: (todo) => {\n        let elementInDOM = __WEBPACK_IMPORTED_MODULE_0__view__[\"a\" /* default */].findListItem(todo.id);\n        if (elementInDOM) return;\n        controller.view.addItem(todo);\n    },\n    deleteFromModel: (id) => {\n        __WEBPACK_IMPORTED_MODULE_1__model__[\"a\" /* default */].removeData(id);\n    },\n    deleteFromView: (id) => {\n        __WEBPACK_IMPORTED_MODULE_0__view__[\"a\" /* default */].removeListItem(id);\n    },\n    editModel: (title, id) => {\n        __WEBPACK_IMPORTED_MODULE_1__model__[\"a\" /* default */].editData(title, id)\n    },\n    editView: (newTitle) => {\n        __WEBPACK_IMPORTED_MODULE_0__view__[\"a\" /* default */].editListItem(newTitle);\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (controller);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVyLmpzPzQ3NjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHZpZXcgZnJvbSAnLi92aWV3JztcbmltcG9ydCBtb2RlbCBmcm9tICcuL21vZGVsJztcblxuY29uc3QgY29udHJvbGxlciA9IHtcbiAgICBhY3RpdmF0ZUxpc3RlbmVyczogKCgpID0+IHZpZXcuYWRkVGFza0V2ZW50KCkpKCksXG4gICAgdmlldzogdmlldyxcbiAgICBtb2RlbDogbW9kZWwsXG4gICAgdXBkYXRlTW9kZWw6IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnRyb2xsZXIubW9kZWwuYWRkRGF0YSh7dGl0bGU6IGRhdGEudGl0bGUsIGlkOiBkYXRhLmlkfSk7XG4gICAgfSxcbiAgICB1cGRhdGVWaWV3OiAodG9kbykgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudEluRE9NID0gdmlldy5maW5kTGlzdEl0ZW0odG9kby5pZCk7XG4gICAgICAgIGlmIChlbGVtZW50SW5ET00pIHJldHVybjtcbiAgICAgICAgY29udHJvbGxlci52aWV3LmFkZEl0ZW0odG9kbyk7XG4gICAgfSxcbiAgICBkZWxldGVGcm9tTW9kZWw6IChpZCkgPT4ge1xuICAgICAgICBtb2RlbC5yZW1vdmVEYXRhKGlkKTtcbiAgICB9LFxuICAgIGRlbGV0ZUZyb21WaWV3OiAoaWQpID0+IHtcbiAgICAgICAgdmlldy5yZW1vdmVMaXN0SXRlbShpZCk7XG4gICAgfSxcbiAgICBlZGl0TW9kZWw6ICh0aXRsZSwgaWQpID0+IHtcbiAgICAgICAgbW9kZWwuZWRpdERhdGEodGl0bGUsIGlkKVxuICAgIH0sXG4gICAgZWRpdFZpZXc6IChuZXdUaXRsZSkgPT4ge1xuICAgICAgICB2aWV3LmVkaXRMaXN0SXRlbShuZXdUaXRsZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29udHJvbGxlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb250cm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controller__ = __webpack_require__(0);\n\n\nconst model = {\n    state: [],\n    addData: (todo) => {\n        if (todo.title !== '') {\n            model.state.push(todo);\n        }\n        model.state.forEach(elem => {\n\n            __WEBPACK_IMPORTED_MODULE_0__controller__[\"default\"].updateView(elem);\n        });\n        console.log(model.state, 'My state');\n    },\n    editData: (title, id) => {\n        model.state.forEach(elem => {\n            if (elem.id === +id) {\n                elem.title = title\n            }\n        });\n        __WEBPACK_IMPORTED_MODULE_0__controller__[\"default\"].editView({id: id, title: title});\n        console.log(model.state, 'NEW EDIT');\n    },\n    removeData: (id) => {\n        const index = model.state.findIndex(elem => elem.id === +id);\n        if (index > -1) {\n            model.state.splice(index, 1);\n            __WEBPACK_IMPORTED_MODULE_0__controller__[\"default\"].deleteFromView(id);\n            console.log(model.state, \"NEW STATE\");\n        }\n    },\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (model);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2RlbC5qcz85NGVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XG5cbmNvbnN0IG1vZGVsID0ge1xuICAgIHN0YXRlOiBbXSxcbiAgICBhZGREYXRhOiAodG9kbykgPT4ge1xuICAgICAgICBpZiAodG9kby50aXRsZSAhPT0gJycpIHtcbiAgICAgICAgICAgIG1vZGVsLnN0YXRlLnB1c2godG9kbyk7XG4gICAgICAgIH1cbiAgICAgICAgbW9kZWwuc3RhdGUuZm9yRWFjaChlbGVtID0+IHtcblxuICAgICAgICAgICAgY29udHJvbGxlci51cGRhdGVWaWV3KGVsZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2cobW9kZWwuc3RhdGUsICdNeSBzdGF0ZScpO1xuICAgIH0sXG4gICAgZWRpdERhdGE6ICh0aXRsZSwgaWQpID0+IHtcbiAgICAgICAgbW9kZWwuc3RhdGUuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtLmlkID09PSAraWQpIHtcbiAgICAgICAgICAgICAgICBlbGVtLnRpdGxlID0gdGl0bGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnRyb2xsZXIuZWRpdFZpZXcoe2lkOiBpZCwgdGl0bGU6IHRpdGxlfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG1vZGVsLnN0YXRlLCAnTkVXIEVESVQnKTtcbiAgICB9LFxuICAgIHJlbW92ZURhdGE6IChpZCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IG1vZGVsLnN0YXRlLmZpbmRJbmRleChlbGVtID0+IGVsZW0uaWQgPT09ICtpZCk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBtb2RlbC5zdGF0ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgY29udHJvbGxlci5kZWxldGVGcm9tVmlldyhpZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtb2RlbC5zdGF0ZSwgXCJORVcgU1RBVEVcIik7XG4gICAgICAgIH1cbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbW9kZWw7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__heplers__ = __webpack_require__(3);\n\n\nconst view = {\n    interfaceEl: {\n        field: document.getElementById('type-task-field'),\n        list: document.getElementById('list'),\n    },\n    addTaskEvent: () => {\n        const _cashDOM = document;\n        const listenButton = _cashDOM.getElementById('add-button');\n\n        listenButton.addEventListener('click', () => {\n            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__heplers__[\"a\" /* getValues */])(view.interfaceEl.field.value, Date.now());\n        });\n    },\n\n    findListItem: (id) => {\n        return document.getElementById(`${id}`);\n    },\n\n    addItem: (todo) => {\n        const list = document.getElementById('list');\n        const newItem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__heplers__[\"b\" /* createElement */])(todo);\n\n        view.interfaceEl.field.value = '';\n        list.insertBefore(newItem, null);\n    },\n\n    editListItem: (todo) => {\n        const findLi = view.findListItem(todo.id);\n        let changedItem = findLi.querySelector(\"label\");\n        let clearInp = findLi.querySelector(\"input\");\n\n        changedItem.textContent = todo.title;\n        clearInp.value = '';\n    },\n\n    removeListItem: (id) => {\n        const removeItem = document.getElementById(`${id}`);\n\n        removeItem.parentNode.removeChild(removeItem);\n    },\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (view);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92aWV3LmpzPzMyMGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgZ2V0VmFsdWVzIH0gZnJvbSBcIi4vaGVwbGVyc1wiO1xuXG5jb25zdCB2aWV3ID0ge1xuICAgIGludGVyZmFjZUVsOiB7XG4gICAgICAgIGZpZWxkOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHlwZS10YXNrLWZpZWxkJyksXG4gICAgICAgIGxpc3Q6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0JyksXG4gICAgfSxcbiAgICBhZGRUYXNrRXZlbnQ6ICgpID0+IHtcbiAgICAgICAgY29uc3QgX2Nhc2hET00gPSBkb2N1bWVudDtcbiAgICAgICAgY29uc3QgbGlzdGVuQnV0dG9uID0gX2Nhc2hET00uZ2V0RWxlbWVudEJ5SWQoJ2FkZC1idXR0b24nKTtcblxuICAgICAgICBsaXN0ZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBnZXRWYWx1ZXModmlldy5pbnRlcmZhY2VFbC5maWVsZC52YWx1ZSwgRGF0ZS5ub3coKSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBmaW5kTGlzdEl0ZW06IChpZCkgPT4ge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR9YCk7XG4gICAgfSxcblxuICAgIGFkZEl0ZW06ICh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdCcpO1xuICAgICAgICBjb25zdCBuZXdJdGVtID0gY3JlYXRlRWxlbWVudCh0b2RvKTtcblxuICAgICAgICB2aWV3LmludGVyZmFjZUVsLmZpZWxkLnZhbHVlID0gJyc7XG4gICAgICAgIGxpc3QuaW5zZXJ0QmVmb3JlKG5ld0l0ZW0sIG51bGwpO1xuICAgIH0sXG5cbiAgICBlZGl0TGlzdEl0ZW06ICh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbmRMaSA9IHZpZXcuZmluZExpc3RJdGVtKHRvZG8uaWQpO1xuICAgICAgICBsZXQgY2hhbmdlZEl0ZW0gPSBmaW5kTGkucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpO1xuICAgICAgICBsZXQgY2xlYXJJbnAgPSBmaW5kTGkucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuXG4gICAgICAgIGNoYW5nZWRJdGVtLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICAgICAgY2xlYXJJbnAudmFsdWUgPSAnJztcbiAgICB9LFxuXG4gICAgcmVtb3ZlTGlzdEl0ZW06IChpZCkgPT4ge1xuICAgICAgICBjb25zdCByZW1vdmVJdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR9YCk7XG5cbiAgICAgICAgcmVtb3ZlSXRlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJlbW92ZUl0ZW0pO1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB2aWV3O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controller__ = __webpack_require__(0);\n\n\nconst createElement = (todo) => {\n\n    const _cashDom = document;\n\n    const label = _cashDom.createElement(\"label\");\n    label.textContent = todo.title;\n\n    const input = _cashDom.createElement(\"input\");\n\n    const editButton = _cashDom.createElement(\"button\");\n    editButton.className = 'worked';\n    editButton.id = 'edit';\n    editButton.textContent = 'Edit'; // todo maybe this insert eventListener ?\n    editButton.addEventListener('click', (e) => {\n        const editableTitle = editButton.parentNode.childNodes[0].textContent;\n        let editableID = editButton.parentNode.id;\n        let editableData = e.target.previousSibling.value;\n\n        __WEBPACK_IMPORTED_MODULE_0__controller__[\"default\"].editModel(editableData, editableID);\n    });\n\n    const deleteButton = _cashDom.createElement(\"button\");\n    deleteButton.className = 'worked';\n    deleteButton.id = 'delete';\n    deleteButton.textContent = 'Delete';\n    deleteButton.addEventListener('click', () => {\n        __WEBPACK_IMPORTED_MODULE_0__controller__[\"default\"].deleteFromModel(deleteButton.parentNode.id);\n    });\n\n    const createdLiBlock = _cashDom.createElement(\"li\");\n    createdLiBlock.id = todo.id;\n    createdLiBlock.insertBefore(label, null);\n    createdLiBlock.appendChild(input);\n    createdLiBlock.appendChild(editButton);\n    createdLiBlock.appendChild(deleteButton);\n\n    return createdLiBlock;\n};\n/* harmony export (immutable) */ __webpack_exports__[\"b\"] = createElement;\n\n\nconst getValues = (value, id) => {\n    if (value === '') return;\n\n    __WEBPACK_IMPORTED_MODULE_0__controller__[\"default\"].updateModel({title: value, id: id});\n};\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = getValues;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9oZXBsZXJzLmpzPzlhZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodG9kbykgPT4ge1xuXG4gICAgY29uc3QgX2Nhc2hEb20gPSBkb2N1bWVudDtcblxuICAgIGNvbnN0IGxhYmVsID0gX2Nhc2hEb20uY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcblxuICAgIGNvbnN0IGlucHV0ID0gX2Nhc2hEb20uY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IF9jYXNoRG9tLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc05hbWUgPSAnd29ya2VkJztcbiAgICBlZGl0QnV0dG9uLmlkID0gJ2VkaXQnO1xuICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCc7IC8vIHRvZG8gbWF5YmUgdGhpcyBpbnNlcnQgZXZlbnRMaXN0ZW5lciA/XG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkaXRhYmxlVGl0bGUgPSBlZGl0QnV0dG9uLnBhcmVudE5vZGUuY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudDtcbiAgICAgICAgbGV0IGVkaXRhYmxlSUQgPSBlZGl0QnV0dG9uLnBhcmVudE5vZGUuaWQ7XG4gICAgICAgIGxldCBlZGl0YWJsZURhdGEgPSBlLnRhcmdldC5wcmV2aW91c1NpYmxpbmcudmFsdWU7XG5cbiAgICAgICAgY29udHJvbGxlci5lZGl0TW9kZWwoZWRpdGFibGVEYXRhLCBlZGl0YWJsZUlEKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IF9jYXNoRG9tLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9ICd3b3JrZWQnO1xuICAgIGRlbGV0ZUJ1dHRvbi5pZCA9ICdkZWxldGUnO1xuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29udHJvbGxlci5kZWxldGVGcm9tTW9kZWwoZGVsZXRlQnV0dG9uLnBhcmVudE5vZGUuaWQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY3JlYXRlZExpQmxvY2sgPSBfY2FzaERvbS5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY3JlYXRlZExpQmxvY2suaWQgPSB0b2RvLmlkO1xuICAgIGNyZWF0ZWRMaUJsb2NrLmluc2VydEJlZm9yZShsYWJlbCwgbnVsbCk7XG4gICAgY3JlYXRlZExpQmxvY2suYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGNyZWF0ZWRMaUJsb2NrLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgIGNyZWF0ZWRMaUJsb2NrLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgICByZXR1cm4gY3JlYXRlZExpQmxvY2s7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VmFsdWVzID0gKHZhbHVlLCBpZCkgPT4ge1xuICAgIGlmICh2YWx1ZSA9PT0gJycpIHJldHVybjtcblxuICAgIGNvbnRyb2xsZXIudXBkYXRlTW9kZWwoe3RpdGxlOiB2YWx1ZSwgaWQ6IGlkfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hlcGxlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);