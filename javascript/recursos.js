


///let videoSRC;
console.log("hello");

let videos = ['https://www.youtube.com/embed/jaxgeXPgAz0',
 'https://www.youtube.com/embed/lX6JcybgDFo', 
 'https://www.youtube.com/embed/D6_qpaSxAQc', 
 'https://www.youtube.com/embed/5v-wyR5emRw',
 'https://www.youtube.com/embed/saTZ6TRS_HE', 
 'https://www.youtube.com/embed/Y486eiRm1q8', 
 'https://www.youtube.com/embed/ztrtZ0en8dw',
 'https://www.youtube.com/embed/iYwI3hzaXTM', 
 'https://www.youtube.com/embed/f_Febo0yKhc', 
 'https://www.youtube.com/embed/Foy3PBmQKks',
 'https://www.youtube.com/embed/iGlGc057CLk', 
 'https://www.youtube.com/embed/MfsfseVRZOQ', 
 'https://www.youtube.com/embed/Q6MiwSun4L4',
 'https://www.youtube.com/embed/RqLd5O5yBLQ', 
 'https://www.youtube.com/embed/xiohfyQsZxc', 
 'https://www.youtube.com/embed/ag3RnEaB3zM',
 'https://www.youtube.com/embed/R1vskiVDwl4', 
 'https://www.youtube.com/embed/-vZXgApsPCQ', 
 'https://www.youtube.com/embed/IZRzkAw-Fz8',
 'https://www.youtube.com/embed/Wo-C-jgA4Y8', 
 'https://www.youtube.com/embed/R3KeD06ti6c', 
 'https://www.youtube.com/embed/yoa0eIuWcsg'];

function numRandom(){

    let num = Math.floor(Math.random()*videos.length);
    return num;

}


 $(document).ready(function(){
    
    
    
    $("#slide1").html('<iframe class="d-block w-100" width="500" height="450" src="' + videos[numRandom()] + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    $("#slide2").html('<iframe class="d-block w-100" width="500" height="450" src="' + videos[numRandom() + 1] + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    $("#slide3").html('<iframe class="d-block w-100" width="500" height="450" src="' + videos[numRandom() - 1] + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    $("#slide4").html('<iframe class="d-block w-100" width="500" height="450" src="' + videos[numRandom() + 2] + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    $("#slide5").html('<iframe class="d-block w-100" width="500" height="450" src="' + videos[numRandom() - 2] + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    
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

