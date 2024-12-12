import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes';  
import clientRoutes from './routes/clientRoutes';

const app = express();

app.use(cors());
app.use(express.json());

// Agrega las rutas de productos
app.use('/api/products', productRoutes);

// Agrega las rutas de clientes
app.use('/api/clients', clientRoutes);

export default app;