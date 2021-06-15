function getEle(id) {
  return document.getElementById(id);
}
var listNumber = [];

function handleSoSanh() {
  if (listNumber.length === 0) {
    alert("Vui lòng nhập lại số nguyên dương hoặc số nguyên âm !");
    return;
  }
  var SLAm = 0;
  var SlDuong = 0;
  //Đếm số lượng số âm ,số dương
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      SlDuong++;
    } else {
      SLAm++;
    }
  }
  //Tạo biến max để so sánh
  var max = "";

  if (SlDuong > SLAm) {
    max = "Số lượng số dương nhiều hơn";
  } else {
    max = "Số lượng số âm nhiều hơn";
  }

  getEle("footerCard2").innerHTML = max;
}

getEle("pushArray").addEventListener("click", function (event) {
  event.preventDefault();
  var number = getEle("txtSoNguyen").value;
  number = parseInt(number);
  listNumber.push(number);
  getEle("footerCard").innerHTML = listNumber;
});
