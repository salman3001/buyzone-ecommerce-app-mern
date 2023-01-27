import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const cardData = {
    name: "Iphone",
    price: "100",
    category: "phones",
    images: ["https://media.istockphoto.com/id/1405838999/photo/smartphone-similar-to-iphone-13-with-blank-white-screen-for-infographic-global-business.jpg?b=1&s=170667a&w=0&k=20&c=qDMK-mCWOhPMAn4gm_XkiMCyLraMIl7TLOnLJamlhOI=", "https://media.istockphoto.com/id/1383006900/photo/mock-up-screen-smartphone.jpg?b=1&s=170667a&w=0&k=20&c=5ozH3cuLVaVA6qmO0625sP2Ya_TN0om0nVv2KsdXAUo="],
    inStock: "10"
}

export const ProductCard = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {cardData.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {cardData.price + "$"}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" size="small">Add to cart</Button>
            </CardActions>
        </Card>
    )
}
