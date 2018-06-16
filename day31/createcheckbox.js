function createcheckbox(elementid,dataarr){
			var element=document.getElementById(elementid);
			//生成全选checkbox的html，给一个自定义属性表示为全选checkbox，比如checkbox-type="all"
			var inputcheckboxall=document.createElement("input");
			inputcheckboxall.setAttribute("type","checkbox");
			inputcheckboxall.setAttribute("checkboxtype","all");
			var text=document.createTextNode("全选");
			var p = document.createElement("span");
			p.appendChild(text);
			element.appendChild(p);
			element.appendChild(inputcheckboxall);			
			//遍历dataarr参数数组
			for (var i = 0; i < dataarr.length; i++) {
				var inputcheckboxsolo=document.createElement("input");
				inputcheckboxsolo.setAttribute("type","checkbox");
				inputcheckboxsolo.setAttribute("checkboxtype","solo");
				var textsolo=document.createTextNode(dataarr[i]);
				var pp = document.createElement("span");
				pp.appendChild(textsolo);
				element.appendChild(pp);
				element.appendChild(inputcheckboxsolo);
			}
			//给容器做一个事件委托
			element.addEventListener("click",function(e){

				if (e.target.getAttribute("checkboxtype")=="all") {
					e.target.checked=true;
					element.querySelectorAll("input[checkboxtype=solo]").forEach((i)=>{
						i.checked=true;
					});
				}
				if (e.target.getAttribute("checkboxtype")=="solo"){	
					//console.log(e.target.checked);
					var num=0;
					element.querySelectorAll("input[checkboxtype=solo]").forEach((i)=>{
						if(i.checked==true){
							num++;
						}
					});
					if (num==0) {
						e.target.checked=true;
					}else if (num==dataarr.length) {
						element.querySelector("input[checkboxtype=all]").checked=true;
					}else{
						element.querySelector("input[checkboxtype=all]").checked=false;
					}
				}
				createtable(getData());
			});
		}
		createcheckbox("region-wrapper"	,regionarr);
		createcheckbox("product-wrapper",productarr);
