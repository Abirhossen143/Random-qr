const imagE = document.getElementById("image");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");

function genrateQR() {
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imagE.classList.add("show_img");
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}
