Bir öğrencinin adını `useReducer` hook'u ile yöneten basit bir React componenti oluştur.
 "Adı Değiştir" butonu tıklandığında, input alanındaki değer öğrencinin yeni adı olarak güncellensin.

- Önce reducer'da ilgili case'de state güncellemesini yap.
- handleClick'de adı değiştirecek action'ı dispatch et.

  ----------------------------------------------------------------
  🎯 Soru ne istiyor?
	//•	Öğrencinin adı bir reducer ile yönetilecek (state.name)
//	•	Inputa yazdığın yeni isim, “Adı Değiştir” butonuna tıklanınca dispatch edilerek güncellenecek
//  🔁 Genel Akış Mantığı:
//	1.	Kullanıcı input’a yazı yazar (inputValue)
//	2.	Butona tıklayınca handleClick çalışır
//	3.	dispatch({ type: "changeName", payload: inputValue }) ile reducer’a bildirim gönderilir
//	4.	Reducer state.name’i günceller
//	5.	Component yeniden render edilir, ekranda yeni isim görünür

// Not : ✅ Tanım: dispatch() fonksiyonu, reducer fonksiyonuna bir mesaj (action) gönderir. Bu mesajda ne yapılması gerektiği (type) ve gerekirse hangi veriyle (payload) yapılacağı belirtilir. Reducer bu mesajı alır ve ona göre yeni bir state oluşturur.


	

  import  { useReducer, useState } from "react";

const initialState = { name: "Misafir" };

function reducer(state, action) {
  switch (action.type) {
    case "changeName":
      return {...state, name: action.payload };
    default:
      return state;
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

//  ✅ 2. handleClick fonksiyonunda ne yapmalısın?

//Inputtan gelen değeri (inputValue) al ve dispatch ile reducer’a gönder: 

   const handleClick = () => {
    dispatch({ type: "changeName", payload: inputValue });
  };

  return (
    <div>
      <p>Öğrenci Adı: {state.name}</p>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>Adı Değiştir</button>
    </div>
  );
}
