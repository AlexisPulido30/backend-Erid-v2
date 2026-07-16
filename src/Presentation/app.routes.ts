import { Router } from 'express';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.get('/health', (_req, res) => {
      res.status(200).json({
        ok: true,
        message: 'Backend ERID funcionando',
      });
    });

    return router;
  }
}