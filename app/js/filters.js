'use strict';

/* Filters */

angular.module('regterApp.filters', []).
  filter('filterBy', function($filter) {
    return function(input, type) {
    	var output;
		if (type == "todos") {
			output = input;
		}
		else if (type == "disponibles") {
			output = $filter('filter')(input, {available: true});
		}
		return output;
    }
  });
