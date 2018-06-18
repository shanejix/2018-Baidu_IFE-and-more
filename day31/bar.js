function drawbar(){
	var arr=getData()[0].slice(2);
	var max=arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]>max) {
			max=arr[i];
		}
	}
	var allspacing=50;
	var div = document.getElementById("bar");	
	var svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
	svg.setAttribute("width",allspacing*2*arr.length+allspacing*2);
	svg.setAttribute("height",max*5+allspacing*2);

	var linex = document.createElementNS("http://www.w3.org/2000/svg","line");
	linex.setAttribute("x1","50");
	linex.setAttribute("y1","50");
	linex.setAttribute("x2","50");
	linex.setAttribute("y2",max*5+allspacing);
	linex.setAttribute("style","stroke:rgb(99,99,99);stroke-width:2");
	svg.appendChild(linex);

	var liney = document.createElementNS("http://www.w3.org/2000/svg","line");
	liney.setAttribute("x1","50");
	liney.setAttribute("y1",max*5+allspacing);
	liney.setAttribute("x2",allspacing*2*arr.length);
	liney.setAttribute("y2",max*5+allspacing);
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
		rect.setAttribute("x",(2n+1)*allspacing+allspacing);
		rect.setAttribute("y",max*5+allspacing-5*arr[n]);
		rect.setAttribute("width",allspacing);
		rect.setAttribute("height",5*arr[n]);
		rect.setAttribute("style","fill:rgb(0,0,255)");
		console.log(rect);
		svg.appendChild(rect);
	}
	
}