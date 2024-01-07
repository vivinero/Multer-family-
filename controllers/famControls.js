const famModel = require("../models/famModel");

exports.signUp = async (req, res) => {
  try {
    const { fatherName, motherName, children } = req.body;
    const userFiles = req.files;

    // Extract filenames for each picture type
    const fatherPicture = userFiles['fatherPicture'] ? userFiles['fatherPicture'][0].filename : "";
    const motherPicture = userFiles['motherPicture'] ? userFiles['motherPicture'][0].filename : "";
    const childrenPicture = userFiles['childrenPicture'] ? userFiles['childrenPicture'].map(file => file.filename) : [];

    const userProfile = await famModel.create({
      fatherName,
      motherName,
      fatherPicture,
      motherPicture,
      children,
      childrenPicture
    });

    if (!userProfile) {
      return res.status(403).json({
        status: "error",
        message: "Unable to signup user"
      });
    }

    return res.status(200).json({
      message: "Successfully SignedUp",
      userProfile
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message
    });
  }
};

