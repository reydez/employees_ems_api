exports.getEmployee = (req, res) => {
  const dummyObj = {
    employees: [
      {
        name: "rodrigo",
        email: "something@gmail.com",
      },
      {
        name: "Gloria",
        email: "something@gmail.com",
      },
    ],
  };
  return res.send(dummyObj.employees);
};

exports.getEmployeeByDate = (req, res) => {
  const date = req.query.date;
  return res.send({ date });
};
