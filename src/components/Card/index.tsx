import { useState } from 'react';
import style from './style.module.css';

const Card = () => { 
  const [inchValue, setInchValue] = useState<number>(0);
  const [centimeterValue, setCentimeterValue] = useState<number>(0);
  
  const inchToCm = inchValue * 2.54;
  const cmToInch = centimeterValue / 2.54;
  
  const inchCalc = () => {
    const result = parseFloat(inchToCm.toFixed(2));
    setCentimeterValue(result);
  };

  const cmCalc = () => {
    const result = parseFloat(cmToInch.toFixed(2));
    setInchValue(result);
  };
  
  return(
    <div className={style.wrapper}>
      <div className={style.content}>
        <h1 className={style.title}>Converter</h1>

        <div className={style.inputWrapper}>
          <input
            type="number"
            className={style.input}
            placeholder="Inch"
            value={inchValue}
            onChange={(e)=> setInchValue(parseFloat(e.target.value)) }
            onKeyUp={inchCalc}
          />

          <input 
            type="number"
            className={style.input}
            placeholder="Centimeter"
            value={centimeterValue}
            onChange={(e)=> setCentimeterValue(parseFloat(e.target.value)) }
            onKeyUp={cmCalc}
          />

        </div>
      </div>
    </div>
  );
};

export default Card;