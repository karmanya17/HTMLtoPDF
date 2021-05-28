const {format,createLogger,transports}=require("winston");
const {timestamp,combine,printf}=format;
const logFormat=printf(({level,message,timestamp})=>{
  return `${timestamp} ${level}:${message}`;
});
const logger=createLogger({
  format:combine(timestamp(),logFormat),
  transports:[new transports.Console()],
})

module.exports=logger;
