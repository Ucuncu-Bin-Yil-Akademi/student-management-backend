// controllers/studentController.js
const Student = require("../models/student");
const Class = require("../models/class");

exports.createStudent = async (req, res) => {
  try {
    const { name, lastName, mail, phoneNumber, courses } = req.body;

    if (!name || !lastName || !mail || !phoneNumber || !courses) {
      return res.status(400).json({ error: "Eksik alanları kontrol ediniz" });
    }

    const coursesFound = await Class.find({ _id: { $in: courses } });
    if (coursesFound.length !== courses.length) {
      return res.status(400).json({ error: "Kurs bulunamadı" });
    }

    const student = await Student.create({
      name,
      lastName,
      mail,
      phoneNumber,
      courses,
    });

    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
