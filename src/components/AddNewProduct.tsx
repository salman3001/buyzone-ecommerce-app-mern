import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
import * as yup from 'yup';

export const AddNewProduct = () => {
    return (
        <Container component={Paper} maxWidth="xs" elevation={3} sx={{
            my: 8
        }}>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    py: 4,
                    minHeight: '50vh',

                    gap: 2,
                }}
            >
                <Typography variant="h5" fontWeight="bold" alignSelf="center" py={2}>
                    Add a new product
                </Typography>

                <TextField name="email" id="email" label="Email" />
                <TextField name="password" id="password" label="Password" />
                <Button variant="contained" type="submit" sx={{ mt: 4 }}>
                    Add Product
                </Button>
            </Box>
        </Container>
    );
};
