import { Router } from 'express';
import { findAll, insert, deleteOne } from '../data/database';

const router = Router();

router.get('/', async (_, res) => {
  try {
    const products = await findAll();

    const values = products.map(product => ({
      codigo: product._id,
      nome: product.nome,
      quantidade: product.quantidade
    }));

    res.json(values);

  } catch (error) {
    res.status(500).json({
      resultado: 'Erro ao listar',
      mensagem: error
    });
  }
});

router.post('/new', async (req, res) => {

  const { nome, quantidade } = req.body;

  try {

    await insert({
      nome,
      quantidade
    });

    res.json({
      resultado: 'Inserido'
    });

  } catch (error) {

    res.status(500).json({
      resultado: 'Erro ao inserir',
      mensagem: error
    });

  }

});

router.delete('/remove/:codigo', async (req, res) => {

  try {

    await deleteOne(req.params.codigo);

    res.json({
      resultado: 'Removido'
    });

  } catch (error) {

    res.status(500).json({
      resultado: 'Erro ao remover',
      mensagem: error
    });

  }

});

export default router;
