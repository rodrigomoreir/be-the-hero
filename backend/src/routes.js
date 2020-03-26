const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//criação de rota: POST
routes.post('/sessions', SessionController.create);

//não há problema em criar rotas com metodos diferentes. ex: uma GET e outra POST
routes.get('/ongs', OngController.index);

//Logica que havia aqui abstraida para um controller mas utilizada aqui.
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

//Buscando a rota de criação de incidents das ongs
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);

//rota para deletar algo do banco de dados
routes.delete('/incidents/:id',IncidentController.delete);

module.exports = routes;