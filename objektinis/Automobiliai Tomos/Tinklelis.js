	
	function tinklelis (){
		context = document.getElementById( 'funkcijos_grafikas' );
		ctx = context.getContext( '2d' );
		ctx.beginPath();
		ctx.moveTo ( x_grid_start, y_grid_start );
		//vertikalios linijos
		for (var x = x_grid_start; x <= 450; x += 50) {
			ctx.moveTo(x, y_grid_start);
			ctx.lineTo(x, 450);
		}
		//horizontalios linijos
		for (var y = y_grid_start; y <= 450; y += 50) {
			  ctx.moveTo(x_grid_start, y);
			  ctx.lineTo(450, y);
		}
		//rasalas
		ctx.strokeStyle = "#eee";
		ctx.stroke();

	}