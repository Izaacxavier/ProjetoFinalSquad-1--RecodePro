// imagens
import logoimg from "../../img/betin-login.png";
// css
import "./LoginContent.css";
// Router
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Titlelogin } from "./Titlelogin";

export const LoginContent = () => {
  const navigate = useNavigate();

  return (
    <div class="container container-form">
      <div class="row">
        <div className="img-content col-md-6">
          <img src={logoimg} alt="logo de login betin" />
        </div>

        <div className="form-content col-md-6">
          <Titlelogin />
          <form className="login-content">
            <div className="input-login">
              <label htmlFor="password">Email</label>
              <input type="email" placeholder="Digite seu email" />
            </div>

            <div className="input-login">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                placeholder="Digite sua senha"
              />
            </div>

            <div className="btn-form">
              <button className="btn-login">Entrar</button>
              <button
                className="btn-login"
                onClick={() => {
                  navigate("/Cadastro");
                }}
              >
                Cadastre-se
              </button>
            </div>
          </form>
          <div className="ancoras">
            <Link style={{ color: "#e1e1e6" }} to="Recuperacao">
              Esqueceu usuário ou senha? ?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
