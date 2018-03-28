const args = ["run build"];
const opts = { stdio: "inherit", cwd: "audi", shell: true };
require("child_process").spawn("npm", args, opts);