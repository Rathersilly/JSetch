$(document).ready(function(){
	//square width = 100%/#squares
	console.log("hi");
	var tempoffset = 0;
	var gridrows = 20;
	var gridcols = 20;
	var gridwidth = 100  / gridcols - tempoffset;
	var gridheight = 100 / gridrows - tempoffset;
	var red = 0; var green = 100; var blue = 100;
	var cellcolor;
	//199,150)";//#0055ff";
	cellcolor = "rgb("+red+","+green+","+blue+")";
	var hovercolor = "green";
	for(i = 0;i <gridrows; i++) {
		//cellcolor = "rgb("+red+","+green+","+blue+")";
		//blue += 10;
		//green = 100;
		//make containing row div
		$newrow=$("<div></div>");
		$newrow.addClass("row");
		$newrow.appendTo(".grid");
		$newrow.height(gridheight + "%");
		for(j = 0; j<gridcols; j++) {
			//cellcolor = "rgb("+red+","+green+","+blue+")";
			$newcell = $("<div></div>"); 
			$newcell.width(gridwidth + "%");
			$newcell.addClass("cell");
			$newcell.css("background-color", cellcolor);
			$newrow.append($newcell);
			

			//green += 10;
		};
	};
	$(".cell").hover(function(){
		$(this).css("background-color", hovercolor);
	});

	$("#resetbutton").click(function(){
		$(".cell").css("background-color", cellcolor);



	});















});