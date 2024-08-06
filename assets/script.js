const lightboxBg = document.createElement('div');
lightboxBg.id = "lightboxBg";
document.body.appendChild(lightboxBg);
const h1 = document.querySelectorAll("h1");
console.log(h1);

const body = document.body;
body.addEventListener('click', function(e) {
    if(e.target.className == 'image') {
        lightboxBg.classList.add('active');
        const lightboxImg = document.createElement('img');
        lightboxImg.src = e.target.src;
        lightboxImg.id = "lightboxImg";
        while(lightboxBg.firstChild) {
            lightboxBg.removeChild(lightboxBg.firstChild);
        }
        lightboxBg.appendChild(lightboxImg);
    }

    if(e.target.className == 'tool') {
        e.target.nextElementSibling.classList.toggle('capt');
    }
});

lightboxBg.addEventListener('click', function() {
    lightboxBg.classList.remove('active')
});