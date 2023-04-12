import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import NavBar from "./components/NavBar"
import "./styles/main.scss"
import SaveJob from "./components/SaveJob"
import Jobs from "./components/Jobs"
import globalReducer from "./reducers/gloablReducer"
import { useReducer } from "react"
import { GlobalContext } from "./reducers/globalStateContext"

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        children: [
            {
                path: "/save-job",
                element: <SaveJob />,
            },
            {
                path: "/jobs",
                element: <Jobs />,
            },
        ],
    },
])

function App() {
    const initialState = {
        jobs: [],
    }

    const [store, dispatch] = useReducer(globalReducer, initialState)

    return (
        <div className="App">
            <GlobalContext.Provider value={{ store, dispatch }}>
                <RouterProvider router={router} />
            </GlobalContext.Provider>
        </div>
    )
}

function MainPage() {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    )
}

export default App
