import { useState } from 'react';
import './GestaoFuncionario.css';
import './GestaoFuncionario.css'
import Header from '../Header/header';
import { useAppContext } from '../../AppContext';

function GestaoFuncionario(){

  const { state , dispatch } = useAppContext();


  const handleAddCargoGlobal = (novoCargo) => {

      dispatch({
        type: 'ADD_CARGOS',
        payload: { id: novoCargo.id , salario: novoCargo.salario },
      });
     
  };

const [selectedCargoId, setSelectedCargoId] = useState(Number);
 const [salario, setSalario]= useState()
 const[nomeFuncionario,setNomeFuncionario]= useState()

 const [cargos, setCargos ] = useState([])
 const [funcionarios, setFuncionarios]= useState([])
 
 const handleAddCargo = (cargos) => {
  const novoCargo = { id: state.cargos.length, salario};
  
 
  setCargos([...cargos, novoCargo]); 
  handleAddCargoGlobal(novoCargo)
  console.log(cargos,novoCargo)
 }

 const handleAddFuncionario = (selectedCargoId) => {
  let salario = 0;

  for (const cargo of cargos) {
    if (cargo.id === parseInt(selectedCargoId)) {
      salario = cargo.salario;
      break;
    }
  }
    const novoFuncionario= {
      codigo: funcionarios.length,
      nome: nomeFuncionario,
      codigo_cargo:selectedCargoId,
      salario: salario

       
    }
    setFuncionarios([...funcionarios,novoFuncionario])
    setNomeFuncionario('')
    console.log(funcionarios,novoFuncionario)
 }

    return(
       <>
        <Header></Header>
        <main className='container'>
          <div className='card-cadastro'>
            <h2>Cadastrar Cargo</h2>
            <label className='salario'>
                Salário: 
            <input className='salario-input' type="number" value={salario} onChange={(e)=> setSalario(e.    target.value)} />
           </label>
            <button onClick={()=> handleAddCargo(cargos)} > Cadastrar cargo </button>
          </div>

          <div className='card-cadastro-funcionario'>
            <h2>Cadastrar Funcionário</h2>
            <label className='funcionario-label'>Nome:</label>
            <input className='funcionario-input'
              type="text"
              placeholder="Nome do funcionário"
              value={nomeFuncionario}
              onChange={(e) => setNomeFuncionario(e.target.value)}
            />
            <div></div>
            <p className='funcionario-cargo'>Cargo:</p>
            <select className='funcionario-select' onChange={(e) => setSelectedCargoId(e.target.value)}>
              <option value="">Selecione um cargo</option>
                {state.cargos.map((cargo) => (
                <option key={cargo.id} value={cargo.id}>
                  {cargo.id}
                </option>
              ))}
            </select>
            <button className='funcionario-button' onClick={() => handleAddFuncionario(selectedCargoId)}>Cadastrar</button>
          </div> 
        </main>
              
      </>   
        
    )
}

export default GestaoFuncionario;