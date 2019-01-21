function drawbar(arr){
	//var arr=getData()[0].slice(2);
	//console.log(arr);
	/*
	var max=arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]>max) {
			max=arr[i];
		}
	}
	*/
	var allspacing=50;
	var div = document.getElementById("bar");
	div.innerHTML="";
	var svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
	svg.setAttribute("width","700");
	svg.setAttribute("height","500");
  	var spacing=50;
  	var groupspacing = parseInt((700-2*spacing)/arr.length);
  	var a = parseInt(groupspacing/2);
  	var p = 500*0.2;
  	var q = 1;//parseInt((500-p)/800);

	var linex = document.createElementNS("http://www.w3.org/2000/svg","line");
	linex.setAttribute("x1",spacing);
	linex.setAttribute("y1","0");
	linex.setAttribute("x2",spacing);
	linex.setAttribute("y2",500-spacing);
	linex.setAttribute("style","stroke:rgb(99,99,99);stroke-width:2");
	svg.appendChild(linex);

	var liney = document.createElementNS("http://www.w3.org/2000/svg","line");
	liney.setAttribute("x1",spacing);
	liney.setAttribute("y1",500-spacing);
	liney.setAttribute("x2",700);
	liney.setAttribute("y2",500-spacing);
	liney.setAttribute("style","stroke:rgb(99,99,99);stroke-width:2");
	svg.appendChild(liney);

	for (var i = 0; i < arr.length; i++) {
		draw(i)
	}
	
	div.appendChild(svg);

	function draw(n){
		var rect = document.createElementNS("http://www.w3.org/2000/svg","rect");
		rect.setAttribute("x",(2*n+1)*a+spacing);
		rect.setAttribute("y",500-spacing-q*arr[n]);
		rect.setAttribute("width",a);
		rect.setAttribute("height",q*arr[n]);
		rect.setAttribute("style","fill:rgb(0,0,255)");
		svg.appendChild(rect);
	}
	
}

