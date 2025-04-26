const divideAndSort = (num) => {
  if(typeof num !== "number"){
    console.log("Input anda bukan bertipe number !");
  }

  const arr = String(num).split("0")
  const item = arr.map(item => item.split("").sort().join(""));
  const result = item.join("")
  
  console.log(parseInt(result));
}

divideAndSort(2749304943032571)