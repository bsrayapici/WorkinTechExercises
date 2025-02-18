//Aşağıdaki kodda App component’i içerisinde handleClick fonksiyonunu yazarak, prop olarak Button component'ine yolla ve butona tıklandığında konsola Merhaba, React! yazdırılmasını sağla.

//App.js 
import Button from './Button.js';
export default function App() {

  const handleClick = () => {
    console.log("Merhaba, React");
  };
  return <Button onClick={handleClick} />; 
}
 //Button.js

const Button = ({onClick}) => { 
  const {onClick} = props;
	return <button onClick={onClick}>Tıkla</button>;
 }; 

export default Button;
