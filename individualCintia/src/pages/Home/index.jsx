import { useParams } from "react-router-dom";
import "./home.css";
export default function Home() {
  const { user } = useParams();
  return (
    <>
      <h1>Home</h1>
      {user == undefined ? (
        <h2>Seja bem vindo, visitante!</h2>
      ) : (
        <h2>Seja bem vindo(a) de volta, {user}!</h2>
      )}
      <p className="boasvindas">
        {" "}
        Bem-vindo ao Mundo das Estrelas! Descubra os melhores shows ao vivo das
        mais talentosas cantoras e bandas femininas do momento. Navegue por
        nossa seleção de eventos imperdíveis e garanta seu lugar na plateia. Com
        promoções exclusivas e ingressos a preços especiais, proporcionamos
        experiências musicais únicas para todos os fãs. Não perca a chance de
        vivenciar momentos inesquecíveis com suas artistas favoritas. Comece a
        sua jornada musical conosco!
      </p>
    </>
  );
}
