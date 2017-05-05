window.onload = function () {
    var music = document.getElementById("music");
    var audio = document.getElementsByTagName("audio")[0];
    //拿到各个页面
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");

    //当音乐播放完停止,自动停止旋转效果
    audio.addEventListener("ended",function (event) {
        music.setAttribute("class","")
    },false);

    // //当点击音乐图标,控制音乐播放效果
    // music.onclick = function () {
    //     if (audio.paused){
    //         audio.play();
    //        // this.setAttribute("class","play")
    //         this.style.animationPlayState = "running";
    //         this.style.webkitAnimationPlayState = "running";
    //     }else {
    //         audio.pause();
    //        // this.setAttribute("class","")
    //         this.style.animationPlayState = "paused";  //存在兼容性问题
    //         this.style.webkitAnimationPlayState = "paused";
    //     }
    // }
    //解决300毫秒延迟问题, 300毫秒是为了区分短按还是长按
    music.addEventListener("touchstart",function (event) {
        if (audio.paused){
            audio.play();
            // this.setAttribute("class","play")
            this.style.animationPlayState = "running";
            this.style.webkitAnimationPlayState = "running";
        }else {
            audio.pause();
            // this.setAttribute("class","")
            this.style.animationPlayState = "paused";  //存在兼容性问题
            this.style.webkitAnimationPlayState = "paused";
        }
    },false)

    page1.addEventListener("touchstart",function (event) {
        page1.style.display = "none";
        page2.style.display = "block";
        page3.style.display = "block";
        page3.style.top = "100%";

        setTimeout(function () {
            page2.setAttribute("class", "page fadeOut");
            page3.setAttribute("class", "page fadeIn");
        },5500)
    },false)
}