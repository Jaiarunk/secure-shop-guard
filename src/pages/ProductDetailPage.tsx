
import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-6 text-gray-600">The product you're looking for does not exist.</p>
        <Button asChild>
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/products" className="flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Products
      </Link>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg font-medium text-gray-900 mb-4">${product.price.toFixed(2)}</p>
          
          <Card className="mb-6 p-4">
            <h3 className="font-medium mb-2">Product Details</h3>
            <p className="text-gray-600 mb-2">Category: {product.category}</p>
            <div className="border-t border-gray-200 my-3"></div>
            <p className="text-gray-700">{product.description}</p>
          </Card>
          
          <Button size="lg" className="w-full md:w-auto md:px-12">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
