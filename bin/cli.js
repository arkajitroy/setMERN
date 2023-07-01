#!/usr/bin/env node

const readline = require("readline");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const exec = promisify(require("child_process").exec);

// constants
const templateRepoUrl = "https://github.com/arkajitroy/setMERN.git";
const templatesDir = path.join(__dirname, "templates");

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// templates constants
const templates = [
  { name: "javascript (Js)", template_dir: "javascript-template" },
  { name: "typescript (Ts)", template_dir: "typescript-template" },
];

console.log("Choose the template of your choice 👇");
templates.forEach((templates, index) => {
  console.log(`[choice 0${index + 1}]: ${templates.name}`);
});

// Prompt the user to choose a template
rl.question("Make your choice, Entering the number 👉  ", async (template) => {
  const templateIndex = parseInt(template) - 1;
  let template_name;

  // Validate the template choice
  if (templateIndex !== 1 || templateIndex !== 2) {
    console.log("Sorry! But you have chosen a wrong choice");
    rl.close();
    return;
  }

  if (templateIndex === 1) template_name = "javascript";
  if (templateIndex === 2) template_name = "typescript";

  // Set the template directory path based on the user's choice
  const templateDir = path.join(templatesDir, `${template_name}-template`);

  try {
    // Clone the template repository to the working space
    await cloneTemplate(templateDir);
    console.log("⌛ Hang on buddy !! Cloning the repository");
    console.log(`Template cloned successfully 💯\n${templateDir}`);
    console.log("Here we Go 💯 All set for hacking 🤖");
  } catch (error) {
    console.error("Error cloning template:", error);
  } finally {
    rl.close();
  }
});

// Function to clone the template repository
async function cloneTemplate(destinationDir) {
  // Clone the repository using git command
  const command = `git clone ${templateRepoUrl} ${destinationDir}`;
  await exec(command);
}
