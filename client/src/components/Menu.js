import {MenuItem, MenuList, Menu,} from "@mui/material";
import {IconButton} from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu"
import {useState} from "react";


const MyMenu = (props) => {
    const {
        menuOpen,
        closeMenu = Function.prototype
    } = props

    const [isMenuOpen, setMenuOpen] = useState(false)

    return (<div>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{mr: 2}}
                onClick={() => setMenuOpen(true)}
            >
                <MenuIcon/>
            </IconButton>
            <Menu
                open={isMenuOpen}
                onClose={() => setMenuOpen(false)}
            >
                <MenuList

                >
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </MenuList>
            </Menu>
        </div>
    )
}

export default MyMenu