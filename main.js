//Parametry, które będą się zmieniali:
let activeElement = 0;
const timeChange = 4000;

//Pobieram elementy na stronie:
const colorImgHtml = document.querySelector('.color');
const grayImgHtml = document.querySelector('.gray');
const h1Html = document.querySelector('.member h1');
const h2Html = document.querySelector('.member h2');

//Tworzę tablice, w których będę umieszczał dane:
const colorImages = ['img/s1.png','img/s2.png','img/s3.png'];
const grayImages = ['img/s1a.png','img/s2a.png','img/s3a.png'];
const names = ['Anna Kolonska', 'Olha Tarnawa', 'Den Kalina'];
const proffesions = ['Apple Centrun','Doktorantka','Programisterr'];

//Tworzę funkcję która będzie podmieniała dane:
function changleSlide(){
    activeElement++;
    if(activeElement == colorImages.length){
        activeElement = 0;
     }
    colorImgHtml.src = colorImages[activeElement];
    grayImgHtml.src = grayImages[activeElement];
    h1Html.textContent = names[activeElement];
    h2Html.textContent = proffesions[activeElement];
}

//Wywołam funkcję - "setInterval()", która sama siebie będzie wywołać(automatycznie wywołanie):
setInterval(changleSlide, timeChange)