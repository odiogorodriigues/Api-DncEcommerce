const pedidosModel = require('../models/pedidosModel');

const getAll = async (_req, res) => {
    const pedidos = await pedidosModel.getAll();
    return res.status(200).json(pedidos);
}

const getOne = async (req, res) => {
    const {id} = req.params;
    const pedidos = await pedidosModel.getOne(id);
    return res.status(200).json(pedidos);
}

const createPedido = async (req, res) => {
    const createdPedidos = await pedidosModel.createPedido(req.body);
    return res.status(201).json(createdPedidos);
}

const updatePedido = async (req, res) => {
    const { id } = req.params;
    const updatedPedidos = await pedidosModel.updatePedido(id, req.body);
    return res.status(204).json(updatedPedidos);
}

const deletePedido = async (req, res) => {
    const { id } = req.params;
    const deletedPedido = await pedidosModel.deletePedido(id);
    return res.status(204).json(deletedPedido);
}

module.exports = {
    getAll,
    getOne,
    createPedido,
    updatePedido,
    deletePedido
}