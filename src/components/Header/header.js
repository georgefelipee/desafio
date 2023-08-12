import { Link } from "react-router-dom";


function Header(){
    return( 

        <Link to={'/'}> 
            <header>
                <h1 className='titulo'>Robson Construções</h1>
            </header> 

        </Link>
   

    )
}

export default Header;