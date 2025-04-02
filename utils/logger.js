const getInfoLog = (req) => {
  return `Request: ${req.method} ${req.url}`;
};

const getErrorLog = (error) => {
  return `Error: ${error.message}`;
};

const getProcessLog = (processInfo) => {
  return `Process: ${processInfo}`;
};

module.exports = { getInfoLog, getErrorLog, getProcessLog };