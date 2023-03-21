import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

// Kodlar buraya gelecek!
function randomColor() {
  const rasgeleSayı1 = Math.floor(Math.random() * 100);
  const rasgeleSayı2 = Math.floor(Math.random() * 100);
  const rasgeleSayı3 = Math.floor(Math.random() * 100);
  const rastgeleRenk = `rgb(${rasgeleSayı1}, ${rasgeleSayı2}, ${rasgeleSayı3})`;
  return rastgeleRenk;
}

const navi = document.querySelector(".main-navigation");
navi.addEventListener("click", () => {
  navi.style.backgroundColor = randomColor();
});
const resimler = document.querySelectorAll("img");
function resimBuyut(event) {
  event.target.style.transform = "scale(1.1)";
}
function resimKucult(event) {
  event.target.style.transform = "scale(1)";
}
resimler.forEach((resim) => {
  resim.addEventListener("mouseover", resimBuyut);
  resim.addEventListener("mouseout", resimKucult);
});
