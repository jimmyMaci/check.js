var Check = function() {

	var self = this;
	self.isUndefined = _isUndefined;
	self.isNull = _isNull;
	self.isObject = _isObject;
	
	function _isUndefined(value) {
	  return (typeof value === "undefined");
	}
	
	function _isNull(value) {
		return value == null;
	}
	
	function _isObject(value) {
		return (typeof value === "object");
	}
	
}
