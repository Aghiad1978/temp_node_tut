import { print } from "./utils.js";
import { readFileSync, writeFileSync } from "fs";
import { readFile, writeFile } from "fs/promises";

const content = readFileSync("./test.txt", { encoding: "utf8" });
print(content);
writeFileSync("./test2.txt", "this is my first data\n");
writeFileSync("./test2.txt", "يمبنتلميبت لمت يملتم يببتلمنت يببملتمي", {
  encoding: "utf8",
  mode: 0o600,
  flag: "a",
});
