import { useState } from "react";
const Login = () => {
  const [user, setUser] = useState("");

  const InputChangeHandler = (event) => {
    const inputValue = event.target.value;
    if (inputValue.includes("o")) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    }
    setUser(inputValue);
  };

  const RegisterHandler = () => {
    if (user.trim() === "" || user.toLowerCase().includes("o")) {
      alert("Usuario inválido para la registración");
    } else {
      alert("Usuario registrado correctamente");
    }
  };

  return (
    <div className="login-container">
      <input
        type="text"
        placeholder="Nombre de Usuario"
        value={user}
        onChange={InputChangeHandler}
      />
      <button onClick={RegisterHandler}>Registrarse</button>
      <p>{user}</p>
    </div>
  );
};

export default Login;
