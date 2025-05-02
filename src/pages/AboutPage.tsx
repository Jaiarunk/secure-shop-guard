
import { ShieldCheck, Lock, UserCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About SecureShop</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            SecureShop was founded with a simple mission: to create a safer online shopping 
            experience for everyone. We believe that security shouldn't come at the expense 
            of convenience or user experience.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Commitment to Security</h2>
          <p className="mb-6">
            In today's digital landscape, online security threats are constantly evolving. 
            That's why we've implemented advanced security measures like our custom captcha 
            system to prevent automated attacks and protect your account.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <Card>
              <CardContent className="p-6 text-center">
                <ShieldCheck className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                <h3 className="font-bold mb-2">Advanced Security</h3>
                <p className="text-gray-600">
                  Our platform uses state-of-the-art security protocols to keep your data safe.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Lock className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                <h3 className="font-bold mb-2">Secure Payments</h3>
                <p className="text-gray-600">
                  All transactions are encrypted and we never store your payment details.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <UserCheck className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                <h3 className="font-bold mb-2">Account Protection</h3>
                <p className="text-gray-600">
                  Our captcha system helps prevent unauthorized access to your account.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Team</h2>
          <p className="mb-6">
            Our team consists of security experts, developers, and e-commerce specialists 
            who are passionate about creating a seamless yet secure online shopping experience.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about our security practices or need assistance with 
            your account, please don't hesitate to contact us:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Email: support@secureshop.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Hours: Monday - Friday, 9am - 5pm EST</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
