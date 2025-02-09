index.js sayfasındaki kodu tamamlayarak, keyDiv id'li element'in arkplan rengini  keyDown event'i ile değiştir.

- get metodu ile keyDiv id'li element'i yakala ve box isimli bir değişkende sakla.
- w harfine basıldığında green olsun.
- i harfine basıldığında  red olsun.
- t harfine basıldığında purple olsun.

const box = document.getElementById("keyDiv");

document.addEventListener("keydown", function(event){
  if(event.key ==="w") {
    box.style.backgroundColor = "green";
  } else if (event.key === "i") {
    box.style.backgroundColor = "red";
  } else if (event.key === "t") {
    box.style.backgroundColor = "purple";
  }
})

