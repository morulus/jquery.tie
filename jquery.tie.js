/**
@author Vladimir Kalmykov (http://github. )
*/
(function(jQuery) {
	var jQuery = jQuery;
	jQuery.tie = jQuery.fn.tie = function(func) {
		func.apply(this);
		return this;
	};

	jQuery.under = jQuery.fn.under = function(obj) {
		return jQuery(obj).prependTo(this);
	};

	jQuery.put = jQuery.fn.put = function(obj) {
		return jQuery(obj).appendTo(this);
	};

	jQuery.and = jQuery.fn.and = function(obj) {
		return jQuery(obj).insertAfter(this);
	};

	jQuery.condition = jQuery.fn.condition = function(condit, onTrue, onFalse) {
		if (condit) {
			if (typeof onTrue == 'function') return onTrue.call(this, condit);
			return this;
		} else {
			if (typeof onFalse == 'function') return onFalse.call(this);
			return this;
		};
	};

	jQuery.ramp = jQuery.fn.ramp = function() {
		var current = this;
		for (var i=0;i<arguments.length;i++) {
			var variable = arguments[i];
			if (variable instanceof Array) {
				for (var a=0;a<variable.length;a++) {
					jQuery(current).put(variable[variable]);
				};
				current = jQuery(current).parent();
			} else {
				current = jQuery(current).put(arguments[i])
			};
		};
		return current;
	};
})(jQuery)