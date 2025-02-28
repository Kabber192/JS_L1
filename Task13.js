function longest(arr, n) {
    const indexedStrings = arr.map((str, index) => ({ str, index }));
  
    indexedStrings.sort((a, b) => {
      if (b.str.length !== a.str.length) {
        return b.str.length - a.str.length;
      }
      return a.index - b.index;
    });
  
    return indexedStrings[n - 1].str;
  }
  