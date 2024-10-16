// boost your github account
import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import randomInt from "random-int";

// the path for our json file
const file = "data.json";

const makeCommit = (n) => {
  if (n === 0) {
    simpleGit().push(["--set-upstream", "origin", "main"], (err, result) => {
      if (err) {
        console.error("Push failed:", err);
      } else {
        console.log("Push successful:", result);
      }
    });
    return;
  }
  const x = randomInt(0, 54);
  const y = randomInt(0, 6);
  // getting the starting date that you want
  const date = moment()
    .subtract(1, "y")
    .add(1, "d")
    .add(x, "w")
    .add(y, "d")
    .format();

  const data = {
    date: date,
  };

  console.log(data);
  // writing our data to the json file
  jsonfile.writeFile(file, data, () => {
    // commiting the changes to github and modifying the date
    simpleGit()
      .add([file])
      .commit(date, { "--date": date }, (err) => {
        if (err) {
          console.error("Commit failed:", err);
          return;
        }
        console.log("Committed");
        makeCommit(n - 1);
      });
  });
};

makeCommit(10);
