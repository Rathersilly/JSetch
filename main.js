$(document).ready(function(){
	
	var defaultsize = 20;
	
	var cellcolor = "#ffffff";
	var hovercolor = "#000000";
	makegrid();

	
	

	$(".cell").hover(function(){
		$(this).css("background-color", hovercolor);
	});

	$("#resetbutton").click(function(){
		$(".cell").css("background-color", cellcolor);
	});
	console.log("here");
	

	function makegrid(size=defaultsize) {
		console.log("making grid");
		var cellsize = $(".grid").width() / size;
		
		for(i = 0;i <size; i++) {
			console.log(cellsize);
			$newrow=$("<div></div>");
			$newrow.height(cellsize);
			$newrow.addClass("row");
			$newrow.appendTo(".grid");
			
			for(j = 0; j<size; j++) {
				
				$newcell = $("<div></div>");
				$newcell.width(cellsize);
				$newcell.height(cellsize); 
				
				$newcell.addClass("cell");
				$newcell.css("background-color", cellcolor);
				$newrow.append($newcell);
				

			}
		};
	}


});