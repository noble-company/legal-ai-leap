import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: {
    icon?: LucideIcon;
    text: string;
    variant?: "default" | "success" | "accent" | "destructive" | "warning";
  };
  title: string | React.ReactNode;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader = ({
  badge,
  title,
  description,
  centered = true,
  className = ""
}: SectionHeaderProps) => {
  const badgeColors = {
    default: "bg-accent/10 border-accent/20 text-accent",
    success: "bg-success/10 border-success/20 text-success",
    accent: "bg-accent/10 border-accent/20 text-accent",
    destructive: "bg-destructive/10 border-destructive/20 text-destructive",
    warning: "bg-warning/10 border-warning/20 text-warning",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${centered ? "text-center" : ""} ${className}`}
    >
      {badge && (
        <div className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold uppercase tracking-wide ${badgeColors[badge.variant || "default"]}`}>
          {badge.icon && <badge.icon className="h-4 w-4" />}
          <span>{badge.text}</span>
        </div>
      )}
      
      <h2 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
        {title}
      </h2>
      
      {description && (
        <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
};
