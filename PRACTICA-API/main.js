
const url = 'https://rickandmortyapi.com/api/character/';

fetch(url)
  .then(res => res.json())
  .then(data => console.log(data.results[0].name));

const characters = async (id) => {
  try {
    const characters = await fetch(url + id);
    const data = await characters.json();
    const obj = {};
    obj.name = data.name;
    obj.img = data.image;
    pintarCard(obj);
    cards.appendChild(fragment);
  } catch (error) {
    console.log(error);
  }
};


for (let i = 1; i <= 50; i++) {
  characters(i);
};

const cardCharacterTemplate = document.querySelector('#cardCharacter');
const cards = document.querySelector('.row');
const fragment = document.createDocumentFragment();

const pintarCard = (obj) => {
  const clone = cardCharacterTemplate.content.firstElementChild.cloneNode(true);
  clone.querySelector('p').textContent = obj.name;
  clone.querySelector('img').setAttribute('src', obj.img);
  fragment.appendChild(clone);
};
