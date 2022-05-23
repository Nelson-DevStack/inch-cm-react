import { useState } from 'react';
import style from './style.module.css';

const Card = () => { 
  const [inchValue, setInchValue] = useState<number>(0);
  const [centimeterValue, setCentimeterValue] = useState<number>(0);
  
  const inchToCm = Number((inchValue * 2.54).toFixed(2));
  const cmToInch = Number((centimeterValue / 2.54).toFixed(2));
  
  const inchCalc = () => {
    const result = inchToCm
    setCentimeterValue(result);
  };

  const cmCalc = () => {
    const result = cmToInch;
    setInchValue(result);
  };
  
  return(
    <div className={style.wrapper}>
      <div className={style.content}>
        <h1 className={style.title}>Converter</h1>
        <p className={style.desc}>
          Just type the value you want to convert. It can be <b>Inch to Centimeter</b> and <b>Centimeter to Inch</b>.
        </p>

        <div className={style.form}>

          <div className={style.inputWrapper}>
            <label className={style.label}>Inch</label>
            <input
              type="number"
              className={style.input}
              placeholder="Inch"
              value={inchValue}
              onChange={(e)=> setInchValue(e.target.valueAsNumber) }
              onKeyUp={inchCalc}
            />
          </div>

          <div className={style.inputWrapper}>
            <label className={style.label}>Centimeter</label>
            <input 
              type="number"
              className={style.input}
              placeholder="Centimeter"
              value={centimeterValue}
              onChange={(e)=> setCentimeterValue(e.target.valueAsNumber) }
              onKeyUp={cmCalc}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Card;