/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
import checkNumber from "./checkNumber";

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  show();
});

document.querySelector('.card-submit').addEventListener('click', show);

export default function show() {
  Array.from(document.querySelectorAll('.item')).forEach((e) => {
    e.style.display = 'block';
  });
  const input = document.querySelector('.input').value;

  const check = checkNumber(input);
  if (check === 'Visa') {
    document.querySelector('.card-visa').querySelector('.card').style.display = 'none';
  }
  if (check === 'MasteCard') {
    document.querySelector('.card-mastercard').querySelector('.card').style.display = 'none';
  }
  if (check === 'JCB') {
    document.querySelector('.card-jcb').querySelector('.card').style.display = 'none';
  }
  if (check === 'Discover') {
    document.querySelector('.card-discover').querySelector('.card').style.display = 'none';
  }
  if (check === 'Diners Club International') {
    document.querySelector('.card-dinersclub').querySelector('.card').style.display = 'none';
  }
  if (check === 'American Express') {
    document.querySelector('.card-americanexpress').querySelector('.card').style.display = 'none';
  }
  if (check === 'Mir') {
    document.querySelector('.card-mir').querySelector('.card').style.display = 'none';
  }

}
