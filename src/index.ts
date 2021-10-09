import * as express from 'express'
import {Request, Response} from 'express'
import initialState from './initialState';

const app = express();
const port = process.env.PORT || 3006;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello TypeScript v1')
})

app.get('/api/v1', (req: Request, res: Response) => {
  res.json(initialState)
})

app.use((req: Request, res: Response, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.listen(port, () => {
  console.log(`App Listinging on port: ${port}`);
});
