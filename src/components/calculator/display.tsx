"use client";

interface CalculatorDisplayProps {
  value: string;
}

export function CalculatorDisplay({ value }: CalculatorDisplayProps) {
  const isError = value === "Error";
  
  return (
    <div 
      className="calculator-display mb-6 min-h-[4rem] flex items-center justify-end transition-all duration-200"
      role="textbox"
      aria-readonly="true"
      aria-label={`Calculator display showing ${isError ? "Error" : value || "0"}`}
    >
      <span 
        className={`font-mono font-medium transition-all duration-200 ${
          isError ? "text-destructive" : "text-card-foreground"
        }`}
        style={{ 
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          color: isError ? 'var(--destructive)' : 'var(--color-text)'
        }}
      >
        {value || "0"}
      </span>
    </div>
  );
}