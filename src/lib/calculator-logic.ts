export interface CalculatorState {
  display: string;
  previousValue: number | null;
  operation: string | null;
  waitingForNewValue: boolean;
  hasDecimal: boolean;
}

export const initialState: CalculatorState = {
  display: "0",
  previousValue: null,
  operation: null,
  waitingForNewValue: false,
  hasDecimal: false,
};

export function formatDisplay(value: string): string {
  // Remove leading zeros but keep "0" for zero value
  if (value === "0" || value === "") return "0";
  
  // Handle decimal numbers
  if (value.includes(".")) {
    const parts = value.split(".");
    const integerPart = parts[0] === "" ? "0" : parts[0];
    return integerPart + "." + parts[1];
  }
  
  // Remove leading zeros from integer
  return parseFloat(value).toString();
}

export function performCalculation(
  previousValue: number,
  currentValue: number,
  operation: string
): number {
  switch (operation) {
    case "+":
      return previousValue + currentValue;
    case "-":
      return previousValue - currentValue;
    case "×":
      return previousValue * currentValue;
    case "÷":
      if (currentValue === 0) {
        throw new Error("Cannot divide by zero");
      }
      return previousValue / currentValue;
    default:
      return currentValue;
  }
}

export function handleNumberInput(state: CalculatorState, number: string): CalculatorState {
  if (state.waitingForNewValue) {
    return {
      ...state,
      display: number,
      waitingForNewValue: false,
      hasDecimal: false,
    };
  }

  if (state.display === "0" && number !== ".") {
    return {
      ...state,
      display: number,
      hasDecimal: false,
    };
  }

  return {
    ...state,
    display: state.display + number,
  };
}

export function handleDecimalInput(state: CalculatorState): CalculatorState {
  if (state.waitingForNewValue) {
    return {
      ...state,
      display: "0.",
      waitingForNewValue: false,
      hasDecimal: true,
    };
  }

  if (state.hasDecimal || state.display.includes(".")) {
    return state;
  }

  return {
    ...state,
    display: state.display + ".",
    hasDecimal: true,
  };
}

export function handleOperationInput(state: CalculatorState, operation: string): CalculatorState {
  const currentValue = parseFloat(state.display);

  if (state.previousValue === null) {
    return {
      ...state,
      previousValue: currentValue,
      operation,
      waitingForNewValue: true,
      hasDecimal: false,
    };
  }

  if (state.operation && !state.waitingForNewValue) {
    try {
      const result = performCalculation(state.previousValue, currentValue, state.operation);
      return {
        ...state,
        display: formatDisplay(result.toString()),
        previousValue: result,
        operation,
        waitingForNewValue: true,
        hasDecimal: false,
      };
    } catch (error) {
      return {
        ...initialState,
        display: "Error",
      };
    }
  }

  return {
    ...state,
    operation,
    waitingForNewValue: true,
    hasDecimal: false,
  };
}

export function handleEqualsInput(state: CalculatorState): CalculatorState {
  if (state.previousValue === null || state.operation === null) {
    return state;
  }

  const currentValue = parseFloat(state.display);

  try {
    const result = performCalculation(state.previousValue, currentValue, state.operation);
    return {
      ...state,
      display: formatDisplay(result.toString()),
      previousValue: null,
      operation: null,
      waitingForNewValue: true,
      hasDecimal: result.toString().includes("."),
    };
  } catch (error) {
    return {
      ...initialState,
      display: "Error",
    };
  }
}

export function handleClearInput(): CalculatorState {
  return initialState;
}