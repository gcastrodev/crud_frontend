import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../services/api"
import {
  Container,
  ContainerInputs,
  Form,
  Input,
  InputLabel,
  Title,
  Span
} from "./styles"
import BackgroundImage from "../../components/ImageHeader"
import MyButton from "../../components/Button"


function Home() {
  const dataUserName = useRef()
  const dataUserAge = useRef()
  const dataUserEmail = useRef()

  const navigate = useNavigate()

  const registerNewUser = async () => {

    try {
    const data = await api.post('/usuarios', {
      name: dataUserName.current.value,
      age: parseInt(dataUserAge.current.value),
      email: dataUserEmail.current.value
    })
    navigate('/lista_de_usuarios')
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error)
    }
  };

  return (

    <Container>

      <BackgroundImage />

      <Form>

        <Title> <Span>→</Span> Cadastro de Usuários <span>←</span> </Title>

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome <span> * </span>
            </InputLabel>
            <Input type='text' placeholder='Nome de usuário' ref={dataUserName} />
          </div>

          <div>          <InputLabel>
            Idade <span> * </span>
          </InputLabel>
            <Input type='number' placeholder='Idade do usuário' ref={dataUserAge} />
          </div>

        </ContainerInputs>

        <div style={{ width: '100%', boxSizing: 'border-box' }}>
          <InputLabel>
            E-mail <span> * </span>
          </InputLabel>
          <Input type='email' placeholder='E-mail do usuário' ref={dataUserEmail} />
        </div>

        <MyButton type='button' onClick={registerNewUser} theme='primary'>Cadastrar Usuário</MyButton>
      </Form>

      <MyButton type='button' onClick={() => navigate('/lista_de_usuarios')}>Listar Usuários</MyButton>
    </Container>
  );
}

export default Home;
