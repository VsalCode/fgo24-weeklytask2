const fetchData = async (status) => {
  return new Promise((resolve, reject) => {
    if (status) {
      // Jika status true, resolve akan dipanggil setelah 3 detik
      setTimeout(() => {
        resolve("Data Berhasil Disimpan"); // Promise berhasil dengan pesan ini
      }, 3000);
    } else {
      // Jika status false, langsung reject dengan pesan error
      reject("Data Gagal Disimpan"); // Promise gagal dengan pesan ini
    }
  });
};

/*
 * Pemromsesan Promise menggunakkan Then and Catch
 */

fetchData(true).then((status) => { // .then() menangani hasil sukse dari promise 
  console.log(status); // output jika berhasil
}).catch((err) => { // .catch() menangkap error jika Promise gagal
  console.log(err); // output jika gagal
})

/* 
 * Pemrosesan Promise menggunakkan Async Await 
 */

// Fungsi async yang menangani proses asynchronus dengan sintaks async/await
const handleFetchData = async (status) => {
  try{ 
    // await akan menunggu sampai Promise selesai
    const result = await fetchData(status)
    console.log(result); // output jika berhasil
  }catch(err){
    // Blok catch akan menangkap error jika Promise reject
    console.log(err); // output jika gagal
  }
}

handleFetchData(true) // memanggil handleFetchData

// Penjelasan Konsep:
// 1. Promise: Objek yang merepresentasikan keberhasilan/kegagalan operasi async
// 2. .then(): Method untuk menangani hasil sukses dari Promise
// 3. .catch(): Method untuk menangani error/rejection dari Promise
// 4. async: Keyword untuk membuat fungsi asynchronous
// 5. await: Keyword untuk menunggu Promise selesai, hanya bisa di dalam async function
// 6. try-catch: Blok untuk menangani error di synchronous dan asynchronous code
// 7. setTimeout(): Fungsi Web API untuk menunda eksekusi kode

// Perbedaan utama:
// - .then().catch() menggunakan chaining
// - async/await menggunakan syntax yang lebih mirip synchronous code
