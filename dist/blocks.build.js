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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/**\n * BLOCK: my-block\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar RichText = wp.blockEditor.RichText;\nvar withColors = wp.blockEditor.withColors;\nvar PanelColorSettings = wp.blockEditor.PanelColorSettings;\nvar InspectorControls = wp.blockEditor.InspectorControls;\nvar PanelBody = wp.components.PanelBody;\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('cgb/block-my-block', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('my-block - CGB Block'), // Block title.\n\ticon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('my-block — CGB Block'), __('CGB Example'), __('create-guten-block')],\n\tattributes: {\n\t\talign: {\n\t\t\ttype: 'string',\n\t\t\tdefault: 'full'\n\t\t},\n\t\tlink_text: {\n\t\t\tselector: 'a', // tag a\n\t\t\tsource: 'children' // children of a, to bind the link text\n\t\t},\n\t\tlink_url: {\n\t\t\tselector: 'a', // tag a\n\t\t\tsource: 'attribute', // attribute of the tag\n\t\t\tattribute: 'href' // attribute href, to bind the href of the link\n\t\t},\n\t\ttxtColor: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tbgColor: {\n\t\t\ttype: 'string'\n\t\t}\n\t},\n\tsupports: {\n\t\talign: true\n\t\t//align: ['wide','full'], // limit only to these\n\t},\n\n\tgetEditWrapperProps: function getEditWrapperProps() {\n\t\treturn {\n\t\t\t'data-align': 'full'\n\t\t};\n\t},\n\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Component.\n  */\n\t// Use array destructuring of props\n\tedit: function edit() {\n\t\tvar _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props,\n\t\t    attributes = _ref.attributes,\n\t\t    className = _ref.className,\n\t\t    setAttributes = _ref.setAttributes;\n\n\t\t// Use array destructuring of the attributes\n\t\tvar link_text = attributes.link_text,\n\t\t    link_url = attributes.link_url,\n\t\t    txtColor = attributes.txtColor,\n\t\t    bgColor = attributes.bgColor;\n\n\n\t\tfunction onChangeContentURL(content) {\n\t\t\tsetAttributes({ link_url: content });\n\t\t}\n\n\t\tfunction onChangeContentName(content) {\n\t\t\tsetAttributes({ link_text: content });\n\t\t}\n\n\t\tfunction onChangeBGColor(content) {\n\t\t\tsetAttributes({ bgColor: content });\n\t\t}\n\n\t\tfunction onChangeColor(content) {\n\t\t\tsetAttributes({ txtColor: content });\n\t\t}\n\n\t\t// Creates a <p class='wp-block-cgb-block-my-block test'></p>.\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className, style: { backgroundColor: bgColor, color: txtColor } },\n\t\t\twp.element.createElement(\n\t\t\t\tInspectorControls,\n\t\t\t\t{ key: 'inspector' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tPanelBody,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(PanelColorSettings, {\n\t\t\t\t\t\ttitle: __('Title Color', 'tar'),\n\t\t\t\t\t\tcolorSettings: [{\n\t\t\t\t\t\t\tvalue: txtColor,\n\t\t\t\t\t\t\tonChange: function onChange(colorValue) {\n\t\t\t\t\t\t\t\treturn onChangeColor(colorValue);\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\tlabel: __('Color', 'tar')\n\t\t\t\t\t\t}]\n\t\t\t\t\t}),\n\t\t\t\t\twp.element.createElement(PanelColorSettings, {\n\t\t\t\t\t\ttitle: __('Background Color', 'tar'),\n\t\t\t\t\t\tcolorSettings: [{\n\t\t\t\t\t\t\tvalue: bgColor,\n\t\t\t\t\t\t\tonChange: function onChange(colorValue) {\n\t\t\t\t\t\t\t\treturn onChangeBGColor(colorValue);\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\tlabel: __('Color', 'tar')\n\t\t\t\t\t\t}]\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'Sample Link Block'\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'label',\n\t\t\t\tnull,\n\t\t\t\t'Name:'\n\t\t\t),\n\t\t\twp.element.createElement(RichText, {\n\t\t\t\tclassName: className // Automatic class: gutenberg-blocks-sample-block-editable\n\t\t\t\t, onChange: onChangeContentName // onChange event callback\n\t\t\t\t, value: link_text // Binding\n\t\t\t\t, placeholder: 'Name of the link'\n\t\t\t}),\n\t\t\twp.element.createElement(\n\t\t\t\t'label',\n\t\t\t\tnull,\n\t\t\t\t'URL:'\n\t\t\t),\n\t\t\twp.element.createElement(RichText, {\n\t\t\t\tformat: 'string' // Default is 'element'. Wouldn't work for a tag attribute\n\t\t\t\t, className: className // Automatic class: gutenberg-blocks-sample-block-editable\n\t\t\t\t, onChange: onChangeContentURL // onChange event callback\n\t\t\t\t, value: link_url // Binding\n\t\t\t\t, placeholder: 'URL of the link'\n\t\t\t}),\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'\\u2014 Hello from the backend.!!'\n\t\t\t)\n\t\t);\n\t},\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Frontend HTML.\n  */\n\t// Use array destructuring of props\n\tsave: function save() {\n\t\tvar _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props,\n\t\t    attributes = _ref2.attributes,\n\t\t    className = _ref2.className;\n\n\t\t// Use array destructuring of the attributes\n\t\tvar txtColor = attributes.txtColor,\n\t\t    bgColor = attributes.bgColor,\n\t\t    link_url = attributes.link_url,\n\t\t    link_text = attributes.link_text;\n\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className, style: { backgroundColor: bgColor, color: txtColor } },\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'\\u2014 Hello from the frontend.'\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'a',\n\t\t\t\t{ href: link_url },\n\t\t\t\tlink_text\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IG15LWJsb2NrXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3NcblxudmFyIFJpY2hUZXh0ID0gd3AuYmxvY2tFZGl0b3IuUmljaFRleHQ7XG52YXIgd2l0aENvbG9ycyA9IHdwLmJsb2NrRWRpdG9yLndpdGhDb2xvcnM7XG52YXIgUGFuZWxDb2xvclNldHRpbmdzID0gd3AuYmxvY2tFZGl0b3IuUGFuZWxDb2xvclNldHRpbmdzO1xudmFyIEluc3BlY3RvckNvbnRyb2xzID0gd3AuYmxvY2tFZGl0b3IuSW5zcGVjdG9yQ29udHJvbHM7XG52YXIgUGFuZWxCb2R5ID0gd3AuY29tcG9uZW50cy5QYW5lbEJvZHk7XG5cbi8qKlxuICogUmVnaXN0ZXI6IGFhIEd1dGVuYmVyZyBCbG9jay5cbiAqXG4gKiBSZWdpc3RlcnMgYSBuZXcgYmxvY2sgcHJvdmlkZWQgYSB1bmlxdWUgbmFtZSBhbmQgYW4gb2JqZWN0IGRlZmluaW5nIGl0c1xuICogYmVoYXZpb3IuIE9uY2UgcmVnaXN0ZXJlZCwgdGhlIGJsb2NrIGlzIG1hZGUgZWRpdG9yIGFzIGFuIG9wdGlvbiB0byBhbnlcbiAqIGVkaXRvciBpbnRlcmZhY2Ugd2hlcmUgYmxvY2tzIGFyZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9cbiAqIEBwYXJhbSAge3N0cmluZ30gICBuYW1lICAgICBCbG9jayBuYW1lLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHNldHRpbmdzIEJsb2NrIHNldHRpbmdzLlxuICogQHJldHVybiB7P1dQQmxvY2t9ICAgICAgICAgIFRoZSBibG9jaywgaWYgaXQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZDsgb3RoZXJ3aXNlIGB1bmRlZmluZWRgLlxuICovXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdjZ2IvYmxvY2stbXktYmxvY2snLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuXHR0aXRsZTogX18oJ215LWJsb2NrIC0gQ0dCIEJsb2NrJyksIC8vIEJsb2NrIHRpdGxlLlxuXHRpY29uOiAnc2hpZWxkJywgLy8gQmxvY2sgaWNvbiBmcm9tIERhc2hpY29ucyDihpIgaHR0cHM6Ly9kZXZlbG9wZXIud29yZHByZXNzLm9yZy9yZXNvdXJjZS9kYXNoaWNvbnMvLlxuXHRjYXRlZ29yeTogJ2NvbW1vbicsIC8vIEJsb2NrIGNhdGVnb3J5IOKAlCBHcm91cCBibG9ja3MgdG9nZXRoZXIgYmFzZWQgb24gY29tbW9uIHRyYWl0cyBFLmcuIGNvbW1vbiwgZm9ybWF0dGluZywgbGF5b3V0IHdpZGdldHMsIGVtYmVkLlxuXHRrZXl3b3JkczogW19fKCdteS1ibG9jayDigJQgQ0dCIEJsb2NrJyksIF9fKCdDR0IgRXhhbXBsZScpLCBfXygnY3JlYXRlLWd1dGVuLWJsb2NrJyldLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0YWxpZ246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0ZGVmYXVsdDogJ2Z1bGwnXG5cdFx0fSxcblx0XHRsaW5rX3RleHQ6IHtcblx0XHRcdHNlbGVjdG9yOiAnYScsIC8vIHRhZyBhXG5cdFx0XHRzb3VyY2U6ICdjaGlsZHJlbicgLy8gY2hpbGRyZW4gb2YgYSwgdG8gYmluZCB0aGUgbGluayB0ZXh0XG5cdFx0fSxcblx0XHRsaW5rX3VybDoge1xuXHRcdFx0c2VsZWN0b3I6ICdhJywgLy8gdGFnIGFcblx0XHRcdHNvdXJjZTogJ2F0dHJpYnV0ZScsIC8vIGF0dHJpYnV0ZSBvZiB0aGUgdGFnXG5cdFx0XHRhdHRyaWJ1dGU6ICdocmVmJyAvLyBhdHRyaWJ1dGUgaHJlZiwgdG8gYmluZCB0aGUgaHJlZiBvZiB0aGUgbGlua1xuXHRcdH0sXG5cdFx0dHh0Q29sb3I6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnXG5cdFx0fSxcblx0XHRiZ0NvbG9yOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdH1cblx0fSxcblx0c3VwcG9ydHM6IHtcblx0XHRhbGlnbjogdHJ1ZVxuXHRcdC8vYWxpZ246IFsnd2lkZScsJ2Z1bGwnXSwgLy8gbGltaXQgb25seSB0byB0aGVzZVxuXHR9LFxuXG5cdGdldEVkaXRXcmFwcGVyUHJvcHM6IGZ1bmN0aW9uIGdldEVkaXRXcmFwcGVyUHJvcHMoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdCdkYXRhLWFsaWduJzogJ2Z1bGwnXG5cdFx0fTtcblx0fSxcblxuXG5cdC8qKlxuICAqIFRoZSBlZGl0IGZ1bmN0aW9uIGRlc2NyaWJlcyB0aGUgc3RydWN0dXJlIG9mIHlvdXIgYmxvY2sgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGVkaXRvci5cbiAgKiBUaGlzIHJlcHJlc2VudHMgd2hhdCB0aGUgZWRpdG9yIHdpbGwgcmVuZGVyIHdoZW4gdGhlIGJsb2NrIGlzIHVzZWQuXG4gICpcbiAgKiBUaGUgXCJlZGl0XCIgcHJvcGVydHkgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuICAqXG4gICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAqXG4gICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BzLlxuICAqIEByZXR1cm5zIHtNaXhlZH0gSlNYIENvbXBvbmVudC5cbiAgKi9cblx0Ly8gVXNlIGFycmF5IGRlc3RydWN0dXJpbmcgb2YgcHJvcHNcblx0ZWRpdDogZnVuY3Rpb24gZWRpdCgpIHtcblx0XHR2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogcHJvcHMsXG5cdFx0ICAgIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG5cdFx0ICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuXHRcdCAgICBzZXRBdHRyaWJ1dGVzID0gX3JlZi5zZXRBdHRyaWJ1dGVzO1xuXG5cdFx0Ly8gVXNlIGFycmF5IGRlc3RydWN0dXJpbmcgb2YgdGhlIGF0dHJpYnV0ZXNcblx0XHR2YXIgbGlua190ZXh0ID0gYXR0cmlidXRlcy5saW5rX3RleHQsXG5cdFx0ICAgIGxpbmtfdXJsID0gYXR0cmlidXRlcy5saW5rX3VybCxcblx0XHQgICAgdHh0Q29sb3IgPSBhdHRyaWJ1dGVzLnR4dENvbG9yLFxuXHRcdCAgICBiZ0NvbG9yID0gYXR0cmlidXRlcy5iZ0NvbG9yO1xuXG5cblx0XHRmdW5jdGlvbiBvbkNoYW5nZUNvbnRlbnRVUkwoY29udGVudCkge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IGxpbmtfdXJsOiBjb250ZW50IH0pO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uQ2hhbmdlQ29udGVudE5hbWUoY29udGVudCkge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IGxpbmtfdGV4dDogY29udGVudCB9KTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbkNoYW5nZUJHQ29sb3IoY29udGVudCkge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IGJnQ29sb3I6IGNvbnRlbnQgfSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25DaGFuZ2VDb2xvcihjb250ZW50KSB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgdHh0Q29sb3I6IGNvbnRlbnQgfSk7XG5cdFx0fVxuXG5cdFx0Ly8gQ3JlYXRlcyBhIDxwIGNsYXNzPSd3cC1ibG9jay1jZ2ItYmxvY2stbXktYmxvY2sgdGVzdCc+PC9wPi5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogY2xhc3NOYW1lLCBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6IGJnQ29sb3IsIGNvbG9yOiB0eHRDb2xvciB9IH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdEluc3BlY3RvckNvbnRyb2xzLFxuXHRcdFx0XHR7IGtleTogJ2luc3BlY3RvcicgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFBhbmVsQm9keSxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChQYW5lbENvbG9yU2V0dGluZ3MsIHtcblx0XHRcdFx0XHRcdHRpdGxlOiBfXygnVGl0bGUgQ29sb3InLCAndGFyJyksXG5cdFx0XHRcdFx0XHRjb2xvclNldHRpbmdzOiBbe1xuXHRcdFx0XHRcdFx0XHR2YWx1ZTogdHh0Q29sb3IsXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShjb2xvclZhbHVlKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIG9uQ2hhbmdlQ29sb3IoY29sb3JWYWx1ZSk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBfXygnQ29sb3InLCAndGFyJylcblx0XHRcdFx0XHRcdH1dXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFBhbmVsQ29sb3JTZXR0aW5ncywge1xuXHRcdFx0XHRcdFx0dGl0bGU6IF9fKCdCYWNrZ3JvdW5kIENvbG9yJywgJ3RhcicpLFxuXHRcdFx0XHRcdFx0Y29sb3JTZXR0aW5nczogW3tcblx0XHRcdFx0XHRcdFx0dmFsdWU6IGJnQ29sb3IsXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShjb2xvclZhbHVlKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIG9uQ2hhbmdlQkdDb2xvcihjb2xvclZhbHVlKTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCdDb2xvcicsICd0YXInKVxuXHRcdFx0XHRcdFx0fV1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQncCcsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdCdTYW1wbGUgTGluayBCbG9jaydcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdsYWJlbCcsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdCdOYW1lOidcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIHtcblx0XHRcdFx0Y2xhc3NOYW1lOiBjbGFzc05hbWUgLy8gQXV0b21hdGljIGNsYXNzOiBndXRlbmJlcmctYmxvY2tzLXNhbXBsZS1ibG9jay1lZGl0YWJsZVxuXHRcdFx0XHQsIG9uQ2hhbmdlOiBvbkNoYW5nZUNvbnRlbnROYW1lIC8vIG9uQ2hhbmdlIGV2ZW50IGNhbGxiYWNrXG5cdFx0XHRcdCwgdmFsdWU6IGxpbmtfdGV4dCAvLyBCaW5kaW5nXG5cdFx0XHRcdCwgcGxhY2Vob2xkZXI6ICdOYW1lIG9mIHRoZSBsaW5rJ1xuXHRcdFx0fSksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdsYWJlbCcsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdCdVUkw6J1xuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuXHRcdFx0XHRmb3JtYXQ6ICdzdHJpbmcnIC8vIERlZmF1bHQgaXMgJ2VsZW1lbnQnLiBXb3VsZG4ndCB3b3JrIGZvciBhIHRhZyBhdHRyaWJ1dGVcblx0XHRcdFx0LCBjbGFzc05hbWU6IGNsYXNzTmFtZSAvLyBBdXRvbWF0aWMgY2xhc3M6IGd1dGVuYmVyZy1ibG9ja3Mtc2FtcGxlLWJsb2NrLWVkaXRhYmxlXG5cdFx0XHRcdCwgb25DaGFuZ2U6IG9uQ2hhbmdlQ29udGVudFVSTCAvLyBvbkNoYW5nZSBldmVudCBjYWxsYmFja1xuXHRcdFx0XHQsIHZhbHVlOiBsaW5rX3VybCAvLyBCaW5kaW5nXG5cdFx0XHRcdCwgcGxhY2Vob2xkZXI6ICdVUkwgb2YgdGhlIGxpbmsnXG5cdFx0XHR9KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3AnLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHQnXFx1MjAxNCBIZWxsbyBmcm9tIHRoZSBiYWNrZW5kLiEhJ1xuXHRcdFx0KVxuXHRcdCk7XG5cdH0sXG5cblx0LyoqXG4gICogVGhlIHNhdmUgZnVuY3Rpb24gZGVmaW5lcyB0aGUgd2F5IGluIHdoaWNoIHRoZSBkaWZmZXJlbnQgYXR0cmlidXRlcyBzaG91bGQgYmUgY29tYmluZWRcbiAgKiBpbnRvIHRoZSBmaW5hbCBtYXJrdXAsIHdoaWNoIGlzIHRoZW4gc2VyaWFsaXplZCBieSBHdXRlbmJlcmcgaW50byBwb3N0X2NvbnRlbnQuXG4gICpcbiAgKiBUaGUgXCJzYXZlXCIgcHJvcGVydHkgbXVzdCBiZSBzcGVjaWZpZWQgYW5kIG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKlxuICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBQcm9wcy5cbiAgKiBAcmV0dXJucyB7TWl4ZWR9IEpTWCBGcm9udGVuZCBIVE1MLlxuICAqL1xuXHQvLyBVc2UgYXJyYXkgZGVzdHJ1Y3R1cmluZyBvZiBwcm9wc1xuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKCkge1xuXHRcdHZhciBfcmVmMiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogcHJvcHMsXG5cdFx0ICAgIGF0dHJpYnV0ZXMgPSBfcmVmMi5hdHRyaWJ1dGVzLFxuXHRcdCAgICBjbGFzc05hbWUgPSBfcmVmMi5jbGFzc05hbWU7XG5cblx0XHQvLyBVc2UgYXJyYXkgZGVzdHJ1Y3R1cmluZyBvZiB0aGUgYXR0cmlidXRlc1xuXHRcdHZhciB0eHRDb2xvciA9IGF0dHJpYnV0ZXMudHh0Q29sb3IsXG5cdFx0ICAgIGJnQ29sb3IgPSBhdHRyaWJ1dGVzLmJnQ29sb3IsXG5cdFx0ICAgIGxpbmtfdXJsID0gYXR0cmlidXRlcy5saW5rX3VybCxcblx0XHQgICAgbGlua190ZXh0ID0gYXR0cmlidXRlcy5saW5rX3RleHQ7XG5cblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogYmdDb2xvciwgY29sb3I6IHR4dENvbG9yIH0gfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3AnLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHQnXFx1MjAxNCBIZWxsbyBmcm9tIHRoZSBmcm9udGVuZC4nXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnYScsXG5cdFx0XHRcdHsgaHJlZjogbGlua191cmwgfSxcblx0XHRcdFx0bGlua190ZXh0XG5cdFx0XHQpXG5cdFx0KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);