import { useNavigate } from "react-router-dom";
import "./contato.css";

const Contato = () => {
  const navigate = useNavigate();
  const parametro = "Eu sou um Parâmetro";

  const handleClick = () => {
    navigate("/login/" + parametro, { state: "Eu sou uma informação!" });
  };

  return (
    <p>
      <h2>Contato</h2>
      <p className="contatos">(24)99216-5576</p>
      <p className="contatos">adm@gmail.com</p>
      <p className="contatos">(24)2280-0569</p>
    </p>
  );
};

export default Contato;
