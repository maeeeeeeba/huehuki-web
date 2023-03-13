const pics_src = ["picture/hana.jpg","picture/suzuran.jpg","picture/momo.jpg","picture/kawa.jpg","picture/mmen.jpg"];
let num = 0;
 
 
function slideshow_timer(){
    document.getElementById("changePic").src = pics_src[num];
    if (num == 4) {
        num = -1;
    }
    num++;
}
 
setInterval(slideshow_timer, 5000);