var heartImg = jQuery('#heartImg');
var heartWidth = parseInt(heartImg.attr('width'));

function increaseWidth() {
    if(heartWidth <= 40){
        heartWidth += 2;
        heartImg.attr('width', heartWidth + "%");
        setTimeout(increaseWidth, 100);
    }
}

increaseWidth();