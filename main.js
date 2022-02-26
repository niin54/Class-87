canvas=new fabric.Canvas("canvas");
playerx=10;
playery=10;
blockwidth=30;
blockheight=30;
skin="";
block="";
function blockload(get_image) {
    fabric.Image.fromURL(get_image,function (Img) {
        block=Img;
        block.scaleToWidth(150);
        block.scaleToHeight(150);
        block.set({top:playery,left:playerx});
        canvas.add(block);
    });
}
function skinload() {
    fabric.Image.fromURL("player.png",function (Img) {
        skin=Img;
        skin.scaleToWidth(150);
        skin.scaleToHeight(150);
        skin.set({top:playery,left:playerx});
        canvas.add(skin);
    });
}
function bigger() {
    blockwidth=blockwidth+10;
    blockheight=blockheight+10;
    document.getElementById("currentheight").innerHTML=blockheight;
    document.getElementById("currentwidth").innerHTML=blockwidth;
}
function smaller() {
    blockwidth=blockwidth-10;
    blockheight=blockheight-10;
    document.getElementById("currentheight").innerHTML=blockheight;
    document.getElementById("currentwidth").innerHTML=blockwidth;
}
window.addEventListener("keydown",keeydown);
function keeydown(e) {
    keypress=e.keyCode;
    console.log(keypress);
    if(keypress=="37") {
        //left();
        console.log("Left");
    }
    if(keypress=="38") {
        //up();
        console.log("Up");
    }
    if(keypress=="39") {
        //right();
        console.log("Right");
    }
    if(keypress=="40") {
        //down();
        console.log("Down");
    }
    if(keypress=="84") {
        blockload("trunk.jpg");
        console.log("T");
    }
    if(keypress=="68") {
        blockload("dark_green.png");
        console.log("D");
    }
    if(keypress=="76") {
        blockload("light_green.png");
        console.log("L");
    }
    if(keypress=="71") {
        blockload("ground.png");
        console.log("G");
    }
    if(keypress=="87") {
        blockload("wall.jpg");
        console.log("W");
    }
    if(keypress=="89") {
        blockload("yellow_wall.png");
        console.log("Y");
    }
    if(keypress=="82") {
        blockload("roof.jpg");
        console.log("R");
    }
    if(keypress=="67") {
        blockload("cloud.jpg");
        console.log("C");
    }
    if(keypress=="85") {
        blockload("unique.png");
        console.log("U");
    }
    if(e.shiftkey && keypress=="80") {
        bigger();
        console.log("Shift and P");
    }
    if(e.shiftkey && keypress=="77") {
        smaller();
        console.log("Shift and M");
    }
}