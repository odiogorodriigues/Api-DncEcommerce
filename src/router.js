const express = require("express");
const router = express.Router();
const clientesController = require('./controllers/clientesController');
const clientesMiddlewares = require('./middlewares/clientesMiddlewares');
const produtosController = require('./controllers/produtosController');
const produtosMiddlewares = require('./middlewares/produtosMiddlewares');
const estoqueController = require('./controllers/estoqueController');
const estoqueMiddlewares = require('./middlewares/estoqueMiddlewares');
const pedidosController = require('./controllers/pedidosController');
const pedidosMiddlewares = require('./middlewares/pedidosMiddlewares');
const vendasController = require('./controllers/vendasController');
const vendasMiddlewares = require('./middlewares/vendasMiddlewares');

router.get('/clientes', clientesController.getAll);
router.get('/clientes/:id', clientesMiddlewares.validateId, clientesController.getOne);
router.post('/clientes', clientesMiddlewares.validateBody, clientesController.createCliente);
router.delete('/clientes/:id', clientesMiddlewares.validateId, clientesController.deleteCliente);
router.put('/clientes/:id', clientesMiddlewares.validateId, clientesMiddlewares.validateUpdateBody, clientesController.updateCliente);

router.get('/produtos', produtosController.getAll);
router.get('/produtos/:id', produtosMiddlewares.validateId, produtosController.getOne);
router.post('/produtos', produtosMiddlewares.validateBody, produtosController.createProduto);
router.put('/produtos/:id', produtosMiddlewares.validateUpdateBody, produtosMiddlewares.validateId, produtosController.updateProduto);
router.delete('/produtos/:id', produtosMiddlewares.validateId, produtosController.deleteProduto);

router.get('/estoque', estoqueController.getAll);
router.get('/estoque/:id', estoqueMiddlewares.validateId, estoqueController.getOne);
router.post('/estoque', estoqueMiddlewares.validateBody, estoqueController.createEstoque);
router.put('/estoque/:id', estoqueMiddlewares.validateBody, estoqueMiddlewares.validateId, estoqueController.updateEstoque);
router.delete('/estoque/:id', estoqueMiddlewares.validateId, estoqueController.deleteEstoque);

router.get('/pedidos', pedidosController.getAll);
router.get('/pedidos/:id', pedidosMiddlewares.validateId, pedidosController.getOne);
router.post('/pedidos', pedidosMiddlewares.validateBody, pedidosController.createPedido);
router.put('/pedidos/:id', pedidosMiddlewares.validateBody, pedidosMiddlewares.validateId, pedidosController.updatePedido);
router.delete('/pedidos/:id', pedidosMiddlewares.validateId, pedidosController.deletePedido);

router.get('/vendas', vendasController.getAll);
router.get('/vendas/:id', vendasMiddlewares.validateId, vendasController.getOne);
router.post('/vendas', vendasMiddlewares.validateBody, vendasController.createVenda);
router.put('/vendas/:id', vendasMiddlewares.validateBody, vendasMiddlewares.validateId, vendasController.updateVenda);
router.delete('/vendas/:id', vendasMiddlewares.validateId, vendasController.deleteVenda);

module.exports = router;