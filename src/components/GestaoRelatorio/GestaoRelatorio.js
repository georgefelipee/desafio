import { useState } from 'react';
import { useAppContext } from '../../AppContext';
import './relatorio.css'
import Header from '../Header/header';

function GestaoRelatorio(){

    const { state , dispatch } = useAppContext();

    const [selectedCargoId, setSelectedCargoId] = useState('');
    const [totalSalarioCargo, setTotalSalarioCargo] = useState(0);

    
  const calculateTotalSalarioCargo = (cargoId) => {

    const totalSalario = state.funcionarios
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
     <Header></Header>
         <main className='container'>
            <div className='card-cadastro'>
                <h2>Relatório de Funcionários</h2>
                <div className='tablewrapper'>
                    <table className='table'>
                        <thead className='table-head'>
                        <tr>
                            <th>Código</th>
                            <th>Nome</th>
                            <th>Salário</th>
                        </tr>
                        </thead>
                        <tbody>
                        {state.funcionarios.map((funcionario) => (
                            <tr key={funcionario.codigo}>
                            <td>{funcionario.codigo}</td>
                            <td>{funcionario.nome}</td>
                            <td>R$ {funcionario.salario}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                    
            </div>

            <div className='relatorio'>
                <h2> Relatório de Salário</h2>
                <select className='relatorio-select' onChange={handleCargoChange}>
                    <option value="">Selecione um cargo</option>
                        {state.cargos.map((cargo) => (
                     <option key={cargo.id} value={cargo.id}>
                        {cargo.nome}
                     </option>
                     ))}
                </select>
                {selectedCargoId && (
                    <p className='total-salario'>Total de Salário: R$ {totalSalarioCargo}</p>
                )}
            </div>
         </main>
            
                
     </>

        
    )
}
export default GestaoRelatorio;