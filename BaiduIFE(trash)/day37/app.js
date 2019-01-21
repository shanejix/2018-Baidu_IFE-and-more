createcheckbox("region-wrapper"	,regionarr);
createcheckbox("product-wrapper",productarr);

var tablediv = document.getElementById("table-wrapper");
var targetsth;
tablediv.addEventListener("mouseover",(e)=>{
	console.log(e.target.nodeName);
	if(e.target.nodeName=="TD"){
		var t = e.target;
		targetsth=t.innerHTML;
		t.innerHTML+="<span>bainji</span>";
	}
});

console.log(tablediv);

