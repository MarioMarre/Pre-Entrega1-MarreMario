import React from "react";
import ItemCount from "./ItemCount";
import "./Style.css"
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import { CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from "@mui/material";


const Item = ({product}) => {
            const onAdd = (count) => {
               setTimeout(() => {
                   console.log(`El usuario selecionó ${count}`);
               }, 2000);
           } 
    return(
        <>  
            <Card className="card" >
                <CardActionArea className="cardA">
                    <CardMedia className="cardmed" component="img" height="140" image={product.image} alt={product.title}/>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div"> {product.title} </Typography>
                            <Typography variant="body2" color="text.secondary"> ${product.price} </Typography>
                        </CardContent>
                </CardActionArea>
                <CardActions className="cardAc">
                    <ItemCount className="contador" stock = {10} onAdd={onAdd}/>
                    <Link to={`/product/${product.id}`}>
                        <Button size="small" color="primary"> Ver Detalles </Button>
                    </Link>
                </CardActions>
            </Card>
        </> 
    )
};

export default Item;