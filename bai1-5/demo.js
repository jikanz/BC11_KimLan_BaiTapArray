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
function handTongSoDuong() {
  var sum = 0;
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      sum += listNumber[i];
    }
  }
  getEle("footerCard2").innerHTML = sum;
}
function baoNhieuSoDuong() {
  var count = 0;
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      count = i + 1;
    }
  }
  getEle("footerCard3").innerHTML = count;
}
function soNhoNhat() {
  var soBeNhat = listNumber[0];
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] < soBeNhat) {
      soBeNhat = listNumber[i];
    }
  }
  getEle("footerCard4").innerHTML = soBeNhat;
}

function soDuongNhoNhat() {
  var soDuongBeNhat = listNumber[0];
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] < soDuongBeNhat && listNumber[i] >= 0) {
      soDuongBeNhat = listNumber[i];
    }
  }
  getEle("footerCard5").innerHTML = soDuongBeNhat;
}
function soChanCuoiCung() {
  var SoChanCuoi = listNumber[0];
  if (listNumber[i] % 2 != 0) {
    SoChanCuoi = -1;
  }
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] % 2 == 0) {
      SoChanCuoi = listNumber[i];
    } else {
    }
  }
  getEle("footerCard6").innerHTML = SoChanCuoi;
}
