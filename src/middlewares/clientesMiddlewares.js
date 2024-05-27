const connection = require('../models/connection');

const validateBody = async (req, res, next) => {
    const { body } = req;

    if (body.nome == undefined || body.email == undefined || body.telefone == undefined || body.endereco == undefined) {
        return res.status(400).json({message: 'Todos os campos devem ser preenchidos!'});
    }

    if (body.nome == '' || body.email == '' || body.telefone == '' || body.endereco == '') {
        return res.status(400).json({message: 'Todos os campos devem ser preenchidos!'});
    }

    try {
        const existingEmail = await connection.execute('SELECT * FROM clientes WHERE email = ?', [body.email]);
        if (existingEmail[0].length > 0) {
            return res.status(409).json({message: 'Email já existente!'});
        }
    } catch (error) {
        console.log(error);
    }

    try {
        const existingTelefone = await connection.execute('SELECT * FROM clientes WHERE telefone = ?', [body.telefone]);
        if (existingTelefone[0].length > 0) {
            return res.status(409).json({message: 'Telefone já existente!'});
        }
    } catch (error) {    
        console.log(error);
    }

    next();
};

const validateId = async (req, res, next) => {
    const { id } = req.params;

    try {
        const [existingId] = await connection.execute('SELECT * FROM clientes WHERE cliente_id = ?', [id]);
        console.log(existingId)
        if (existingId.length === 0) {
            console.log('Cliente não encontrado (validateId):', id);
            return res.status(404).json({ message: 'Cliente não encontrado!'});
        }
    } catch (error) {    
        console.log('Erro ao validar cliente:', error);
        return res.status(500).json({ message: 'Erro ao validar o cliente!'});
    }

    next();
};

const validateUpdateBody = async (req, res, next) => {
    const { body } = req;
    const { id } = req.params;

    if (body.nome == undefined || body.email == undefined || body.telefone == undefined || body.endereco == undefined) {
        return res.status(400).json({message: 'Todos os campos devem ser preenchidos!'});
    }
    if (body.nome == '' || body.email == '' || body.telefone == '' || body.endereco == '') {
        return res.status(400).json({message: 'Todos os campos devem ser preenchidos!'});
    }

    try {
        const [currentCliente] =  await connection.execute('SELECT * FROM clientes WHERE cliente_id = ?', [id]);

        /// Essa linha verifica se o email é diferente do atual. Se for, verifica se o email existe no banco de dados.
        if (body.email && body.email !== currentCliente[0].email) { 
            const [existingEmail] = await connection.execute('SELECT * FROM clientes WHERE email = ?', [body.email]);
            if (existingEmail.length > 0) {
                return res.status(409).json({message: 'Email já existente!'});
            }
        }

        if (body.telefone && body.telefone !== currentCliente[0].telefone) {
            const [existingTelefone] = await connection.execute('SELECT * FROM clientes WHERE telefone = ?', [body.telefone]);
            if (existingTelefone.length > 0) {
                return res.status(409).json({message: 'Telefone já existente!'});
            }
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro ao validar o cliente!'});
    }

    next();
}

module.exports = {
    validateBody,   
    validateId,
    validateUpdateBody
}