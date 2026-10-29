import Header from  "./components/header/Header.jsx";
import Wrapper from  "./components/wrapper/Wrapper.jsx";
import { useState } from "react"
import { ToastContainer } from "react-toastify";
import AuthContext from "./context/AuthContext.js";

function App(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
      setIsLoggedIn(true);
    };

  const logout = () => {
      setIsLoggedIn(false);
  };

    return(
      <div>
          Welcome to React   with JavaScript XML  rider
              {isLoggedIn ? <Header logout={logout}/> : null}
           

            <AuthContext value={login}>
                <Wrapper isLoggedIn={isLoggedIn} />
            </AuthContext>

            <ToastContainer />

      </div>
    );
}
export default App;
