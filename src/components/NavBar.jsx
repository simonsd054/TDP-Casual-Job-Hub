import { useState } from "react"
import {
    AppBar,
    Box,
    Divider,
    Drawer,
    IconButton,
    ListItemButton,
    ListItemText,
    Toolbar,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { Link } from "react-router-dom"

export default function NavBar() {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return
        }
        setDrawerOpen(open)
    }

    const links = [
        {
            to: "/save-job",
            text: "Save a New Job",
        },
        {
            to: "/jobs",
            text: "View Jobs",
        },
    ]

    return (
        <AppBar
            sx={{
                bgcolor: "#FF8383",
            }}
            position="static"
        >
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer(true)}
                    sx={{
                        mr: 2,
                        display: { xs: "block", sm: "none" },
                        color: "black",
                    }}
                >
                    <MenuIcon />
                </IconButton>

                <Drawer
                    variant="temporary"
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                >
                    <Box>
                        <IconButton
                            sx={{ mb: 2 }}
                            onClick={toggleDrawer(false)}
                        >
                            <CloseIcon />
                        </IconButton>

                        <Divider sx={{ mb: 2 }} />

                        <Box sx={{ mb: 2 }}>
                            {links.map((link) => {
                                return (
                                    <Link
                                        style={{
                                            textDecoration: "none",
                                            color: "black",
                                        }}
                                        key={link.to}
                                        to={link.to}
                                        onClick={toggleDrawer(false)}
                                    >
                                        <ListItemButton>
                                            <ListItemText primary={link.text} />
                                        </ListItemButton>
                                    </Link>
                                )
                            })}
                        </Box>
                    </Box>
                </Drawer>
            </Toolbar>
        </AppBar>
    )
}
