function getStyle(obj,attr){
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	} else{
		return getComputedStyle(obj,false)[attr];
	}
}
function startMove(obj,json){//obj：操作对象，json是想要达到的最终效果
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		for(attr in json){
			//获取当前的属性值
			var iCur=parseInt(getStyle(obj,attr));
			document.title=iCur;
			//给一个运动速度
			var speed=(json[attr]-iCur)/8;
			speed>0?speed=Math.ceil(speed):speed=Math.floor(speed);
			//判断
			if(iCur==json[attr]){
				clearInterval(obj.timer);
			}else{
				obj.style[attr]=(iCur+speed)+"px";
			}
		}
	},30)
}