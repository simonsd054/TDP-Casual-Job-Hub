export default function Job({ job }) {
    return (
        <div className="job-item">
            <div className="job-image">
                <img src={require("../images/default.jpg")} alt="" />
            </div>
            <div className="job-box job-info">
                <div className="title">{job.storeTitle}</div>
                <div className="location">location - {job.location}</div>
                <div className="description">
                    {job.description}
                </div>
            </div>
            <div className="job-box job-payment">
                <div className="payment">{job.payment}</div>
                <div className="period">{job.period}</div>
            </div>
        </div>
    )
}
