var Check = function() {

	var self = this;
	self.isUndefined = _isUndefined;
	
	function _isUndefined(value) {
	  return (typeof value === "undefined");
	}
	
}
