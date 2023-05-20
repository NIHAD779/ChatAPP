import {useNavigate} from "react-router-dom"
const Logout = () => {

    const navigate = useNavigate();

     const logoutHandler = () =>{
        localStorage.clear()
        navigate("/login")
     }

  return (
    <button className="bg-red-300 text-white hover:bg-red-500" onClick={logoutHandler}>LogOUT</button>
  )
}

export default Logout