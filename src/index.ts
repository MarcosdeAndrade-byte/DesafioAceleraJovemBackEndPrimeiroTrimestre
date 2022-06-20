import express from 'express';
import { usersRoutes } from './routes/users.routes';

const app = express();

app.use(express.json());

//Rota padrão utilizada na aplicação / Redirecionamento para o arquivo que vai armazenar todas as rotas
app.use("/users",usersRoutes);

export {app};