<h1>🔗 InstaBytes API</h1>
<img loading="lazy" src="https://img.shields.io/github/stars/DanielSouza2005?style=social"/>

<h2>💡 Sobre </h2>
<p> API desenvolvida durante a Imersão Backend da Alura, responsável por retornar e manipular dados de posts para a página do InstaBytes. </p>

<h2>🖥️ Tecnologias utilizadas </h2>
<div align="left" dir="auto">
  <a href="https://skillicons.dev" rel="nofollow">
    <img src="https://skillicons.dev/icons?i=javascript,nodejs,express,mongodb" style="max-width: 100%;">
  </a>
  <br>
</div>

<h2>🛠️ Funcionalidades do Projeto </h2>

- 💾 `Banco de Dados`: A API permite buscar, inserir, atualizar e deletar posts armazenados no banco MongoDB.
- 🗂️ `Armazenamento de Arquivos`: Cada post pode ser enviado com uma imagem, que é salva na pasta local do projeto.
- 🤖 `AI`: Integração com o Gemini (IA) para gerar descrições automáticas das imagens enviadas.

<h2>📥 Rotas da API</h2>

- 📄 GET /posts: Retorna todos os posts cadastrados no banco.

- 🔍 GET /posts/:id: Retorna um post específico com base no ID informado.
  
- ➕ POST /posts: Cria um novo post com imagem e descrição gerada pela IA.

- ♻️ PUT /posts/:id: Atualiza os dados de um post existente.
  
- ❌ DELETE /posts/:id: Remove um post do banco com base no ID.
