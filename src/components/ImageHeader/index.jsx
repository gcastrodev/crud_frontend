import HeaderBackGround from "./styles";
import UsersImage from '../../assets/users.jpg'

const BackgroundImage = () => {

    return (
        <HeaderBackGround>
        <img src={UsersImage} alt="users_image"/>
        </HeaderBackGround>

    )
}

export default BackgroundImage