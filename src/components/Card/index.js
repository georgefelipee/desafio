import {FaPersonCirclePlus} from  'react-icons/fa6'
import {AiFillFileText} from 'react-icons/ai'
import './card.css'
import { Link } from 'react-router-dom';
function Cards(){
    return(
    <main className='container'>
      <Link to={'/funcionariosAndCargos'}>
        <section className='card'>
          <FaPersonCirclePlus className='pessoa-icon'></  FaPersonCirclePlus> <p className='texto-icon'>Gestão de   Funcionários e cargos </p>
        </section>
      </Link>

     <section  className='card-relatorio'>
        <AiFillFileText 
        className='pessoa-icon'>
        </AiFillFileText>
        <p className='texto-icon'>Relatorios </p>
     </section>
     
    </main>
    )
}
export default Cards;