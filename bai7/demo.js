var listNumber = [];
function getEle(id) {
  return document.getElementById(id);
}
getEle("pushArray").addEventListener("click", function (event) {
  event.preventDefault();
  var number = getEle("txtSoNguyen").value;
  number = parseInt(number);
  listNumber.push(number);
  getEle("footerCard").innerHTML = listNumber;
});

function HandGiaTriTangDan() {
  var tam = [];
  for (var i = 0; i < listNumber.length - 1; i++) {
    for (var j = i + 1; j < listNumber.length; j++) {
      if (listNumber[i] > listNumber[j]) {
        tam = listNumber[i];
        listNumber[i] = listNumber[j];
        listNumber[j] = tam;
      }
    }
  }
  getEle("footerCard2").innerHTML = listNumber;
}
