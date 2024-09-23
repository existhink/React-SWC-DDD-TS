import { execSync } from "child_process";

// Chalk
import chalk from "chalk";

try {
  // Run eslint
  console.log(chalk.blue("Running eslint..."));
  execSync("npx eslint ./src", { stdio: "inherit" });

  // If no errors, run the start:dev script
  console.log(chalk.green("Eslint passed. Starting the app..."));
  execSync("vite", { stdio: "inherit" });
} catch {
  console.error(
    chalk.red("Eslint failed. Please fix the issues before starting the app.")
  );
  process.exit(1);
}
