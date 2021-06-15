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

function HandDoiViTri() {
  var tam = [];
  var vitri = document.getElementById("viTri").value;
  var vitri2 = document.getElementById("viTri2").value;
  for (var i = 0; i < listNumber.length - 1; i++) {
    for (var j = i + 1; j < listNumber.length; j++) {
      tam = listNumber[vitri];
      listNumber[vitri] = listNumber[vitri2];
      listNumber[vitri2] = tam;
    }
  }
  getEle("footerCard2").innerHTML = listNumber;
}
