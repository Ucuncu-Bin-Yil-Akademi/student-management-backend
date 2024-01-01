const Instructor = require("../models/instructor");
const Class = require("../models/class");

exports.createInstructor = async (req, res) => {
  try {
    const { name, lastName, mail, phoneNumber, course } = req.body;

    if (!name || !lastName || !mail || !phoneNumber || !course) {
      return res.status(400).json({ error: "Eksik alanları kontrol ediniz" });
    }

    const courseFound = await Class.findById(course);
    if (!courseFound) {
      return res.status(400).json({ error: "Kurs bulunamadı" });
    }

    const instructor = await Instructor.create({
      name,
      lastName,
      mail,
      phoneNumber,
      course,
    });

    res.status(201).json(instructor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
