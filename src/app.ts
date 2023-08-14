import express from 'express';
import bodyParser from 'body-parser';
import { foodRouter } from './routes/foodRouter';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ 
    message: "The Bear is coming!"
  });
});

app.listen(3000, () => {
    console.log('The Bear is roaring!');
});

app.use('/v1/foods', foodRouter);