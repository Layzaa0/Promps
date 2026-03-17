import { useState } from "react";
import CardProduto from "../components/CardProduto";

export default function Home() {
  // é pra guardar quantos itens tem no carrinho
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0);

  // essa função adiciona 1 item no carrinho
  function adicionarAoCarrinho(nomeProduto) {
    setQuantidadeCarrinho(quantidadeCarrinho + 1);

    // só para mostrar qual produto foi clicado
    console.log(nomeProduto + " foi adicionado ao carrinho");
  }

  return (
    <div className="container mt-5">
      {/* título da página */}
      <h1 className="text-center mb-3">Loja de Produtos</h1>

      {/* mostra quantos itens foram adicionados */}
      <p className="text-center fs-5">
        Itens no carrinho: <strong>{quantidadeCarrinho}</strong>
      </p>

      {/* linha dos cards */}
      <div className="d-flex justify-content-center gap-4 flex-wrap mt-4">
        <CardProduto
          titulo="Tênis Esportivo"
          descricao="Leve e confortável para caminhada."
          preco="R$ 199,90"
          classeBotao="btn-primary"
          aoComprar={() => adicionarAoCarrinho("Tênis Esportivo")}
        />

        <CardProduto
          titulo="Mochila Escolar"
          descricao="Boa para cadernos, livros e notebook."
          preco="R$ 129,90"
          classeBotao="btn-success"
          aoComprar={() => adicionarAoCarrinho("Mochila Escolar")}
        />

        <CardProduto
          titulo="Garrafa Térmica"
          descricao="Mantém a bebida gelada ou quente."
          preco="R$ 59,90"
          classeBotao="btn-warning"
          aoComprar={() => adicionarAoCarrinho("Garrafa Térmica")}
        />
      </div>
    </div>
  );
}