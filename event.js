function showMes(){
	alert("asdfasdf");
}
		// var go=document.getElementById("go");
		//这行代码存在问题，如在这个文件里执行，则无法加载event.addEventListener()
		var aaa=document.getElementById("btn3");
	
		// go.[click]=stopGo(event);
		//<a>在这里不能用HTML事件处理程序
	// btn3.addEventListener("click",showMes,false);
	// //添加事件
	// btn3.addEventListener("click",function(){
	// 	alert(this.value)
	// },false);

	// btn3.removeEventListener("click",showMes,false);
	//删除事件

	var eventUtil={
		//添加句柄
		addHandler:function(element,type,handler){
			if(element.addEventListener){
				element.addEventListener(type,handler,false);
			}else if(element.attachEvent){
				element.attachEvent("on"+type,handler);
			}else{
				element['on'+type]=handler;
			}
		},
		removeHandler:function(element,type,handler){
			if(element.removeEventListener){
				element.removeEventListener(type,handler,false);
			}else if(element.detachEvent){
				element.detachEvent("on"+type,handler);
			}else{
				element['on'+type]=null;
			}
		},
		getEvent:function(event){
			return event||window.event;
		},
		getType:function(event){
			return event.type;
		},
		getElement:function(event){
			return event.target||event.srcElement;
		},
		preventDefault:function(event){
			if(event.preventDefault){
				event.preventDefault();
			}else{
				event.returnValue=false;
			}
		},
		stopPropagation:function(event){
			if(event.stopPropagation){
				event.stopPropagation();
			}else{
				event.cancelBubble=true;
			}
		}
	}

	// eventUtil.addHandler(box,'click',showMes);

	//<a>在这里只能用DOM2级事件处理程序
	// eventUtil.addHandler(btn3,'click',showMes);