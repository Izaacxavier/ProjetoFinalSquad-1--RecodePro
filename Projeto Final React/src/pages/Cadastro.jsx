import { Cadastrocontent } from "../components/cadastro/Cadastrocontent"
import Footer from "../components/Footer"
import Header from "../components/Header"


export const Cadastro = () => {
    return(

        <div className="App">
            <Header />
            <div>
            <Cadastrocontent />
            </div> 
            <Footer />
        </div>
        
    )
}