import { useState } from 'react';

function GestaoRelatorio({funcionarios,cargos}){

    const [selectedCargoId, setSelectedCargoId] = useState('');
    const [totalSalarioCargo, setTotalSalarioCargo] = useState(0);

    
  const calculateTotalSalarioCargo = (cargoId) => {
    const totalSalario = funcionarios
      .filter((funcionario) => funcionario.codigo_cargo === cargoId)
      .reduce((acc, funcionario) => acc + parseFloat(funcionario.salario), 0);

    return totalSalario.toFixed(2);
  };

    const handleCargoChange = (e) => {
        const cargoId = e.target.value;
        setSelectedCargoId(cargoId);

        if (cargoId) {
            const totalSalario = calculateTotalSalarioCargo(cargoId);
            setTotalSalarioCargo(totalSalario);
          } else {
            setTotalSalarioCargo(0);
        }
    }

    return(

        <>
            <div>
                <h2>Relatório de Funcionários</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Salário</th>
                    </tr>
                    </thead>
                    <tbody>
                    {funcionarios.map((funcionario) => (
                        <tr key={funcionario.codigo}>
                        <td>{funcionario.codigo}</td>
                        <td>{funcionario.nome}</td>
                        <td>{funcionario.salario}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div>
                <h2> Relatório de cargos</h2>
                <select onChange={handleCargoChange}>
                    <option value="">Selecione um cargo</option>
                        {cargos.map((cargo) => (
                     <option key={cargo.id} value={cargo.id}>
                        {cargo.id}
                     </option>
                     ))}
                </select>
                {selectedCargoId && (
                    <p>Total de Salário: R$ {totalSalarioCargo}</p>
                )}
            </div>
                
        </>

        
    )
}
export default GestaoRelatorio;