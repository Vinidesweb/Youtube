import { UserContext } from "../../contexts/userContexts";
import { Container, MenuItem } from "./menustyle";
import React, { useContext } from "react";

const items = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

function Menu(){
    const {openMenu} = useContext(UserContext);
    return (
        <Container>
            {items.map(() => (
                <MenuItem>
                  Início
                </MenuItem>
            ))}
        </Container>
    )
} 

export default Menu;