import { useState, useEffect} from 'react';
import './GestaoFuncionario.css';
import './GestaoFuncionario.css'
import Notification from '../NotificationCard/index'
import Header from '../Header/header';
import { useAppContext } from '../../AppContext';

function GestaoFuncionario(){


  const { state , dispatch } = useAppContext();


  const handleAddCargoGlobal = (novoCargo) => {

      dispatch({
        type: 'ADD_CARGOS',
        payload: { id: novoCargo.id , nome: novoCargo.nomeCargo, salario: novoCargo.salario },
      });
     
  };
  const handleAddFuncionarioGlobal = (novoFuncionario) => {

    dispatch({
      type: 'ADD_FUNCIONARIOS',
      payload: { codigo: novoFuncionario.codigo, codigo_cargo: novoFuncionario.codigo_cargo, 
                  nome: novoFuncionario.nome, salario: novoFuncionario.salario },
    });
   
};

 const [selectedCargoId, setSelectedCargoId] = useState('');
 const[nomeFuncionario,setNomeFuncionario]= useState('')

 const [salario, setSalario]= useState('')
 const[nomeCargo,setNomeCargo]= useState('')

 const [showNotificationCargo, setShowNotificationCargo] = useState(false);
 const [showNotificationFuncionario, setShowNotificationFuncionario] = useState(false);

 const [cargos, setCargos ] = useState([])
 const [funcionarios, setFuncionarios]= useState([])
 

//2
 const handleAddFuncionario = (selectedCargoId) => {
  if(nomeFuncionario==''){
    alert('Digite um Nome ! ')
    return;
  }
  if(selectedCargoId== ''){
    alert('Selecione um cargo !')
    return;
  }

  let salario = 0;

  for (const cargo of state.cargos) {
    if (cargo.id === parseInt(selectedCargoId)) {
      salario = cargo.salario;
      break;
    }
  }

    const novoFuncionario= {
      codigo: state.funcionarios.length,
      nome: nomeFuncionario,
      codigo_cargo: selectedCargoId,
      salario: salario
       
    }
    
    handleAddFuncionarioGlobal(novoFuncionario)
    setNomeFuncionario('')
    setShowNotificationFuncionario(true)
 }

 //1
 const handleAddCargo = () => {
  if(salario == ''){
    alert('Por favor, insira um salário.');
    return;
  }
  if(nomeCargo == ''){
    alert('Por favor, insira um nome para o cargo !');
    return;
  }

  const novoCargo = { id: state.cargos.length, nomeCargo, salario};
 
  handleAddCargoGlobal(novoCargo)
  setSalario('')
  setNomeCargo('')
  setShowNotificationCargo(true)  
  console.log(cargos,novoCargo)
 }

 useEffect(() => {
  if (showNotificationCargo || showNotificationFuncionario) {
    const timeout = setTimeout(() => {
      setShowNotificationFuncionario(false)
      setShowNotificationCargo(false);
    }, 2000); // 2000 milissegundos = 2 segundos

    return () => clearTimeout(timeout);
  }
}, [showNotificationCargo,showNotificationFuncionario]);

    return(
       <>
        <Header></Header>
        <main className='container'>
          <div className='card-cadastro'>
            <h2>Cadastrar Cargo</h2>
            <p className='nome'>Nome:</p>
            <input placeholder='Digite um nome ' className='nome-input' type='text' 
            value={nomeCargo} onChange={(e)=> setNomeCargo(e.target.value)}/>
            <div></div>
            <label className='salario'>
                Salário: 
            <input placeholder='Digite um salário' className='salario-input' type="number" value={salario} onChange={(e)=> setSalario(e.target.value)} />
           </label>
            <button   onClick={()=> handleAddCargo()} > Cadastrar  </button>
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
            <select  className='funcionario-select' onChange={(e) => setSelectedCargoId(e.target.value)}>
              <option value="">Selecione um Cargo</option>
                {state.cargos.map((cargo) => (
                <option key={cargo.id} value={cargo.id}>
                  {cargo.nome}
                </option>
              ))}
            </select>
            <button className='funcionario-button' onClick={() => handleAddFuncionario(selectedCargoId)}>Cadastrar</button>
          </div> 
        </main>
          {
          showNotificationFuncionario &&  <Notification message="Funcionario adicionado com sucesso!" />
          }
          {
          showNotificationCargo &&  <Notification message="Cargo adicionado com sucesso!" />
          }
      </>   
        
    )
}

export default GestaoFuncionario;