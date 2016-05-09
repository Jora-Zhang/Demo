// JavaScript Document
define(function(require, exports, module){
	function range(value, max, min){
		if(value > max){
			return max;
		}else if(value < min){
			return min;
		}else{
			return value;
		}
	}
	
	exports.range = range;
});