function preload() {
}

function setup(){
 canvas = createCanvas(640 , 480);
canvas.position(300 , 100);
Video = createCapture(VIDEO);
Video.hide();


}

function draw() {
    image(Video , 0 , 0 , 640 , 480);
}


function takepic() {
    save('pic.png');
}