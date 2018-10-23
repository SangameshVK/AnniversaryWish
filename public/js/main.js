var heartContainer = jQuery('#heartContainer');
heartDivHeight = 0;
var tallUpto = 0.7 * window.screen.availHeight;

function populateWishText1(){
    heartContainer.css("background-image", "url('/resources/heartWithMsg1.png')");
    setTimeout(populateWishText2, 1000);
}

function populateWishText2(){
    heartContainer.css("background-image", "url('/resources/heartWithMsg2.png')");
    setTimeout(populateWishText3, 1000);
}

function populateWishText3(){
    heartContainer.css("background-image", "url('/resources/heartWithMsg3.png')");
    setTimeout(populateWishText4, 1000);
}

function populateWishText4(){
    heartContainer.css("background-image", "url('/resources/heartWithMsg4.PNG')");
    setTimeout(populateWishText5, 1000);
}

function populateWishText5(){
    heartContainer.css("background-image", "url('/resources/heartWithMsg5.png')");
    setTimeout(populateWishText6, 1000);
}

function populateWishText6(){
    heartContainer.css("background-image", "url('/resources/heartWithMsg6.png')");
    //setTimeout(populateWishText6, 1000);
}

function burgeonHeartDiv() {
    if(heartDivHeight <= tallUpto){
        heartDivHeight += 1;
        heartContainer.css('height', heartDivHeight + "px");
        setTimeout(burgeonHeartDiv, 10);
    }
    else {
        populateWishText1();
    }
}

burgeonHeartDiv();

// var heartImg = jQuery('#heartImg');
// var heartWidth = parseInt(heartImg.attr('width'));
// function increaseWidth() {
//     if(heartWidth <= 40){
//         heartWidth += 0.1;
//         heartImg.attr('width', heartWidth + "%");
//         setTimeout(increaseWidth, 10/heartWidth);
//     } else {
//         settleHeart();    
//     }
// }

// function settleHeart() {
//     heartImgDiv.html('');
//     heartImgDiv.css('height', 0 + 'px');
//     heartImgDiv.css("background-image", "url('/resources/heart.png')");
//     heartImgDiv.css("background-position", "center");
//     heartImgDiv.css("background-repeat", "no-repeat");
// }