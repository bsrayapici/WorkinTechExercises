# DOM-Exercises

Eger replace yerine replaceAll kullanmak istersek ; 

Burada farklılık olarak (/!/g, 'değiştirilmek istenen eleman') yani global regex kullanmadık 

    <script>
        // Elemanları al
        const firstHead = document.getElementById("first-header");
        const secondHead = document.getElementById("second-header");
        const thirdHead = document.getElementById("third-header");

        // Başlıklardaki ünlem (!) işaretlerini kaldır
        firstHead.textContent = firstHead.textContent.replaceAll('!', '');
        secondHead.textContent = secondHead.textContent.replaceAll('!', '');
        thirdHead.textContent = thirdHead.textContent.replaceAll('!', '');

        // Konsolda kontrol edelim
        console.log(firstHead.textContent);  // "Javascript Rocks"
        console.log(secondHead.textContent); // "Programming Rocks"
        console.log(thirdHead.textContent);  // "Software Development Rocks"
    </script>
