import axios from 'axios'


export const userSignup = async (value)=>{
   const addUser = await axios.post(`http://localhost:4200/auth/signup`,{...value})

}

export const fetchContact = async (value)=>{
   const token = localStorage.getItem("token")
   const {data} = await axios.get(`http://localhost:4200/auth/account`,{headers:{Authorization:token}});
   return data;
}