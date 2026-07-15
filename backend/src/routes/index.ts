import { Router } from 'express';
import { findAll, insert, deleteOne } from '../data/database';

const router = Router();

router.get('/', async (_, res) => {
  try {
    const products = await findAll();

    const values = products.map(product => ({
      id: product._id,
      name: product.name,
      quantity: product.quantity
    }));

    res.json(values);

  } catch (error) {
    res.status(500).json({
      resultado: 'Error listing products',
      mensagem: error
    });
  }
});

router.post('/new', async (req, res) => {

  const { name, quantity } = req.body;

  try {

    await insert({
      name,
      quantity
    });

    res.json({
      resultado: 'Inserted'
    });

  } catch (error) {

    res.status(500).json({
      resultado: 'Error inserting product',
      mensagem: error
    });

  }

});

router.delete('/remove/:id', async (req, res) => {

  try {

    await deleteOne(req.params.id);

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
