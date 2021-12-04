class user { 
    #Esteban  
    constructor (Esteban) {
        this.#Esteban = Esteban
    }   
    getname () {
        return this.#Esteban   
    }
}
function nose() {
 var meper = document.getElementById("pepe").value 
 //console.log (meper) 
 var algo = new user (meper)
alert(algo.getname ()) 

}