import {AppBar, Badge, IconButton, Toolbar, Typography} from "@mui/material";
import {ShoppingCart} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu"
import Menu from "./Menu";
import {useState} from "react";

function Header({handleMenu, handleCart, orderLen}) {
    // const [isMenuOpen, setMenuOpen] = useState(false)

    return (
        <AppBar
            position="absolute"
        >
            {/*<Menu*/}
            {/*    menuOpen={isMenuOpen}*/}
            {/*    closeMenu={() => setMenuOpen(false)}*/}
            {/*/>*/}
            <Toolbar>
                <Menu
                    // menuOpen={isMenuOpen}
                    // closeMenu={() => setMenuOpen(false)}
                />

                <Typography
                    variant="h6"
                    component="span"
                    sx={{flexGrow: 1}}
                >
                    MyShop
                </Typography>
                <IconButton
                    color="inherit"
                    onClick={handleCart}
                >
                    <Badge
                        color="secondary"
                        badgeContent={orderLen}
                    >
                        <ShoppingCart/>
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header