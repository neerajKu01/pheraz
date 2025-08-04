import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Box,
    useTheme,
    useMediaQuery
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useState } from 'react';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const isMobile = useMediaQuery(useTheme().breakpoints.down('md'));

    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                backgroundColor: 'transparent',
                color: 'black',
                backdropFilter: 'blur(4px)', // Optional: slight blur
                zIndex: 10,
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/* Logo / Brand */}
                <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
                    Pehraz
                </Typography>

                {/* Desktop Menu */}
                {!isMobile && (
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        <Button component={Link} to="/pheraz" color="inherit">Home</Button>
                        <Button
                            color="inherit"
                            onClick={handleMenuOpen}
                        >
                            Shop ▾
                        </Button>
                        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                            <MenuItem onClick={handleMenuClose} component={Link} to="/category/dresses">Dresses</MenuItem>
                            <MenuItem onClick={handleMenuClose} component={Link} to="/category/tops">Tops</MenuItem>
                            <MenuItem onClick={handleMenuClose} component={Link} to="/category/accessories">Accessories</MenuItem>
                        </Menu>
                        <Button component={Link} to="/pheraz/about" color="inherit">About Us</Button>
                        <Button component={Link} to="/pheraz/contact" color="inherit">Contact Us</Button>
                    </Box>
                )}

                {/* Right Side Icons */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton color="inherit"><SearchIcon /></IconButton>
                    <IconButton color="inherit"><PersonOutlineIcon /></IconButton>
                    <IconButton color="inherit"><ShoppingBagOutlinedIcon /></IconButton>
                </Box>

                {/* Mobile Hamburger */}
                {isMobile && (
                    <IconButton color="inherit">
                        <MenuIcon />
                    </IconButton>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
