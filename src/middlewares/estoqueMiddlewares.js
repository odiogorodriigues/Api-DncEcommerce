const connection = require('../models/connection');

const validateId = async (req, res, next) => {
    const { id } = req.params;

    try {
        const [existingId] = await connection.execute('SELECT * FROM estoque WHERE estoque_id = ?', [id]);
        console.log(existingId)
        if (existingId.length === 0) {
            console.log('Estoque não encontrado (validateId):', id);
            return res.status(404).json({ message: 'Estoque não encontrado!' })
        }
    } catch (error) {
        console.log('Erro ao validar estoque:', error);
        return res.status(500).json({ message: 'Erro ao validar o estoque!' })
    }

    next();
}

const validateBody = async (req, res, next) => {
    const { body } = req;

    if (body.quantidade == undefined || body.localizacao == undefined || body.produto_id == undefined) {
        return res.status(400).json({ message: 'Todos os campos devem ser preenchidos!' })
    }
    if(body.quantidade == '' || body.localizacao == '' || body.produto_id == '') {
        return res.status(400).json({ message: 'Todos os campos devem ser preenchidos!' })
    }

    next();
}

module.exports = {
    validateId,
    validateBody
}