import { Router } from 'express';

export const foodRouter = Router();

foodRouter.get("/", (req, res) => {
	res.json(
		[
			{
				"test": "test1"
			}
		]
	);
});
