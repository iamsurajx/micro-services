const User = require("../model/user.models");

exports.userInsert = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const sendData = await User.create({
      username, email, password
    })

    res.status(201).json({
      message: "User Inserted",
      data: sendData
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error"
    });
  }
}

exports.userView = async (req, res) => {
  try {
    const sendData = await User.find();

    res.status(201).json({
      message: "User Inserted",
      data: sendData
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error"
    });
  }
}


exports.userSingleView = async (req, res) => {
  try {
    const { id } = req.params
    const sendData = await User.findById(id);

    res.status(201).json({
      message: "User Inserted",
      data: sendData
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error"
    });
  }
}

