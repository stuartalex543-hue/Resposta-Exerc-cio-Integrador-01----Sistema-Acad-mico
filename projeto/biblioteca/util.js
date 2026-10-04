// biblioteca/util.js

function validarEmail(email) {
  if (typeof email !== 'string') {
      return false;
  }

  // Deve conter @ e terminar com .com ou .edu.br
  const regex = /^[^\s@]+@[^\s@]+\.(com|edu\.br)$/i;

  return regex.test(email);
}

function validarMatricula(matricula) {
  if (typeof matricula !== 'string') {
      return false;
  }

  // Matrícula deve conter somente números e ter 6 dígitos
  const regex = /^\d{6}$/;

  return regex.test(matricula);
}

function validarCPF(cpf) {
  if (typeof cpf !== 'string') {
      return false;
  }

  // Remove pontos e hífen
  cpf = cpf.replace(/[.-]/g, '');

  // CPF deve possuir exatamente 11 dígitos
  if (!/^\d{11}$/.test(cpf)) {
      return false;
  }

  // Rejeita CPFs com todos os dígitos iguais
  if (/^(\d)\1{10}$/.test(cpf)) {
      return false;
  }

  // Validação do primeiro dígito verificador
  let soma = 0;

  for (let i = 0; i < 9; i++) {
      soma += Number(cpf[i]) * (10 - i);
  }

  let resto = soma % 11;
  let digito1 = resto < 2 ? 0 : 11 - resto;

  if (digito1 !== Number(cpf[9])) {
      return false;
  }

  // Validação do segundo dígito verificador
  soma = 0;

  for (let i = 0; i < 10; i++) {
      soma += Number(cpf[i]) * (11 - i);
  }

  resto = soma % 11;
  let digito2 = resto < 2 ? 0 : 11 - resto;

  if (digito2 !== Number(cpf[10])) {
      return false;
  }

  return true;
}

function mostrarDados(objeto) {
  console.log('-----------------------------------');
  console.log(`Tipo: ${objeto.constructor.name}`);

  if (typeof objeto.getNome === 'function') {
      console.log(`Nome: ${objeto.getNome()}`);
  }

  if (typeof objeto.getEmail === 'function') {
      console.log(`E-mail: ${objeto.getEmail()}`);
  }

  if (typeof objeto.getMatricula === 'function') {
      console.log(`Matrícula: ${objeto.getMatricula()}`);
  }

  if (typeof objeto.getDisciplina === 'function') {
      console.log(`Disciplina: ${objeto.getDisciplina()}`);
  }

  console.log('-----------------------------------');
}

module.exports = {
  validarEmail,
  validarMatricula,
  validarCPF,
  mostrarDados
};