import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {ShoppingCart} from "@mui/icons-material";
import BasketItem from "./BasketItem";

const Basket = (props) => {
    const {
        cartOpen,
        closeCart = Function.prototype,
        order = [],
        removeFromOrder,
    } = props
    return (
        <Drawer
            anchor="right"
            open={cartOpen}
            onClose={closeCart}
        >
            <List
                sx={{width: 300}}
            >
                <ListItem>
                    <ListItemIcon>
                        <ShoppingCart/>
                    </ListItemIcon>
                    <ListItemText primary="Корзина"/>
                </ListItem>
                <Divider/>
                {!order.length ? (
                    <ListItem>Корзина пуста</ListItem>
                ) : (
                    <>
                        {order.map(item => (
                            <BasketItem key={item.id} removeFromOrder={removeFromOrder} {...item}/>
                        ))}
                        <ListItem>
                            <Typography sx={{fontWeight: 800}}>
                                Общая стоимость:{' '}
                                {order.reduce((acc, item) => {
                                    return acc + item.price * item.quantity;
                                }, 0)}{' '}
                                $.
                            </Typography>
                        </ListItem>
                    </>
                )

                }
            </List>

        </Drawer>

    )
}
export default Basket