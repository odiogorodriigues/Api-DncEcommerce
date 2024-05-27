const connection = require('../models/connection');

const getAll = async () => {
    const [pedidos] = await connection.execute('SELECT * FROM pedidos');
    return pedidos;
}

const getOne = async (id) => {
    const [pedidos] = await connection.execute('SELECT * FROM pedidos WHERE pedido_id = ?', [id]);
    return pedidos;
}

const createPedido = async (pedido) => {
    const [newPedido] = await connection.execute('INSERT INTO pedidos (status, cliente_id) VALUES (?, ?)', [pedido.status, pedido.cliente_id]);
    return { insertId: newPedido.insertId };
}

const updatePedido = async (id, pedido) => {
    const [updated] = await connection.execute(
        'UPDATE pedidos SET status = ?, cliente_id = ? WHERE pedido_id = ?', 
        [pedido.status, pedido.cliente_id, id]);
    return updated;
}

const deletePedido = async (id) => {
    const [deleted] = await connection.execute('DELETE FROM pedidos WHERE pedido_id = ?', [id]);
    return deleted;
}

module.exports = {
    getAll,
    getOne,
    createPedido,
    updatePedido,
    deletePedido
}