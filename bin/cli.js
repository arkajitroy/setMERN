#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const readLine = require("readline");

// main-repository
const repository = `https://github.com/arkajitroy/setMERN.git`;

// assigning the templates
const templates = [
  { name: "javascript (Js)", directory: "javascript-template" },
  { name: "typescript (Ts)", directory: "typescript-template" },
];

// prompt user to choose the template
const promptUser = () => {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // showing templates
  console.log("Choose the template of your choice 👇");
  templates.forEach((templates, index) => {
    console.log(`[choice 0${index + 1}]: ${templates.name}`);
  });

  rl.question("Make your choice, Entering the number 👉 ", (answer) => {
    const templateIndex = parseInt(answer) - 1;

    if (templateIndex >= 0 && templateIndex < templates.length) {
      rl.close();
      cloneAndCopyTemplate(templates[templateIndex]);
    } else {
      console.log("Sorry! But you have chosen a wrong choice");
      promptUser();
    }
  });
};

// Copy the template to the destination directory
const copyTemplate = (template) => {
  const { directory, destinationPath } = template;
  const templatePath = path.join(__dirname, directory);

  // Create the destination directory if it doesn't exist
  if (!fs.existsSync(destinationPath)) {
    fs.mkdirSync(destinationPath, { recursive: true });
  }

  // Copy files from the template directory to the destination directory
  fs.readdirSync(templatePath).forEach((file) => {
    const sourceFilePath = path.join(templatePath, file);
    const destinationFilePath = path.join(destinationPath, file);
    fs.copyFileSync(sourceFilePath, destinationFilePath);
  });
};

// Clone the template and copy it to the destination directory
const cloneAndCopyTemplate = (template) => {
  const { directory, destinationPath } = template;

  exec(`git clone ${repository}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`😥 Oops !! Error cloning the template: ${error}`);
      return;
    }
    console.log("⌛ Hang on buddy !! Cloning the repository");
    console.log(`Template cloned successfully 💯\n${stdout}`);

    template.directory = path.join(__dirname, directory);
    copyTemplate(template);
  });

  console.log("Here we Go 💯 All set for hacking 🤖");
};

promptUser();
