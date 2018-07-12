//表格渲染
		function createtable(listarr){
			/*
			var div=document.getElementById("table-wrapper");
			var table = document.createElement("table");
			var th = document.createElement("th");
			var headarr=["product","region","1","2","3","4","5","6","7","8","9","10","11","12"];
			headarr.forEach((i)=>{
				var td=document.createElement("td");
				td.innerHTML=i;
				th.appendChild(td);
			})
			table.appendChild(th);
			div.appendChild(table);
			*/
			//console.log(listarr);
			var regionnum=0;
			var productnum=0;
			var div=document.getElementById("table-wrapper");
			var table = document.createElement("table");
			div.innerHTML="";

			regionwrapper.querySelectorAll("input[checkboxtype=solo]").forEach((i)=>{
				if (i.checked==true) {
					regionnum++;
				}
			})
			productwrapper.querySelectorAll("input[checkboxtype=solo]").forEach((i)=>{
				if (i.checked==true) {
					productnum++;
				}
			})
			if (productnum>0&&regionnum>0) {
				if (regionnum!==1) {
					var tr = document.createElement("tr");
					var headarr=["product","region","1","2","3","4","5","6","7","8","9","10","11","12"];
					headarr.forEach((i)=>{
						var th=document.createElement("th");
						th.innerHTML=i;
						tr.appendChild(th);
					})
					table.appendChild(tr);
				}

				while(listarr){
					if (regionnum==1) {
						var tr = document.createElement("tr");
						var headarr=["region","product","1","2","3","4","5","6","7","8","9","10","11","12"];
						headarr.forEach((i)=>{
							var th=document.createElement("th");
							th.innerHTML=i;
							tr.appendChild(th);
						})
						table.appendChild(tr);
						div.appendChild(arrtotable(productnum,listarr));
						break;	
					}
					var temparr=[];
					for (var i = 0; i < regionnum; i++) {
						temparr.push(listarr.shift());
					}
					div.appendChild(arrtotable(regionnum,temparr));
				}
				
			}
			function arrtotable(spannum,arr){
				
				if (spannum>0) {
					for (var k = 0; k < arr.length; k++) {
						if (k==0) {
							var tr=document.createElement("tr");
							var td = document.createElement("td");
							td.innerHTML=arr[0][0];
							td.setAttribute("rowspan",spannum);
							tr.appendChild(td);
						}else{
							var tr = document.createElement("tr");
						}
						for (var j = 1; j < arr[k].length; j++) {
							var td = document.createElement("td");
							td.innerHTML=arr[k][j];
							tr.appendChild(td);
						}
						table.appendChild(tr);
					}
					return table;
				}
			}
		}
		//createtable(getData());