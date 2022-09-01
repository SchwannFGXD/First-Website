
document.getElementById("aboutme").addEventListener("mouseover", () => {
    document.getElementById("aboutme").style.color = 'rgb(0, 162, 232)';

});

document.getElementById("aboutme").addEventListener("mouseleave", () => {
    document.getElementById("aboutme").style.color = 'rgb(26, 81, 163)';

});

document.getElementById("personalprojects").addEventListener("mouseover", () => {
    document.getElementById("personalprojects").style.color = 'rgb(0, 162, 232)';

});

document.getElementById("personalprojects").addEventListener("mouseleave", () => {
    document.getElementById("personalprojects").style.color = 'black';

});




document.getElementById("aisection").addEventListener("mouseover", function changeAInew() {
    document.getElementById("aisection").style.backgroundImage = 'url(logo/aihoverlogo.png)';

});

document.getElementById("aisection").addEventListener("mouseleave", function changeAIold() {
    document.getElementById("aisection").style.backgroundImage = 'url(logo/ailogo.png)';

});

document.getElementById("gamessection").addEventListener("mouseover", function changeGamenew() {
    document.getElementById("gamessection").style.backgroundImage = 'url(logo/gamehoverlogo.png)';

});

document.getElementById("gamessection").addEventListener("mouseleave", function changeGameold() {
    document.getElementById("gamessection").style.backgroundImage = 'url(logo/gamelogo.png)';

});
document.getElementById("artsection").addEventListener("mouseover", function changeArtnew() {
    document.getElementById("artsection").style.backgroundImage = 'url(logo/arthoverlogo.png)';

});

document.getElementById("artsection").addEventListener("mouseleave", function changeArtold() {
    document.getElementById("artsection").style.backgroundImage = 'url(logo/artlogo.png)';

});




document.getElementById("aisection").addEventListener("mousemove", function changeAiTnew() {
    document.getElementById("aitext").style.fontSize = "20px";
});

document.getElementById("aisection").addEventListener("mouseleave", function changeAiTold() {
    document.getElementById("aitext").style.fontSize = "0px";

});

document.getElementById("gamessection").addEventListener("mousemove", function changeGameTnew() {
    document.getElementById("gametext").style.fontSize = "20px";
});

document.getElementById("gamessection").addEventListener("mouseleave", function changeGameTold() {
    document.getElementById("gametext").style.fontSize = "0px";

});

document.getElementById("artsection").addEventListener("mousemove", function changeArtTnew() {
    document.getElementById("arttext").style.fontSize = "20px";
});

document.getElementById("artsection").addEventListener("mouseleave", function changeArtTold() {
    document.getElementById("arttext").style.fontSize = "0px";

});