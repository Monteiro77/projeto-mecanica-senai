/***************************************************************************************
* Objetivo: API para o projeto de Mecânica
* Data: 22/05/2023
* Autor: Andre,Artur,Oswaldo,Vinicius,Victoria
* Versão: 1.0
***************************************************************************************/

//Import das bibliotecas 

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//Crição do objeto app 
const app = express()

app.use((request, response, next) => {

    //define quem podera usar a API - TODOS
    response.header('Acess-Control-Allow-Origin', '*')
    //Define quais metodos serão utilizados na API
    response.header('Acess-Control-Allow-Method', 'GET, POST, PUT, DELETE, OPTIONS')

    //Atribui as permissões ao cors
    app.use(cors())

    next()
})

/******************************************************
 * Objetivo: Endpoints para o coontrole de alunos
 * Data: 25/05/2023
 * Autor:Vinícius Monteiro
 * Versão: 1.0
 *****************************************************/

const bodyParserJSON = bodyParser.json()
const messages = require('./controller/modulo/config.js')
const controllerAluno = require('./controller/controller_aluno.js')

/********************************************************** ENDPOINT ALUNO ***********************************************************/

// Endpoint que retorna todos os alunos
app.get('/v1/projeto-mecanica/aluno', cors(), async function(request, response){

    
})

// Endepoint que retorna o aluno pelo ID
app.get('/v1/projeto-mecanica/aluno/:id'), cors(), async function(request, response){

    let idAluno = request.params.id
    
}
// Endpoint que retorna o aluno pela matricula
app.get('/v1/projeto-mecanica/aluno:matricula'), cors(), async function(request, response){

}
// Endpoint que retorna o aluno pelo nome
app.get('/v1/projeto-mecanica/aluno/:nome'), cors(), async function(request, response){
    let nomeAluno = request.params.nomeAluno

}
// Endpoint que insere os dados do aluno
app.post('/v1/projeto-mecanica/aluno'), cors(), bodyParserJSON, async function(request, response){

    let contentType = request.headers['content-type']

    if(String(contentType).toLowerCase() == 'application/json'){

    }else{
        
    }

}

// Endpoint que atualiza os dados do aluno
app.put('/v1/projeto-mecanica/aluno/:id'), cors(), bodyParser, async function (request, response){

    let contentType = request.headers['content-type']

    if(String(contentType).toLowerCase() == 'application/json'){

    }else{
        
    }
}

/********************************************************** ENDPOINT ALUNO ***********************************************************/
