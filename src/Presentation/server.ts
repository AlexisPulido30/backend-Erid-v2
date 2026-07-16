import cors from 'cors';
import express, { type Application } from 'express';
import { AppRoutes } from './app.routes';

export class Server {
  private readonly app: Application;

  constructor() {
    this.app = express();
  }

  public start(port: number): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    this.app.use('/api', AppRoutes.routes);

    this.app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  }
}