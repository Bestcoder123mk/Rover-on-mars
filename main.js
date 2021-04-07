var canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
nasa_mars_img=["mars!.jpg","marsiek.jpg","mase.jpg","mae.jpg"];
var random_num=Math.floor(Math.random()*4);
console.log(random_num);
rover_width=100;
rover_height=90;
background_image=nasa_mars_img[random_num];
console.log("background image ="+background_image);
rover_image="rover.png";
rover_x=10;
rover_y=10;
function add() {
    background_imgtag= new Image();
    background_imgtag.onload=uploadbackground;
    background_imgtag.src=background_image;
    rover_imgtag= new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_image;
}
function uploadbackground() {
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function uploadrover() {
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keypress=e.keyCode;
    console.log(keypress);
    if (keypress=="38") {
        up();
        console.log("up");
    }
    if (keypress=="40") {
        down();
        console.log("down");
    }
    if (keypress=="37") {
        left();
        console.log("left");
    }
    if (keypress=="39") {
        right();
        console.log("right");
    }
}
function up() {
    if (rover_y>=0){
        rover_y=rover_y-10;
        console.log("When up is pressed X ="+rover_x+"Y ="+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function down() {
    if (rover_y<=500){
        rover_y=rover_y+10;
        console.log("When down is pressed X ="+rover_x+"Y ="+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function left() {
    if (rover_x>=0){
        rover_x=rover_x-10;
        console.log("When left is pressed X ="+rover_x+"Y ="+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function right() {
    if (rover_x<=700){
        rover_x=rover_x+10;
        console.log("When right is pressed X ="+rover_x+"Y ="+rover_y);
        uploadbackground();
        uploadrover();
    }
}