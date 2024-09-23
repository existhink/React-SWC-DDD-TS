// Fast-glob
import fg from "fast-glob";

// Path
import path from "path";

function removeExtension(str: string) {
  return path.basename(str, path.extname(str));
}

export const getComponentImports = () => {
  // Define an array of directory objects to search for components
  const directories = [
    {
      pattern: "./src/app/components/**/*.{tsx,jsx}",
      omit: "./src/app/components",
    },
  ];

  // Search for component files in directories and return their file paths as an array
  const entries = fg.sync(
    directories.map((x) => x.pattern),
    {
      dot: true,
      objectMode: true,
    }
  );

  // For each component file, extract the component name and fromPath
  const imports = entries.map((entry: IEntry) => {
    // Replace './src' with '@' in the fromPath
    const fromPath = entry.path.replace(/\.\/src/gi, "@");

    // Return an object with the fromPath and an array containing the component name and its variable name
    return {
      [fromPath]: [[removeExtension(entry.name), removeExtension(entry.name)]],
    };
  });

  return imports;
};
