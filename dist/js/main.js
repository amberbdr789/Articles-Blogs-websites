var i = 0;//start point
var time = 900;
var wordSlideH = document.querySelector(".wordSlideH");
//image list 
 var words= ['Articles','Tricks', 'Projects', 'Magazines', 'Resources', 'Examples'];

//change words
function changeWords () {
    wordSlideH.innerHTML = words[i];

    if (i < words.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout( "changeWords()", time );
}
window.onload = changeWords; 

