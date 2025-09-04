class Cliente {
    #cpf
    constructor(nome, sobrenome, cpf, endereco, telefones) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.#cpf = cpf
        this.telefones = new Set(telefones)
        this.endereco = endereco

        this.getNome = function() { return this.nome }
        this.setNome = function(nome) { this.nome = nome }

        this.getNomeMaiusculo = function() { return this.nome.toUpperCase() }
        this.getNomeMinusculo = function() { return this.nome.toLowerCase() }

        this.getSobrenomeMaiusculo = function() { return this.sobrenome.toUpperCase() }
        this.getSobrenomeMinusculo = function() { return this.sobrenome.toLowerCase() }
        
        this.getCpf = function() { return this.#cpf }
    }
    
    adicionarTelefone(telefone) {
        this.telefones.add(telefone)
    }

    getDados() {
        let dadosCliente = `Nome: ${this.nome}\n`
        dadosCliente += `Estado: ${this.endereco.getEstado()} cidade: ${this.endereco.getCidade()} rua: ${this.endereco.getRua()} numero: ${this.endereco.getNumero()}\n`
        this.telefones.forEach(tel => {
            dadosCliente += `ddd: ${tel.getDdd()} numero: ${tel.getNumeroTelefone()}\n`
        })
        return dadosCliente
    }
}

class Telefone {
    constructor(ddd, numeroTelefone) {
        this.ddd = ddd
        this.numeroTelefone = numeroTelefone

        this.getDdd = function() { return this.ddd }
        this.setDdd = function(ddd) { this.ddd = ddd }
        this.getDddMaiusculo = function() { return String(this.ddd).toUpperCase() }
        this.getDddMinusculo = function() { return String(this.ddd).toLowerCase() }

        this.getNumeroTelefone = function() { return this.numeroTelefone }
        this.setNumeroTelefone = function(numeroTelefone) { this.numeroTelefone = numeroTelefone }
        this.getNumeroTelefoneMaiusculo = function() { return String(this.numeroTelefone).toUpperCase() }
        this.getNumeroTelefoneMinusculo = function() { return String(this.numeroTelefone).toLowerCase() }
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero

        this.getRua = function() { return this.rua }
        this.setRua = function(rua) { this.rua = rua }
        this.getRuaMaiusculo = function() { return this.rua.toUpperCase() }
        this.getRuaMinusculo = function() { return this.rua.toLowerCase() }

        this.getCidade = function() { return this.cidade }
        this.setCidade = function(cidade) { this.cidade = cidade }
        this.getCidadeMaiusculo = function() { return this.cidade.toUpperCase() }
        this.getCidadeMinusculo = function() { return this.cidade.toLowerCase() }

        this.getEstado = function() { return this.estado }
        this.setEstado = function(estado) { this.estado = estado }
        this.getEstadoMaiusculo = function() { return this.estado.toUpperCase() }
        this.getEstadoMinusculo = function() { return this.estado.toLowerCase() }

        this.getNumero = function() { return this.numero }
        this.setNumero = function(numero) { this.numero = numero }
        this.getNumeroMaiusculo = function() { return String(this.numero).toUpperCase() }
        this.getNumeroMinusculo = function() { return String(this.numero).toLowerCase() }
    }
}

class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco, telefones) {
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set(telefones)
        this.endereco = endereco
    }
    
    getRazaoSocial() { return this.razaoSocial }
    getRazaoSocialMaiusculo() { return this.razaoSocial.toUpperCase() }
    getRazaoSocialMinusculo() { return this.razaoSocial.toLowerCase() }

    getNomeFantasia() { return this.nomeFantasia }
    getNomeFantasiaMaiusculo() { return this.nomeFantasia.toUpperCase() }
    getNomeFantasiaMinusculo() { return this.nomeFantasia.toLowerCase() }

    getCnpj() { return this.#cnpj }

    adicionarCliente(cliente) {
        this.clientes.add(cliente)
    }

    adicionarTelefone(telefone) {
        this.telefones.add(telefone)
    }

    detalhe() {
        let descricao = `Razão Social: ${this.razaoSocial}\nNome fantasia: ${this.nomeFantasia}\n`
        
        if (this.endereco) {
            descricao += `Estado: ${this.endereco.getEstado()} cidade: ${this.endereco.getCidade()} rua: ${this.endereco.getRua()} numero: ${this.endereco.getNumero()}\n`
        }
        
        this.telefones.forEach(tel => {
            descricao += `ddd: ${tel.getDdd()} numero: ${tel.getNumeroTelefone()}\n`
        })
    
        const clientesOrdenados = ordenarClientesPorNome(Array.from(this.clientes));
        
        clientesOrdenados.forEach(c => {
            descricao += `\nNome: ${c.getNome()}\n`
            descricao += `Estado: ${c.endereco.getEstado()} cidade: ${c.endereco.getCidade()} rua: ${c.endereco.getRua()} numero: ${c.endereco.getNumero()}\n`
            c.telefones.forEach(tel => {
                 descricao += `ddd: ${tel.getDdd()} numero: ${tel.getNumeroTelefone()}\n`
            })
        })
    
        return descricao
    }
}

const empresa = new Empresa("Coelhos LTDA", "Casa dos Coelhos", '00000000', new Endereco("SP", "São José dos Campos", "Engenheiro Jose Longo",  622), [new Telefone(12, 33334444), new Telefone(12, 55556666)])

const cli1 = new Cliente("José", "O coelho gordo", 10101010, new Endereco("SP", "São José dos Campos", "Engenheiro Jose Longo", 622), [new Telefone(12, 11111111), new Telefone(12, 11111110)])
const cli2 = new Cliente("Dani", "A coelha medrosa", 12121212, new Endereco("SP", "São José dos Campos", "Engenheiro Jose Longo", 622), [new Telefone(12, 22222222), new Telefone(12, 22222220)])
const cli3 = new Cliente("Amy", "A coelha exploradora", 13131313, new Endereco("SP", "São José dos Campos", "Engenheiro Jose Longo", 622), [new Telefone(12, 33333333), new Telefone(12, 33333330)])
const cli4 = new Cliente("Frida", "A coelha destemida", 14141414, new Endereco("SP", "São José dos Campos", "Engenheiro Jose Longo", 622), [new Telefone(12, 44444444), new Telefone(12, 44444440)])
const cli5 = new Cliente("Hanna", "O coelho curioso", 15151515, new Endereco("SP", "São José dos Campos", "Engenheiro Jose Longo", 622), [new Telefone(12, 55555555), new Telefone(12, 55555550)])

function ordenarClientesPorNome(clientes) {
    return clientes.slice().sort(function(a, b) {
        return a.getNome().localeCompare(b.getNome());
    });
}

empresa.adicionarCliente(cli1)
empresa.adicionarCliente(cli2)
empresa.adicionarCliente(cli3)
empresa.adicionarCliente(cli4)
empresa.adicionarCliente(cli5)

empresa.detalhe = function() {
    let dados = `Razão Social: ${this.razaoSocial}\nNome fantasia: ${this.nomeFantasia}\n`
    
    if (this.endereco) {
        dados += `Estado: ${this.endereco.getEstado()} cidade: ${this.endereco.getCidade()} rua: ${this.endereco.getRua()} numero: ${this.endereco.getNumero()}\n`
    }
    
    this.telefones.forEach(tel => {
        dados += `ddd: ${tel.getDdd()} numero: ${tel.getNumeroTelefone()}\n`
    })

    const clientesOrdenados = ordenarClientesPorNome(Array.from(this.clientes));
    
    clientesOrdenados.forEach(c => {
        dados += `\nNome: ${c.getNome()}\n`
        dados += `Estado: ${c.endereco.getEstado()} cidade: ${c.endereco.getCidade()} rua: ${c.endereco.getRua()} numero: ${c.endereco.getNumero()}\n`
        c.telefones.forEach(tel => {
             dados += `ddd: ${tel.getDdd()} numero: ${tel.getNumeroTelefone()}\n`
        })
    })

    return dados
}

console.log(empresa.detalhe())

//observação
console.log("\nObs: Todos os clientes moram na empresa.");
