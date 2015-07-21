n=0;
function moveImg(){
	if(n<9){
		n=n+1;	
	}
	else{
		n=0;
		$(".images_box").css({marginLeft:0});
	}
	$(".images_box").animate({marginLeft:-941*n},1000);
}
/*每隔2秒走一次*/
setInterval(moveImg,2000);