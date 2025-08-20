export class Logger {
  static info(message: string) {
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
  }

  static success(message: string) {
    console.log(`[SUCCESS] ${new Date().toISOString()} - ${message}`);
  }

  static warn(message: string) {
    console.warn(`[WARN] ${new Date().toISOString()} - ${message}`);
  }

  static error(message: string, err?: any) {
    console.error(
      `[ERROR] ${new Date().toISOString()} - ${message}`,
      err || ""
    );
  }
}
