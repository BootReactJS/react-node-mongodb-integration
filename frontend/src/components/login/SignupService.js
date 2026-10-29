import axios from "axios";
import { toast } from "react-toastify"

const url = "http://localhost:4936/api/auth/sign-up";

export const getUserData = (firstName, lastName, email, password, confirmPassword) => {
   /*  console.log(
        firstName.current.value,
        lastName.current.value,
        email.current.value,
        password.current.value,
        confirmPassword.current.value    
    ) */
    
    const newuser = {
    "firstName": firstName.current.value,
    "lastName": lastName.current.value,
    "email": email.current.value,
    "password": password.current.value,
    "confirmPassword": confirmPassword.current.value

  };
  //console.log(newuser);

  axios.post(url, newuser)
    .then( (response)=> {
        toast.success("Account is created")
    })
    .catch( (error)=>{
        toast.error("Failed to create the account")

    });
}