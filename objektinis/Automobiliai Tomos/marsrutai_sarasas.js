
	var lst_marsrutu = [
	
		{ pav: 'Kaunas-Vilnius' , stoteles: [
			{ pav: 'Rumšiškės', atstumas: 20, st_laikas: 5 },
			{ pav: 'Kaišiadorys', atstumas: 40, st_laikas: 10 },
			{ pav: 'Elektrėnai', atstumas: 60, st_laikas: 5 },
			{ pav: 'Vievis', atstumas: 70, st_laikas: 5 },			
		]	
		}
		, { pav: 'Kaunas-Klaipėda' , stoteles: [
			{ pav: 'Babtai', atstumas: 20, st_laikas: 5 },
			{ pav: 'Ariogala', atstumas: 50, st_laikas: 5 },
			{ pav: 'Kryžkalnis', atstumas: 100, st_laikas: 10 },
			{ pav: 'Gargždai', atstumas: 190, st_laikas: 5 },
		]
		}
	]; 
		
	function marsrutu_selectas() {
		
		selectas = '';
		
		for ( m = 0; m < lst_marsrutu.length; m++ ) {
		
			selectas += '<option value="' + m + '">' + lst_marsrutu[ m ].pav + '</option>';
		}
		return selectas;
	}