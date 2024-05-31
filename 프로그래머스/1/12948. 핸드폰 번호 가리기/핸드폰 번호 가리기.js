function solution (phone_number) {
    for (let i=0; i<phone_number.length-4; i++){
         phone_number = phone_number.replace(phone_number[i], "*")
        console.log(phone_number)   
    }
    return phone_number
}









