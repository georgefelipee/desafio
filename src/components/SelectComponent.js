import React, { useState } from 'react';


const SelectComponent = ({cargos, onSelect})=> {

    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (e) => {
        const value = e.target.value;
        setSelectedValue(value);
        onSelect(value); // Chama a função de retorno com o valor selecionado
      };

    return(
         <select value={selectedValue} onChange={handleSelectChange}>
            <options value=''> Selecione um Cargo </options>
            {cargos.map((cargo) => (
                 <option value={cargo.id}>
                 {cargo.id}
                 </option>
             ))}
         </select>
    );

};

export default SelectComponent;