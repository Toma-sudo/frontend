
	function HtmlTable ( antraste, id, css_klase, caption ) {
			
		this.id = id;
		this.css_klase = css_klase;
		this.antraste = antraste;
		this.caption = caption;
		this.reiksmesArg = [];
		this.reiksmesRes = [];
		this.newRes();
	}
	
	HtmlTable.prototype.addToArg = function ( arg ) {

		this.reiksmesArg.push ( arg );
	}
	
	HtmlTable.prototype.newRes = function () {
		
		this.reiksmesRes.push( [] );
	}
	
	HtmlTable.prototype.addToRes = function ( res ) {

		this.reiksmesRes[ this.reiksmesRes.length - 1 ] .push ( res );
	}
	
	HtmlTable.prototype.addToResByNum = function ( res, num ) {

		this.reiksmesRes[ num ] .push ( res );
	}	

	HtmlTable.prototype.html = function() {
			
		str_html_table = '<table' + makeStrOrEmpty ( ' id="', this.id,  '" ' ) + makeStrOrEmpty ( ' class="', this.css_klase, '"' ) + '>';
		str_html_table += makeStrOrEmpty ( '<caption>', this.caption,  '</caption>' )
		str_html_table += '<tr>' + this.antraste + '</tr>';
		
		str_html_table += this.body();
		str_html_table += this.footer();
		str_html_table += '</table>';
		
		return str_html_table;
	}
		
	HtmlTable.prototype.body = function() {
			
		str_html_body = '';
		
		for ( k = 0; k < this.reiksmesRes [ 0 ].length; k++ ) { 
			
			str_html_body += '<tr><td>' + this.reiksmesArg [ k ] + '</td>';
			
			for ( j = 0; j < this.reiksmesRes.length; j++ ) {
				
				str_html_body += '<td>' + this.reiksmesRes [ j ] [ k ] + '</td>';
			}
			str_html_body += '</tr>';
		}
		return str_html_body;
	}

	HtmlTable.prototype.footer = function() {
		
		return '';
	}		
		
		