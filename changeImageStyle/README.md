.gallery-section içinde birden fazla img tagi bulunuyor.

Bunları images değişkeninde saklayın.
forEach metodu ile 1., 3., 5. ... sıradakilere white-border, 2., 4., 6. ... sıradakilere gray-border class'ı ekleyin.
Her bir img elemanından red-border classını çıkarın.

<img width="1069" alt="image" src="https://github.com/user-attachments/assets/45f89840-8de2-40b3-b45a-f93ccd650fbd" />

Kodda .style yerine .classList.add() ve .classList.remove() kullanıldı. Bunun sebebi seçilen elemanlara birden fazla stil ekleyebilmek, yönetilebilirliği artırmak ve CSS kodunu HTML’den ayırmak.

Kullanım	Açıklama	Avantajları	Dezavantajları
.style	Doğrudan CSS özellikleri uygulanır	Tek seferlik hızlı değişiklikler için uygundur	Inline (satır içi) CSS kullanıldığı için yönetimi zorlaşır ve diğer CSS kurallarını geçersiz kılar
.classList	Var olan CSS sınıflarını ekleyip çıkarır	CSS ve JavaScript ayrıldığı için kod düzenli olur ve birden fazla stil kolayca uygulanabilir	Ekstra CSS yazmak gerekebilir
