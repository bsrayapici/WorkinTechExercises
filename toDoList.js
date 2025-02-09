complete butonlarına tıklayınca ilgili item'ların class'ını completed yap. 

- li içindeki span'leri completeButtons isimli değişkende sakla.
- forEach metodu kullanarak her bir item'a click event'i ekle.
- Tıklanan element'in parent element'ine completed class'ını ekle.
- Tıklanan element'i sil.

- İpucu: parentElement, remove, event.target, classList
import "./styles.css";
------------------------------HTML------------------------
<html>

<head>
  <title>Parcel Sandbox</title>
  <meta charset="UTF-8" />
</head>

<body>
  <h1>To-Do List</h1>
  <ul id="list">
    <li>Item 1<span>complete</span></li>
    <li>Item 2<span>complete</span></li>
    <li>Item 3<span>complete</span></li>
    <li>Item 4<span>complete</span></li>
    <li class="completed">Item 5</li>
  </ul>

  <script src="index.js">
  </script>
</body>

</html>
------------------------------HTML------------------------


const completeButtons = document.querySelectorAll("li span");

        // ✅ Her butona click event'i ekle
completeButtons.forEach(button => {button.addEventListener("click", function(event) {
                event.target.parentElement.classList.add("completed"); // 🏷️ Parent'a `completed` class'ı ekle
event.target.remove(); // 🗑️ Tıklanan butonu kaldır
 });
});
