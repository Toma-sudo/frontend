
	function NuorodosMan ( nuorodu_sar ) {
	
		this.man_nuorodos = [];

		for ( i = 0; i < nuorodu_sar.length; i++ ) {
		
			this.man_nuorodos.push ( new Nuoroda ( nuorodu_sar [ i ] ) );
		}		
		
		this.present = function() {
			
			res_str = '';
		
			for ( i = 0; i < this.man_nuorodos.length; i++ ) {
			
				res_str += this.man_nuorodos [ i ] .present() + '<br>';
			}
			return res_str;
		}
		
	}
	
	/**
		atitinka :
	
	
	class NuorodosMan {
	
		contructor ( nuorodu_sar ) {
	
			this.man_nuorodos = [];

			for ( i = 0; i < nuorodu_sar.length; i++ ) {
			
				this.man_nuorodos.push ( new Nuoroda ( nuorodu_sar [ i ] ) );
			}
		}
		
		present() {
			
			res_str = '';
		
			for ( i = 0; i < this.man_nuorodos.length; i++ ) {
			
				res_str += this.man_nuorodos [ i ] .present() + '<br>';
			}
			return res_str;
		}
		
	}
	*/