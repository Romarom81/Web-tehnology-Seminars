let celsium = parseInt(prompt("Введите значение температуры в гадусах цельсия"));
function Convert(degrees) {
    let forDegrees = (9 / 5) * degrees + 32;
    alert(` Цельсия:  ${celsium}, Фаренгейт: ${forDegrees.toFixed(1)}`);
}
Convert(celsium);
