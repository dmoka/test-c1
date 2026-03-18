"use client";

import { cn } from "@/lib/utils";

interface ButtonGridProps {
  onNumberClick: (number: string) => void;
  onOperationClick: (operation: string) => void;
  onEqualsClick: () => void;
  onClearClick: () => void;
  onDecimalClick: () => void;
}

export function ButtonGrid({
  onNumberClick,
  onOperationClick,
  onEqualsClick,
  onClearClick,
  onDecimalClick,
}: ButtonGridProps) {
  return (
    <div className="grid grid-cols-4 gap-3 md:gap-4">
      {/* Row 1: Clear and operations */}
      <button
        onClick={onClearClick}
        className="btn-calculator btn-clear aspect-square"
        type="button"
        aria-label="Clear calculator"
      >
        C
      </button>
      
      <button
        disabled
        className="btn-calculator aspect-square opacity-40 cursor-not-allowed"
        type="button"
        aria-label="Plus/minus (not available)"
      >
        ±
      </button>
      
      <button
        disabled
        className="btn-calculator aspect-square opacity-40 cursor-not-allowed"
        type="button"
        aria-label="Percentage (not available)"
      >
        %
      </button>
      
      <button
        onClick={() => onOperationClick("÷")}
        className="btn-calculator btn-operation aspect-square"
        type="button"
        aria-label="Divide"
      >
        ÷
      </button>
      
      {/* Row 2: Numbers 7-9 and multiply */}
      <button
        onClick={() => onNumberClick("7")}
        className="btn-calculator aspect-square"
        type="button"
        aria-label="Number 7"
      >
        7
      </button>
      
      <button
        onClick={() => onNumberClick("8")}
        className="btn-calculator aspect-square"
        type="button"
        aria-label="Number 8"
      >
        8
      </button>
      
      <button
        onClick={() => onNumberClick("9")}
        className="btn-calculator aspect-square"
        type="button"
        aria-label="Number 9"
      >
        9
      </button>
      
      <button
        onClick={() => onOperationClick("×")}
        className="btn-calculator btn-operation aspect-square"
        type="button"
        aria-label="Multiply"
      >
        ×
      </button>
      
      {/* Row 3: Numbers 4-6 and subtract */}
      <button
        onClick={() => onNumberClick("4")}
        className="btn-calculator aspect-square"
        type="button"
        aria-label="Number 4"
      >
        4
      </button>
      
      <button
        onClick={() => onNumberClick("5")}
        className="btn-calculator aspect-square"
        type="button"
        aria-label="Number 5"
      >
        5
      </button>
      
      <button
        onClick={() => onNumberClick("6")}
        className="btn-calculator aspect-square"
        type="button"
        aria-label="Number 6"
      >
        6
      </button>
      
      <button
        onClick={() => onOperationClick("-")}
        className="btn-calculator btn-operation aspect-square"
        type="button"
        aria-label="Subtract"
      >
        -
      </button>
      
      {/* Row 4: Numbers 1-3 and add */}
      <button
        onClick={() => onNumberClick("1")}
        className="btn-calculator aspect-square"
        type="button"
        aria-label="Number 1"
      >
        1
      </button>
      
      <button
        onClick={() => onNumberClick("2")}
        className="btn-calculator aspect-square"
        type="button"
        aria-label="Number 2"
      >
        2
      </button>
      
      <button
        onClick={() => onNumberClick("3")}
        className="btn-calculator aspect-square"
        type="button"
        aria-label="Number 3"
      >
        3
      </button>
      
      <button
        onClick={() => onOperationClick("+")}
        className="btn-calculator btn-operation aspect-square"
        type="button"
        aria-label="Add"
      >
        +
      </button>
      
      {/* Row 5: 0, decimal, and equals */}
      <button
        onClick={() => onNumberClick("0")}
        className="btn-calculator col-span-2 aspect-[2/1]"
        type="button"
        aria-label="Number 0"
      >
        0
      </button>
      
      <button
        onClick={onDecimalClick}
        className="btn-calculator aspect-square"
        type="button"
        aria-label="Decimal point"
      >
        .
      </button>
      
      <button
        onClick={onEqualsClick}
        className="btn-calculator btn-equals aspect-square"
        type="button"
        aria-label="Equals"
      >
        =
      </button>
    </div>
  );
}