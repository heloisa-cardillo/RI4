import { Cliente, Telefone, Endereco, Empresa } from './classes.js';

const empresa = new Empresa("Coelhos LTDA", "Casa dos Coelhos", '00000000', new Endereco("SP", "São José dos Campos", "Engenheiro Jose Longo",  622), [new Telefone(12, 12345678), new Telefone(12, 87654321)])

const cli1 = new Cliente("José", "O coelho gordo", 10101010, new Endereco("SP", "São José dos Campos", "Engenheiro Jose Longo", 622), [new Telefone(12, 11111111), new Telefone(12, 11111110)])
const cli2 = new Cliente("Dani", "A coelha medrosa", 12121212, new Endereco("SP", "São José dos Campos", "Engenheiro Jose Longo", 622), [new Telefone(12, 22222222), new Telefone(12, 22222220)])
const cli3 = new Cliente("Amy", "A coelha exploradora", 13131313, new Endereco("SP", "São José dos Campos", "Engenheiro Jose Longo", 622), [new Telefone(12, 33333333), new Telefone(12, 33333330)])
const cli4 = new Cliente("Frida", "A coelha destemida", 14141414, new Endereco("SP", "São José dos Campos", "Engenheiro Jose Longo", 622), [new Telefone(12, 44444444), new Telefone(12, 44444440)])
const cli5 = new Cliente("Hanna", "O coelho curioso", 15151515, new Endereco("SP", "São José dos Campos", "Engenheiro Jose Longo", 622), [new Telefone(12, 55555555), new Telefone(12, 55555550)])

empresa.adicionarCliente(cli1)
empresa.adicionarCliente(cli2)
empresa.adicionarCliente(cli3)
empresa.adicionarCliente(cli4)
empresa.adicionarCliente(cli5)

console.log(empresa.detalhe())
console.log("\nObs: Todos os clientes moram na empresa.")