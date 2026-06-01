import { ref } from 'vue'
import produtos from "@/data/products"

const carrinho = ref([
  {
    "id": 1,
    "titulo": "Harry Potter e a Pedra Filosofal",
    "autor": "J.K. Rowling",
    "resenha": "Livro clássico de fantasia que introduz um universo mágico e atemporal, narrando o amadurecimento de um jovem bruxo e sua luta contra as forças das trevas.",
    "preco": 69.90,
    "quantidade": 1,
    "capa": "https://a-static.mlcdn.com.br/%7Bw%7Dx%7Bh%7D/livro-harry-potter-e-a-pedra-filosofal-capa-dura-edicao-comemorativa-dos-20-anos-da-colecao-harry-potter/magazineluiza/225550000/82b6af40e5078ec116a26f58ba309185.jpg",
    "precoTotal": 69.90
  },
  {
    "id": 5,
    "titulo": "O Príncipe Cruel",
    "autor": "Holly Black",
    "resenha": "Romance de fantasia sombria repleto de intrigas políticas e traições, focado na luta de uma jovem humana para sobreviver e conquistar poder entre as criaturas cruéis do reino das fadas.",
    "preco": 59.90,
    "quantidade": 2,
    "capa": "https://m.media-amazon.com/images/I/81FH6q0EqYS._AC_UF1000,1000_QL80_.jpg",
    "precoTotal": 119.60
  },
   {
    "id": 8,
    "titulo": "O Canto Mais Escuro da Floresta",
    "autor": "Holly Black",
    "resenha": "Fantasia urbana sombria que mistura folclore celta e romance, onde dois irmãos tentam quebrar uma maldição ancestral em uma cidadezinha cercada por fadas perigosas.",
    "preco": 59.90,
    "quantidade": 1,
    "capa": "https://m.media-amazon.com/images/I/910MCHGXJcL.jpg",
    "precoTotal": 59.90
  },
])

function addCarrinho(idLivro, quantidade) {
  const livro = produtos.find((p) => p.id === idLivro)
  if (livro) {
    const itemExistente = carrinho.value.find((item) => item.id === idLivro)
    if (itemExistente) {
      itemExistente.quantidade += quantidade
      itemExistente.precoTotal = itemExistente.quantidade * livro.preco
    } else {
      carrinho.value.push({
        ...livro,
        quantidade,
        precoTotal: quantidade * livro.preco,
      })
    }
  }
}

function removeCarrinho(idLivro) {
  const index = carrinho.value.findIndex((item) => item.id === idLivro)
  if (index !== -1) {
    carrinho.value.splice(index, 1)
  }
}

function valorAltera() {
  return carrinho.value.reduce((total, item) => total + item.precoTotal, 0)
}

function diminuiQuantidade(idLivro) {
  const livro = produtos.find((p) => p.id === idLivro)
  if (livro) {
    const itemExistente = carrinho.value.find((item) => item.id === idLivro)
    if (itemExistente) {
      itemExistente.quantidade -= 1
      itemExistente.precoTotal = itemExistente.quantidade * livro.preco
    }
  }
}


function aumentaQuantidade(idLivro) {
  const livro = produtos.find((p) => p.id === idLivro)
  if (livro) {
    const itemExistente = carrinho.value.find((item) => item.id === idLivro)
    if (itemExistente) {
      itemExistente.quantidade += 1
      itemExistente.precoTotal = itemExistente.quantidade * livro.preco
    }
  }
}

function excluirProduto(idLivro) {
  const index = carrinho.value.findIndex((item) => item.id === idLivro)
  if (index !== -1) {
    carrinho.value.splice(index, 1)
  }
}

export { carrinho, addCarrinho, removeCarrinho, valorAltera, diminuiQuantidade, aumentaQuantidade, excluirProduto }
