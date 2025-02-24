const charname = ["gojo", "sunkuna", "aizen", "madara"];
const btnEl = document.getElementById("btndiv");

charname.forEach((name) => {
    const btn = document.createElement("button");

    
    const audio = document.createElement("audio");
    audio.src = "jjkvoice2/"+ name+".mp3.mp3"; 
    btn.classList.add("btnclass");
    btn.innerHTML =  name+"voice";  


    btnEl.appendChild(btn); 
    btnEl.appendChild(audio);

    
    btn.addEventListener("click", () => {
        
        const allAudios = document.querySelectorAll('audio');
        allAudios.forEach(a => a.pause());

        
        audio.play();
    });
});
