// Generated by Haxe 3.4.0
var $hx_exports = typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this;
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var Main = function() { };
Main.main = function() {
};
var React_Component = require("react").Component;
var App = $hx_exports["App"] = function(props,context) {
	React_Component.call(this,props,context);
};
App.text = function(txt) {
	return { "$$typeof" : $$tre, type : react_native_component_Text, props : { children : txt}};
};
App.view = function(content) {
	return { "$$typeof" : $$tre, type : react_native_component_View, props : { children : content}};
};
App.__super__ = React_Component;
App.prototype = $extend(React_Component.prototype,{
	render: function() {
		var content = [{ "$$typeof" : $$tre, type : react_native_component_Text, props : { children : "cippola1"}},{ "$$typeof" : $$tre, type : react_native_component_Text, props : { children : "cippola2"}},{ "$$typeof" : $$tre, type : react_native_component_Text, props : { children : "cippola3"}},{ "$$typeof" : $$tre, type : react_native_component_Text, props : { children : "cippola4"}},{ "$$typeof" : $$tre, type : react_native_component_Text, props : { children : "cippola5"}}];
		return { "$$typeof" : $$tre, type : react_native_component_View, props : { children : content}};
	}
});
var react_native_component_Text = require("react-native").Text;
var react_native_component_View = require("react-native").View;
export default App;
var $$tre = (typeof Symbol === "function" && Symbol.for && Symbol.for("react.element")) || 0xeac7;
App.displayName = "App";
Main.main();
