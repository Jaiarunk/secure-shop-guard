
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Demo cart data - in a real app, this would come from state management
const initialCart = [
  {
    id: 1,
    name: "Wireless Earbuds",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    quantity: 1
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    quantity: 2
  }
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCart);
  const { toast } = useToast();
  
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart",
    });
  };
  
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  // Calculate cart totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 
    0
  );
  const shipping = subtotal > 0 ? 9.99 : 0;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="flex items-center p-4">
                    <div className="w-20 h-20 mr-4">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </Button>
                      <span>{item.quantity}</span>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                    
                    <div className="text-right ml-4">
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 h-8 w-8"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Order Summary</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full">
                  Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="flex justify-center mb-4">
            <ShoppingBag className="h-16 w-16 text-gray-400" />
          </div>
          <h2 className="text-2xl font-medium mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Time to fill it with amazing products!</p>
          <Button asChild size="lg">
            <Link to="/products">Browse Products</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
