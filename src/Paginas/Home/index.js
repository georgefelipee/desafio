
import './home.css';
import Cards from '../../components/Card/index.js'
import Header from '../../components/Header/header';
import React, { useEffect } from 'react';
import { useAppContext } from '../../AppContext';


function Home() {
  const { state } = useAppContext();

  useEffect(() => {
    console.log(state.cargos);
    console.log(state.funcionarios);
  }, [state]);
 
  return (
    <div className="App">
    <Header></Header>

    <Cards></Cards>
   
    </div>
  );
}

export default Home;
