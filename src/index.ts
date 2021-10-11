import * as express from 'express'
import { Request, Response } from 'express'
import * as cors from 'cors';
import initialState from './initialState';

const app = express();
const port = process.env.PORT || 3006;
const API_URL = "https://listacompras-ts.herokuapp.com/api/v1"

var router = express.Router();

const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: API_URL,
  preflightContinue: false,
};

//use cors middleware
router.use(cors(options));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello TypeScript v2')
})


app.get('/api/v1', (req: Request, res: Response) => {
  res.json(initialState)

})

/* app.use((req: Request, res: Response, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
 */

app.listen(port, () => {
  console.log(`App Listinging on port: ${port}`);
});
