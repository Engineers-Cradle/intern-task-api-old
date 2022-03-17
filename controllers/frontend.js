const ContactForm = require("../models/contact_form.js");

var path = require("path");
var options = {
  root: path.join(__dirname),
};

var fileName = "artifacts/logo.png";

module.exports.addData = async (req, res) => {
  try {
    const { Name, Address, Email, JobStatus, DoLiketoCode, Secret } = req.body;
    const contactForm = new ContactForm({
      Name,
      Address,
      Email,
      JobStatus,
      DoLiketoCode,
      Secret,
    });
    await contactForm.save();
    res.status(200).json({
      success: true,
      message: "Data added successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports.viewData = async (req, res) => {
  try {
    const { secret } = req.params;
    const data = await ContactForm.find({ Secret: secret });
    // console.log(data.length);
    if (data.length === 0) {
      throw new Error("Invalid secret passed");
    } else {
      res.status(200).json({
        success: true,
        message: "Data fetched successfully",
        data,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports.layout = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Data fetched successfully",
      data: {
        Name: "EC Frontend Intern Task #1",
        Status: "Operational",
        version: "1.0.0",
        Icon: "🟢",
        Logo: "/logo",
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports.logo = async (req, res) => {
  res.status(200).sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    }
  });
};
