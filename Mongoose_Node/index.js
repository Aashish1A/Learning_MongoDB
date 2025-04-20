const mongoose = require("mongoose");

const uri =
  "mongodb+srv://Aashish07:aashish123@aashish.g76q0bb.mongodb.net/Shop?retryWrites=true&w=majority&appName=Aashish";

mongoose.connect(uri);

// We need to create a schema
const productSchema = new mongoose.Schema({
  name: String,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: Number,
});

// We need to create an model
const Product = new mongoose.model("Product", productSchema);

const data1 = {
  id: 7,
  title: "Hp Mouse",
  price: 1000,
  description: "For long durability",
  category: "Accessories",
  image:
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  rating: 4.9,
};

const main = async () => {
  try {
    // Inserting documents
    // await Product.insertOne(data1);
    // const data = await Product.find({ price: { $eq: 1000 } });
    // console.log(data);

    // Update Query
    // await Product.findOneAndUpdate(
    //   { title: "Hp Mouse", price: 1000 },
    //   { $set: { price: 1299 } }
    // );

    // Delete Query
    await Product.findOneAndDelete({ title: "Hp Mouse", price: 1299 });


  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};

main();