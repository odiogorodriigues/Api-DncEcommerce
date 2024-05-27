const connection = require('../models/connection');

const getAll = async () => {
    const [vendas] = await connection.execute('SELECT * FROM vendas');
    return vendas;
}

const getOne = async (id) => {
    const [venda] = await connection.execute('SELECT * FROM vendas WHERE venda_id = ?', [id]);
    return venda;
}

const createVenda = async (venda) => {
    const [newVenda] = await connection.execute(
        'INSERT INTO vendas (quantidade, preco_venda, pedido_id, produto_id) values(?, ?, ?, ?)', 
        [venda.quantidade, venda.preco_venda, venda.pedido_id, venda.produto_id]);
    return { insertId: newVenda.insertId };
}

const updateVenda = async (id, body) => {
    const [updatedVenda] = await connection.execute(
        'UPDATE vendas SET quantidade = ?, preco_venda = ?, pedido_id = ?, produto_id = ? WHERE venda_id = ?',
        [body.quantidade, body.preco_venda, body.pedido_id, body.produto_id, id]);
    return updatedVenda;
}

const deleteVenda = async (id) => {
    const [deletedVenda] = await connection.execute('DELETE FROM vendas WHERE venda_id = ?', [id]);
    return deletedVenda;
}

module.exports = {
    getAll,
    getOne,
    createVenda,
    updateVenda,
    deleteVenda
}