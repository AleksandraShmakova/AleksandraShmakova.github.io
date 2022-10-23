window.addEventListener("DOMContentLoaded", function (even) {

    console.log("DOM fully loaded and parsed");
    let с = document.getElementById("click");
    с.addEventListener("click", calculate);

});

function calculate() {
  let firstProduct = Number(document.getElementById('firstProduct').value);
  let firstLot = Number(document.getElementById('firstLot').value);
  let secondProduct = Number(document.getElementById('secondProduct').value);
  let secondLot = Number(document.getElementById('secondLot').value);

  let re = new RegExp(/^[0-9]+$/i);
  if (!(re.test(firstProduct) &&
      re.test(firstLot) &&
      re.test(secondProduct) &&
      re.test(secondLot))) 
  {
    alert('Нужно писать число!');
  } else if (firstProduct == '') {
    alert('Вы не указали цену 1 товару');
  } else if (firstLot == '') {
    alert('Вы не указали кол-во 1 товара');
  } else if (secondProduct == '') {
    alert('Вы не указали цену 2 товару');
  } else if (secondLot == '') {
    alert('Вы не указали кол-во 2 товара');
  } else {
    const cost = firstProduct * firstLot + secondProduct * secondLot;
    document.getElementById('cost').innerHTML =
      'Стоимость равна: ' + cost + ' руб.';
  }
}