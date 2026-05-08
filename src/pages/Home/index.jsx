import { useRef } from "react"

import { 
  Button,
  Container, 
  ContainerInputs, 
  Form, 
  HeaderBackGround, 
  Input, 
  InputLabel, 
  Title,
  Span
} from "./styles"
import UsersImage from '../../assets/users.jpg'


function Home() {
const dataUserName = useRef()
const dataUserAge = useRef()
const dataUserEmail = useRef()

const registerNewUser = () => {
  console.log(dataUserAge.current.value)
}

  return (

    <Container>

      <HeaderBackGround>
        <img src={UsersImage} alt="users_image"/>
      </HeaderBackGround>

    <Form>

      <Title> <Span>→</Span> Cadastro de Usuários <span>←</span> </Title>

      <ContainerInputs>
        <div>
          <InputLabel>
            Nome <span> * </span>
          </InputLabel>
          <Input type='text' placeholder='Nome de usuário' ref={dataUserName}/>
        </div>

        <div>          <InputLabel>
            Idade <span> * </span>
          </InputLabel>
          <Input type='number' placeholder='Idade do usuário' ref={dataUserAge}/>
        </div>

      </ContainerInputs>

      <div style={{ width: '100%', boxSizing: 'border-box'}}>
      <InputLabel>
          E-mail <span> * </span>
      </InputLabel>
      <Input type='email' placeholder='E-mail do usuário' ref={dataUserEmail}/>
      </div>

    <Button type='button' onClick={registerNewUser}>Cadastrar Usuário</Button>
    </Form>

    </Container>
  )
}

export default Home
