import "./styles.css";

const deleteButtons = document.querySelectorAll("li span");

deleteButtons.forEach(function(button,index){
  button = button.addEventListener("click",(event)=>{
    event.target.parentElement.remove();
  });
});
----------------CHATGPT--------------
   deleteButtons.forEach(button => {
            button.addEventListener("click", function(event) {
                event.target.parentElement.remove(); // 🗑️ Tıklanan öğenin `parentElement`'ini sil
            });
        });
----------------CHATGPT--------------
<!--
<!DOCTYPE html>
<html>

<head>
  <title>Parcel Sandbox</title>
  <meta charset="UTF-8" />
</head>

<body>
  <ul id="list">
    <li>Item 1 <span>sil</span></li>
    <li>Item 2 <span>sil</span></li>
    <li>Item 3 <span>sil</span></li>
    <li>Item 4 <span>sil</span></li>
    <li>Item 5 <span>sil</span></li>
  </ul>

  <script src="index.js">
  </script>
</body>

</html>
-->
