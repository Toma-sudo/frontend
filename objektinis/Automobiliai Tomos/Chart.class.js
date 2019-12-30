
	function Chart ( canvas_id, canvas_width, canvas_height, grid_hx, grid_hy, divide_grid_x, divide_grid_y ) {
		
		this.canvasId = canvas_id;
		this.canvasWidth = canvas_width;
		this.canvasHeight = canvas_height;
		
		this.gridHx = grid_hx;
		this.gridHy = grid_hy;
		
		this.divideGridX = divide_grid_x;
		this.divideGridY = divide_grid_y;

		this.gridValuesX = [];
		this.gridValuesY = [];		
		
		
		this.context = document.getElementById( this.canvasId );
		this.ctx = this.context.getContext( '2d' );	

		this.allValues = [];
		
		this.flagNotes = false;
		
		this.plotSizes = function() {
		
			this.plotSizeX = parseInt ( this.canvasWidth * 0.1 );
			this.plotSizeY = parseInt ( this.canvasHeight * 0.1 );
			
			if ( this.canvasWidth > 100 ) {

				this.plotSizeX = this.canvasWidth - 100;
			} 
			
			if ( this.canvasHeight > 100 ) {
				
				this.plotSizeY =  this.canvasHeight - 100;
				
			}
			
			this.xGridStart = parseInt ( ( this.canvasWidth - this.plotSizeX ) / 2 );
			this.yGridStart = parseInt ( ( this.canvasHeight - this.plotSizeY ) / 2 );			
		}
		
		this.gridBig = function () {
			
			this.ctx.beginPath();
			this.ctx.moveTo ( this.xGridStart, this.yGridStart );
			
			//vertikalios linijos
			for ( var x = this.xGridStart; x <= this.xGridStart + this.plotSizeX; x += this.gridHx ) {
				
				this.ctx.moveTo( x, this.yGridStart);
				this.ctx.lineTo( x,  this.xGridStart + this.plotSizeX );
			}
			
			//horizontalios linijos
			for ( var y = this.yGridStart; y <=  this.yGridStart + this.plotSizeY; y += this.gridHy ) {
				
				  this.ctx.moveTo ( this.xGridStart, y );
				  this.ctx.lineTo ( this.yGridStart + this.plotSizeY, y );
			}
			//rasalas
			this.ctx.strokeStyle = "#eee";
			this.ctx.stroke();
		}

		this.arrows = function () {
			
			this.ctx.beginPath();
			//ctx.moveTo (0, 0);
			//horizontali rodykle
			this.ctx.beginPath();
			this.ctx.moveTo ( this.xGridStart, this.yGridStart + this.plotSizeY );
			this.ctx.lineTo ( this.xGridStart + this.plotSizeX, this.yGridStart + this.plotSizeY );
			this.ctx.moveTo ( this.xGridStart+this.plotSizeX-5, this.yGridStart+ this.plotSizeY-5 );
			this.ctx.lineTo ( this.xGridStart+this.plotSizeX, this.yGridStart+ this.plotSizeY );
			this.ctx.lineTo ( this.xGridStart+this.plotSizeX-5, this.yGridStart+ this.plotSizeY+5);
			//vertikali rodykle
			this.ctx.moveTo ( this.xGridStart, this.yGridStart+ this.plotSizeY);
			this.ctx.lineTo ( this.xGridStart, this.yGridStart);
			this.ctx.moveTo ( this.xGridStart + 5, this.yGridStart + 5 );
			this.ctx.lineTo ( this.xGridStart, this.yGridStart);
			this.ctx.lineTo ( this.xGridStart - 5, this.yGridStart +5 );
			//rasalas
			this.ctx.strokeStyle = "#000";
			this.ctx.stroke();
			//tekstas
			this.ctx.font = "bold 12px sans-serif";
			this.ctx.fillText( "x",  this.xGridStart + this.plotSizeX, this.yGridStart + this.plotSizeY + 20 );
			this.ctx.fillText( "y",  this.xGridStart-20, this.yGridStart);
			this.ctx.textBaseline = "top";
			this.ctx.fillText( '( ' + this.gridValuesX [ 0 ] + ' , ' + this.gridValuesY [ 0 ] + ' )',  this.xGridStart - 20, this.yGridStart+ this.plotSizeY + 20 );
			this.ctx.fillRect( this.xGridStart-2, this.yGridStart+ this.plotSizeY - 2, 4, 4);
			this.ctx.fillText( '(  ' + this.gridValuesX [ this.gridValuesX.length - 1 ] + ' , ' + this.gridValuesY [ this.gridValuesY.length - 1 ] + ' )',  this.xGridStart + this.plotSizeX - 30, this.yGridStart -20 );
			this.ctx.fillRect( this.xGridStart+this.plotSizeX-2, this.yGridStart - 2, 4, 4);
		}

		this.gridSmall = function() {
			

			this.ctx.beginPath();
			this.ctx.font = "bold 12px sans-serif";
			
			//x bruksniukai
			var i = 1;
			for ( var x =  this.xGridStart + this.gridHx; x < this.xGridStart + this.plotSizeX; x += this.gridHx, i++ ) {
				
				this.ctx.moveTo ( x, this.yGridStart + this.plotSizeY - 5 );
				this.ctx.lineTo ( x, this.yGridStart + this.plotSizeY + 5 );
				this.ctx.fillText ( this.gridValuesX [ i ], x, this.yGridStart + this.plotSizeY + 30 );
			}
			
			//y bruksniukai
			i = this.gridValuesY.length - 2;			
			for ( var y = this.yGridStart + this.gridHy; y < this.yGridStart + this.plotSizeY; y += this.gridHy, i-- ) {
				
				  this.ctx.moveTo ( this.xGridStart - 5, y);
				  this.ctx.lineTo ( this.xGridStart + 5, y );
				  this.ctx.fillText ( this.gridValuesY [ i ],  this.xGridStart - 30, y );
			}
			this.ctx.strokeStyle = "#000";
			this.ctx.stroke();
		}
		
		this.addValues = function ( values ) {
			
			this.allValues.push ( values );  
			this.ctValues++;
			
		}
		
		this.drawAllValues = function () {
		
			var x_min, x_max, y_min, y_max, flag_take_mm = true;
			
			for ( var i = 0; i < this.allValues.length; i++ ) {

				for ( var j = 0; j < this.allValues [ i ].length; j++ ) {
				
					if ( flag_take_mm ) {
						
						x_min =  this.allValues [ i ] [ j ].x;
						x_max =  this.allValues [ i ] [ j ].x;
						y_min =  this.allValues [ i ] [ j ].y;
						y_max =  this.allValues [ i ] [ j ].y;
						flag_take_mm = false;
						
					} else {
						
						if ( x_min >  this.allValues [ i ] [ j ].x ) {
						
							x_min = this.allValues [ i ] [ j ].x;
						}
						if ( x_max <  this.allValues [ i ] [ j ].x ) {
						
							x_max = this.allValues [ i ] [ j ].x;
						}
						if ( y_min >  this.allValues [ i ] [ j ].y ) {
						
							y_min = this.allValues [ i ] [ j ].y;
						}
						if ( y_max <  this.allValues [ i ] [ j ].y ) {
						
							y_max = this.allValues [ i ] [ j ].y;
						}
					}
				}
			}

			var h_x = ( x_max - x_min ) / this.divideGridX;
			var h_y = ( y_max - y_min ) / this.divideGridY;
			
			// console.log (  ' x_min: ' + x_min + ' x_max: ' +  x_max + ' h_x: ' + h_x +  ' this.divide_grid_x: ' + this.divideGridX );
			
			for ( var x = x_min; x <= x_max; x += h_x ) {
				
				this.gridValuesX.push( x );
			}
			
			for ( var y = y_min; y <= y_max; y += h_y ) {
				
				this.gridValuesY.push( y );
			}
			// console.log ( this.gridValuesX );	
			// console.log ( this.gridValuesY );
			
			
			for ( var i = 0; i < this.allValues.length; i++ ) {
				
				this.drawValues1 ( i, y_max, y_min, x_max, x_min );
			}
		}
		
		this.drawValues1 = function ( num_values, y_max, y_min, x_max, x_min ) { 
			
			var x_range = x_max - x_min;
			var x_pradinis =  this.xGridStart + parseInt ( this.plotSizeX * ( this.allValues [ num_values ] [ 0 ].x / x_range ) );
			var y_range = ( y_max - y_min );
			var y_pradinis=  this.yGridStart + parseInt ( this.plotSizeY * ( (  y_max - this.allValues [ num_values ] [ 0 ].y ) / y_range ) );
			
			this.ctx.moveTo ( x_pradinis, y_pradinis );
			
			for ( i = 0;  i <  this.allValues [ num_values ].length; i++ ) {

				var y_grafike = this.yGridStart  + this.plotSizeY *  ( (  y_max - this.allValues [ num_values ][ i ].y ) / y_range );
				 console.log ( 'x_gr:' + this.allValues [ num_values ] [ i ].x + ' y_gr: ' +  parseInt ( y_grafike ) );
				this.ctx.lineTo (  this.xGridStart + parseInt ( this.plotSizeX * ( this.allValues [ num_values ] [ i ].x  / x_range ) ), parseInt ( y_grafike ) );

			}
			this.ctx.stroke();			
		
		}

		this.draw = function() {
			
			this.plotSizes();
			this.drawAllValues();
			this.gridBig();
			this.arrows();
			this.gridSmall();
		}
	}