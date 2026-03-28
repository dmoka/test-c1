"use client";

import { useState, useEffect } from "react";

import { CalculatorDisplay } from "./display";
import { ButtonGrid } from "./button-grid";
import {
  CalculatorState,
  initialState,
  handleNumberInput,
  handleOperationInput,
  handleEqualsInput,
  handleClearInput,
  handleDecimalInput,
} from "@/lib/calculator-logic";

export function Calculator() {
  const [state, setState] = useState<CalculatorState>(initialState);

  const handleNumber = (number: string) => {
    setState(prevState => {
      // Reset from error state when user starts entering new numbers
      if (prevState.display === "Error") {
        return handleNumberInput(initialState, number);
      }
      return handleNumberInput(prevState, number);
    });
  };

  const handleOperation = (operation: string) => {
    setState(prevState => handleOperationInput(prevState, operation));
  };

  const handleEquals = () => {
    setState(prevState => handleEqualsInput(prevState));
  };

  const handleClear = () => {
    setState(handleClearInput());
  };

  const handleDecimal = () => {
    setState(prevState => handleDecimalInput(prevState));
  };

  // Add keyboard support for better user experience
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Prevent default for calculator keys
      if (/^[0-9+\-*/=.c]$/i.test(event.key) || event.key === "Enter" || event.key === "Escape") {
        event.preventDefault();
      }

      switch (event.key) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          handleNumber(event.key);
          break;
        case "+":
          handleOperation("+");
          break;
        case "-":
          handleOperation("-");
          break;
        case "*":
          handleOperation("×");
          break;
        case "/":
          handleOperation("÷");
          break;
        case "=":
        case "Enter":
          handleEquals();
          break;
        case ".":
          handleDecimal();
          break;
        case "c":
        case "C":
        case "Escape":
          handleClear();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-md mx-auto px-4">
      {/* App title following MASTER.md large type guidelines (32px+) */}
      <div className="text-center large-section-gap sm:large-section-gap-sm">
        <h1 
          className="calculator-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight transition-all duration-300 ease-out"
          style={{ 
            fontFamily: 'var(--font-heading)',
            lineHeight: '1.1'
          }}
        >
          My Best Calc
        </h1>
        <p 
          className="text-base sm:text-lg text-muted-foreground mt-3 sm:mt-4 transition-all duration-200 ease-out"
          style={{ 
            fontFamily: 'var(--font-body)',
            color: 'var(--muted-foreground)'
          }}
        >
          Simple arithmetic operations
        </p>
      </div>
      
      {/* Calculator card following MASTER.md design system with enhanced shadows and spacing */}
      <div 
        className="bg-card border border-border shadow-xl rounded-xl overflow-hidden transition-all duration-200 hover:shadow-2xl hover:-translate-y-1"
        style={{
          backgroundColor: 'var(--color-background)',
          borderRadius: '12px',
          padding: 'var(--space-lg)',
          boxShadow: 'var(--shadow-xl)'
        }}
      >
        <CalculatorDisplay value={state.display} />
        <ButtonGrid
          onNumberClick={handleNumber}
          onOperationClick={handleOperation}
          onEqualsClick={handleEquals}
          onClearClick={handleClear}
          onDecimalClick={handleDecimal}
        />
      </div>
      
      {/* Accessibility info for screen readers */}
      <div className="sr-only">
        <p>Calculator with keyboard support. Use number keys for digits, operators for calculations, Enter or equals for results, and C or Escape to clear.</p>
      </div>
    </div>
  );
}