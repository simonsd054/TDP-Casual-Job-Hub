import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"

import { useGlobalContext } from "../reducers/globalStateContext"
import { useState } from "react"

export default function SaveJob() {
    const pays = [
        {
            title: "per hr",
        },
        {
            title: "per day",
        },
        {
            title: "per week",
        },
    ]

    const { store, dispatch } = useGlobalContext()

    const [jobInfo, setJobInfo] = useState({
        title: "",
        location: "",
        payment: 0,
        description: "",
    })
    const { title, location, payment, description } = jobInfo
    const [payPeriod, setPayPeriod] = useState(pays[0].title)

    const handlePeriodChange = (e) => {
        setPayPeriod(e.target.value)
    }

    const handleChange = (e) => {
        setJobInfo((prevJobInfo) => {
            return {
                ...prevJobInfo,
                [e.target.name]: e.target.value,
            }
        })
    }

    console.log("haha", jobInfo)

    console.log("store", store)

    const saveJob = () => {
        dispatch({
            type: "addJob",
            data: {
                ...jobInfo,
                period: payPeriod,
            },
        })
    }

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
                    Save/Post Job
                </h2>
            </div>
            <div className="form">
                <div className="form-items">
                    <label className="label">Job Title</label>
                    <input
                        className="input"
                        name="title"
                        value={title}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-items">
                    <label className="label">Location</label>
                    <input
                        className="input"
                        name="location"
                        value={location}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-items">
                    <label className="label">Payment</label>
                    <div className="payment-input">
                        <input
                            className="input"
                            name="payment"
                            value={payment}
                            onChange={handleChange}
                        />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                Period
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={payPeriod}
                                label="Period"
                                onChange={handlePeriodChange}
                            >
                                <MenuItem value="per hr">per hr</MenuItem>
                                <MenuItem value="per day">per day</MenuItem>
                                <MenuItem value="per week">per week</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className="form-items">
                    <label className="label">Description</label>
                    <textarea
                        className="input description"
                        rows={4}
                        name="description"
                        value={description}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-upload">
                    <input
                        className="upload-button"
                        type="button"
                        value="Upload Photo/Video"
                    />
                </div>
                <div className="form-buttons">
                    <input
                        className="buttons-button save-button"
                        type="button"
                        value="Save Template"
                        onClick={saveJob}
                    />
                    <input
                        className="buttons-button post-button"
                        type="button"
                        value="Post Job"
                    />
                </div>
            </div>
        </div>
    )
}
