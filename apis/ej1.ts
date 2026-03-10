(async () => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.log(`Error: ${err}`);
  }
})();
