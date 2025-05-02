
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface CaptchaProps {
  onCaptchaChange: (isValid: boolean) => void;
}

const Captcha = ({ onCaptchaChange }: CaptchaProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [captchaText, setCaptchaText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isValid, setIsValid] = useState(false);

  const generateCaptcha = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set background
    ctx.fillStyle = "#f0f0f0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Generate random string
    const characters = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
    let captcha = "";
    
    for (let i = 0; i < 6; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    setCaptchaText(captcha);
    setUserInput("");
    setIsValid(false);
    onCaptchaChange(false);
    
    // Draw captcha text
    ctx.font = "bold 24px Arial";
    ctx.fillStyle = "#333";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    
    // Add noise (dots)
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      ctx.fillRect(x, y, 2, 2);
    }
    
    // Add lines
    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.strokeStyle = `rgba(0, 0, 0, 0.2)`;
      ctx.stroke();
    }
    
    // Draw distorted text
    let x = 20;
    for (let i = 0; i < captcha.length; i++) {
      // Random angle for each character
      const angle = (Math.random() - 0.5) * 0.4;
      const char = captcha.charAt(i);
      
      ctx.save();
      ctx.translate(x, canvas.height / 2);
      ctx.rotate(angle);
      ctx.fillText(char, 0, 0);
      ctx.restore();
      
      x += 20 + Math.random() * 10;
    }
  };

  const validateCaptcha = () => {
    const valid = userInput === captchaText;
    setIsValid(valid);
    onCaptchaChange(valid);
    return valid;
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div className="flex flex-col space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Security Check</label>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={generateCaptcha}
          type="button"
          className="h-8 w-8 p-0"
        >
          <RefreshCw className="h-4 w-4" />
          <span className="sr-only">Refresh Captcha</span>
        </Button>
      </div>
      
      <div className="border rounded-md overflow-hidden">
        <canvas 
          ref={canvasRef} 
          width={180} 
          height={60} 
          className="w-full"
        />
      </div>
      
      <div className="space-y-1">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onBlur={validateCaptcha}
          placeholder="Enter the code above"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Captcha input"
        />
        
        {userInput && !isValid && (
          <p className="text-sm text-red-500">Incorrect code. Please try again.</p>
        )}
      </div>
    </div>
  );
};

export default Captcha;
