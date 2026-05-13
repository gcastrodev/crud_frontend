import { useEffect, useState } from "react"
import MyButton from "../../components/Button"
import api from "../../services/api"
import BackgroundImage from "../../components/ImageHeader"
import TrashIcon from "../../assets/trash.svg"
import { AvatarUser, ContainerUsers, Title, UserCard } from "./styles"

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
            <Title>Lista de Usuários <span>→</span></Title>
            <ContainerUsers>
                <AvatarUser />
                {users.map((user) => (
                    <UserCard key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.age}</p>
                        <p>{user.email}</p>
                        <img src={TrashIcon} alt="trash_icon" />
                    </UserCard>
                ))}
            </ContainerUsers>

            <MyButton>Voltar</MyButton>
        </div>
    )
}
export default ListUsers