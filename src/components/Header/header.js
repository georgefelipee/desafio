import { Link } from "react-router-dom";
import './header.css'

function Header(){
    return( 

        <Link className="link" to={'/'}> 
            <header className="container-header" >
                <h1 className='titulo'>Robson Construções</h1>
                <Link className="link" to={'/'}>
                    <label className="label-header" >HOME</label>
                </Link>
                 
            </header> 

        </Link>
   

    )
}

export default Header;