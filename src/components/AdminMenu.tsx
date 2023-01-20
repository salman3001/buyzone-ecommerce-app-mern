import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

const menuItems = ["Add new product", 'Products', 'Orders', "Total Sales"]


export const AdminMenu = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: 'column',
            gap: 1,
            py: 2
        }}>
            {menuItems.map(((category, index) => (
                <NavLink key={index} to={`/admin/dashboard/${category}`}>{category}</NavLink>
            )))}
        </Box>
    );
};