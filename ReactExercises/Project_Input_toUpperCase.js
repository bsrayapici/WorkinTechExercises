/*
ADIM 0:
  Aşağıdaki bileşeni inceleyerek ve state hookunu import ederek başlayın.

ADIM 1:
  State hookunu kullanarak bir state oluşturun.
  Bu state'in başlangıç değeri boş string("") olsun.

ADIM 2:
  'inputDeğeri' uzunluğu 10 karakteri geçerse renk crimson olsun.

ADIM 3:
  inputa değer girildiğinde #output id'li div içinde  BÜYÜK HARFLERLE görünmesini nasıl sağlayabiliriz?

ADIM 4:
  Event nesnesinin içinde bulunan input değerini state'e setter'ı kullanarak atayın.

ADIM 5:
  State'deki değeri ilk haline("") döndürün. (Reset hala çalışmıyor bir sonraki adımı inceleyin).

ADIM 6:
  Inputun başarılı bir şekilde resetlemesi için value'sunu state'ten almalıdır!
  <input /> öğesine şu şekilde fazladan bir prop eklememiz gerekiyor: value={stateDeğeri}
*/

import React, { useState } from 'react'; /* ADIM 0 */

export default function Input() {
  /* ADIM 1 */

  const [inputValue, SetInputValue] = useState('');

  /* ADIM 4 * Input değeri değiştiğinde state'i güncelle*/

  const inputuDeğiştir = (evt) => {
    SetInputValue(evt.target.value);
  };

  const reset = () => {
    /* ADIM 5 */
    SetInputValue('');
  };

  /* 👉 Neden setInputValue kullanıyoruz?
Çünkü input’un içeriğini boş string yaparak temizlemek istiyoruz.
Eğer sadece "inputValue = ''" yazsaydık, React bunu algılamazdı!
✅ setState kullanarak React’e “state değişti” sinyali veriyoruz.*/

  const stil = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: /* ADIM 2 */ inputValue.length < 10 ? 'crimson' : 'blue',
  };

  return (
    <div className="widget-input container">
      <h2>Input</h2>
      <div data-testid="output" style={stil}>
        {inputValue.toUpperCase()}
        {/* ADIM 3 */}
      </div>

      <div>
        <input
          data-testid="input"
          type="text"
          data-testid="input"
          onChange={inputuDeğiştir}
          value={inputValue}
        />{' '}
        {/* ADIM 6'yı input element'ine attribute olarak yazın*/}
        <button id="resetInput" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
