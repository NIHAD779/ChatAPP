import { ScrollArea } from "@mantine/core"
const Contacts = ({contacts, changeChat}) => {

    const changeCurrentChat = (contact) =>{
        changeChat(contact)
    }

  return (
    <>
    <div className='w-[450px]'>
        <div className=' p-1 text-center'>
            <h1>C-App</h1>
        </div>
        <ScrollArea style={{ height: 600 }}>
        <div className='  flex flex-col gap-3' >
        { contacts.map((contact,index)=>{
            return (
                <div className='bg-[#5d6eae] p-2 m-1 rounded-sm hover:cursor-pointer'  key={contact._id} onClick={ () => changeCurrentChat(contact)}>
                    <img src="" alt="" />
                    <h1>{contact.username}</h1>
                </div>
                
            )
        })
        }
        
    </div>
        </ScrollArea>
    </div>
    </>
  )
}

export default Contacts