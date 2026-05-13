# CRUD Frontend — Usuários

Interface em React para cadastro, listagem, edição e exclusão de usuários, consumindo uma API REST em `http://localhost:3000`.

## Stack

- [React](https://react.dev/) 19 e [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) (rotas)
- [styled-components](https://styled-components.com/) (estilos)
- [Axios](https://axios-http.com/) (HTTP)

## Pré-requisitos

- Node.js (versão compatível com o Vite 8 do projeto)
- API backend ativa na porta **3000** (veja endpoints abaixo)

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal (geralmente `http://localhost:5173`).

Outros scripts:

| Comando        | Descrição              |
| -------------- | ---------------------- |
| `npm run dev`  | Servidor de desenvolvimento |
| `npm run build` | Build de produção     |
| `npm run preview` | Pré-visualiza o build |
| `npm run lint` | ESLint                 |

## Rotas da aplicação

| Caminho               | Página        |
| --------------------- | ------------- |
| `/`                   | Cadastro de usuário |
| `/lista_de_usuarios`  | Lista, edição e exclusão |

## API esperada

A base URL está em `src/services/api.js` (`http://localhost:3000`). O frontend usa:

| Método | Caminho            | Uso |
| ------ | ------------------ | --- |
| `POST` | `/usuarios`        | Cadastro (corpo: `name`, `age`, `email`) |
| `GET`  | `/usuarios`        | Lista todos |
| `PUT`  | `/usuarios/:id`    | Atualização (corpo: `name`, `age`, `email`; resposta esperada com `user` atualizado) |
| `DELETE` | `/usuarios/:id`  | Remove o usuário |

Para usar outro host ou porta, altere `baseURL` em `src/services/api.js` (ou evolua o projeto com variáveis de ambiente, se preferir).

## Estrutura principal

- `src/pages/Home` — formulário de cadastro
- `src/pages/ListUsers` — lista e ações de edição/exclusão
- `src/services/api.js` — cliente Axios
- `src/routes.jsx` — definição das rotas
- `src/components` — componentes reutilizáveis (botão, cabeçalho com imagem)

## Licença

Projeto privado (`"private": true` no `package.json`).
