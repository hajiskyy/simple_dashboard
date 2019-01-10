(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border {\r\n  border-width:3px !important;\r\n}\r\n.progress {\r\n  width: 150px;\r\n  height: 150px;\r\n  line-height: 150px;\r\n  background: none;\r\n  margin: 0 auto;\r\n  box-shadow: none;\r\n  position: relative;\r\n}\r\n.progress:after {\r\n  content: \"\";\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n  border: 7px solid #eee;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.progress > span {\r\n  width: 50%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  top: 0;\r\n  z-index: 1;\r\n}\r\n.progress .progress-left {\r\n  left: 0;\r\n}\r\n.progress .progress-bar {\r\n  width: 100%;\r\n  height: 100%;\r\n  background: none;\r\n  border-width: 7px;\r\n  border-style: solid;\r\n  position: absolute;\r\n  top: 0;\r\n  border-color:  #ff7b00\r\n}\r\n.progress .progress-left .progress-bar {\r\n  left: 100%;\r\n  border-top-right-radius: 75px;\r\n  border-bottom-right-radius: 75px;\r\n  border-left: 0;\r\n  -webkit-transform-origin: center left;\r\n  transform-origin: center left;\r\n}\r\n.progress .progress-right {\r\n  right: 0;\r\n}\r\n.progress .progress-right .progress-bar {\r\n  left: -100%;\r\n  border-top-left-radius: 75px;\r\n  border-bottom-left-radius: 75px;\r\n  border-right: 0;\r\n  -webkit-transform-origin: center right;\r\n  transform-origin: center right;\r\n}\r\n.progress .progress-value {\r\n  display: flex;\r\n  border-radius: 50%;\r\n  font-size: 36px;\r\n  text-align: center;\r\n  line-height: 20px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100%;\r\n  font-weight: 300;\r\n}\r\n.progress .progress-value div {\r\n  margin-top: 10px;\r\n  margin-left: 40px;\r\n}\r\n.progress .progress-value span {\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n}\r\n.small {\r\n  color: #8b8b8b;\r\n  font-weight: 600;\r\n}\r\n/* .progress .progress-value span.small {\r\n  font-size: 12px;\r\n  font\r\n} */\r\n/* This for loop creates the necessary css animation names Due to the split circle of progress-left and progress right, we must use the animations on each side. */\r\n.progress[data-percentage=\"27\"] .progress-right .progress-bar {\r\n  -webkit-animation: loading-1 1.5s linear forwards;\r\n          animation: loading-1 1.5s linear forwards;\r\n}\r\n.progress[data-percentage=\"27\"] .progress-left .progress-bar {\r\n  -webkit-animation: 0;\r\n          animation: 0;\r\n}\r\n.progress[data-percentage=\"15\"] .progress-right .progress-bar {\r\n  -webkit-animation: loading-2 1.5s linear forwards;\r\n          animation: loading-2 1.5s linear forwards;\r\n}\r\n.progress[data-percentage=\"15\"] .progress-left .progress-bar {\r\n  -webkit-animation: 0;\r\n          animation: 0;\r\n}\r\n.progress[data-percentage=\"24\"] .progress-right .progress-bar {\r\n  -webkit-animation: loading-3 1.5s linear forwards;\r\n          animation: loading-3 1.5s linear forwards;\r\n}\r\n.progress[data-percentage=\"24\"] .progress-left .progress-bar {\r\n  -webkit-animation: 0;\r\n          animation: 0;\r\n}\r\n.progress[data-percentage=\"100\"] .progress-right .progress-bar {\r\n  -webkit-animation: loading-4 1.5s linear forwards;\r\n          animation: loading-4 1.5s linear forwards;\r\n}\r\n.progress[data-percentage=\"100\"] .progress-left .progress-bar {\r\n  -webkit-animation: loading-4 1.5s linear forwards 1.5s;\r\n          animation: loading-4 1.5s linear forwards 1.5s;\r\n}\r\n@-webkit-keyframes loading-1 {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n }\r\n  100% {\r\n    -webkit-transform: rotate(100deg);\r\n    transform: rotate(100deg);\r\n }\r\n}\r\n@keyframes loading-1 {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n }\r\n  100% {\r\n    -webkit-transform: rotate(100deg);\r\n    transform: rotate(100deg);\r\n }\r\n}\r\n@-webkit-keyframes loading-2 {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0degdeg);\r\n }\r\n  100% {\r\n    -webkit-transform: rotate(50deg);\r\n    transform: rotate(50deg);\r\n }\r\n}\r\n@keyframes loading-2 {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0degdeg);\r\n }\r\n  100% {\r\n    -webkit-transform: rotate(50deg);\r\n    transform: rotate(50deg);\r\n }\r\n}\r\n@-webkit-keyframes loading-3 {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n }\r\n  100% {\r\n    -webkit-transform: rotate(80deg);\r\n    transform: rotate(80deg);\r\n }\r\n}\r\n@keyframes loading-3 {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n }\r\n  100% {\r\n    -webkit-transform: rotate(80deg);\r\n    transform: rotate(80deg);\r\n }\r\n}\r\n@-webkit-keyframes loading-4 {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n }\r\n  100% {\r\n    -webkit-transform: rotate(180);\r\n    transform: rotate(180deg);\r\n }\r\n}\r\n@keyframes loading-4 {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n }\r\n  100% {\r\n    -webkit-transform: rotate(180);\r\n    transform: rotate(180deg);\r\n }\r\n}\r\n.progress {\r\n  margin-bottom: 1em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7Q0FDN0I7QUFDRDtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsT0FBTztFQUNQLFFBQVE7Q0FDVDtBQUNEO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxXQUFXO0NBQ1o7QUFDRDtFQUNFLFFBQVE7Q0FDVDtBQUNEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsT0FBTztFQUNQLHNCQUFzQjtDQUN2QjtBQUNEO0VBQ0UsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLHNDQUFzQztFQUN0Qyw4QkFBOEI7Q0FDL0I7QUFDRDtFQUNFLFNBQVM7Q0FDVjtBQUNEO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLHVDQUF1QztFQUN2QywrQkFBK0I7Q0FDaEM7QUFDRDtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0NBQ2xCO0FBQ0Q7OztJQUdJO0FBQ0osbUtBQW1LO0FBQ25LO0VBQ0Usa0RBQTBDO1VBQTFDLDBDQUEwQztDQUMzQztBQUNEO0VBQ0UscUJBQWE7VUFBYixhQUFhO0NBQ2Q7QUFDRDtFQUNFLGtEQUEwQztVQUExQywwQ0FBMEM7Q0FDM0M7QUFDRDtFQUNFLHFCQUFhO1VBQWIsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxrREFBMEM7VUFBMUMsMENBQTBDO0NBQzNDO0FBQ0Q7RUFDRSxxQkFBYTtVQUFiLGFBQWE7Q0FDZDtBQUNEO0VBQ0Usa0RBQTBDO1VBQTFDLDBDQUEwQztDQUMzQztBQUNEO0VBQ0UsdURBQStDO1VBQS9DLCtDQUErQztDQUNoRDtBQUVEO0VBQ0U7SUFDRSxnQ0FBZ0M7SUFDaEMsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxrQ0FBa0M7SUFDbEMsMEJBQTBCO0VBQzVCO0NBQ0Q7QUFURDtFQUNFO0lBQ0UsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0Usa0NBQWtDO0lBQ2xDLDBCQUEwQjtFQUM1QjtDQUNEO0FBQ0Q7RUFDRTtJQUNFLGdDQUFnQztJQUNoQywyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLGlDQUFpQztJQUNqQyx5QkFBeUI7RUFDM0I7Q0FDRDtBQVREO0VBQ0U7SUFDRSxnQ0FBZ0M7SUFDaEMsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxpQ0FBaUM7SUFDakMseUJBQXlCO0VBQzNCO0NBQ0Q7QUFDRDtFQUNFO0lBQ0UsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsaUNBQWlDO0lBQ2pDLHlCQUF5QjtFQUMzQjtDQUNEO0FBVEQ7RUFDRTtJQUNFLGdDQUFnQztJQUNoQyx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLGlDQUFpQztJQUNqQyx5QkFBeUI7RUFDM0I7Q0FDRDtBQUNEO0VBQ0U7SUFDRSxnQ0FBZ0M7SUFDaEMsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSwrQkFBK0I7SUFDL0IsMEJBQTBCO0VBQzVCO0NBQ0Q7QUFURDtFQUNFO0lBQ0UsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsK0JBQStCO0lBQy9CLDBCQUEwQjtFQUM1QjtDQUNEO0FBQ0Q7RUFDRSxtQkFBbUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXIge1xyXG4gIGJvcmRlci13aWR0aDozcHggIWltcG9ydGFudDtcclxufVxyXG4ucHJvZ3Jlc3Mge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNTBweDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5wcm9ncmVzczphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogN3B4IHNvbGlkICNlZWU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcbi5wcm9ncmVzcyA+IHNwYW4ge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5wcm9ncmVzcyAucHJvZ3Jlc3MtbGVmdCB7XHJcbiAgbGVmdDogMDtcclxufVxyXG4ucHJvZ3Jlc3MgLnByb2dyZXNzLWJhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyLXdpZHRoOiA3cHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvcmRlci1jb2xvcjogICNmZjdiMDBcclxufVxyXG4ucHJvZ3Jlc3MgLnByb2dyZXNzLWxlZnQgLnByb2dyZXNzLWJhciB7XHJcbiAgbGVmdDogMTAwJTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNzVweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNzVweDtcclxuICBib3JkZXItbGVmdDogMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBsZWZ0O1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBsZWZ0O1xyXG59XHJcbi5wcm9ncmVzcyAucHJvZ3Jlc3MtcmlnaHQge1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcbi5wcm9ncmVzcyAucHJvZ3Jlc3MtcmlnaHQgLnByb2dyZXNzLWJhciB7XHJcbiAgbGVmdDogLTEwMCU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNzVweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3NXB4O1xyXG4gIGJvcmRlci1yaWdodDogMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciByaWdodDtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgcmlnaHQ7XHJcbn1cclxuLnByb2dyZXNzIC5wcm9ncmVzcy12YWx1ZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcbi5wcm9ncmVzcyAucHJvZ3Jlc3MtdmFsdWUgZGl2IHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG59XHJcbi5wcm9ncmVzcyAucHJvZ3Jlc3MtdmFsdWUgc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnNtYWxsIHtcclxuICBjb2xvcjogIzhiOGI4YjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi8qIC5wcm9ncmVzcyAucHJvZ3Jlc3MtdmFsdWUgc3Bhbi5zbWFsbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnRcclxufSAqL1xyXG4vKiBUaGlzIGZvciBsb29wIGNyZWF0ZXMgdGhlIG5lY2Vzc2FyeSBjc3MgYW5pbWF0aW9uIG5hbWVzIER1ZSB0byB0aGUgc3BsaXQgY2lyY2xlIG9mIHByb2dyZXNzLWxlZnQgYW5kIHByb2dyZXNzIHJpZ2h0LCB3ZSBtdXN0IHVzZSB0aGUgYW5pbWF0aW9ucyBvbiBlYWNoIHNpZGUuICovXHJcbi5wcm9ncmVzc1tkYXRhLXBlcmNlbnRhZ2U9XCIyN1wiXSAucHJvZ3Jlc3MtcmlnaHQgLnByb2dyZXNzLWJhciB7XHJcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLTEgMS41cyBsaW5lYXIgZm9yd2FyZHM7XHJcbn1cclxuLnByb2dyZXNzW2RhdGEtcGVyY2VudGFnZT1cIjI3XCJdIC5wcm9ncmVzcy1sZWZ0IC5wcm9ncmVzcy1iYXIge1xyXG4gIGFuaW1hdGlvbjogMDtcclxufVxyXG4ucHJvZ3Jlc3NbZGF0YS1wZXJjZW50YWdlPVwiMTVcIl0gLnByb2dyZXNzLXJpZ2h0IC5wcm9ncmVzcy1iYXIge1xyXG4gIGFuaW1hdGlvbjogbG9hZGluZy0yIDEuNXMgbGluZWFyIGZvcndhcmRzO1xyXG59XHJcbi5wcm9ncmVzc1tkYXRhLXBlcmNlbnRhZ2U9XCIxNVwiXSAucHJvZ3Jlc3MtbGVmdCAucHJvZ3Jlc3MtYmFyIHtcclxuICBhbmltYXRpb246IDA7XHJcbn1cclxuLnByb2dyZXNzW2RhdGEtcGVyY2VudGFnZT1cIjI0XCJdIC5wcm9ncmVzcy1yaWdodCAucHJvZ3Jlc3MtYmFyIHtcclxuICBhbmltYXRpb246IGxvYWRpbmctMyAxLjVzIGxpbmVhciBmb3J3YXJkcztcclxufVxyXG4ucHJvZ3Jlc3NbZGF0YS1wZXJjZW50YWdlPVwiMjRcIl0gLnByb2dyZXNzLWxlZnQgLnByb2dyZXNzLWJhciB7XHJcbiAgYW5pbWF0aW9uOiAwO1xyXG59XHJcbi5wcm9ncmVzc1tkYXRhLXBlcmNlbnRhZ2U9XCIxMDBcIl0gLnByb2dyZXNzLXJpZ2h0IC5wcm9ncmVzcy1iYXIge1xyXG4gIGFuaW1hdGlvbjogbG9hZGluZy00IDEuNXMgbGluZWFyIGZvcndhcmRzO1xyXG59XHJcbi5wcm9ncmVzc1tkYXRhLXBlcmNlbnRhZ2U9XCIxMDBcIl0gLnByb2dyZXNzLWxlZnQgLnByb2dyZXNzLWJhciB7XHJcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLTQgMS41cyBsaW5lYXIgZm9yd2FyZHMgMS41cztcclxufVxyXG5cclxuQGtleWZyYW1lcyBsb2FkaW5nLTEge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTAwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEwMGRlZyk7XHJcbiB9XHJcbn1cclxuQGtleWZyYW1lcyBsb2FkaW5nLTIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnZGVnKTtcclxuIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNTBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNTBkZWcpO1xyXG4gfVxyXG59XHJcbkBrZXlmcmFtZXMgbG9hZGluZy0zIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDgwZGVnKTtcclxuIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGxvYWRpbmctNCB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODApO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuIH1cclxufVxyXG4ucHJvZ3Jlc3Mge1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row mt-5\">\r\n    <div class=\"col-md-auto\">\r\n      <img src=\"assets/img/profile.png\" class=\"rounded float-left\" style=\"width: 200px; height: 200px;\">\r\n    </div>\r\n    <div class=\"col border border-dark p-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col-2\"><strong>Market Plan</strong></div>\r\n        <div class=\"col-7\">\r\n          <p>Fill in who are your customers? What is the pain statement that you are trying to solve for them?</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-2\"><strong>Benefit</strong></div>\r\n        <div class=\"col-7\">\r\n          <p>What is the benefit that will match the pain statement</p>\r\n        </div>\r\n        <div class=\"col-2\">\r\n          <a href=\"#\" class=\"btn btn-outline-dark\">Edit Profile</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row my-4\">\r\n    <div class=\"col-12\">\r\n      <h4 class=\"text-center\">How is <span class=\"font-weight-bold\">VentureX <i class=\"fas fa-pencil-alt text-primary\"></i> </span> doing today? <span class=\"small\">Check Dashboard</span></h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-8 mx-auto\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-3 col-md-2 mx-auto text-center\">\r\n          <div class=\"progress\" data-percentage=\"27\">\r\n            <span class=\"progress-left\">\r\n              <span class=\"progress-bar\"></span>\r\n            </span>\r\n            <span class=\"progress-right\">\r\n              <span class=\"progress-bar\" style=\"border-color: orange;\"></span>\r\n            </span>\r\n            <div class=\"progress-value\">\r\n              <div>\r\n                <strong>27</strong> \r\n                <span class=\"small\">%</span>\r\n                <br>\r\n                <span>Product</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-3 mx-auto col-md-2\">\r\n          <div class=\"progress\" data-percentage=\"15\">\r\n            <span class=\"progress-left\">\r\n              <span class=\"progress-bar\"></span>\r\n            </span>\r\n            <span class=\"progress-right\">\r\n              <span class=\"progress-bar\" style=\"border-color: red;\"></span>\r\n            </span>\r\n            <div class=\"progress-value\">\r\n              <div> <strong>3</strong> <span class=\"small\">months</span>\r\n                <br>\r\n                <span>Runway</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-3 mx-auto col-md-2\">\r\n          <div class=\"progress\" data-percentage=\"24\">\r\n            <span class=\"progress-left\">\r\n              <span class=\"progress-bar\"></span>\r\n            </span>\r\n            <span class=\"progress-right\">\r\n              <span class=\"progress-bar\"></span>\r\n            </span>\r\n            <div class=\"progress-value\">\r\n              <div>\r\n                <strong>24</strong> <span class=\"small\">%</span>\r\n                <br>\r\n                <span>Conversion</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-3 mx-auto col-md-2\">\r\n          <div class=\"progress\" data-percentage=\"100\">\r\n            <span class=\"progress-left\">\r\n              <span class=\"progress-bar\" style=\"border-color: greenyellow;\"></span>\r\n            </span>\r\n            <span class=\"progress-right\">\r\n              <span class=\"progress-bar\" style=\"border-color: greenyellow;\"></span>\r\n            </span>\r\n            <div class=\"progress-value\">\r\n              <div>\r\n                <strong>100</strong> <span class=\"small\">%</span>\r\n                <br>\r\n                <span>Engagement</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12 mt-2\">\r\n      <div class=\"alert alert-warning\" role=\"alert\">\r\n        <strong>Small Converson?</strong> Learn what you can do to <strong>rise you conversion</strong>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 mt-2\">\r\n      <div class=\"alert alert-danger\" role=\"alert\">\r\n        <strong>Low product score?</strong> <strong>Try this</strong> to get more..\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hajisky\Desktop\dev\simple_dashboard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map