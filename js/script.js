// 1. creo un array con le immagini
// 2. stampo le immagini dell'array dentro l'html con classe d-none (tranne il primo a cui tolgo il d-none)
// 3. creo i bottoni con i quali modifico la classe d-none delle immagini
// 4. assegno la possibilita ai bottoni di resettare lo scorrimento delle immagini per ricominciare a vedere le immagini
const itemsWrapper = document.querySelector('.items-wrapper');
const thumbContent = document.querySelector('.thumb-content')
const btnUp = document.querySelector('.up')
const btnDown = document.querySelector('.down')

// const imagesList = [
//   'img/01.webp',
//   'img/02.webp',
//   'img/03.webp',
//   'img/04.webp',
//   'img/05.webp'
// ]

const imagesList = [
  {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];


let counterImg = 0;

imagesList.forEach((imageObj) => {
  itemsWrapper.innerHTML += `<img src="${imageObj.image}" alt="" class="item d-none">
                              <div class="description w-100 d-none position-absolute bottom-0 end-0 pe-4 text-end text-white bg-dark bg-opacity-50">
                              <h3 class="mt-3">${imageObj.title}</h3>
                              <p>${imageObj.text}</p>
                              </div>`;
  thumbContent.innerHTML += `<img src="${imageObj.image}" alt="" class="thumb-item">`;
});


// `<div class="description"><h3 class="mt-3">${member.name}</h3><p>${member.role}</p></div>`




const itemList = document.getElementsByClassName('item');
const description = document.getElementsByClassName('description');
const thumbList = document.getElementsByClassName('thumb-item');

itemList[counterImg].classList.remove('d-none');
description[counterImg].classList.remove('d-none');
thumbList[counterImg].classList.add('active');



btnDown.addEventListener('click', function(){
  downUp(true);
});

btnUp.addEventListener('click', function(){
  downUp(false);
});


function downUp(isDown){
  itemList[counterImg].classList.add('d-none');
  description[counterImg].classList.add('d-none');
  thumbList[counterImg].classList.remove('active');

  if(isDown){

    counterImg++;
    if(counterImg === imagesList.length) counterImg = 0;

  }else{

    counterImg--;
    if(counterImg < 0) counterImg = imagesList.length - 1;

  }
  
  itemList[counterImg].classList.remove('d-none');
  description[counterImg].classList.remove('d-none');
  thumbList[counterImg].classList.add('active');

};


