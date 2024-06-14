# Interface administrativa para fazer a gestão de usuários

## Teste a aplicação em sua máquina

Certifique-se de ter o NodeJs instalado em sua máquina antes de prosseguir.

- [NodeJs](https://nodejs.org/en)

1. Acesse o repositório do servidor do sistema de usuários e siga os passos lá descritos para executar o servidor:

- [backend](https://github.com/marcosparreiras/puc-qualidade-de-software-trabalho-01)

IMPORTANTE: Não utilize a versão do backend enviado pelo Canvas na atividade anterior, a versão disponível no repositório sofreu algumas alterações para a integração com o frontend como a habilitação do cors e outros pequenos ajustes demandados pela integração.

IMPORTANTE: Certifique-se que tanto o servidor quanto o banco de dados estão em execução e corretamente configurados em sua máquina antes de prosseguir.

2. Faça o clone deste projeto:

```sh
git clone https://github.com/marcosparreiras/puc-qualidade-de-software-trabalho-02.git
```

3. Navegue ate o diretório do projeto e instale as dependências do projeto com o comando:

```sh
npm install
```

4. Inicie a aplicação em modo de desenvolvimento:

```sh
npm run dev
```

5. Para testar a aplicação, primeiro inicie a aplicação em modo de desenvolvimento e depois em outro shell execute o seguinte comando no diretório deste projeto: 

```sh
npm run cy:open
```

O comando acima irá iniciar o Cypress. Com o Cypress iniciado você deve primeiro selecionar "E2E Testing" e depois selecionar um browser e clicar em "Start E2E Testing".
Após isso será iniciado o browser escolhido e exibido uma tela com a lista de testes de interface desenvolvidos. Clique em um dos testes para executar.
