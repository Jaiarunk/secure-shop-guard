
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">SecureShop</h3>
            <p className="text-gray-600">Your trusted online store with enhanced security features.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-600 hover:text-blue-600 transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <p className="text-gray-600">Email: info@secureshop.com</p>
            <p className="text-gray-600">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} SecureShop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
