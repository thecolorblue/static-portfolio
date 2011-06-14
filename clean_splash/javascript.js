function Particle(){
this.path="images/";
this.images=["particle1.png","particle2.png","particle3.png","particle4.png"];
this.image=this.images[randomInt(this.images.length)];
this.file=this.path+this.image;this.element=document.createElement("img");
this.newPoint().display().newPoint()}Particle.prototype.newPoint=function(){this.pointX=randomInt(window.innerWidth-70);this.pointY=randomInt(500);return this};
Particle.prototype.display=function(){
$(this.element).attr("src",this.file).css("position","absolute").css("top",this.pointY).css("left",this.pointX);
$(document.body).append(this.element);
return this};
function randomInt(a){
return Math.floor(Math.random()*a)}
$(function(){for(i=0;i<100;i++)new Particle});
$(document).ready(function(){
$("img:not(.something img):not(.noblink)").css("z-index","1");
$("img:nth-child(5n+1):not(.something img):not(.noblink)").addClass("pulseone");
$("img:nth-child(3n+1):not(.something img):not(.noblink)").addClass("pulsetwo");
$("img:nth-child(7n+1):not(.something img)").addClass("pulsethree");

	$('.togglevideo').colorbox({width:"640px", height: "378px", inline:true, href:"#video"});
});
