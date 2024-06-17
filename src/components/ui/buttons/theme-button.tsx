import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "lucide-react";
import { Button } from "./button";
import { useTheme } from "@/hooks/useTheme";
interface ThemeButtonProps {
  height: number;
  width: number;
  className: string;
}
export const ThemeButton = ({ height, width, className }: ThemeButtonProps) => {
  const [isDarkMode, setIsDarkMode] = useTheme();
  return (
    <motion.div
      key={isDarkMode ? "sun" : "moon"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Button
        variant="ghost"
        size="icon"
        className={className}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? (
          <SunIcon className={`h-${height} w-${width}`} />
        ) : (
          <MoonIcon className={`h-${height} w-${width}`} />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  );
};
