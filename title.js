let onbulb=document.getElementById("onbulb")
let imagecat=document.getElementById("imagecat")
let switchon=document.getElementById("switchon")
let onbutton=document.getElementById("onbutton")
let offbutton=document.getElementById("offbutton")
function onbutton1(){
    onbulb.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    imagecat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    switchon.textcontent="Switch on";
}
function offbutton1(){
    onbulb.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    imagecat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    switchon.textContent="Switch off"

}
function changecolor(grey){
    document.getElementById("onbutton").style.backgroundColor=onbutton;
}