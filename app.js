async function getData(){
    const data = await fetch ("https://restcountries.com/v2/all")
    const json = await data.json()
    
    console.log(json)

    for(var i = 0; i<=json.length-1;i++){

        const div = document.createElement("div")
        div.setAttribute("id" , "all")
        
        
        const h1 = document.createElement("h1")
        h1.innerHTML = json[i].name
        
        //Populacja
        
        const populacja = document.createElement("p")
        populacja.innerHTML = "Populacja:" + json[i].population
        
        //Stolica
        
        const stolica = document.createElement("p")
        stolica.innerHTML = "Stolica:" + json[i].capital
        
        //Flaga
        
        const flaga = document.createElement("img")
        flaga.src = json[i].flags.png
        flaga.setAttribute("width" , "100px")
        flaga.setAttribute("height" , "50px")
        flaga.setAttribute("id","flags")
        
        
        div.appendChild(h1)
        div.appendChild(populacja)
        div.appendChild(stolica)
        div.appendChild(flaga)
        
        document.getElementById("div2").appendChild(div)


    }
}

getData()

function add() {
    const div = document.createElement('div')
    div.setAttribute("id","div")
    div.setAttribute("onclick",'this.style.backgroundColor="purple"')
    div.style.height = "50px"
    div.style.width = "50px"
    div.style.backgroundColor = "pink"
    document.getElementById("div1").appendChild(div)
}