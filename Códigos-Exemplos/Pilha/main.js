'use strict';


import {Pilha} from './classe.js';


let nomes = new Pilha();

nomes.push('Maurilio');
nomes.push('Veronica');
nomes.push('Sadahiro');
nomes.push('Jose Rogério');

nomes.pop();
nomes.isEmpty();


nomes.listar();