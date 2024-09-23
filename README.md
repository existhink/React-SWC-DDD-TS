# 🌟 React SWC Starter With Vite

This project built with React, TypeScript, and TailwindCSS.

## Starter Introduction

This application use DDD pattern. Here you can learn a little about DDD pattern, [Visit me](https://www.geeksforgeeks.org/domain-driven-design-ddd)

---

## 🏆 Tips

Here's my opinions for write our code more clean and readable. So, you can follow it or ignore it.

1. Always using namespacing on your custom hooks, constants, etc on your domain. Example:

```bash
export const useAuthenticationHook = () => {
  /**
   * @description Reactive data binding
   */
  const [authentication_accessToken, setAuthentication_accessToken] = useState();
  const [authentication_form, setAuthentication_form] = useState();
  ...
```

Reason: We normally read things from left to right, top to bottom. As a result, when using namespacing, we should be able to directly determine who owns variables, functions, and so on.

Side Effect: The use of namespacing can sometimes result in longer naming of variables, functions, and so on. However, we still have code that is easier to read than if we did not utilize namespacing at all.

2. Order naming your variables, function, etc to ascending.

```bash
export const useAuthenticationHook = () => {
  /**
   * @description Reactive data binding
   */
  const [authentication_accessToken, setAuthentication_accessToken] = useState();
  const [authentication_form, setAuthentication_form] = useState();

  const authentication_onCancel = () => {
     // Do something here
  }

  const authentication_onSubmit = () => {
     // Do something here
  }

  return {
    authentication_accessToken,
    authentication_form,
    authentication_onSubmit
  }
```

Reason: One of the most important reasons for creating variables, functions, and so on in ascending sequence is to make things easier while troubleshooting or adding features.

Side Effect: -

### Conclusion:

Actually, there are plenty other approaches to make our code cleaner and easier to read for humans. However, at this time, I'd want to underline the two points listed above. Because, as previously said, I am using the same code approach in my project.

As a result, I ask any creators who want to participate in this project to keep the previously created code consistent.

## 📖 Notes

When we wish to include a new package or library into this project. I ask that you first conduct some study on the package or library that you intend to utilize.

When it comes to adding a new package or library, there are various factors to consider. Among them are:

1. Is the package or library frequently updated by its creator?
2. Is the package or library popular with other developers?
3. Does the package or library have a lot of issues?
4. Is the package or library small in size?
5. Is the package or library simple to use and has a big impact on our project? etc.

I believe we can add the desired package or library once it has passed the five criteria outlined above. However, if you wish to start a conversation regarding the package or library you want to add, please do so in the project's discussion thread on GitHub.

## 🎖️ Web Technologies

| Technology  | Description                                                                | Version |
| ----------- | -------------------------------------------------------------------------- | ------- |
| TailwindCSS | A utility-first CSS framework for rapidly building custom user interfaces. | latest  |
| Typescript  | JavaScript with syntax for types                                           | latest  |
| Vite        | Native-ESM powered web dev build tool                                      | latest  |
| React       | React is a JavaScript library for building user interfaces..               | latest  |

## 🏅 Dependencies & Libraries

| Library                    | Description                                                                  | Version |
| -------------------------- | ---------------------------------------------------------------------------- | ------- |
| axios                      | Promise based HTTP client for the browser and node js                        | latest  |
| chalk                      | Terminal string styling done right Vuelidate.                                | latest  |
| fast-glob                  | It's a very fast and efficient glob library for Node.js                      | latest  |
| minimatch                  | A glob matcher in javascript                                                 | latest  |
| mitt                       | Tiny 200b functional event emitter / pubsub.                                 | latest  |
| react                      | React is a JavaScript library for building user interfaces.                  | latest  |
| react-dom                  | React package for working with the DOM.                                      | latest  |
| react-router-dom           | Declarative routing for React web applications                               | latest  |
| tailwindcss                | A utility-first CSS framework for rapidly building custom user interfaces.   | latest  |
| unplugin-auto-import       | Auto import APIs on-demand for Vite, Webpack, Rspack, Rollup and esbuild.    | latest  |
| unplugin-imagemin          | Unplugin compression Image Compression plugin based on squoosh and sharp.    | latest  |
| vite-plugin-compression    | Use gzip or brotli to compress resources.                                    | latest  |
| vite-plugin-remove-console | A vite plugin that remove the types of console in the production environment | latest  |
| vite-plugin-svg-icons      | Vite Plugin for fast creating SVG sprites.                                   | latest  |

## 🛠️ Setup Project

To get this project up and running in your development environment, follow these step-by-step instructions.

### 🍴 Prerequisites

We need to install or make sure that these tools are pre-installed on your machine:

- [NodeJS](https://nodejs.org/en/download/): It is a JavaScript runtime build.
- [Git](https://git-scm.com/downloads): It is an open source version control system.

## 🔍 Usage

### How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

### 🚀 Install Project

1. Clone the Repository

```bash
git clone https://github.com/existhink/VueJS3-DDD-TS.git
```

2. Install dependencies using bun

```shell
bun or bun install
```

3. Change **.env.local.example** to **.env.local**

You must change the .env.local.example to .env.local and match it with you local machine.

4. Run project for development

```shell
bun start:dev
```

---

## 🎉 Build The App

1. Build the app

```shell
bun build
```

## 🧪 Test

Run test across all files

```shell
bun test:unit
```

---

## 📂 Folder Structure

Project structure for this react starter

```javascript

public
|   |_______vite.svg
src                                       // Entry point for the app.
|   |_______app                           // Core of feature in the project.
|   |   |_______assets                    // Contain all assets for the app.
|   |   |_______components                // Global components for the app.
|   |   |_______constants                 // Contain all constants for the app.
|   |   |_______helpers                   // Contain all helpers for the app.
|   |   |_______routes                    // Configuration for load route the app.
|   |   |_______types                     // Contain all global types for the app.
|   |_______modules                       // Contain all modules for the app.
|   |   |_______dashboard                 // Dashboard module.
|   |   |   |_______components            // Contain all components for dashboard module.
|   |   |   |_______constants             // Contain all constants for dashboard module.
|   |   |   |_______interfaces            // Contain all interfaces for dashboard module.
|   |   |   |_______hooks                 // Contain all hooks for dashboard module.
|   |   |   |_______router                // Configuration for load route the dashboard module.
|   |   |   |_______views                 // Contain all views for dashboard module.
|   |   |_______{module-name}             // Example module.
|   |_______plugins                       // Contain all plugins for the app.
|   |   |_______axios                     // Axios plugin for the app.
|   |   |_______mitt                      // Mitt plugin for the app.
|   |   |_______router                    // Router plugin for the app.
|   App.css                               // Global style for the app component.
|   App.tsx                               // Main component for the app.
|   auto-imports.d.ts                     // Auto imports for the app.
|   index.css                             // Global style for the app.
|   main.tsx                              // Entry point for the app.
|   vite-env.d.ts                         // Vite environment file for the app.
test
|   |_______unit                          // Unit test for the app.
```

### ⚒️ How to Contribute

Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:

- Fork the repo
- Create a new branch (`git checkout -b improve-feature`)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (`git commit -am 'Improve feature'`)
- Push to the branch (`git push origin improve-feature`)
- Create a Pull Request

### 📩 Bug / Feature Request

If you find a bug (the website couldn't handle the query and / or gave undesired results), kindly open an issue [here](https://github.com/existhink/VueJS3-DDD-TS/issues/new) by including your search query and the expected result.

If you'd like to request a new function, feel free to do so by opening an issue [here](https://github.com/existhink/VueJS3-DDD-TS/issues/new). Please include sample queries and their corresponding results.

## 📜 Credits

List your collaborators, if any, with links to their GitHub profiles.

I'd like to acknowledge my collaborators, who contributed to the success of this project. Below are links to their GitHub profiles.

Furthermore, I utilized certain third-party assets that require attribution. Find the creators' links in this section.

If I followed tutorials during development, I'd include the links to those as well.

👦 Rafi Khoirulloh <br>
Email: khoirulloh.rafi2@gmail.com <br>
GitHub: @apiiyu

👦 Ramdhan Setiadhi <br>
Email: ramdhansetiadhi@gmail.com <br>
GitHub: @ramdhanstdi
