
import { Link } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">SecureShop</Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/products" className="text-gray-700 hover:text-blue-600 transition-colors">Products</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-blue-600 transition-colors" />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">0</span>
          </Link>
          <Link to="/login">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <User className="h-4 w-4" /> Login
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
