const estoqueModel = require('../models/estoqueModel');

const getAll = async (_req, res) => {
    const estoque = await estoqueModel.getAll();
    return res.status(200).json(estoque);
}

const getOne = async (req, res) => {
    const { id } = req.params
    const estoque = await estoqueModel.getOne(id);
    return res.status(200).json(estoque);
}

const createEstoque = async (req, res) => {
    const createdEstoque = await estoqueModel.createEstoque(req.body);
    return res.status(201).json(createdEstoque);
}

const updateEstoque = async (req, res) => {
    const { id } = req.params
    const updatedEstoque = await estoqueModel.updateEstoque(id, req.body);
    return res.status(204).json(updatedEstoque);
}

const deleteEstoque = async (req, res) => {
    const { id } = req.params
    const deletedEstoque = await estoqueModel.deleteEstoque(id);
    return res.status(204).json(deletedEstoque);
}

module.exports = { 
    getAll,
    getOne,
    createEstoque,
    updateEstoque,
    deleteEstoque
}