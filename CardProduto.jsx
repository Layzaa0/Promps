import "../styles/cardProduto.css";

export default function CardProduto(props) {
  return (
    <div className="card sombra-card card-personalizado" style={{ width: "18rem" }}>
      <div className="card-body text-center">

        
        {/* título do produto */}
        <h5 className="card-title">{props.titulo}</h5>

        {/* descrição do produto */}
        <p className="card-text">{props.descricao}</p>

        {/* preço do produto */}
        <p className="fw-bold">{props.preco}</p>

        {/* botão de comprar */}
        <button className={`btn ${props.classeBotao}`} onClick={props.aoComprar}>
          Comprar
        </button>
      </div>
    </div>
  );
}