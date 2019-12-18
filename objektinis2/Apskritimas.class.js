			
	function Apskritimas ( x, y, radius, z_index, divas_reiksmiu ) {
							
		this.x =  x;
		this.y =  y;
		this.radius = radius;
		this.z_index = z_index;
		this.divas_reiksmiu = divas_reiksmiu;
			
	}
	
	Apskritimas.prototype =  new Figura; // ( z_index, divas_reiksmiu ); 	
	
	Apskritimas.prototype.draw = function () {
	
		piesinys.piesimo_srits.beginPath();
		piesinys.piesimo_srits.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		piesinys.piesimo_srits.stroke();
		piesinys.piesimo_srits.fillStyle = 'rgba(0,255,0,1)'; 
		piesinys.piesimo_srits.fill();
								// rez.innerHTML += 'nupiešiau ! apskritimą<br>';
	}

	Apskritimas.prototype.uzrasyti  = function () {
	
		return 
		
				'apskritimas: '
				+ ' koordinates (x,y): ' 			 // + this.x + this.y 
				+ ' spindulys: '				 // + this.radius
										 // + ' ' + figura.uzrasyti()
			;
	}	