// Initial state
const state = {
    activeTab: 0
  };
  
  // Function to get state
  const getState = () => state;
  
  // Function to set state
  const setState = (newState) => {
    Object.keys(newState).forEach(key => {
      if (state.hasOwnProperty(key)) {
        state[key] = newState[key];
      }
    });
  };
  
  export { getState, setState };
  