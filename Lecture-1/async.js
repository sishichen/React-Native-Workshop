// Promise
new Promise(
  /* executor */
  function(resolve, reject) { ... }
);

// Fetch
fetch(url, {
  timeout: 10000
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(e => console.log("Oops, error", e))

// Async / Await

const api = async () => {
  try {
    let response = await fetch(url);
    let data = await fetch(response.url);
    console.log(data);
  } catch(e) {
    console.log("Oops, error", e);
  }
}

// need to wrap with async function outside
