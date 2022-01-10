import {useState} from 'react';

import Basket from "./components/Basket";
import GoodsList from './components/GoodsList';
import Search from './components/Search';
import Header from "./components/Header";
import {goods} from './data/goods';
import {Container} from "@mui/material";
import Menu from "./components/Menu";

const App = () => {
    const [order, setOrder] = useState([]);
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState(goods);
    const [isCartOpen, setCartOpen] = useState(false)

    const handleChange = (el) => {
        if (!el.target.value) {
            setProducts(goods);
            setSearch('');
            return;
        }

        setSearch(el.target.value);
        setProducts(
            products.filter((good) =>
                good.productType.toLowerCase().includes(el.target.value.toLowerCase())
            ))
    };

    const addToOrder = (goodsItem) => {
        let quantity = 1;

        const indexInOrder = order.findIndex(
            (item) => item.id === goodsItem.id
        );

        if (indexInOrder > -1) {
            quantity = order[indexInOrder].quantity + 1;

            setOrder(order.map((item) => {
                    if (item.id !== goodsItem.id) return item;

                    return {
                        id: item.id,
                        productType: item.productType,
                        price: item.price,
                        poster: item.poster,
                        quantity,
                    };
                }),
            );
        } else {
            setOrder([
                    ...order,
                    {
                        id: goodsItem.id,
                        productType: goodsItem.productType,
                        price: goodsItem.price,
                        quantity,
                    },
                ],
            );
        }
    };

    const removeFromOrder = (goodsItem) => {
        console.log('removeFromOrder')
        setOrder(order.filter((item) => item.id !== goodsItem));
    };

    return (
        <div style={{'position': 'relative'}}>
            <Header
                // handleMenu={() => setMenuOpen(true)}
                handleCart={() => setCartOpen(true)}
                orderLen={order.length}
            />
            <Container
                sx={{
                    mt: '1rem',
                    mb: '3rem'
                }}
            >
                <Search
                    value={search}
                    onChange={handleChange}
                />
                <GoodsList
                    goods={products}
                    setOrder={addToOrder}
                />
            </Container>
            <Basket
                order={order}
                removeFromOrder={removeFromOrder}
                cartOpen={isCartOpen}
                closeCart={() => setCartOpen(false)}
            />
        </div>
    );
}

export default App;