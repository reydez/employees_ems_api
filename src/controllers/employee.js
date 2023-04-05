const ActiveDirectory = require("activedirectory2");
const config = require("../utils/adconfig")
const ad = new ActiveDirectory(config);
const groupName = "appdev";

exports.getEmployee = (req, res) => {
  ad.getUsersForGroup(groupName, function (err, users) {
    if (err) {
      return res.send({ error: "ERROR: " + JSON.stringify(err) });
    }

    if (!users) {
      return res.send({ error: "Group: " + groupName + ", not found." });
    } else {
      return res.send({ Employees: users });
    }
  });
};

exports.getEmployeeByDate = (req, res) => {
  const date = req.query.date;
  return res.send({ date });
};
