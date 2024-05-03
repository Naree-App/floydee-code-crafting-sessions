// Interface for a device with print, scan, and fax capabilities
function device() {
  return {
    print: function (data) {
      console.log("Printing:", data);
    },
    scan: function () {
      console.log("Scanning...");
    },
    fax: function () {
      console.log("Faxing...");
    },
  };
}

// Function that operates on a device
function operateOfficeEquipment(deviceType) {
  const myDevice = deviceType();
  myDevice.print("Sample document");
  myDevice.scan();
  myDevice.fax();
}

// Using the generic device function with a simple printer
operateOfficeEquipment(device);
