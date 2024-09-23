// Chalk
import chalk from "chalk";

// File System
import fs from "fs";

// Path
import path from "path";

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log(chalk.red("Please provide a module name."));
} else {
  const moduleName = args[0];
  const kebabCaseModuleName = moduleName
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();
  const modulePath = path.join("src", "modules", moduleName);

  try {
    fs.mkdirSync(modulePath, { recursive: true });
    const listFolderNames = [
      "components",
      "constants",
      "interfaces",
      "router",
      "hooks",
      "views",
    ];

    // Create seperates folders and files
    listFolderNames.forEach((folderName) => {
      fs.mkdirSync(path.join(modulePath, folderName));

      switch (folderName) {
        case "components":
          fs.closeSync(
            fs.openSync(path.join(modulePath, folderName, ".gitkeep"), "w")
          );
          break;
        case "constants":
          fs.closeSync(
            fs.openSync(
              path.join(
                modulePath,
                folderName,
                `${kebabCaseModuleName}.constant.ts`
              ),
              "w"
            )
          );
          break;
        case "hooks":
          fs.closeSync(
            fs.openSync(
              path.join(
                modulePath,
                folderName,
                `${kebabCaseModuleName}.hook.tsx`
              ),
              "w"
            )
          );
          break;
        case "interfaces":
          fs.closeSync(
            fs.openSync(
              path.join(
                modulePath,
                folderName,
                `${kebabCaseModuleName}.interface.ts`
              ),
              "w"
            )
          );
          break;
        case "router":
          fs.closeSync(
            fs.openSync(
              path.join(
                modulePath,
                folderName,
                `${kebabCaseModuleName}.router.tsx`
              ),
              "w"
            )
          );
          break;
        case "views":
          fs.closeSync(
            fs.openSync(
              path.join(
                modulePath,
                folderName,
                `${kebabCaseModuleName}-main.tsx`
              ),
              "w"
            )
          );
          break;
        default:
          fs.closeSync(
            fs.openSync(
              path.join(modulePath, folderName, `${kebabCaseModuleName}.ts`),
              "w"
            )
          );
          break;
      }
    });

    console.log(
      chalk.green(
        `Module "${moduleName}" directory structure created successfully. Let's check it out!`
      )
    );
  } catch (err) {
    console.error(chalk.red(`Error creating module "${moduleName}": ${err}`));
  }
}
