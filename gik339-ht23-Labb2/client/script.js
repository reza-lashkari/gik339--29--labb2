//---- Uppgift 6 

async function fetchServerData(){
    //1. Fetch för att nå servern - GET förfrågan
    //2. skicka in url som argument
    const respons = await fetch('http://localhost:3000/users');

    //Kontrollera status på förfrågan
    if(!respons.ok){
        throw new Error(`Servern svarade med status:${response.status}`);
    }

    //"översätter" respons-datan till en array av objekt.
    const translatedData = await respons.json();

    //Kontroll av returnerad respons
    console.log("Det returnerade responsen är: ", translatedData);



    //----- Uppgift 7
    //Få ut returnerad respons på hemsidan
    const userUl = document.getElementById("userList");

    translatedData.forEach(user => {

        //För varje user-obj skapas en li-element
        const liElement = document.createElement("li");

        liElement.innerHTML = `Color: ${user.color} 
                                FirstName: ${user.firstName}
                                Id: ${user.id} 
                                LastName: ${user.lastName} 
                                UserName: ${user.userName}
                               `;
        liElement.style.background = user.color;
        liElement.style.margin = "10px 0";
        
        userUl.appendChild(liElement);   
    });
}

fetchServerData()