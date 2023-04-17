import {
    Button,
    ClickAwayListener,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Tooltip,
} from "@mui/material"
import InfoIcon from "@mui/icons-material/Info"

import { useGlobalContext } from "../reducers/globalStateContext"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

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

    const jobs = [
        {
            id: 1,
            title: "Wait Staff",
            avgPay: 25,
        },
        {
            id: 2,
            title: "Kitchen Hand",
            avgPay: 27,
        },
        {
            id: 3,
            title: "Night Filler",
            avgPay: 32,
        },
    ]

    const { dispatch } = useGlobalContext()

    const [jobInfo, setJobInfo] = useState({
        title: "",
        location: "",
        payment: 0,
        description: "",
    })
    const { storeTitle, location, payment, description } = jobInfo
    const [payPeriod, setPayPeriod] = useState(pays[0].title)
    const [genericTitle, setGenericTitle] = useState("")
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const handleTooltipClose = () => {
        setOpen(false)
    }

    const handleTooltipOpen = () => {
        setOpen(true)
    }

    const handlePeriodChange = (e) => {
        setPayPeriod(e.target.value)
    }

    const handleGenericJobTitleChange = (e) => {
        setGenericTitle(e.target.value)
        const payment = jobs.find((job) => job.title === e.target.value).avgPay
        setJobInfo((prevJobInfo) => {
            return {
                ...prevJobInfo,
                payment,
            }
        })
    }

    const handleChange = (e) => {
        setJobInfo((prevJobInfo) => {
            return {
                ...prevJobInfo,
                [e.target.name]: e.target.value,
            }
        })
    }

    const saveJob = () => {
        dispatch({
            type: "addJob",
            data: {
                ...jobInfo,
                period: payPeriod,
            },
        })
        navigate("/jobs")
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
                    <label className="label">Generic Job Title</label>
                    <FormControl fullWidth size="small">
                        <Select
                            sx={{
                                boxShadow: "none",
                                ".MuiOutlinedInput-notchedOutline": {
                                    border: 0,
                                },
                            }}
                            id="job-title-select"
                            value={genericTitle}
                            onChange={handleGenericJobTitleChange}
                        >
                            {jobs.map((job) => {
                                return (
                                    <MenuItem key={job.id} value={job.title}>
                                        {job.title}
                                    </MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </div>
                <div className="form-items">
                    <label className="label">Store Specific Job Title</label>
                    <input
                        className="input"
                        name="storeTitle"
                        value={storeTitle}
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
                    <div
                        style={{
                            display: "flex",
                        }}
                    >
                        <label className="label">Payment</label>
                        <ClickAwayListener onClickAway={handleTooltipClose}>
                            <div>
                                <Tooltip
                                    PopperProps={{
                                        disablePortal: true,
                                    }}
                                    onClose={handleTooltipClose}
                                    open={open}
                                    disableFocusListener
                                    disableHoverListener
                                    disableTouchListener
                                    title="The pay here is auto generated by our system
                                according to the average pay for the specific job
                                title. You can also change it if you wish."
                                    arrow
                                >
                                    <Button sx={{padding: 0, minWidth: 0}} onClick={handleTooltipOpen}>
                                        <InfoIcon />
                                    </Button>
                                </Tooltip>
                            </div>
                        </ClickAwayListener>
                    </div>
                    <div className="payment-input">
                        <input
                            className="input"
                            name="payment"
                            value={payment}
                            onChange={handleChange}
                        />
                        <FormControl fullWidth size="small">
                            <InputLabel id="payment-period-label">
                                Period
                            </InputLabel>
                            <Select
                                labelId="payment-period"
                                id="payment-period-select"
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
