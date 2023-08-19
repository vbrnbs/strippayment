const express = require('express');
let cors = require('cors');
require('dotenv').config();
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);
// ('sk_test_51KYyZiF8wzumqS6HeeYPtRZu0J2cvtfrA6At60fvUjJxZrXK7Gw2jXv8O01tN3XRz5MPwtXv9m2DkMjb3QJzu9Yt00c0i8EL6y');
//(process.env.REACT_APP_STRIPE_SECRET_KEY)

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req,res) => {
    /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3,
        }
    ]

    stripe wants
    [
        {
            price: 1,
            quantity: 3,
        }
    ]
    */
    console.log(req.body.items)
    const items =  req.body.items
    let lineItems = [];
    items.forEach(element => {
        lineItems.push(
            {
                price: element.id,
                quantity: element.quantity,
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/cancel",
        locale: 'hu',
    });
    console.log(session.url)
    res.send(JSON.stringify({
        url: session.url
    }))

});

app.listen(4000, () => console.log('listening on port 4000'))