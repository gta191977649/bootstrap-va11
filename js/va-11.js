/*
	Sparrow JS
    By Episodes (gta191977649)
    Add sound effect for the web
    QQ: 191977649
*/

/////////// 播放特效音 ///////////

function play_sound($name) {
    //alert("test");
    var theSoundElement = document.getElementById($name);
    var playUISound = theSoundElement.play();

    //修正 Uncaught (in promise) DOMException: play() failed
    if(playUISound !== undefined) {
        playUISound.then(_ => {
            theSoundElement.play();
        })
        .catch(error => {
            console.log("Faild to play ui sound.");
        });
    }
    
}
//Jquery 监听a标签hover事件
(function ($) {
    //鼠标划过
    $("a").mouseover(
        function () {
            play_sound("audio_hover");
        }
    );
    //鼠标按下
    $("a").click(
        function () {

            play_sound("audio_click");
        }
    );
}(jQuery));

