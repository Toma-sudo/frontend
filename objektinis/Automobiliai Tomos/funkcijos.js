
	function makeStrOrEmpty ( before, arg, after ) {

		str_or_empty = '';
		
		if ( arg != '' ) {
		
			str_or_empty = before + arg + after;
		}
		return str_or_empty;
	}