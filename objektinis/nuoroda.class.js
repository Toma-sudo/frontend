
	class Nuoroda {
		
		constructor ( nuoroda ) {

			this.url = nuoroda.url;
			this.pav = nuoroda.pav;
			this.aprasymas = nuoroda.apras;
		}
		
		present() {
			
			return '<a href="javascript:void(0)" title="' +  this.aprasymas + '" onClick="atidaryti(' + "'http://" +  this.url + "'" +  ')">' + this.pav  + '</a>';
		}
	}