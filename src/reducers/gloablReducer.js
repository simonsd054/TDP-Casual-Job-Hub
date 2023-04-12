function globalReducer(state, action) {
    switch (action.type) {
        case "addJob": {
            const newJobs = [...state.jobs]
            newJobs.push(action.data)
            return {
                ...state,
                jobs: newJobs,
            }
        }
        default:
            return state
    }
}

export default globalReducer
