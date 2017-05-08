//轮播
var jj=document.getElementsByTagName("ul")[0];
var lilist=document.getElementsByClassName("bannerlist")[0].children;//5个数字获取
var i=0;
var ti=setInterval(time,5000);
function time(){
	if(i==5){
		i=0;
		jj.style.marginLeft="0";
	}
	i++;
	jj.style.marginLeft=i*(-500)+"px";
	for (var k=0;k<lilist.length;k++) {//5个数字运动变色
		lilist[k].className="";
	}
	lilist[i>=5?0:i].className="now";
}
//左右小条
/*var log=document.getElementById("lr");
var leftlog=log.getElementsByClassName("left")[0];
var rightlog=log.getElementsByClassName("right")[0];
leftlog.onclick=function(){
	jj.style.marginRight=500+"px";
	console.log(1);
}*/
//5个数字点击
for (var y=0;y<lilist.length;y++) {//大循环
	lilist[y].index=y;//获取lilist的下标
	lilist[y].onclick=function(){//让图跟着跳转
		jj.style.marginLeft=this.index*(-500)+"px";
		for (var r=0;r<lilist.length;r++) {//让数跟着跳转
			lilist[r].className="";
		}
		this.className="now";//让数跟着跳转，利用classname名
		i=this.index;//让图跟着跳转，利用下标相等
	}
}//大循环
