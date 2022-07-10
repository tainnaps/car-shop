import App from './app';
import errorMiddleware from './middlewares/error';
import CarRouter from './routes/CarRouter';

const server = new App();

const carRouter = new CarRouter('/cars');

carRouter.addRoutes();

server.addRouter(carRouter.router);

server.addErrorHandler(errorMiddleware);

export default server;
