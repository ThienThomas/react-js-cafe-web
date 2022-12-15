/* eslint-disable no-undef */

export enum LogType {
  DEBUG = 'DEBUG',
  ERROR = 'ERROR',
  WARNING = 'WARNING'
}

export const Logger = (data: any, type?: LogType, functionName?: string) => {
  console.log(type, functionName, data);
};
