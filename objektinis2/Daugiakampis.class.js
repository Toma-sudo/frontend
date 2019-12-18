
	function Daugiakampis ( taskai, z_index, divas_reiksmiu ) {
			
		this.tasku_masyvas = [];  
				
		for ( i = 0; i < taskai.length; i+=2 ) {
				
			this.tasku_masyvas.push (
				new Taskas ( parseInt ( taskai [ i ] ), parseInt ( taskai [ i + 1 ] ) )
			);
		}
		this.z_index = z_index;
		this.divas_reiksmiu = divas_reiksmiu;
	}
	
	Daugiakampis.prototype = new Figura;
	
	Daugiakampis.prototype.draw = function() {
													//		tasku_masyvas_str = "";				
		piesinys.piesimo_srits.moveTo ( this.tasku_masyvas [ 0 ].x, this.tasku_masyvas [ 0 ].y );
		
		for( i=1; i< this.tasku_masyvas.length; i++ ) {
													// 	tasku_masyvas_str += "x" + i + " "  + tasku_masyvas [ i ].x + " y" + i + " "  + tasku_masyvas [ i ].y + "\n";					
			piesinys.piesimo_srits.lineTo (  this.tasku_masyvas [ i ].x, this.tasku_masyvas [ i ].y  );
		}
		piesinys.piesimo_srits.closePath();
		piesinys.piesimo_srits.stroke();	
									// rez.innerHTML += 'nupiešiau ! daugiakampį<br>';				
	}
	
	Daugiakampis.prototype.uzrasyti  = function () {
	
		kampai = '';
	
		for (var  i = 0; i < this.tasku_masyvas.length; i+=1 ) {
		
			 kampai  += ' ( ' + tasku_masyvas [ i ].x + ' , ' + tasku_masyvas [ i ].y  +'  ) ';
		}			
	
		return 
		
				'daugiakampis: '
				+ ' kampai: ' + kampai
				+ Figura.uzrasyti()
			;
	}		