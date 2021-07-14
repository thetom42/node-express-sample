import { Router } from 'express';
 
const router = Router();

// https://localhost:3000/user
router.get('/', async (req, res) => {
    const users = await req.context.models.User.findAll();
    return res.send(users);
});

// https://localhost:3000/user/:userId
router.get('/:userId', async (req, res) => {
    const user = await req.context.models.User.findByPk(
      req.params.userId,
    );
    return res.send(user);
});
  
export default router;