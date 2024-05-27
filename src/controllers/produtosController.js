const produtosModel = require('../models/produtosModel')

const getAll = async (_req, res) => {
    const produtos = await produtosModel.getAll();
    return res.status(200).json(produtos);
}

const getOne = async (req, res) => {
    const { id } = req.params
    const produto = await produtosModel.getOne(id);
    return res.status(200).json(produto);
}

const createProduto = async (req, res) => {
    const createdProduto = await produtosModel.createProduto(req.body);
    return res.status(201).json(createdProduto);
}

const updateProduto = async (req, res) => {
    const { id } = req.params
    await produtosModel.updateProduto(id, req.body);
    return res.status(204).json();
}

const deleteProduto = async (req, res) => {
    const { id } = req.params
    await produtosModel.deleteProduto(id);
    return res.status(204).json();
}

module.exports = {
    getAll,
    getOne,
    createProduto,
    updateProduto,
    deleteProduto
}