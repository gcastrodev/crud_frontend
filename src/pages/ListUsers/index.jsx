import { useEffect, useState } from "react"
import MyButton from "../../components/Button"
import api from "../../services/api"
import BackgroundImage from "../../components/ImageHeader"

const ListUsers = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const {data} = await api.get('/usuarios')
            setUsers(data)
        }
        getUsers()
    }, [])
    
    return (
        <div>
            <BackgroundImage />
            <h1>Listagem de Usuários</h1>
            {users.map((user) => (
                <p key={user.id}>{user.name} - {user.age} - {user.email}</p>
            ))}
            <MyButton>Voltar</MyButton>
        </div>
    )
}
export default ListUsers