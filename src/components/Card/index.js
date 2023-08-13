import {FaPersonCirclePlus} from  'react-icons/fa6'
import {AiFillFileText} from 'react-icons/ai'
import './card.css'
import { Link } from 'react-router-dom';
function Cards(){
    return(
    <main className='container'>
      <Link className='link' to={'/funcionariosAndCargos'}>
        <section className='card'>
          <FaPersonCirclePlus className='pessoa-icon'></  FaPersonCirclePlus> <p className='texto-icon'>Gestão de   Funcionários e cargos </p>
        </section>
      </Link>

     <Link className='link' to={'/relatorios'}>
      <section  className='card-relatorio'>
          <AiFillFileText 
          className='pessoa-icon'>
          </AiFillFileText>
          <p className='texto-icon'>Relatórios </p>
      </section>
     </Link>   
      
    </main>
    )
}
export default Cards;