	function bruksneliai () {
		context = document.getElementById( 'funkcijos_grafikas' );
		ctx = context.getContext( '2d' );
		ctx.beginPath();
		ctx.font = "bold 12px sans-serif";
		//x bruksniukai
		for (var x = x_grid_start+50; x < 450; x += 50) {
			ctx.moveTo(x, y_grid_start+y_plot_size-5);
			ctx.lineTo(x, y_grid_start+y_plot_size+5);
			ctx.fillText(x-x_grid_start, x, y_grid_start+y_plot_size+30);
		}
		
		//y bruksniukai
		for (var y = y_grid_start+50; y < 450; y += 50) {
			  ctx.moveTo(x_grid_start-5, y);
			  ctx.lineTo(x_grid_start+5, y);
			  ctx.fillText(y_grid_start+y_plot_size -y, x_grid_start-30, y);
		}
		ctx.strokeStyle = "#000";
		ctx.stroke();
	}