// main.js

const Pessoa = require('./pessoas/Pessoa');
const Aluno = require('./pessoas/Aluno');
const Professor = require('./pessoas/Professor');

const util = require('./biblioteca/util');

console.log('\n======================================');
console.log('       SISTEMA ACADÊMICO');
console.log('======================================\n');


// ======================================
// 1. CADASTRO DE PESSOAS
// ======================================

console.log('========== PESSOAS ==========\n');

const pessoa1 = new Pessoa(
    'Alexandre Stuart',
    'stuartalex543@gmail.com'
);

const pessoa2 = new Pessoa(
    'Maria Oliveira',
    'maria@empresa.com'
);

util.mostrarDados(pessoa1);
util.mostrarDados(pessoa2);


// Teste de e-mail inválido

console.log('\nTeste de e-mail inválido:');

console.log(
    pessoa1.setEmail('email_invalido')
);

console.log(
    `E-mail atual: ${pessoa1.getEmail()}`
);


// ======================================
// 2. CADASTRO DE ALUNOS
// ======================================

console.log('\n========== ALUNOS ==========\n');

const aluno1 = new Aluno(
    'João Santos',
    'joao@gmail.com',
    '123456'
);

const aluno2 = new Aluno(
    'Ana Souza',
    'ana@aluna.edu.br',
    '654321'
);

util.mostrarDados(aluno1);
util.mostrarDados(aluno2);


// Teste de matrícula inválida

console.log('\nTeste de matrícula inválida:');

console.log(
    aluno1.setMatricula('ABC123')
);

console.log(
    `Matrícula atual: ${aluno1.getMatricula()}`
);


// ======================================
// 3. CADASTRO DE PROFESSORES
// ======================================

console.log('\n========== PROFESSORES ==========\n');

const professor1 = new Professor(
    'Leandro Vaguetti Professor',
    'vaguetti@ifb.edu.br',
    'Programação de Computadores'
);

const professor2 = new Professor(
    'Mariana Almeida',
    'mariana@universidade.edu.br',
    'Linguagens Formais e Autômatos'
);

util.mostrarDados(professor1);
util.mostrarDados(professor2);


// ======================================
// 4. TESTE DE E-MAIL DE PROFESSOR
// ======================================

console.log('\n========== TESTE DE SOBRESCRITA ==========\n');

console.log(
    'Tentando cadastrar Gmail no professor:'
);

console.log(
    professor1.setEmail('professor@gmail.com')
);

console.log(
    `E-mail atual: ${professor1.getEmail()}`
);


console.log(
    '\nTentando cadastrar e-mail institucional:'
);

console.log(
    professor1.setEmail('novo.professor@ifb.edu.br')
);

console.log(
    `E-mail atual: ${professor1.getEmail()}`
);


// ======================================
// 5. TESTES DA BIBLIOTECA
// ======================================

console.log('\n========== TESTES DA BIBLIOTECA ==========\n');

console.log(
    'E-mail válido:',
    util.validarEmail('teste@gmail.com')
);

console.log(
    'E-mail inválido:',
    util.validarEmail('teste@')
);

console.log(
    'E-mail institucional válido:',
    util.validarEmail('professor@ifb.edu.br')
);

console.log(
    'Matrícula válida:',
    util.validarMatricula('123456')
);

console.log(
    'Matrícula inválida:',
    util.validarMatricula('123')
);

console.log(
    'CPF válido:',
    util.validarCPF('529.982.247-25')
);

console.log(
    'CPF inválido:',
    util.validarCPF('111.111.111-11')
);


// ======================================
// 6. RELATÓRIO FINAL
// ======================================

console.log('\n======================================');
console.log('          RELATÓRIO FINAL');
console.log('======================================\n');

console.log('--- Pessoas ---');

util.mostrarDados(pessoa1);
util.mostrarDados(pessoa2);

console.log('\n--- Alunos ---');

util.mostrarDados(aluno1);
util.mostrarDados(aluno2);

console.log('\n--- Professores ---');

util.mostrarDados(professor1);
util.mostrarDados(professor2);

console.log('\n======================================');
console.log('       FIM DO SISTEMA');
console.log('======================================');