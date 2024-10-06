let mangSo = [];

document.getElementById("themMang").onclick = () => {
  let soCanThem = document.getElementById("mangSo").value * 1;
  mangSo.push(soCanThem);

  document.getElementById(
    "showMang"
  ).innerHTML = `Mảng đang xét là: [${mangSo}]`;
};

document.getElementById("clear").onclick = () => {
  mangSo = [];
  document.getElementById(
    "showMang"
  ).innerHTML = `Mảng đang xét là: [${mangSo}]`;
};

document.getElementById("tinhTong").onclick = () => {
  let tongSoDuong = 0;
  for (let i = 0; i < mangSo.length; i++)
    if (mangSo[i] > 0) tongSoDuong += mangSo[i];

  document.getElementById(
    "ketQuaTinhTong"
  ).innerHTML = `Tổng các số dương trong mảng là: ${tongSoDuong}`;
};

document.getElementById("demSo").onclick = () => {
  let count = 0;
  for (let i = 0; i < mangSo.length; i++) if (mangSo[i] > 0) count++;

  document.getElementById(
    "ketQuaDemSo"
  ).innerHTML = `Số số dương trong mảng là: ${count} `;
};

document.getElementById("timSoNhoNhat").onclick = () => {
  let soNhoNhat = mangSo[0];
  for (let i = 0; i < mangSo.length; i++)
    if (soNhoNhat > mangSo[i]) soNhoNhat = mangSo[i];

  document.getElementById(
    "ketQuaTimSoMin"
  ).innerHTML = `Số nhỏ nhất trong mảng là: ${soNhoNhat} `;
};

document.getElementById("timSoNhoNhatDuong").onclick = () => {
  let mangSoDuong = mangSo.filter((item) => item > 0);
  let soNhoNhat = mangSoDuong[0];
  for (let i = 0; i < mangSoDuong.length; i++)
    if (soNhoNhat > mangSoDuong[i]) soNhoNhat = mangSoDuong[i];

  document.getElementById(
    "ketQuaTimSoMinPos"
  ).innerHTML = `Số dương nhỏ nhất trong mảng là: ${soNhoNhat} `;
};

document.getElementById("timSoChan").onclick = () => {
  let soCanTim = 0;
  for (let i = 0; i < mangSo.length; i++)
    if (mangSo[i] % 2 == 0) soCanTim = mangSo[i];

  document.getElementById(
    "ketQuaTimSoChan"
  ).innerHTML = `Số chẵn cuối cùng là: ${soCanTim} `;
};

document.getElementById("doiCho").onclick = () => {
  let viTri1 = document.getElementById("viTri1").value * 1;
  let viTri2 = document.getElementById("viTri2").value * 1;

  let temp = mangSo[viTri1];
  mangSo[viTri1] = mangSo[viTri2];
  mangSo[viTri2] = temp;

  document.getElementById(
    "ketQuaDoiCho"
  ).innerHTML = `Mảng sau khi đổi vị trí: [${mangSo}]`;
};

document.getElementById("sapXep").onclick = () => {
  mangSo.sort((a, b) => a - b);

  document.getElementById(
    "ketQuaSapXep"
  ).innerHTML = `Mảng sau khi sắp xếp tăng dần: [${mangSo}] `;
};

document.getElementById("timSoNguyenTo").onclick = () => {
  let soCanTim = 0;
  function isPrime(n) {
    if (n <= 1) return false;

    for (let i = 2; i < n; i++) if (n % i == 0) return false;

    return true;
  }

  for (let i = 0; i < mangSo.length; i++) {
    if (isPrime(mangSo[i])) {
      soCanTim = mangSo[i];
      break;
    }
  }

  document.getElementById(
    "ketQuaTimSoNT"
  ).innerHTML = `Số nguyên tố đầu tiên trong mảng là: ${soCanTim} `;
};

document.getElementById("demSoNguyen").onclick = () => {
  let count = 0;

  for (let i = 0; i < mangSo.length; i++)
    if (Number.isInteger(mangSo[i])) count++;

  document.getElementById(
    "ketQuaDemSoNguyen"
  ).innerHTML = `Số số nguyên trong mảng là: ${count} `;
};

document.getElementById("soSanh").onclick = () => {
  let countSoDuong = 0;
  let countSoAm = 0;

  for (let i = 0; i < mangSo.length; i++) {
    if (mangSo[i] > 0) countSoDuong++;
    else if (mangSo[i] < 0) countSoAm++;
  }

  if (countSoDuong > countSoAm)
    document.getElementById("ketQuaSoSanh").innerHTML = "Số dương > Số âm";
  else document.getElementById("ketQuaSoSanh").innerHTML = "Số dương < Số âm";
};
