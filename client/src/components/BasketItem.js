import {IconButton, ListItem, Typography} from "@mui/material";
import {Close} from "@mui/icons-material";

const BasketItem = ({removeFromOrder, id, productType, price, quantity}) => {
    return (
        <ListItem
            sx={{border: '1px solid green'}}
        >
            <Typography
            variant="body1"
            sx={{flexGrow: 1}}
            >
                {productType}
                <br/>
                {price} ₴  x  {quantity} шт.
            </Typography>
            <IconButton
                onClick={() => removeFromOrder(id)}
            >
                <Close />
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;