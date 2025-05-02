
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, name, price, image } = product;

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <Link to={`/product/${id}`}>
        <img 
          src={image} 
          alt={name} 
          className="h-48 w-full object-cover"
        />
      </Link>
      
      <CardContent className="p-4">
        <Link to={`/product/${id}`} className="hover:text-blue-600">
          <h3 className="font-medium text-lg mb-1">{name}</h3>
        </Link>
        <p className="font-bold text-gray-900">${price.toFixed(2)}</p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" onClick={() => console.log(`Added ${name} to cart`)}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
