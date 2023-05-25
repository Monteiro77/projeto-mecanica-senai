/*****************************************************************************************************
 * Objetivo: Resposável or manipular os dados dos alunos pelo banco de dados
 * Data: 25/05/2023
 * Autor: Artur Alves, André Constantino, Oswaldo Barbosa, Victótia Gindre e Vinícius Monteiro
 * Versão: 1.0
 *****************************************************************************************************/

// Import da biblioteca do Prisma Client

var { PrismaClient } = require('@prisma/cleint');

var prisma = new PrismaClient();


//Inseri um novo aluno no banco de dados
const inserirAluno = async function (dadosAluno) {
    let sql = `insert into tbl_aluno ( ) values ()`

    let resultStatus = await prisma.$executeRawUnsafe(sql)

    if(resultStatus)
        return true
    else
        return false
}


// Atualiza os dados do aluno
const atualizarAluno = async function(dadosAluno){
    let sql = ``
    
    let resultStatus = await prisma.$executeRawUnsafe(sql);

    if(resultStatus)
        return true
    else
        return false;
}

// Deleta os dados do aluno
const deletarAluno = async function(id){
    let sql = ``
    
    let resultStatus = await prisma.$executeRawUnsafe(sql);

    if(resultStatus)
        return true
    else
        return false
}

//Seleciona todos os dados dos alunos
const selecionarAlunos = async function (){
    let sql = `select * from tbl_aluno`

    let resultAluno = await prisma.$executeRawUnsafe(sql)

    if(resultAluno)
        return true
    else
        return false
} 

// Seleciona o aluno filtrando pelo ID
const selecionarAlunoPeloId = async function(id){

    let idAluno = id;
    
    let sql = `` + idAluno;
    
    let rsAluno = await prisma.$queryRawUnsafe(sql)
    
    if(rsAluno.length > 0)
        return rsAluno;
    else
        return false
}

//Seleciona o aluno filtrando pela matrícula
const selecionarAlunoPelaMatricula = async function(matricula){
    
    let sql = ``

    let resultAluno = await prisma.$executeRawUnsafe(sql)

    if(resultAluno)
        return true
    else
        return false
}

//Sleciona o aluno filtrando pelo nome
const selecionarAlunoPeloNome = async function(nome){

    let sql = `select... '${nome}'`

    let rsAluno = await prisma.$queryRawUnsafe(sql);

    if(rsAluno.length > 0)
        return rsAluno;
    else
        return false
}

module.exports = {
    inserirAluno,
    atualizarAluno,
    deletarAluno,
    selecionarAlunos,
    selecionarAlunoPeloId,
    selecionarAlunoPelaMatricula,
    selecionarAlunoPeloNome
}