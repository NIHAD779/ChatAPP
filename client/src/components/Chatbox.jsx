import Logout from "./Logout"
import Input from "./Input"
const Chatbox = ({chatUser,from}) => {
  return (
    <div className='bg-[#16255c] w-[450px] flex flex-col justify-between' >
      <div className="bg-blue-300 flex justify-between p-1">
      <h1>{chatUser.username}</h1>
      <Logout/>
      </div>
      <Input toUser={chatUser} fromUser = {from}/>
    </div>
  )
}

export default Chatbox