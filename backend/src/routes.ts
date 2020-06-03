import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
	res.json({ message: 'Hello Node' });
});

export default routes;
