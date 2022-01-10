import React from 'react';

import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import defaultImage from '../img/defaultImg.png'
const GoodsItem = (props) => {
    const {weight, productType, poster=defaultImage, price, color, dualSimBool, videoCard, setOrder} = props;
    return (
        <Grid item xs={12} md={4} >
            <Card sx={{ maxWidth: 345}}>
                <CardMedia
                    image={poster}
                    component="img"
                    alt={productType}
                    title={productType}
                    style={{width:"auto",
                    maxHeight:"340px",
                    maxWidth:"345px",
                    marginLeft:"auto",
                    marginRight:"auto"}}


                />
                <CardContent>
                    <Typography
                        variant="h6"
                        component="h3"
                    >
                        {productType}
                    </Typography>
                    <Typography variant="body1">
                        Вес: {weight} г
                    </Typography>
                    <Typography variant="body1">Цвет: {color} </Typography>
                    <Typography variant="body1">Цена: {price} ₴</Typography>
                    {productType === 'telephone' &&
                    <Typography variant="body1">2 Симки: {dualSimBool ? 'есть' : 'нет'} </Typography>}
                    {productType === 'laptop' && <Typography variant="body1">Видеокарта: {videoCard}</Typography>}
                </CardContent>
                <CardActions>
                    <Button
                        variant="outlined"
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                productType: props.productType,
                                price: props.price,
                            })
                        }
                    >
                        Купить
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
        ;
};

export default GoodsItem;