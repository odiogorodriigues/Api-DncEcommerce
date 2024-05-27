const clientesModel = require('../models/clientesModel');

const getAll = async (_req, res) => {
        const clientes = await clientesModel.getAll(); 
        return res.status(200).json(clientes);
};

const getOne = async (req, res) => {
    const { id } = req.params;
    const cliente = await clientesModel.getOne(id);
    return res.status(200).json(cliente);
};

const createCliente = async (req, res) => {
    const createdCliente = await clientesModel.createCliente(req.body);
    return res.status(201).json(createdCliente);
};

const deleteCliente = async (req, res) => {
    const { id } = req.params;

    try {
        const wasDeleted = await clientesModel.deleteCliente(id);
        
        if (wasDeleted) {
            console.log('Cliente deletado:', id);
            return res.status(200).json({ message: 'Cliente deletado!'});
        } else {
            console.log('Cliente não encontrado:', id);
            return res.status(404).json({ message: 'Cliente não encontrado!'});
        }
    } catch (error) {
        console.log('Erro ao excluir cliente:', error);
        return res.status(500).json({ message: 'Erro ao deletar o cliente!'});
    }
};

const updateCliente = async (req, res) => {
    const { id } = req.params;

    await clientesModel.updateCliente(id, req.body);
    return res.status(204).json();
}

module.exports = {
    getAll, 
    createCliente,
    deleteCliente, 
    updateCliente,
    getOne
};