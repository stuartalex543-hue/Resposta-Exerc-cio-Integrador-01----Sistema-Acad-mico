// pessoas/Professor.js

const Pessoa = require('./Pessoa');

class Professor extends Pessoa {
    #disciplina;

    constructor(nome, email, disciplina) {
        super(nome, email);

        this.#disciplina = '';
        this.setDisciplina(disciplina);
    }

    setDisciplina(disciplina) {
        if (typeof disciplina === 'string' && disciplina.trim() !== '') {
            this.#disciplina = disciplina.trim();
            return true;
        }

        return false;
    }

    getDisciplina() {
        return this.#disciplina;
    }

    setEmail(email) {
        if (typeof email !== 'string') {
            return false;
        }

        if (!email.toLowerCase().endsWith('.edu.br')) {
            return false;
        }

        return super.setEmail(email);
    }
}

module.exports = Professor;