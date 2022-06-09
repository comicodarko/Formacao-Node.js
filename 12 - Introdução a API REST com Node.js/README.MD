<h1 align="center">Formação Node.js 💻</h1>

<h2 align="center">  
  
  :memo:
  
  Introdução a API REST com Node.js
</h2>

## Revisando

**HTTP** - É um protocolo de transferência de dados na web.
**API** - Software ou biblioteca que permite que alguma coisa se comunique com outra. Interface de comunicação entre duas ou mais coisas.

### **Verbos HTTP**

Tipos de requisições.

- **GET** - Retornar dados do servidor.
- **POST** - Criar novo dado.
- **PUT** - Editar dados.
- **PATCH** - Edita dados parcialmente.
- **PATCH** - Deleta dados.

### **Status Code**

É importante sempre retornar uma resposta com um HTTP Code.

> https://pt.wikipedia.org/wiki/Lista_de_códigos_de_estado_HTTP

### **Webservices**

Basicamente uma API que funciona na WEB, através do protocolo HTTP.  
É possível utilizar de Webservices em projetos diferentes.

### **REST**

Padrão de desenvolvimento de Webservices.

- **Cliente Servidor** - Não pode ser cliente e servidor ao mesmo tempo, pode apenas ser servidor.
- **Stateless** - Não guardar nenhuma informação sobre o estado da requisição.
- **Possibilidade de cache** - Poucas APIs trabalham com o conceito de cache, é normalmente voltado para o desempenho.
- **Saber trabalhar com camadas** - Não importa o que for colocado entra a API e o cliente, ela vai funcionar normalmente.
- **Interface uniforme e direta** - Forma correta de se declarar endpoints. Exemplo abaixo.

>GET    = http://localhost.com/clientes
>POST   = http://localhost.com/clientes
>DELETE = http://localhost.com/cliente/1
>PUT    = http://localhost.com/cliente/1

com o REST é possível retornar **JSON**, **XML** e **arquivos**.

### REST ou RESTFUL?

RESTFUL é quando se é implementado uma API REST com TODAS as especificações REST.

- Level 3 - *Hateoas* - Tabela de links com ações possíveis.   
- Level 2 - Verbos HTTP: POST, GET, PUT, DELETE.
- Level 1 - Dividir informações em rotas diferentes, recursos.
- Level 0 - Todas informações em uma única rota.

Existem extras, como documentação, autenticação, versionamento...

---

