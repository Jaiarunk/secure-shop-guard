
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const HomePage = () => {
  // Get featured products (first 4)
  const featuredProducts = products.slice(0, 4);
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop Securely with SecureShop</h1>
              <p className="text-lg text-gray-600 mb-6">
                We protect your shopping experience with enhanced security features.
                Shop with peace of mind.
              </p>
              <div className="space-x-4">
                <Button asChild size="lg">
                  <Link to="/products">Shop Now</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Secure Shopping" 
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Link to="/products" className="text-blue-600 hover:text-blue-800 font-medium">
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Security Banner */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Shop with Confidence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our advanced captcha technology and secure checkout process ensure 
            your shopping experience is protected from unauthorized access.
          </p>
          <Button asChild>
            <Link to="/login">Sign Up Securely</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
