const express = require("express");
const cors = require("cors");
const app = express();

const ActiveDirectory = require("activedirectory2");

var config = {
  url: "ldap://lstech-hq.lstechinc.com",
  baseDN: "DC=lstech-hq,DC=lstechinc,DC=com",
  username: "lsitadm",
  password: "Newteam@2023",
};

const employeeRoutes = require("./routes/employee");

app.use(cors());

app.get("/", (req, res) => {
  var groupName = "All Users";

  var ad = new ActiveDirectory(config);
  
  ad.getUsersForGroup(groupName, function (err, users) {
    if (err) {
      console.log("ERROR: " + JSON.stringify(err));
      return res.send({ error: "ERROR: " + JSON.stringify(err) });
    }

    if (!users) {
      console.log("Group: " + groupName + " not found.");
      return res.send({ error: "Group: " + groupName + ", not found." });
    } else {
      console.log(JSON.stringify(users));
      return res.send({ users }); 
    }
  });
});

app.use(employeeRoutes);

app.listen(3001, () => {
  console.log("Server Started");
});
