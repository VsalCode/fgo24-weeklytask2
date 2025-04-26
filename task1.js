const fetchData = async ( status ) => {
 return new Promise((resolve, reject) => {
  if(status){
    setTimeout(() => {
      resolve("Data Berhasil Disimpan")
    }, 3000)
  }else{
    reject("Data Gagal Disimpan")
  }
 })
}

/*
 * Then and Catch
 */

fetchData(true).then((status) => {
  console.log(status);
}).catch((err) => {
  console.log(err);
})

/* 
 * Async Await 
 */

const handleFetchData = async () => {
  try{ 
    const result = await fetchData(true)
    console.log(result);
  }catch(err){
    console.log(err);
  }
}