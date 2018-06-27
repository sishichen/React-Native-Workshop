const api = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=5');
    const json = await response.json();
    console.log(json.results[0].picture.large);
  } catch(e) {
    console.log("Oops, error", e);
  }
}

api();