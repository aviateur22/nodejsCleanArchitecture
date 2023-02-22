import { LoggerSelection } from "../../helpers/logger/LoggerSelection";
import { LoggerSource } from "../../helpers/logger/LoggerSource";

class LoggerServiceImpl {
  
  private static logger: LoggerSchema;

  /**
   * Récupération du Logger
   */
  static getLogger(): LoggerSchema {
    if(!LoggerServiceImpl.logger) {
      const logger = new LoggerSelection();
      LoggerServiceImpl.logger  = logger.getLogger(LoggerSource.bunyan);
    }

    return LoggerServiceImpl.logger;
  }

}

export { LoggerServiceImpl }