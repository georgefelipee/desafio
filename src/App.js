import logo from './logo.svg';
import './App.css';
import { useState } from 'react';






function App() {

 const [selectedCargoId, setSelectedCargoId] = useState(Number);
 const [salario, setSalario]= useState()
 const[nomeFuncionario,setNomeFuncionario]= useState()

 const [cargos, setCargos ] = useState([])
 const [funcionarios, setFuncionarios]= useState([])
 
 const handleAddCargo = (cargos) => {
  const novoCargo = { id: cargos.length, salario};

  setCargos([...cargos, novoCargo]);
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
    setSelectedCargoId()
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
          <button onClick={() => handleAddFuncionario(selectedCargoId)}>Cadastrar</button>
        </div>
        
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

    </div>
  );
}

export default App;
