import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_CONFIG } from "@/lib/constants";

interface WhatsAppCTAButtonProps {
  messageKey?: keyof typeof WHATSAPP_CONFIG.messages;
  variant?: "default" | "hero" | "floating" | "minimal";
  size?: "default" | "sm" | "lg";
  className?: string;
  children?: React.ReactNode;
}

export const WhatsAppCTAButton = ({ 
  messageKey = "default",
  variant = "default",
  size = "lg",
  className = "",
  children
}: WhatsAppCTAButtonProps) => {
  const link = WHATSAPP_CONFIG.getLink(messageKey);
  
  const variants = {
    default: "bg-green-800 hover:bg-green-700 text-white shadow-lg hover:scale-105",
    hero: "bg-green-800 hover:bg-green-700 text-white shadow-lg hover:scale-105",
    floating: "bg-green-600 hover:bg-green-700 text-white shadow-xl",
    minimal: "bg-success hover:bg-success/90 text-white",
  };

  const defaultText = {
    default: "FALAR COM ESPECIALISTA",
    hero: "QUERO CAPTAR MAIS CLIENTES",
    floating: "Falar no WhatsApp",
    minimal: "Começar Agora",
  };

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block">
      <Button 
        size={size}
        className={`group transition-all ${variants[variant]} ${className}`}
      >
        {variant === "floating" && <MessageCircle className="h-5 w-5" />}
        {children || defaultText[variant]}
        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
      </Button>
    </a>
  );
};
