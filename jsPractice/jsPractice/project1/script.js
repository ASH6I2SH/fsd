var rectangle= document.querySelector(".center");


rectangle.addEventListener("mousemove", function(dets){

    // console.log(rectangle.getBoundingClientRect());
    var rectDets= rectangle.getBoundingClientRect();
    rectX= rectDets.left;

    // console.log(dets);
    var mouseDets= dets;
    mouseX=mouseDets.clientX;

    mouseInsideX= mouseX-rectX;
   

    if(mouseInsideX < rectDets.width/2){
        var mapper= gsap.utils.mapRange(0, rectDets.width/2, 0, 255, mouseInsideX);
        console.log(mapper);
        rectangle.style.backgroundColor= `rgb(255, ${mapper}, ${mapper})`;
        
    }
    else
    {    
        var mapper= gsap.utils.mapRange( rectDets.width/2, rectDets.width, 255, 0, mouseInsideX);
        console.log(mapper);
        rectangle.style.backgroundColor= `rgb(${mapper}, ${mapper}, 255)`;
    }

})