function hexStringToRGB(hexString) {
    const hex = hexString.slice(1).toUpperCase();
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
  
    return { r: r, g: g, b: b };
  }
  