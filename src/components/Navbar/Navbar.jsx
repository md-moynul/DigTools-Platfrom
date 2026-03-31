const Navbar = () => {
    return (
        <div className="max-w-7xl mx-auto flex justify-between py-4 font-semibold ">
            <img src="assets/digitools.png" alt="" />
            <ul className="flex justify-center items-center gap-8 ">
                <li><a href="">Products</a></li>
               <li><a href="">Features</a></li>
               <li><a href="">Pricing</a></li>
               <li><a href="">Testimonials</a></li>
               <li><a href="">FAQ</a></li>
            </ul>
            <div className="flex items-center gap-3 ">
                <img className="w-4 h-4 " src="/assets/shopping-cart.png" alt="" />
                <div className="flex gap-2 ">
                    <button className="btn bg-base-100  border-none ">Login</button>
                    <button className="btn btn-primary rounded-full px-7 py-4 hover:bg-white hover:text-primary">Get Start</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;