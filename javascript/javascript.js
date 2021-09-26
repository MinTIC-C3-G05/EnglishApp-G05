

///let videoSRC;
console.log("hello");

let videos = ['https://www.youtube.com/embed/1j7AmQEYSFo',
 'https://www.youtube.com/embed/lX6JcybgDFo', 
 'https://www.youtube.com/embed/TGI4oz1QnZo', 
 'https://www.youtube.com/embed/IbWOQWw1wkM',
 'https://www.youtube.com/embed/fzew3PgeCj0', 
 'https://www.youtube.com/embed/Y486eiRm1q8', 
 'https://www.youtube.com/embed/ztrtZ0en8dw'];

function numRandom(){

    let num = Math.floor(Math.random()*videos.length);
    return num;

}


 $(document).ready(function(){
    
    
    
    $("#slide1").html('<iframe class="d-block w-100" width="500" height="450" src="' + videos[numRandom()] + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    $("#slide2").html('<iframe class="d-block w-100" width="500" height="450" src="' + videos[numRandom() + 1] + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    $("#slide3").html('<iframe class="d-block w-100" width="500" height="450" src="' + videos[numRandom() - 1] + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    
    $("#video1").html('<iframe class="card-img-top" width="560" height="315" src="' + videos[Math.floor(Math.random()*videos.length)] + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    $("#video2").html('<iframe class="card-img-top" width="560" height="315" src="' + videos[Math.floor(Math.random()*videos.length)] + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    $("#video3").html('<iframe class="card-img-top" width="560" height="315" src="' + videos[Math.floor(Math.random()*videos.length)] + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
 });

/* function mixvideo() {
    num = Math.floor(Math.random()*videos.length);
    videoSRC = videos[num];
    console.log(videoSRC);
 }
mixvideo(); */


