// Interface for a printer
function printer() {
  return {
    print: function (data) {
      console.log("Printing:", data);
    },
  };
}

// Function that operates on a printer
function operateOfficePrinter(printerType) {
  const myPrinter = printerType();
  myPrinter.print("Sample document");
}

// Using the specific printer function with a simple printer
operateOfficePrinter(printer);
