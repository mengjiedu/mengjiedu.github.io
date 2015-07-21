
n=0;
function moveImg(){
	if(n<3){
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
/*点按钮*/
$(".btns a").click(function(){
	$(".btns a").removeClass("current ");
	$(this).addClass("current");
	n=$(".btns a").index(this);/*得到的是哪一个按钮*/
	$(".images_box").animate({marginLeft:-941*n},1000);
})/*点哪个按钮哪张图显示*/
(function() {
    var ind = 2;
    var nav = jQuery(".nav");
    var init = jQuery(".nav .m").eq(ind);
    var block = jQuery(".nav .block");
    block.css({
        "left": init.position().left - 3
    });
    nav.hover(function() {},
    function() {
        block.animate({
            "left": init.position().left - 3
        },
        100);
    });
    jQuery(".nav").slide({
        type: "menu",
        titCell: ".m",
        targetCell: ".sub",
        delayTime: 300,
        triggerTime: 0,
        returnDefault: true,
        defaultIndex: ind,
        startFun: function(i, c, s, tit) {
            block.animate({
                "left": tit.eq(i).position().left - 3
            },
            100);
        }
    });
})()
