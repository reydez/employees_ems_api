const ActiveDirectory = require("activedirectory2");
const config = require("../utils/adconfig")
const ad = new ActiveDirectory(config);
const groupName = "appdev";

exports.getIndex = (req, res) => {
  ad.getUsersForGroup(groupName, function (err, users) {
    if (err) {
      return res.send({ error: "ERROR: " + JSON.stringify(err) });
    }

    if (!users) {
      return res.send({ error: "Group: " + groupName + ", not found." });
    } else {
      return res.send({ users });
    }
  });
}


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
