
	function Figura( z_index, divas_reiksmiu ) {

		this.z_index = z_index;
		this.divas_reiksmiu = divas_reiksmiu;
					
		this.draw = function() {
					// rez.innerHTML += 'netureciau veikti, bet veikiu<br>';
					}
					
		this.uzrasyti = function() {
					
			return ' sluoksnis: ' +  this.z_index + ' reiksmiu skydelis: ' + this.divas_reiksmiu;
			}
					
		this.showDivasReiksmiu = function() {
					
			document.getElementById ( this.divas_reiksmiu ).style.display = 'block';						
					
			for ( i = 0; i < divai_reiksmiu.length; i++)  {
						
				if ( divai_reiksmiu [ i ] != this.divas_reiksmiu ) {
						
					document.getElementById ( divai_reiksmiu [ i ] ).style.display = 'none';						
				}
			}
		}
	}	