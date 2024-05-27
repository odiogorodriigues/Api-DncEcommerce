const connection = require('../models/connection');

const validateId = async (req, res, next) => {
    const { id } = req.params;
    const [vendas] = await connection.execute('SELECT * FROM vendas WHERE venda_id = ?', [id]);

    if (vendas.length === 0) {
        return res.status(404).json({ message: 'Venda não encontrada' });
    }    
    next();
}

const validateBody = async (req, res, next) => {
    const { body } = req;
    if (body.quantidade == undefined || body.preco_venda == undefined || body.pedido_id == undefined || body.produto_id == undefined) {
        return res.status(400).json({ message: 'Todos os campos devem ser preenchidos!' });
    }
    if (body.quantidade == '' || body.preco_venda == '' || body.pedido_id == '' || body.produto_id == '') {
        return res.status(400).json({ message: 'Todos os campos devem ser preenchidos!' });
    }
    if (body.quantidade <= 0 || body.preco_venda <= 0) {
        return res.status(400).json({ message: 'Quantidade e preço devem ser positivos!' });
    }
    next();
}

module.exports = { 
    validateId,
    validateBody
};