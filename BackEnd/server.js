import express from 'express';
import ProductData from './ProductData';
import dotenv from 'dotenv'
import config from './config'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import userRoute from './routes/userRoutes'
import productRoute from './routes/productRoutes'

dotenv.config();
const mongodbUrl = config.MONGODB_URL;

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();

app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

// app.get("/api/products/:id", (req, res) => {
//     const productId = req.params.id
//     const product = ProductData.products.find(x => x.id == productId)
//     if (product)
//         res.send(product);
//     else
//         res.status(404).send({ msg: 'Product not found' })

// });

// app.get("/api/products", (req, res) => {
//     res.send(ProductData.products);
// });

app.listen(5000, () => { console.log('Server Started at http://localhost:5000') });



