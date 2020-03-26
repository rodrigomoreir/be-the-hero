// importando o modulo express para dentro da variavel 'express'
const express = require('express');

//importando o cors, modulo de segurança de quem pode acessar essas informações
const cors = require('cors');

// importando as rotas 
const routes = require('./routes');

// instanciando aplicação
const app = express();

app.use(cors());
// antes das requisições express pegar o json em objeto do javascript
app.use(express.json());
app.use(routes);


app.listen(3333);

/**
 * ex: http://bla.com.br/users
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/listar uma informação do Back-end
  * POST: Criar uma informação no Back-end
  * PUT: Alterar informação no back-end
  * DELETE: Deletar uma informação no Back-end
  */

  /**
   * Tipos de Parâmetros:
   * 
   * Query params: parametros nomeados enviados na rota após "?" (filtros, paginação)
   *    ex: .../users?page2&name=Rodrigo&idade=25
   *    acessado por 'query'
   * Route params: paramentros utilizados para identificar recursos
   *    ex: .../users/ --> Identifica usuario de id:1
   *    acessado por 'params'
   * Request Body: corpo da requisição utilizado para criar ou utilizar recursos (POST)
   *    acessado por 'body'
   */ 
   
   /** 
   * sempre que precisar conetar novamente o servidor, dar um 'npm start'.
   */

   /**
    * SQL: MwSQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server (mais utilizado no mercado)
    * NoSQL: MongoDB, CouchDB, etc (bancos não relacionais)
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where() -->caso de JavaScript
     * 
     */

     /**
      * Migrations facilitam as criações de tabelas e demais funcionalidades, automatiza
      */

//direcionamento para a pagina principal



