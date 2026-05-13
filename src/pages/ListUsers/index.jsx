import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import MyButton from "../../components/Button"
import api from "../../services/api"
import BackgroundImage from "../../components/ImageHeader"
import TrashIcon from "../../assets/trash.svg"
import {
    AvatarUser,
    CardInfo,
    ContainerUsers,
    DeleteAction,
    EmptyState,
    LoadingState,
    Span,
    FieldLabel,
    FieldRow,
    FieldValue,
    FooterActions,
    PageContainer,
    Title,
    UserCard,
    UserName,
    UsersScroll,
} from "./styles"

const ListUsers = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const getUsers = async () => {
            try {
                const { data } = await api.get("/usuarios")
                setUsers(data)
            } finally {
                setLoading(false)
            }
        }
        getUsers()
    }, [])

    return (
        <PageContainer>
            <BackgroundImage />
            <Title>
                <Span>→</Span> Lista de Usuários <span>←</span>
            </Title>
            <UsersScroll>
                {loading && (
                    <LoadingState>Carregando usuários…</LoadingState>
                )}
                <ContainerUsers>
                    {users.map((user) => (
                        <UserCard key={user.id}>
                            <DeleteAction
                                type="button"
                                aria-label={`Remover ${user.name}`}
                            >
                                <img src={TrashIcon} alt="" />
                            </DeleteAction>
                            <AvatarUser>
                                <img
                                    src={`https://i.pravatar.cc/150?u=${user.id}`}
                                    alt=""
                                />
                            </AvatarUser>
                            <CardInfo>
                                <UserName>{user.name}</UserName>
                                <FieldRow>
                                    <FieldLabel>Idade</FieldLabel>
                                    <FieldValue>{user.age}</FieldValue>
                                </FieldRow>
                                <FieldRow>
                                    <FieldLabel>E-mail</FieldLabel>
                                    <FieldValue>{user.email}</FieldValue>
                                </FieldRow>
                            </CardInfo>
                        </UserCard>
                    ))}
                </ContainerUsers>
                {!loading && users.length === 0 && (
                    <EmptyState>Nenhum usuário cadastrado ainda.</EmptyState>
                )}
            </UsersScroll>
            <FooterActions>
                <MyButton type="button" onClick={() => navigate("/")}>
                    Voltar
                </MyButton>
            </FooterActions>
        </PageContainer>
    )
}

export default ListUsers
