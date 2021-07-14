import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';
 
const router = Router();
 
// https://localhost:3000/messages
router.get('/', async (req, res) => {
    const messages = await req.context.models.Message.findAll();
    return res.send(messages);
});

// https://localhost:3000/messages/:messageId
router.get('/:messageId', async (req, res) => {
    const message = await req.context.models.Message.findByPk(
      req.params.messageId,
    );
    return res.send(message);
});

// https://localhost:3000/messages
router.post('/', async (req, res) => {
    const message = await req.context.models.Message.create({
      text: req.body.text,
      userId: req.context.me.id,
    });
   
    return res.send(message);
});

// https://localhost:3000/messages/:messageId
router.delete('/:messageId', async (req, res) => {
    const result = await req.context.models.Message.destroy({
      where: { id: req.params.messageId },
    });
   
    return res.send(true);
});

export default router;