# amazon-payments-FE-clone

The purpose of this project is to reproduce CheckoutV2, Amazon Pay's next generation checkout technology. Images found within the [product's documentation](https://pay.amazon.com/checkoutv2) were used as pseudo wireframes for this project. 
The mentioned images include three screens:

* **Cart overview**, where the current customer can view items in their cart while shopping with a selected brand. Item quantity can be adjusted, which leads to a recalculated subtotal. An `Amazon Pay` button will navigate the user to the next screen

* **Amazon Pay overview**, where a customer can confirm their Amazon Pay settings

* **Checkout**, where a customer can further confirm their payment / shipping details, then confirm the final purchase

# Local development
```
git clone https://github.com/andrewskr90/amazon-payments-FE-clone.git
cd amazon-payments-FE-clone
npm install
npm run dev
```