import { print } from "./utils.js";
import { readFile, writeFile } from "fs";

readFile("./test2.txt", { encoding: "utf8" }, (err, data) => {
  if (err) {
    print("Can't read file because:\n", err);
    return;
  }
  writeFile("./test.txt", data, { encoding: "utf8", flag: "a" }, (err) => {
    if (err) {
      print(err);
      return;
    }
  });
});
