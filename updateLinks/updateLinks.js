import "./styles.css";
/* kodlarını aşağıya yaz, üstteki kodu silme */


/* kodunu test etmek için aşağıdaki kod parçasını kullan */

    function updateLinks(texts, classes, links) {
            const navLinks = document.querySelectorAll("header nav a");

            for (let i = 0; i < navLinks.length; i++) {
                if (texts[i]) {
                    navLinks[i].textContent = texts[i]; // Yeni metni ayarla
                }
                if (links[i]) {
                    navLinks[i].href = links[i]; // Yeni href ayarla
                }
                if (classes[i]) {
                    navLinks[i].className = classes[i]; // Classları değiştir
                }
            }
        }

/* updateLinks(["Anasayfa", "Hakkımızda", "Blog"], ["link-item", "link-item-active", "link-item"], ["/", "/about", "/blog"]); */
