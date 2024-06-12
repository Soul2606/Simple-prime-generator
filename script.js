
const paragraph_element =  document.getElementById("prime")
const range_element =      document.getElementById("range")
const label_element =      document.getElementById("range-label")
const button_element =      document.getElementById("button")

let amount_of_primes_to_generate = 1
let current_highest_prime = 0




function next_prime(number){
    number++
    while(!isPrime(number)){
        number++
    }
    return number
}




function isPrime(num) {
    for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
        if(num % i === 0) return false; 
    return num > 1;
}




range_element.addEventListener("input", function(){

    amount_of_primes_to_generate = range_element.value

    label_element.textContent = amount_of_primes_to_generate
    if(amount_of_primes_to_generate === "1"){
        button_element.textContent = "Next prime"
    }else{
        button_element.textContent = "Next " + amount_of_primes_to_generate + " primes"
    }
})




button_element.addEventListener("click", function(){
for(let i=0; i<amount_of_primes_to_generate; i++){
        let next = next_prime(current_highest_prime)

        paragraph_element.textContent = paragraph_element.textContent.slice(0,-1)
        paragraph_element.textContent += ", " + next
        paragraph_element.textContent += "]"

        current_highest_prime = next
    }
})
