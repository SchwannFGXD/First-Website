
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

document.getElementById("linksection").addEventListener("mouseover", () => {
    document.getElementById("linktitle").style.color = 'rgb(0, 162, 232)';

});

document.getElementById("linksection").addEventListener("mouseleave", () => {
    document.getElementById("linktitle").style.color = 'white';

});

document.getElementById("achievementssection").addEventListener("mouseover", () => {
    document.getElementById("achievementstitle").style.color = 'rgb(0, 162, 232)';

});

document.getElementById("achievementssection").addEventListener("mouseleave", () => {
    document.getElementById("achievementstitle").style.color = 'black';

});

document.getElementById("interestsection").addEventListener("mouseover", () => {
    document.getElementById("interesttitle").style.color = 'rgb(0, 162, 232)';

});

document.getElementById("interestsection").addEventListener("mouseleave", () => {
    document.getElementById("interesttitle").style.color = 'black';

});



document.getElementById("githublink").addEventListener("mouseover", function changeArtGitnew() {
    document.getElementById("githublink").src = 'logo/githubhoverlink.png'

});

document.getElementById("githublink").addEventListener("mouseleave", function changeArtGitold() {
    document.getElementById("githublink").src = 'logo/githublink.png'

});

document.getElementById("artinstagram").addEventListener("mouseover", function changeArtInstnew() {
    document.getElementById("artinstagram").src = 'logo/instagramhoverlogo.png'

});

document.getElementById("artinstagram").addEventListener("mouseleave", function changeArtInstold() {
    document.getElementById("artinstagram").src = 'logo/instagramlogo.png'

});