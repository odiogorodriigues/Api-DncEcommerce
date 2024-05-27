const connection = require('./connection');

const getAll = async () => {
    const [produtos] = await connection.execute('SELECT * FROM produtos');
    return produtos;
}

const getOne = async (id) => {
    const [produto] = await connection.execute('SELECT * FROM produtos WHERE produto_id = ?', [id]);
    return produto;
}

const createProduto = async (body) => {
    const { nome, descricao, preco, categoria } = body

    const [createdProduto] = await connection.execute(
        'INSERT INTO produtos (nome, descricao, preco, categoria) values(?, ?, ?, ?)',
        [nome, descricao, preco, categoria]);
    return {insertId: createdProduto.insertId}
}

const updateProduto = async (id, produto) => {
    const { nome, descricao, preco, categoria } = produto

    const [updatedProduto] = await connection.execute(
        'UPDATE produtos set nome = ?, descricao = ?, preco = ?, categoria = ? WHERE produto_id = ?',
        [nome, descricao, preco, categoria, id]);
    return updatedProduto;
}

const deleteProduto = async (id) => {
    const [deletedProduto] = await connection.execute('DELETE FROM produtos WHERE produto_id = ?', [id]);
    return deletedProduto;
}

module.exports = {
    getAll,
    getOne,
    createProduto, 
    updateProduto,
    deleteProduto
}