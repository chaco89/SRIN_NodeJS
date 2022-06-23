const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ""
  },
  gender: {
    type: String,
    default: "M"
  },
  birthDate: {
    type: Date
  },
  hireDate: {
    type: Date
  },
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
