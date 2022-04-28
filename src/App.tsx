import styles from './App.module.css'
import poweredImage from './assets/powered.png'
import leftArrowImage from './assets/leftarrow.png'
import { levels, calculateImc, Level} from './helpers/imc'
import { GridItem } from './components/GridItem/GridItem'
import { useState, useEffect } from 'react'


/* Organizando a aplicação react*/
/* Na função App pode montar todo o esqueleto se for SPA, não precisa modularizar exatamnte tudo*/





function App() {
  
  const [height, setHeight] = useState<number>(0)
  const [weight, setWeight] = useState<number>(0)
  const [toShow, setToShow] = useState<Level |null>(null)


  const handleCalculateButton = () => {
    if(height && weight){
      setToShow(calculateImc(height, weight));
    } else {
      alert('Digite todos os dados')
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeight(0);
    setWeight(0);
  }

  return (
    <div className={styles.main}>
      
      <header>
        <div className={styles.headerContainer}>
         <img src={poweredImage} width='100' alt="" />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1> Calcule o seu imc </h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
       
          <input 
          type="number" 
          placeholder='Insira a sua altura. Ex: 1.75 (em metros)'
          value={height > 0 ? height : ''}
          onChange={(e)=> setHeight(parseFloat(e.target.value))}
          disabled={toShow ? true : false}
          />
          
          <input 
          type="number" 
          placeholder='Insira o seu peso. Ex: 68.42 (em KG)'
          value={weight > 0 ? weight : ''}
          onChange={(e)=> setWeight(parseFloat(e.target.value))}
          disabled={toShow ? true : false}
          />

        <button onClick={handleCalculateButton} disabled={toShow ? true : false}> Calcular </button>

        </div>
        <div className={styles.rightSide}>
          {!toShow && 
          <div className={styles.grid}>
            {levels.map((item, key)=> (
              <GridItem key={key} item={item}/>
            ))}
          </div>
        }
        {toShow &&
          <div className={styles.rightSide}>
            <div className={styles.rightArrow} onClick={handleBackButton}>
              <img src={leftArrowImage} width={25} alt="" />
            </div>
            <GridItem item={toShow}/>
          </div>
        }
        </div>
      </div>

    </div>
  )
}

export default App
