Aşağıdaki film bilgilerini içeren array'deki filmleri .map() 
metodu ve Movie fonksiyonunu kullanarak component'lere dönüştür,
components değişkeninde sakla.
--------------------------
  const movies = ["Spartacus", "Matrix", "Dune"];

// ✅ Movie fonksiyonu her film için bir div oluşturur
function Movie(title) {
  const container = document.createElement("div");
  container.textContent = title;
  return container;
}

// ✅ `movies` dizisini `map()` ile gezerek component'lere dönüştür
const components = movies.map(Movie);

// ✅ Bütün component'leri sayfaya ekleyelim
components.forEach(component => document.body.appendChild(component));
----------------------------------------------------------
const movies = ["Spartacus", "Matrix", "Dune"];
function Movie(title) {
  const container = document.createElement('div');
  container.textContent = title;
  return container
}
const components = movies.map(Movie).forEach(component => document.body.appendChild(component));
