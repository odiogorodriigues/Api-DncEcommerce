const connection = require('../models/connection');

const validateId = async (req, res, next) => {
    const { id } = req.params;

    try {
        const [existingId] = await connection.execute('SELECT * FROM produtos WHERE produto_id = ?', [id])

        if (existingId.length === 0) {
            console.log('Produto não encontrado (validateId):', id)
            return res.status(404).json({ message: 'Produto não encontrado!' })
        }
    } catch (error) {
            console.log('Erro ao validar produto:', error);
            return res.status(500).json({ message: 'Erro ao validar o produto!' })
        }

        next();
    }

const validateBody = async (req, res, next) => {
    const { body } = req;

    const { nome, descricao, preco, categoria } = req.body;

    if (nome === undefined || descricao === undefined || preco === undefined || categoria === undefined) {
        return res.status(400).json({ message: 'Todos os campos devem ser preenchidos!' })
    }

    if (nome === '' || descricao === '' || preco === '' || categoria === '') {
        return res.status(400).json({ message: 'Todos os campos devem ser preenchidos!' })
    }

    try {
        const existingName = await connection.execute('SELECT * FROM produtos WHERE nome = ?', [body.nome])

        if (existingName[0].length > 0) {
            return res.status(409).json({ message: 'Nome já existente!' });
        }
    } catch (error) {
        console.log('Erro ao validar nome:', error);
        return res.status(500).json({ message: 'Erro ao validar o nome!' })
    }

    next();
}

const validateUpdateBody = async (req, res, next) => {
    const { body } = req;
    const { id } = req.params;

    if (body.nome == undefined || body.descricao == undefined || body.preco == undefined || body.categoria == undefined) {
        return res.status(400).json({ message: 'Todos os campos devem ser preenchidos!' })
    }
    if (body.nome === '' || body.descricao === '' || body.preco === '' || body.categoria === '') {
        return res.status(400).json({ message: 'Todos os campos devem ser preenchidos!' })
    }

    try {
        const [currentName] = await connection.execute('SELECT * FROM produtos WHERE produto_id = ?', [id]);

        if (body.nome && body.nome !== currentName[0].nome) {
            const [existingName] = await connection.execute('SELECT * FROM produtos WHERE nome = ?', [body.nome]);
            if (existingName.length > 0) {
                return res.status(409).json({ message: 'Nome já existente!' })
            }
        }
    } catch (error) {
        console.log('Erro ao validar nome:', error);
        return res.status(500).json({ message: 'Erro ao validar o nome!' })
        }

    next();
}


module.exports = {
    validateId,
    validateBody,
    validateUpdateBody
}