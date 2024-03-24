function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
image(video, 160, 80, 350, 320);
fill(51, 153, 255);
stroke(36, 198, 95);
circle(50, 50, 80);
circle(590, 50, 80);
circle(590, 430, 80);
circle(50, 430, 80);
fill(255, 0, 0);
stroke(255, 145, 0);
rect(90, 40, 460, 20);
rect(90, 420, 460, 20);
rect(40, 90, 20, 300);
rect(580, 90, 20, 300);
}

function take_snapshot() {
    save('birthday_name.png');
}

