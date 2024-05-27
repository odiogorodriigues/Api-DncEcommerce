const connection = require('./connection');

const getAll = async () => {
    const [clientes] = await connection.execute('SELECT * FROM clientes');
    return clientes;
}

const getOne = async (id) => {
    const [cliente] = await connection.execute('SELECT * FROM clientes WHERE cliente_id = ?', [id]);
    return cliente;
}

const createCliente = async (cliente) => {
    const { nome, email, telefone, endereco } = cliente;

    const [createdCliente] = await connection.execute(
        'INSERT INTO clientes (nome, email, telefone, endereco) values(?, ?, ?, ?)', 
        [nome, email, telefone, endereco]);

    return {insertId: createdCliente.insertId};
}

const deleteCliente = async (id) => {
    const [deletedClient] = await connection.execute('DELETE FROM clientes WHERE cliente_id = ?', [id]);
    return deletedClient.affectedRows > 0;
}

const updateCliente = async (id, cliente) => {
    const { nome, email, telefone, endereco } = cliente;

    const [updateCliente] = await connection.execute(
        'UPDATE clientes SET nome = ?, email = ?, telefone = ?, endereco = ? WHERE cliente_id = ?', 
        [nome, email, telefone, endereco, id]);
    return updateCliente;
}

module.exports = {
    getAll,
    createCliente,
    deleteCliente, 
    updateCliente,
    getOne
}