import { Button } from './styles'

const MyButton = ({ children, ...props }) => {

    return (
        <Button {...props}>{children}</Button>
    )
}

export default MyButton