async function getAllTheDatabases() {
  try {
    const results = await Promise.allSettled([
      readSpecialData(DB1),
      readSpecialData(DB2),
      readSpecialData(DB3),
      readSpecialData(DB4),
    ]);
  
    if (results[0].status === 'fulfilled') {
      results[0] // DB1 results
    } else {
      console.log('DB1 failed...');
    }
    results[1] // DB2 results
    results[2] // DB3 results
    results[3] // DB4 results
  } catch (error) {
    console.log('one failed...'); 
  }
}
