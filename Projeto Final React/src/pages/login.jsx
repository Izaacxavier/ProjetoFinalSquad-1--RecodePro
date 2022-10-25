import Footer from "../components/Footer";
import Header from "../components/Header";
import { LoginContent } from "../components/login/LoginContent";


export const Login = () => {
  return (
    <div className="App">
      <Header />

      <div>
        <LoginContent />
      </div>

      <Footer />
    </div>
  );
};
