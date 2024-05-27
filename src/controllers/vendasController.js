const vendasModel = require('../models/vendasModel');

const getAll = async (_req, res) => {
    const vendas = await vendasModel.getAll();
    res.status(200).json(vendas);
}

const getOne = async (req, res) => {
    const { id } = req.params;
    const vendas = await vendasModel.getOne(id);
    res.status(200).json(vendas);
}

const createVenda = async (req, res) => {
    const vendas = await vendasModel.createVenda(req.body);
    res.status(201).json(vendas);
}

const updateVenda = async (req, res) => {
    const { id } = req.params;
    const vendas = await vendasModel.updateVenda(id, req.body);
    res.status(204).json(vendas);
}

const deleteVenda = async (req, res) => {
    const { id } = req.params;
    const vendas = await vendasModel.deleteVenda(id);
    res.status(204).json(vendas);
}

module.exports = {
    getAll,
    getOne,
    createVenda,
    updateVenda,
    deleteVenda
}