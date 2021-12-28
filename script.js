document.body.innerHTML=`<h4 id="title">ANIME API</h4>
<input type="text" id="configname" name="configname" placeholder="Enter the Series Name" />
  <input type="button" id="btn" value="Click" onclick="getData(document.getElementById('configname').value)"/> 
  <br>
  <p id="main"></p>`
async function getData(series){
    
    try{
      const data=await fetch(`https://api.jikan.moe/v3/search/anime?q=${series}`)
     const result=await data.json();
       main.innerHTML="";
      for(let i=0;i<result.results.length;i++) {
         
        main.innerHTML+=`<div class="card">
        <div class="container"><p>TITLE:${result.results[i].title}</p>
        <img src=${result.results[i].image_url} width="300px" height="100px" id="img" alt="Image is not available">     
        <p>START DATE:${result.results[i].start_date}</p>
        <p>END DATE:${result.results[i].end_date}</p>
        <p>RATING:${result.results[i].rated}</p>
        <p>SERIES TYPE:${result.results[i].type}</p><br></div></div>`
      
       console.log(result.results[i].start_date);
       console.log(result.results[i].end_date);
       console.log(result.results[i].rated);
      }
      
    }
    catch(error){
    console.log(error)
    }
}
getData();
    