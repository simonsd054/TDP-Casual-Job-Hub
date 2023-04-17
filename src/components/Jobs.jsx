import { useGlobalContext } from "../reducers/globalStateContext"
import Job from "./Job"

export default function Jobs() {
    const { store } = useGlobalContext()

    const { jobs } = store

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <div>
                <h2
                    style={{
                        padding: "8px 50px",
                        backgroundColor: "#D9D9D9",
                    }}
                >
                    Job List
                </h2>
            </div>
            <div className="job-list">
                {jobs.length === 0
                    ? (
                        <div className="no-job">No Job Saved Yet</div>
                    )
                    : jobs.map((job, index) => {
                          return <Job key={index} job={job} />
                      })}
            </div>
        </div>
    )
}
