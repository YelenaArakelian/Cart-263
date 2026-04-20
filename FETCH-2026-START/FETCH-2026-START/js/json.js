
window.onload = goFetch;
  async function goFetch(){
 try{

 let response = await fetch('../files/tests.json'); //response
 let parsedResultJS = await response.text();
 console.log(parsedResultJS)
}
  catch(err) { 
      console.log(err)
      console.log(err)
      console.log(err)
      console.log(err)
      console.log(err)
      console.log(err)
  }
}