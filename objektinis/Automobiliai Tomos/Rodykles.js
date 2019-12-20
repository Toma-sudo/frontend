	function rodykles () {
		
		canvas= document.getElementById( 'funkcijos_grafikas' );
		ctx = canvas.getContext( '2d' );
		ctx.beginPath();
		//ctx.moveTo (0, 0);
		//horizontali rodykle
		ctx.beginPath();
		ctx.moveTo(x_grid_start, y_grid_start+y_plot_size);
		ctx.lineTo(x_grid_start+x_plot_size, y_grid_start+y_plot_size);
		ctx.moveTo(x_grid_start+x_plot_size-5, y_grid_start+y_plot_size-5);
		ctx.lineTo(x_grid_start+x_plot_size, y_grid_start+y_plot_size);
		ctx.lineTo(x_grid_start+x_plot_size-5, y_grid_start+y_plot_size+5);
		//vertikali rodykle
		ctx.moveTo(x_grid_start, y_grid_start+y_plot_size);
		ctx.lineTo(x_grid_start, y_grid_start);
		ctx.moveTo(x_grid_start+5, y_grid_start+5);
		ctx.lineTo(x_grid_start, y_grid_start);
		ctx.lineTo(x_grid_start-5, y_grid_start+5);
		//rasalas
		ctx.strokeStyle = "#000";
		ctx.stroke();
		//tekstas
		ctx.font = "bold 12px sans-serif";
		ctx.fillText("x", x_grid_start+x_plot_size, y_grid_start+y_plot_size+20);
		ctx.fillText("y", x_grid_start-20, y_grid_start);
		ctx.textBaseline = "top";
		ctx.fillText("( 0 , 0 )", x_grid_start-20, y_grid_start+y_plot_size+20);
		ctx.fillRect(x_grid_start-2, y_grid_start+y_plot_size-2, 4, 4);
		ctx.fillText("( 400 , 400 )", x_grid_start+x_plot_size-30, y_grid_start-20);
		ctx.fillRect(x_grid_start+x_plot_size-2, y_grid_start-2, 4, 4);

	}