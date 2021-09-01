import Sbox from './smallBox'
import Big from './bigBox';
import './App.css';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Sbox title="Reviews" num1="1,281"></Sbox>
      <Sbox title="Average Rating" num1="4.6"></Sbox>
      <Sbox title="Sentimental Analysis" num1="960" num2="122" num3="321" ></Sbox>
      <Big title="Customer Visitors"></Big>
    </div>
  )
}

export default App;