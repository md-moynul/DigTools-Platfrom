#DigTools-Platfrom

##Description:

    A React project for buying AI tools. Here is a webpage for the homepage. In the 'Premium Digital Tools' section, each card's information is fetched from JSON data, and there are two buttons to toggle between the product and cart sections. When a user clicks the 'Buy Now' button, a specific tool is added to the cart, and an alert is shown. The cart button and cart icon for the products in the cart are shown in the navbar. Clicking the product button shows the product section, or clicking the cart button shows the cart section. In the cart section, when I click 'proceed to checkout', the cart is empty. This is a fully responsive design.

##Technology:
    1. React.js
    2. Tailwind CSS, DaisyUI
    3. JavaScript (ES6+) 
    4. React-Toastify
    5. JSON
    6. goggle fonts
##Features:
    1. This project features a real-time shopping cart that prevents duplicates using react-toastify alerts. It automatically calculates the total price, manages item removal, and includes a "Proceed to Checkout" flow that resets the state upon a successful simulated payment.
    2. By using the latest React use() hook and <Suspense>, your app handles external data seamlessly. It shows a professional loading spinner while fetching data, ensuring a smooth, non-blocking user experience during the initial load.
    3. This project implements a sophisticated "Tabbed" layout. Users can toggle between a high-density Product Grid and a dedicated Cart Management view without leaving the page, with the navigation tab dynamically updating to show the live item count.