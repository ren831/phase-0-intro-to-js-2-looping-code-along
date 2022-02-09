function writeCards(names) {
  let newNames = [];
  for (let i = 0; i < names.length; i++) {
    console.log([`Thank you, ${names[i]}, for the wonderful surprise gift!`]);
    newNames.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return newNames;
}

function countDown(number) {
  while (number >= 0) {
    console.log(number--);
  }
}
