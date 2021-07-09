const pdata = require("../models/personaldata");
const projectdata = require("../models/project");

module.exports.index = function (req, res) {
    console.log("responding with ", pdata.pdata);
    res.send(pdata.pdata)
};
module.exports.projects = function (req, res) {
    console.log(projectdata.pdata)
    res.send(projectdata.pdata)
};
