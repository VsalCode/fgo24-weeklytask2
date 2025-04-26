const url = "https://jsonplaceholder.typicode.com/users"

fetch(url).then((res) => {
   return res.json()
}).then((data) => {
  const arr = data.map((item) => (
    {
      name: item.name,
      city: item.address.city
    }
  ))
  arr.sort((a, b) => a.city.localeCompare(b.city))
  console.log(arr);
  
}).catch((err) => {
  console.log("Error: " + err.message);
})