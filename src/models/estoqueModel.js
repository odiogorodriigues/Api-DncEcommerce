const connection = require('../models/connection');

const getAll = async () => {
    const [estoque] = await connection.execute('SELECT * FROM estoque');
    return estoque;
}

const getOne = async (id) => {
    const [estoque] = await connection.execute('SELECT * FROM estoque WHERE estoque_id = ?', [id])
    return estoque;
}

const createEstoque = async (body) => {
    const [createdEstoque] = await connection.execute(
        'INSERT INTO estoque (quantidade, localizacao, produto_id) values (?,?,?)',
        [body.quantidade, body.localizacao, body.produto_id])

    return { insertId: createdEstoque.insertId }
}

const updateEstoque = async (id, body) => {
    const [updatedEstoque] = await connection.execute(
        'UPDATE estoque SET quantidade = ?, localizacao = ?, produto_id = ? WHERE estoque_id = ?',
        [body.quantidade, body.localizacao, body.produto_id, id])

    return updatedEstoque;
}

const deleteEstoque = async (id) => {
    const [deletedEstoque] = await connection.execute('DELETE FROM estoque WHERE estoque_id = ?', [id]);
    return deletedEstoque;
}

module.exports = {
    getAll,
    getOne,
    createEstoque,
    updateEstoque,
    deleteEstoque
}