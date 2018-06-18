function drawbar(){
	var arr=getData()[0].slice(2);
	var num=0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]>num) {
			num=arr[i];
		}
	}
	
	var div = document.getElementById("bar");	
	var svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
	svg.setAttribute("width","1250");
	svg.setAttribute("height","700");

	var linex = document.createElementNS("http://www.w3.org/2000/svg","line");
	linex.setAttribute("x1","50");
	linex.setAttribute("y1","50");
	linex.setAttribute("x2","50");
	linex.setAttribute("y2","650");
	linex.setAttribute("style","stroke:rgb(99,99,99);stroke-width:2");
	svg.appendChild(linex);

	var liney = document.createElementNS("http://www.w3.org/2000/svg","line");
	liney.setAttribute("x1","50");
	liney.setAttribute("y1","650");
	liney.setAttribute("x2","1250");
	liney.setAttribute("y2","650");
	liney.setAttribute("style","stroke:rgb(99,99,99);stroke-width:2");
	svg.appendChild(liney);

	for (var i = 0; i < arr.length; i++) {
		draw(i)
	}
	
	div.appendChild(svg);

	function draw(n){
		var x = 5*(2*n+1);
		var y = 65-arr[n];
		var rect = document.createElementNS("http://www.w3.org/2000/svg","rect");
		rect.setAttribute("x",x*10+50);
		rect.setAttribute("y",y*10);
		rect.setAttribute("width","50");
		rect.setAttribute("height",10*arr[n]);
		rect.setAttribute("style","fill:rgb(0,0,255)");
		console.log(rect);
		svg.appendChild(rect);
	}
	
}