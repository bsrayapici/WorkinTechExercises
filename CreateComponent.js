2/16
lk seferde yaptın!
6.1
W
Aşağıdaki component'i oluşturan ve oluşan component'i geri dönen, MovieDetails adında bir fonksiyon yaz. 

Component:
<div>
    <img src="URL" alt="TITLE">
    <h2>TITLE</h2>
    <p>DESC</p>
</div>


Örnek Veri: 
{
  url: "https://imdb.com/poster",
  title: "Film adı",
  desc: "Film açıklaması"
} 

- Fonksiyon 1 parametre alsın. movie isminde bir obje. (Bu objede title, url, desc bilgileri yer alıyor.)
- Bu fonksiyonda önce div element'i oluştur ve container adında bir değişkende sakla.
- img element'ini oluştur ve poster isimli değişkende sakla.
- Gelen bilgileri component yapısına göre ekle.
- poster'i container içine ekle.
- h2 element'ini oluştur ve title isimli değişkende sakla.
- Gelen başlığı için ekle.
- title'ı container içine ekle.
- p element'ini oluştur ve desc isimli değişkende sakla.
- Gelen açıklamayı buraya ekle.
- desc'i container içine ekle.
- Oluşan component'i geri dön.


function MovieDetails(movie) {
  const container = document.createElement("div");

  const poster = document.createElement("img");
  poster.src=movie.url;
  poster.alt=movie.title;

  const title = document.createElement("h2");
  title.textContent= movie.title;

  const desc = document.createElement("p");
  desc.textContent = movie.desc;

  container.appendChild(poster);
  container.appendChild(title);
  container.appendChild(desc);

  return container;
  }
