// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());

// Mongo Connection
mongoose.connect('mongodb://127.0.0.1:27017/Inventory_Management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

// Admin Schema
const adminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const Admin = mongoose.model('Admin', adminSchema);

// product Schema
const productSchema = new mongoose.Schema({
    productId: { type: String, required: true, unique: true },
    productName: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  });
  const Product = mongoose.model('Product', productSchema);
  
 
  
  
// Sign Up API Routes
app.post('/api/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newAdmin = new Admin({ username, email, password });
    await newAdmin.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Login Api Routes
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await Admin.findOne({ username, password });
      if (user) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });

   // Add Product Route
   app.post('/api/addProduct', async (req, res) => {
    const { productId, productName, quantity, price } = req.body;
    try {
      const newProduct = new Product({ productId, productName, quantity, price });
      await newProduct.save();
      res.status(201).json({ message: 'Product added successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  // Delete Product Route
app.delete('/api/deleteProduct/:productId', async (req, res) => {
    const { productId } = req.params;
    try {
      const deletedProduct = await Product.findOneAndDelete({ productId });
      if (deletedProduct) {
        res.status(200).json({ message: 'Product deleted successfully' });
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  // Update Product Route
app.put('/api/updateProduct/:productId', async (req, res) => {
    const { productId } = req.params;
    const { productName, quantity, price } = req.body;
  
    try {
      const updatedProduct = await Product.findOneAndUpdate(
        { productId },
        { productName, quantity, price },
        { new: true }
      );
  
      if (updatedProduct) {
        res.status(200).json({ message: 'Product updated successfully', updatedProduct });
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // API endpoint to get all products
app.get('/api/products', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching products', error });
    }
  });


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
