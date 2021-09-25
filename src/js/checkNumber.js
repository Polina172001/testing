/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
export default function checkNumber(n) {

  const card = `${n}`;
  const sixCount = +card.substring(0, 6);
  const fourCount = +card.substring(0, 4);

  if (card.startsWith('4') && card.length >= 13 && card.length <= 19) {
    return 'Visa';
  }
  if (((sixCount >= 222100 || sixCount <= 272099) || [51, 52, 53, 54, 55]
      .some((e) => card.startsWith(e))) && (card.length === 16)) {
    return 'MasteCard';
  }
  if ((fourCount >= 3528 || fourCount <= 3589)
    .some((e) => card.startsWith(e)) && card.length >= 16 && card.length <= 19) {
    return 'JCB';
  }
  if (((sixCount >= 622126 || sixCount <= 622925) || [6011, 644, 645, 646, 647, 648, 649, 65]
      .some((e) => card.startsWith(e))) && (card.length >= 16 && card.length <= 19)) {
    return 'Discover';
  }
  if (card.startsWith('36') && card.length === 14) {
    return 'Diners Club International';
  }
  if ([34, 37].some((e) => card.startsWith(e)) && card.length === 15) {
    return 'American Express';
  }
  if (card.startsWith('2') && card.length === 16) {
    return 'Mir';
  }

  return false;
}
