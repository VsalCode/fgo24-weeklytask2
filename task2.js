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
      console.log("Error: " + err.message);
      return
    }
    console.log('Data: ' + data);
  }catch(error){
      console.log("unexpected error: " + error.message);
  }
}

getDataFromServer(true, processData)
