import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Button, Menu, Container, Segment, Visibility } from 'semantic-ui-react'
// import ShoppingCartModal from "./ShoppingCartModal";


export default function HeaderMenu(props) {
    const [activeItem, setActiveItem] = useState(props.activeItem)

    const onMenuItemClick = (e, {name}) => {
        setActiveItem(name)
    };

    return (
        <Visibility> {
            <Segment
                inverted
                textAlign='center'
                style={{padding: '1em 0em'}}
                vertical
                >
                <Container>
                        <Menu inverted pointing secondary size='large'>
                        <Menu.Item as={Link} to="/" name="Workshop" active={activeItem === "Workshop"} onClick={onMenuItemClick}>Мастерская</Menu.Item>
                        <Menu.Item as={Link} to="/products" name='Products' active={activeItem === "Products"} onClick={onMenuItemClick}>В продаже</Menu.Item>
                        <Menu.Item as={Link} to="/about" name="about" active={activeItem === "about"} onClick={onMenuItemClick}>Контакты</Menu.Item>
                        <Menu.Item position='right'>
                            <Button as={Link} to="/login" active={activeItem === "login"} onClick={onMenuItemClick} inverted>Вход</Button>
                            <Button as='a' inverted style={{marginLeft: '0.5em'}}>Регистрация</Button>
                        {/* <ShoppingCartModal/> */}
                        </Menu.Item>
                    </Menu>
                </Container>
                </Segment> }
        </Visibility>
    );
}
