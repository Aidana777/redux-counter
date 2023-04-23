const initialState = {
   count: 0

}
export default function reducer(state = initialState, action) {
   if (action.type === "Increment") {
      return {
         ...state,
         count: state.count + 1
      }
   }
   else if (action.type === 'Decrement') {
      return {
         ...state,
         count: state.count > 0 ? state.count - 1 : (state = 0)
      }
   }

   return state
}

