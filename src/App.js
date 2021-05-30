import Header from './components/Header';
import { useState } from 'react';
import { ConverterService } from './services/api-service';

import './App.css';

function App() {
  const [ fromBase, setFromBase ] = useState('');
  const [ fromValue, setFromValue ] = useState('');
  const [ toBase, setToBase ] = useState('');
  const [ toValue, setToValue ] = useState('NaN');

  const [ numeral, setNumeral ] = useState('');
  const [ romanNumeral, setRomanNumeral ] = useState('NaN');

  const submitConverter = () => {
    ConverterService.baseToBase(fromValue, fromBase, toValue)
    .then(res => {
      setToValue(res.data);
    })
    .catch(err => {
      alert(err.error);
    })
  }

  const submitNumeral = () => {
    ConverterService.arabicToRomanNumeral(numeral)
    .then(res => {
      setRomanNumeral(res.data);
    })
    .catch(err => {
      alert(err.error);
    })
  }

  return (
    <div>
      <Header />
      
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>Base Converter</h5>
            <div className='form-group flex-column'>
              <label>Convert From Value</label>
              <input placeholder="Enter value in base i.e 111 for base 2" value={fromValue} onChange={(evt) => setFromValue(evt.target.value)} className='form-control'/>
             
            </div>
            <div className="from-group">
              <label>Convert From Base</label>
              <input placeholder="Enter base number to convert from i.e 2" value={fromBase} onChange={(evt) => setFromBase(evt.target.value)} className='form-control'/>
            </div>
            
            <div className='form-group flex-column'>
              <label>Convert To Base</label>
              <input placeholder="Enter base number to convert to i.e 8" value={toBase} onChange={(evt) => setToBase(evt.target.value)} className='form-control'/>
              
            </div>

            <div className="form-group inline">
              <label>Converted Value (disabled)</label>
              <input disabled value={toValue}  className='form-control disabled'/>
              
            </div>
            <div className='form-group'>
              <button onClick={() => submitConverter()} className='btn btn-primary'>Convert</button>
            </div>
        </div>
      </div>

      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>Number to Roman Numeral</h5>

            <div className='form-group flex-column'>
              <label>Arabic Numeral</label>
              <input placeholder="Enter arabic numeral" value={numeral} onChange={(evt) => setNumeral(evt.target.value)} className='form-control'/>
            </div>

            <div className='form-group flex-column'>
              <label>Roman Numeral (disabled)</label>
              <input disabled value={romanNumeral}  className='form-control disabled'/>
            </div>

            <div className='form-group'>
              <button onClick={() => submitNumeral()} className='btn btn-primary'>Convert</button>
            </div>
        </div>
      </div>

    </div>
  );
}

export default App;
