const connection = require('../models/connection');

const validateId = async (req, res, next) => {
    const { id } = req.params;
    const [pedidos] = await connection.execute('SELECT * FROM pedidos WHERE pedido_id = ?', [id]);
    if (pedidos.length === 0) {
        return res.status(404).json({ message: 'Pedido não encontrado' });
    }
    next();
}

const validateBody = async (req, res, next) => {
    const { body } = req;
    if (body.status == undefined || body.cliente_id == undefined) {
        return res.status(400).json({ message: 'Todos os campos devem ser preenchidos!' });
    }
    if (body.status == '' || body.cliente_id == '') {
        return res.status(400).json({ message: 'Todos os campos devem ser preenchidos!' });
    }
    if (body.status !== 'PENDENTE' && body.status !== 'ENTREGUE' && body.status !== 'CANCELADO') {
        return res.status(400).json({ message: 'Status inválido!' });
    }
    next();
}

module.exports = {
    validateId,
    validateBody
}