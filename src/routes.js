import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Paginas/Home";
import GestaoFuncionario from "./components/GestaoFuncionario/GestaoFuncionario";
import { AppProvider } from "./AppContext";

function AppRoutes(){

    return(
        <BrowserRouter>
        <AppProvider>
            <Routes>
                <Route path="/" element={ <Home></Home> }> </Route>
                <Route path="/funcionariosAndCargos" element={ <GestaoFuncionario/> }> </Route>
            </Routes>
        </AppProvider>
            
        </BrowserRouter>

    )
}

export default AppRoutes;