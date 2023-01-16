import { useEffect, useState } from "react"


type Users = {
   
    gender: string
}

const UserList = () => {
    const [users, setUsers] = useState<Users[]>([])

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=50').then(response => response.json()).then
            (data => data.results).then(users => ()=>{users.forEach((user: Users) => {
                let newList: Array<Users> = []
                let newUser = {gender: user.gender }
                newList.push(newUser)
                setUsers(newList)
            });}  )     

}, []);


console.log(users);

return (
    <ul>
        {users.map((user => { return (<li >{user.gender}</li>) }))}
    </ul>
)
}

export default UserList
