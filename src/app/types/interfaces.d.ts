/**
 * @description Here's a way to extend the global interfaces.
 */
declare global {
  interface IBusEvent {
    [key: string]: unknown;
    [key: symbol]: unknown;
  }

  interface IEntry {
    name: string;
    path: string;
  }
}

export {}; // This is required to ensure the file is treated as a module and avoids conflicts.
