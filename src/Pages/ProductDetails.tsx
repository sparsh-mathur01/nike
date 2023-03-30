import {
  Button,
  Collapse,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";
import { Container, Stack } from "@mui/system";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { SizeChart } from "../components";

interface Props {
  product?: {
    id: string;
    name: string;
    img: string[];
    desc: string;
    colorqty: number;
    price: number;
  };
}

const ProductDetails = ({
  product = {
    id: "1",
    name: "Nike Court Vision Low",
    img: [""],
    desc: "Men's basketball shoes",
    colorqty: 1,
    price: 199,
  },
}: Props) => {
  const [returnCollapse, setReturnCollapse] = useState(false);
  const [reviewCollapse, setReviewCollapse] = useState(false);
  const [infoCollapse, setInfoCollapse] = useState(false);

  return (
    <Container sx={{ mt: 10 }}>
      <Grid container>
        <Grid item xs={7}>
          {/* <ImageComponent images={['']}/> */}
        </Grid>
        <Grid item xs={5}>
          <Stack>
            <Typography fontSize="32px">{product.name}</Typography>
            <Typography>{product.desc}</Typography>
            <br />
            <Stack rowGap={1}>
              <Typography>
                {"MRP : "} &#8377;
                {product.price.toFixed(2)}
              </Typography>
              <Typography color="#8e8e8e">incl. of taxes</Typography>
              <Typography color="#8e8e8e">
                (Also includes all applicable duties)
              </Typography>
            </Stack>
            <Stack rowGap={2} my={7}>
              <SizeChart/>
              <Button
                fullWidth
                variant="contained"
                sx={{ backgroundColor: "black", py: 2, borderRadius: 8 }}
              >
                Add to Bag
              </Button>
              <Button
                fullWidth
                variant="outlined"
                sx={{ py: 2, borderRadius: 8 }}
                endIcon={<FavoriteIcon />}
              >
                Favourite
              </Button>
            </Stack>
            <Typography>
              The fastbreak style of '80s hoops meets the fast-paced culture of
              today's game with the Nike Court Vision Low. It has an upper
              inspired by old-school basketball sneakers and the classic rubber
              cupsole featured on some of our most iconic kicks of the past,
              like the Air Force 1.
            </Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{ mx: 0, px: 0 }}>
                  <ListItemIcon>
                    <FiberManualRecordIcon />
                  </ListItemIcon>
                  <ListItemText primary="Colour Shown: White/White/Team Orange/Hyper Royal" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ mx: 0, px: 0 }}>
                  <ListItemIcon>
                    <FiberManualRecordIcon />
                  </ListItemIcon>
                  <ListItemText primary="DrStyle: DN4243-141afts" />
                </ListItemButton>
              </ListItem>
            </List>
            <Typography
              onClick={() => alert("product details popup")}
              sx={{ textDecoration: "underline", cursor: "pointer" }}
            >
              View Product Details
            </Typography>
            <Stack my={2}>
              <Divider />
              <Stack my={2}>
                <Stack direction={"row"} justifyContent="space-between">
                  <Typography fontSize="20px">Delivery & Returns</Typography>
                  <KeyboardArrowDownIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => setReturnCollapse(!returnCollapse)}
                  />
                </Stack>
                <Collapse in={returnCollapse}>
                  <Typography>
                    Free delivery for purchases above ₹14,000.00 Standard
                    delivery 4–9 Business Days Orders are processed and
                    delivered Monday–Friday (excluding public holidays) Nike
                    Members enjoy free returns.
                  </Typography>
                </Collapse>
              </Stack>
              <Divider />
              <Stack my={2}>
                <Stack direction={"row"} justifyContent="space-between">
                  <Typography fontSize="20px">Reviews (0)</Typography>
                  <Stack direction={"row"} gap={1}>
                    <Rating name="read-only" value={0} readOnly />

                    <KeyboardArrowDownIcon
                      sx={{ cursor: "pointer" }}
                      onClick={() => setReviewCollapse(!reviewCollapse)}
                    />
                  </Stack>
                </Stack>
                <Collapse in={reviewCollapse}>
                  <Stack rowGap={1}>
                    <Stack direction={"row"} alignItems="center" gap={2}>
                      <Rating name="read-only" value={0} readOnly /> 0 stars
                    </Stack>
                    <Typography>
                      Have your say. Be the first to review the Nike Court
                      Vision Low.
                    </Typography>
                    <Typography
                      onClick={() => alert("product review popup")}
                      sx={{ textDecoration: "underline", cursor: "pointer" }}
                    >
                      Write a Review
                    </Typography>
                  </Stack>
                </Collapse>
              </Stack>
              <Divider />
              <Stack my={2}>
                <Stack direction={"row"} justifyContent="space-between">
                  <Typography fontSize="20px">Product Information</Typography>
                  <KeyboardArrowDownIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => setInfoCollapse(!infoCollapse)}
                  />
                </Stack>
                <Collapse in={infoCollapse}>
                  <Typography>
                    Declaration of Importer: Direct import by the individual
                    customer Marketed by: Nike Global Trading B.V. Singapore
                    Branch, 30 Pasir Panjang Road, #10-31/32, Mapletree Business
                    City, Singapore 117 440 Net Quantity: 1 Pair
                  </Typography>
                </Collapse>
              </Stack>
              <Divider />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
