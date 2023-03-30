import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  product: {
    id: string;
    name: string;
    img: { imgSrc: string; id: string };
    desc: string;
    colorqty: number;
    price: number;
  };
}

export const ProductCard = ({ product }: Props) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ boxShadow:'none', cursor:'pointer' }} onClick={() => navigate("/productDetails")}>
      <Stack>
        <Box width={"100%"} height="500px">
          <img
            src={product.img.imgSrc}
            alt="product"
            width="100%"
            height="100%"
          />
        </Box>
        <Typography color="#b96d47">Just In</Typography>
        <Typography>{product.name}</Typography>
        <Typography color="#8e8e8e">{product.desc}</Typography>
        <Typography color="#8e8e8e">
          {`${product.colorqty} `}
          {product.colorqty > 1 ? "Colors" : "Color"}
        </Typography>
        <br />
        <Typography>
          {"MRP : "} &#8377;
          {product.price.toFixed(2)}
        </Typography>
      </Stack>
    </Card>
  );
};
