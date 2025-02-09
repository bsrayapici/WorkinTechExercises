import "./styles.css";

const deleteButtons = document.querySelectorAll("li span");

deleteButtons.forEach(function(button,index){
  button[index] = button.addEventListener("click",(event)=>{
    event.target.parentElement.remove();
  });
});


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
