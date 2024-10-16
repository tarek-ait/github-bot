// boost your github account
const jsonfile = require("jsonfile");
const moment = require("moment");
const simpleGit = require("simple-git");
// the path for our json file
const file = "data.json";

// getting a date
const date = moment().format();

const data = {
  date: date,
};

// writing our data to the json file
jsonfile.writeFile(file, data);

// commiting the changes to github and modifying the date
simpleGit()
  .add([file])
  .commit(date, { "--date": date }, () => console.log("committed"));
