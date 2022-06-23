const express = require("express");
const employeeModel = require("../model/Employee");
const app = express();

app.post("/employee", async (request, response) => {
    const employee = new employeeModel(request.body);
    try {
      await employee.save();
      response.send(employee);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/employee", async (request, response) => {
  const employees = await employeeModel.find({});

  try {
    response.send(employees);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/employee/:id", async (request, response) => {
  const employees = await employeeModel.findById(request.params.id);

  try {
    response.send(employees);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.put("/employee/:id", async (request, response) => {

  const filter = { _id :request.params.id };
  const newValue = {
                      name : request.body.name,
                      gender : request.body.gender,
                      birthDate : request.body.birthDate,
                      hireDate : request.body.hireDate
                   }

  let updatedEmployee = await employeeModel.findOneAndUpdate(filter, newValue, {
    returnOriginal: false
  });

  try {
    response.send(updatedEmployee);
  } catch (error) {
    response.status(500).send(error);
  }
});


app.delete("/employee/:id", async (request, response) => {
  const employees = await employeeModel.deleteOne({ _id : request.params.id } );

  try {
    response.send(employees);
  } catch (error) {
    response.status(500).send(error);
  }
});


module.exports = app;
