export default function Validator(psw){
    const errorMsg = document.getElementById("account-error")

    if (psw < 7){
        errorMsg.innerHTML = "Password must be longer than 7 characters"
        return("false")
    }else if(psw){

    }

}
