const getDataFromServer = (status, callback) => {
  if(status){
    setTimeout(() => {
      const products = [
        'product 1',
        'product 2',
        'product 3'
      ]
      callback(products, null)
    }, 3000)
  }else{
    const err = new Error('failed to fetch data')
    callback(null, err)
  }
}


const processData = (data, err) => {
  try{
    if(err){
      const error = new Error("error")
      throw error
    }
    console.log('Data: ' + data);
  }catch(error){
      if(error.message === "error"){
        console.log("Error: " + err.message);
      }
  }
}

getDataFromServer(false, processData)
