let initialstate={balls:10}
// when state is not passed then initial state=10

function ballreducer(state = initialstate ,action) {
    switch (action.type) {
      case "increment":
        return {
            balls:state.balls + 1}
      case "decrement":
        return{
             balls:state.balls - 1}
      default:
        return state
    }
  }

export default ballreducer ;