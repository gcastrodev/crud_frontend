import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import MyButton from "../../components/Button"
import api from "../../services/api"
import BackgroundImage from "../../components/ImageHeader"
import TrashIcon from "../../assets/trash.svg"
import {
    AvatarUser,
    CancelEditButton,
    CardInfo,
    ContainerUsers,
    DeleteAction,
    EditAction,
    EditActionsRow,
    EditInput,
    EmptyState,
    LoadingState,
    Span,
    FieldLabel,
    FieldRow,
    FieldValue,
    FooterActions,
    PageContainer,
    SaveEditButton,
    Title,
    UserCard,
    UserName,
    UsersScroll,
} from "./styles"

const ListUsers = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [editingId, setEditingId] = useState(null)
    const [draft, setDraft] = useState(null)
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

    const startEdit = (user) => {
        setEditingId(user.id)
        setDraft({
            name: user.name,
            age: String(user.age),
            email: user.email,
        })
    }

    const cancelEdit = () => {
        setEditingId(null)
        setDraft(null)
    }

    const saveUser = async () => {
        if (!editingId || !draft) return
        try {
            const { data } = await api.put(`/usuarios/${editingId}`, {
                name: draft.name,
                age: parseInt(draft.age, 10),
                email: draft.email,
            })
            setUsers((prev) =>
                prev.map((u) => (u.id === editingId ? data.user : u))
            )
            cancelEdit()
        } catch (error) {
            console.error("Erro ao atualizar usuário:", error)
        }
    }

    const deleteUser = async (id) => {
        try {
            await api.delete(`/usuarios/${id}`)
            setUsers((prev) => prev.filter((user) => user.id !== id))
            if (editingId === id) cancelEdit()
        } catch (error) {
            console.error("Erro ao deletar usuário:", error)
        }
    }

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
                    {users.map((user) => {
                        const isEditing = editingId === user.id
                        return (
                            <UserCard key={user.id}>
                                {!isEditing && (
                                    <EditAction
                                        type="button"
                                        aria-label={`Editar ${user.name}`}
                                        onClick={() => startEdit(user)}
                                    >
                                        Editar
                                    </EditAction>
                                )}
                                <DeleteAction
                                    type="button"
                                    aria-label={`Remover ${user.name}`}
                                    onClick={() => deleteUser(user.id)}
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
                                    {isEditing && draft ? (
                                        <>
                                            <FieldRow>
                                                <FieldLabel>Nome</FieldLabel>
                                                <EditInput
                                                    type="text"
                                                    value={draft.name}
                                                    onChange={(e) =>
                                                        setDraft((d) => ({
                                                            ...d,
                                                            name: e.target
                                                                .value,
                                                        }))
                                                    }
                                                />
                                            </FieldRow>
                                            <FieldRow>
                                                <FieldLabel>Idade</FieldLabel>
                                                <EditInput
                                                    type="number"
                                                    value={draft.age}
                                                    onChange={(e) =>
                                                        setDraft((d) => ({
                                                            ...d,
                                                            age: e.target
                                                                .value,
                                                        }))
                                                    }
                                                />
                                            </FieldRow>
                                            <FieldRow>
                                                <FieldLabel>E-mail</FieldLabel>
                                                <EditInput
                                                    type="email"
                                                    value={draft.email}
                                                    onChange={(e) =>
                                                        setDraft((d) => ({
                                                            ...d,
                                                            email: e.target
                                                                .value,
                                                        }))
                                                    }
                                                />
                                            </FieldRow>
                                            <EditActionsRow>
                                                <SaveEditButton
                                                    type="button"
                                                    onClick={saveUser}
                                                >
                                                    Salvar
                                                </SaveEditButton>
                                                <CancelEditButton
                                                    type="button"
                                                    onClick={cancelEdit}
                                                >
                                                    Cancelar
                                                </CancelEditButton>
                                            </EditActionsRow>
                                        </>
                                    ) : (
                                        <>
                                            <UserName>{user.name}</UserName>
                                            <FieldRow>
                                                <FieldLabel>Idade</FieldLabel>
                                                <FieldValue>{user.age}</FieldValue>
                                            </FieldRow>
                                            <FieldRow>
                                                <FieldLabel>E-mail</FieldLabel>
                                                <FieldValue>{user.email}</FieldValue>
                                            </FieldRow>
                                        </>
                                    )}
                                </CardInfo>
                            </UserCard>
                        )
                    })}
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
