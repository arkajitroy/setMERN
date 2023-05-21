#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (err) {
    console.log(`Failed to execute the command ${command}`, err.message);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/arkajitroy/setMERN.git ${repoName}`;

const installNodeDependencies = `cd ${repoName} && npm install`;
const installReactDependencies = `cd ${repoName}/src/views && npm install`;

console.log("⌛ Cloning the repository with name", repoName);

const checkOut = runCommand(gitCheckoutCommand);
if (!checkOut) process.exit(-1);

console.log("Installing Dependencies, Grad some popcorns 🍿");

const installedNodeDeps = runCommand(installNodeDependencies);
const installReactDeps = runCommand(installReactDependencies);

if (!installedNodeDeps || installReactDeps) process.exit(-1);

console.log("💥 Here we go! Congratulations the project is ready to run 💥💯");

console.log("\nNow follow the commands to run the project");
console.log("\nBackend: npm run start");
console.log("\nFrontend: npm start");
