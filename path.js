import { print } from "./utils.js";
import path from "path";

print(path.sep);
const folder = path.join("user", "home", "node");
print(folder);
print(path.join(process.cwd(), "text.txt"));
print(path.basename(folder));
print(path.basename(path.join(process.cwd(), "text.txt")));
print(path.resolve(process.cwd(), "test", "test"));
