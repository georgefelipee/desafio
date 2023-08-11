import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SelectComponent from './components/SelectComponent';





function App() {

 const [salario, setSalario]= useState()
 const[nomeFuncionario,setNomeFuncionario]= useState()
 const [cargos, setCargos ] = useState([])
 const [funcionarios, setFuncionarios]= useState([])
 const [selectedCargoId, setSelectedCargoId] = useState(Number);

 const handleAddCargo = (cargos) => {
  const novoCargo = { id: cargos.length, salario};

  setCargos([...cargos, novoCargo]);
  console.log(cargos,novoCargo)
 }

 const handleAddFuncionario = (funcionario,selectedCargoId) => {
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
    setSelectedCargoId('')
    console.log(funcionarios,novoFuncionario)
 }


  return (
    <div className="App">
      <h1>Gestao de funcionarios</h1>
        <div>
          <h2>Cadastrar Cargo</h2>
          <label>
              Salário:
          <input type="number" value={salario} onChange={(e)=> setSalario(e.target.value)} />
        </label>
          <button onClick={()=> handleAddCargo(cargos)} > Cadastrar cargo </button>
        </div>

        <div>
          <h2>Cadastrar Funcionário</h2>
          <input
            type="text"
            placeholder="Nome do funcionário"
            value={nomeFuncionario}
            onChange={(e) => setNomeFuncionario(e.target.value)}
          />
          <select onChange={(e) => setSelectedCargoId(e.target.value)}>
            <option value="">Selecione um cargo</option>
              {cargos.map((cargo) => (
               <option key={cargo.id} value={cargo.id}>
                 {cargo.id}
               </option>
             ))}
          </select>
          <button onClick={() => handleAddFuncionario(nomeFuncionario,selectedCargoId)}>Cadastrar</button>
        </div>

    </div>
  );
}

export default App;
