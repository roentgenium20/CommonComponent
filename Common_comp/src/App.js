import logo from './logo.svg';
import './App.css';
import DropdownComponent from './DropdownComponent';
import InfoData from './InfoData.json'


function App() {
  return (
    <div >
      
      {/* Common Component */}
      {/* <DropdownComponent isMulti={true}
      style={styles.select} 
      options={options}
      onChange={onChangeInput}
      defaultValue={options[2]}
      label="Choose One!" /> */}


      <DropdownComponent datas={InfoData} />
      
    </div>

   
  );
}

export default App;
