//获取数据
		function getData(){
			var regarr=[];
			var proarr=[];
			var listarr=[];
			var temparr=[];
			regionwrapper.querySelectorAll("input[checkboxtype=solo]").forEach((i)=>{
				if (i.checked==true) {
					regarr.push(i.previousElementSibling.innerHTML);
				}
			})
			productwrapper.querySelectorAll("input[checkboxtype=solo]").forEach((i)=>{
				if (i.checked==true) {
					proarr.push(i.previousElementSibling.innerHTML);
				}
			})
			if (regarr.length==1&&proarr.length==1) {
				
				for (var j = 0; j < sourceData.length; j++) {
					if(regarr[0]==sourceData[j].region&&proarr[0]==sourceData[j].product){
						
						temparr=[];
						temparr.push(sourceData[j].region);
						temparr.push(sourceData[j].product);
						sourceData[j].sale.forEach((i)=>{
							temparr.push(i);
						})
						listarr.push(temparr);
					}
				}
			}
			if (regarr.length==1&&proarr.length>1) {
				for (var j = 0; j < sourceData.length; j++) {
						if(regarr[0]==sourceData[j].region){
							proarr.forEach((i)=>{
								if (i==sourceData[j].product) {
									temparr=[];
									temparr.push(sourceData[j].region);
									temparr.push(sourceData[j].product);
									sourceData[j].sale.forEach((i)=>{
										temparr.push(i);
									})
									if (temparr) {
										listarr.push(temparr);
									}
								}
							})
						}
					}
			}
			if (proarr.length==1&&regarr.length>1) {
				for (var j = 0; j < sourceData.length; j++) {
						if(proarr[0]==sourceData[j].product){
							
							regarr.forEach((i)=>{
								if (i==sourceData[j].region) {
									temparr=[];
									temparr.push(sourceData[j].product);
									temparr.push(sourceData[j].region);
									sourceData[j].sale.forEach((i)=>{
										temparr.push(i);
									})
									if (temparr) {
										listarr.push(temparr);
									}
								}
							})
							
						}
					}
			}
			if (regarr.length>1&&proarr.length>1) {
				for (var m = 0; m < sourceData.length; m++) {
					for (var j = 0; j < regarr.length; j++) {
						if(regarr[j]==sourceData[m].region){
							proarr.forEach((i)=>{
								if (i==sourceData[m].product) {
									temparr=[];
									temparr.push(sourceData[m].product);
									temparr.push(sourceData[m].region);
									sourceData[m].sale.forEach((i)=>{
										temparr.push(i);
									})
									listarr.push(temparr);
								}
							})
						}
					}
				}
			}
			return listarr;
		}
		//getData();