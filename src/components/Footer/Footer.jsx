import './Footer.css';
import { useState } from 'react';

const Footer = () => {

    //!state: estado
    //?setState: función para setear el estado
    //*useState('6 de Septiembre'): estado inicial
    const [date, setDate] = useState('6 de Septiembre');
    const [year, setYear] = useState(2023);
    const handleDate = () =>{
        setDate('7 de Septiembre');
        setYear(2024)
    }
    return ( 
        <>
        <p>Hoy es {date} del {year}</p>
        <button onClick={()=>handleDate()}>Cambiar la fecha</button>
        </>
     );
}
 
export default Footer;