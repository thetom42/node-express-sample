import { Router } from 'express';
 
const router = Router();
 
// https://localhost:3000/session
router.get('/', async (req, res) => {
    const user = await req.context.models.User.findByPk(
      req.context.me.id,
    );
    return res.send(user);
});

export default router;