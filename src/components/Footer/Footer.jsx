
import { AiFillInstagram } from 'react-icons/ai';

import { FaSquareFacebook } from 'react-icons/fa6';
import { RiTwitterXLine } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className='bg-black pt-15 lg:pt-30 pb-3.5 lg:pb-7 px-10 lg:px-0 '>
            <div className='space-y-20 max-w-7xl mx-auto p-2 '>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6  text-white'>
                    <div className='space-y-4'>
                        <div className='flex justify-center md:justify-start'>
                             <img src="/assets/DigiTools-footer.png" alt="" />
                        </div>
                        <h4 className='font-light'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</h4>
                    </div>
                    <div className='space-y-4'>
                        <h3 className='font-bold text-xl text-center md:text-left'>Product</h3>
                        <ul className='font-light space-y-4 flex md:grid gap-4'>
                            <li><a href="">Features</a></li>
                            <li><a href="">Pricing</a></li>
                            <li><a href="">Templates</a></li>
                            <li><a href="">Integrations</a></li>
                        </ul >
                    </div>
                    <div className='space-y-4'>
                        <h3 className='font-bold text-xl  text-center md:text-left'>Company</h3>
                        <ul className='font-light space-y-4  flex md:grid gap-4'>
                            <li><a href="">About</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Careers</a></li>
                            <li><a href="">Press</a></li>
                        </ul >
                    </div>
                    <div className='space-y-4'>
                        <h3 className='font-bold text-xl  text-center md:text-left'>Resources</h3>
                        <ul className='font-light space-y-4  flex md:grid gap-4'>
                            <li><a href="">Documentation</a></li>
                            <li><a href="">Help Center</a></li>
                            <li><a href="">Community</a></li>
                            <li><a href="">Contact</a></li>
                        </ul >
                    </div>
                    <div className='space-y-4 '>
                        <h3 className='font-bold text-xl  text-center md:text-left'>Social Links</h3>
                        <div className='flex gap-3 justify-center md:justify-start'>
                            <a className='p-2.5 text-black bg-white rounded-full' href=""><AiFillInstagram size={20} /></a>
                            <a className='p-2.5 text-black bg-white rounded-full' href=""><FaSquareFacebook size={20} /></a>
                            <a className='p-2.5 text-black bg-white rounded-full' href=""><RiTwitterXLine size={20} /></a>
            
                        </div>
                    </div>

                </div>
                <div className='space-y-7.5 '>
                    <hr  className='border-[#E5E7EB] '/>
                    <div className='text-white flex justify-between'>
                        <h4>© 2026 Digitools. All rights reserved.</h4>
                        <div className='flex gap-5'>
                            <h4>Privacy Policy</h4>           <h4>Terms of Service</h4>       <h4>Cookies</h4>    
                        </div>
                    </div>

                </div>
               
            </div>
            
        </div>
    );
};

export default Footer;