/**
 * @description Here's a way to extend the global interfaces.
 */
declare global {
  enum EToastType {
    SUCCESS = "SUCCESS",
    WARNING = "WARNING",
    DANGER = "DANGER",
  }

  enum EToastPosition {
    TOP_LEFT = "TOP_LEFT",
    TOP_RIGHT = "TOP_RIGHT",
    BOTTOM_LEFT = "BOTTOM_LEFT",
    BOTTOM_RIGHT = "BOTTOM_RIGHT",
  }
}

export {}; // This is required to ensure the file is treated as a module and avoids conflicts.
