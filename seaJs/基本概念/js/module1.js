// JavaScript Document

define(function(require, exports, module){//sea的参数是不允许修改的
/*
 *require:模块之间依赖的接口对象,当引入的是sea下的模块的时候,require执行完结果就是exports
 *exports:对外提供接口的对象
 */
	
	var a = require('./module2.js').a;
	
	function show(){
		alert(a);
	}
	exports.show = show;
});




























