// This is the function middleware to manage the custom logging mechanism
// param: param is the custom arguments passed to the logger middleware
// store: Store in the redux store which contains {dispatc, getState}
// next: is the function which helps to dispatch the action: this is the reducer action which will contain the {type: "action type", payload: "action data"}

const customLogger = (param) => (store) => (next) => (action) => {
    // console.log('Param', param);
    // console.log('Store', store);
    // console.log('next', next);
    // console.log('action', action);
  return next(action);
};

export default customLogger;
