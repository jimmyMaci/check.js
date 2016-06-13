var Check = function() {

	var self = this;
	self.isUndefined = _isUndefined;
	self.isNull = _isNull;
	self.isObject = _isObject;
	self.isBoolean = _isBoolean;
	self.isNumeric = _isNumeric;
	self.isString = _isString;
	
	function _isNull(value) {
		return value == null;
	}
	
	function _isUndefined(value) {
	  return (typeof value === "undefined");
	}
	
	function _isObject(value) {
		return (typeof value === "object");
	}
	
	function _isBoolean(value) {
		return (typeof value === "boolean");
	}

	function _isNumeric(value) {
		return (typeof value === "number");
	}

	function _isString(value) {
		return (typeof value === "string" || value instanceof String);
	}

	
}
