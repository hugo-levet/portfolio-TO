function afficheImgEnGrand(i, srcImg) {
    //on récupère la grande image
    var bigImg = document.getElementsByClassName("img_big")[i];
    //on change l'url de la grande image par celle ae idImg
    var newSrcBigImg = srcImg;
    bigImg.setAttribute("src", newSrcBigImg);
}