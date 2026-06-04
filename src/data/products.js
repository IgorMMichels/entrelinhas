import { ref } from "vue"


const produtos = ref([{
    "id": 1,
    "titulo": "Harry Potter e a Pedra Filosofal",
    "autor": "J.K. Rowling",
    "resenha": "Livro clássico de fantasia que introduz um universo mágico e atemporal, narrando o amadurecimento de um jovem bruxo e sua luta contra as forças das trevas.",
    "preco": 69.90,
    "capa": "https://a-static.mlcdn.com.br/%7Bw%7Dx%7Bh%7D/livro-harry-potter-e-a-pedra-filosofal-capa-dura-edicao-comemorativa-dos-20-anos-da-colecao-harry-potter/magazineluiza/225550000/82b6af40e5078ec116a26f58ba309185.jpg",
    "favorito": false
  },
  {
    "id": 2,
    "titulo": "Harry Potter e a Câmara Secreta",
    "autor": "J.K. Rowling",
    "resenha": "Segundo livro da saga que expande o universo mágico, combinando mistério escolar, preconceito no mundo bruxo e a descoberta de segredos sombrios do passado de Hogwarts.",
    "preco": 69.90,
    "capa": "https://dvxg5do6xbhsu.cloudfront.net/Custom/Content/Products/51/11/5111363_harry-potter-e-a-camara-secreta-capa-dura-edicao-comemorativa-dos-20-anos-da-colecao-harry-potter-127539_z1_638109449015500732.webp",
    "favorito": false
  },
  {
    "id": 3,
    "titulo": "Harry Potter e o Prisioneiro de Azkaban",
    "autor": "J.K. Rowling",
    "resenha": "Terceiro livro da saga que apresenta um jovem bruxo enfrentando desafios e descobrindo segredos sobre seu passado e o mundo mágico.",
    "preco": 69.90,
    "capa": "https://cdn.awsli.com.br/600x450/549/549583/produto/55253940/10228a0a40.jpg",
    "favorito": false
  },
  {
    "id": 4,
    "titulo": "Harry Potter e o Cálice de Fogo",
    "autor": "J.K. Rowling",
    "resenha": "Quarto livro da saga que apresenta um jovem bruxo enfrentando desafios em uma competição misteriosa e enfrentando ameaças.",
    "preco": 69.90,
    "capa": "https://http2.mlstatic.com/D_NQ_NP_929679-MLA78224836449_082024-O.webp",
    "favorito": false
  },
  {
    "id": 5,
    "titulo": "O Príncipe Cruel",
    "autor": "Holly Black",
    "resenha": "Romance de fantasia sombria repleto de intrigas políticas e traições, focado na luta de uma jovem humana para sobreviver e conquistar poder entre as criaturas cruéis do reino das fadas.",
    "preco": 59.90,
    "capa": "https://m.media-amazon.com/images/I/81FH6q0EqYS._AC_UF1000,1000_QL80_.jpg",
    "favorito": false
  },
  {
    "id": 6,
    "titulo": "O Rei Perverso",
    "autor": "Holly Black",
    "resenha": "Segundo volume da trilogia O Povo do Ar, focado em alta tensão política, alianças instáveis e jogos de poder perigosos, onde a protagonista precisa manipular o trono para sobreviver no traiçoeiro reino das fadas.",
    "preco": 59.90,
    "capa": "https://m.media-amazon.com/images/I/91N9kjbqxWS._AC_UF1000,1000_QL80_.jpg",
    "favorito": false
  },
  {
    "id": 7,
    "titulo": "A Rainha do Nada",
    "autor": "Holly Black",
    "resenha": "Conclusão da trilogia repleta de reviravoltas, exílio e estratégias militares, onde a protagonista precisa reivindicar seu lugar por direito e salvar o reino das fadas da destruição total.",
    "preco": 59.90,
    "capa": "https://m.media-amazon.com/images/I/911VeZWLwTL._UF1000,1000_QL80_.jpg",
    "favorito": false
  },
   {
    "id": 8,
    "titulo": "O Canto Mais Escuro da Floresta",
    "autor": "Holly Black",
    "resenha": "Fantasia urbana sombria que mistura folclore celta e romance, onde dois irmãos tentam quebrar uma maldição ancestral em uma cidadezinha cercada por fadas perigosas.",
    "preco": 59.90,
    "capa": "https://m.media-amazon.com/images/I/910MCHGXJcL.jpg",
    "favorito": false
  },
   {
    "id": 9,
    "titulo": "Lady Killers",
    "autor": "Tori Telfer",
    "resenha": "Livro de não-ficção que explora perfis de assassinas em série ao longo da história, analisando seus crimes, contextos sociais e como o preconceito de gênero moldou a percepção pública de seus atos.",
    "preco": 62.90,
    "capa": "https://darkside.vtexassets.com/arquivos/ids/198362/251-lady-killers.jpg?v=638742939007930000",
    "favorito": false
  },
   {
    "id": 10,
    "titulo": "Crime Scene: Anatomia do Mal",
    "autor": "Harold Schechter",
    "resenha": "Livro de não-ficção que detalha os bastidores da ciência forense e da investigação criminal, explorando as técnicas científicas e os métodos de análise utilizados para desvendar crimes reais.",
    "preco": 89.90,
    "capa": "https://m.media-amazon.com/images/I/61tk3xbxUYL._AC_UF1000,1000_QL80_.jpg",
    "favorito": false
  },
   {
    "id": 11,
    "titulo": "A Lista de Convidados",
    "autor": "Lucy Foley",
    "resenha": "Thriller de mistério psicológico no estilo 'quem matou', ambientado em uma ilha remota durante um casamento luxuoso, onde segredos do passado e ressentimentos vêm à tona entre os convidados.",
    "preco": 35.90,
    "capa": "https://m.media-amazon.com/images/I/91polrfYzCL._UF1000,1000_QL80_.jpg",
    "favorito": false
  },
   {
    "id": 12,
    "titulo": "E Não Sobrou Nenhum",
    "autor": "Agatha Christie",
    "resenha": "Clássico absoluto do mistério policial, onde dez desconhecidos isolados em uma ilha são assassinados um a um, seguindo os versos de uma antiga rima infantil.",
    "preco": 39.90,
    "capa": "https://m.media-amazon.com/images/I/71u9uqTYBcL.jpg",
    "favorito": false
  }])

function addFavorito(idLivro) {
  const index = produtos.value.findIndex((item) => item.id === idLivro)
  produtos.value[index].favorito = true
}

function removeFavorito(idLivro) {
  const index = produtos.value.findIndex((item) => item.id === idLivro)
  produtos.value[index].favorito = false
}

export { produtos, addFavorito, removeFavorito}
