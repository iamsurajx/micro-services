const Product = require("../model/product.models");

exports.productInsert = async (req, res) => {
  try {
    res.status(201).json({
      message: "User Inserted"
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error"
    });
  }
}

