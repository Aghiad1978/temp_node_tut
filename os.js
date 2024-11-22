import { print } from "./utils.js";
import os from "os";
import process from "process";

print(os.arch());
print(os.cpus()[0]);
print(os.userInfo());
print(os.uptime() / (60 * 60 * 24));
print(os.uptime());
print(os.hostname());
print(os.machine());
// print(os.networkInterfaces());
print(os.platform());
print(os.version());
print(os.type());
const currentOs = {
  machine: os.machine(),
  platform: os.hostname(),
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem() / (1024 * 1024 * 1024),
  freemem: os.freemem() / (1024 * 1024 * 1024),
};
print(currentOs);

process.on("SIGINT", () => {
  print("Terminating signal has been sent");
  process.exit(0);
});
setInterval(() => {
  print("Waiting for ur signal");
}, 500);
