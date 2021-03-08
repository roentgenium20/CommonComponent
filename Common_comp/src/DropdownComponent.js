import React, { useState } from 'react';
import Select from 'react-select';
import {Box,Flex } from 'rebass';
import tick from './green-tick.png';
import { Label } from '@rebass/forms'



function DropdownComponent({datas}) {
    
        
const [selected, setSelected] = useState()
const [options, setOptions] = useState( datas.map( (data)=>  {
    return {
        value: data ,
        label: `${data.sortCode} ${data.accountNumber} ${data.accountType} ${data.accountName}`
    }
}
)
)

const changeHandler = (e) =>{
    setSelected({
        value: e.value ,
        label: `${e.value.sortCode} ${e.value.accountNumber} ${e.value.accountType} ${e.value.accountName}`
    })
    setOptions(datas.map( (data)=>  {
        const label= `${data.sortCode} ${data.accountNumber} ${data.accountType} ${data.accountName} `
        return {
            value: data ,
            label: e.value===data?<Flex justifyContent="space-between" >{label} <img src={tick} style={{height: '20px'}} /></Flex>:label          
        }
    }
    ))
}
const styles = {
    control: base => ({
      ...base,
      "&:hover": {
        borderColor: "yellow",
        color: "black"
      }
    }),
    dropdownIndicator: base => ({
      ...base,
      color: "inherit"
    }),
    singleValue: base => ({
      ...base,
      color: "inherit"
    })
  };

    return (

        <div >  
                  
           <Box p={50}
                fontSize={2}
                width={[ 5,5,1]}
                color='purple'
                bg='white'>
            <Label color="black"><b>Common Component</b></Label>   
            <Select value={selected} options={options} onChange={(e)=>changeHandler(e)  }  styles={styles}  />
            </Box>
            
        </div>
    )
}


export default DropdownComponent;