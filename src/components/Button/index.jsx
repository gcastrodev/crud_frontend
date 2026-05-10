import { Button } from './styles'


const MyButton = ({ children, theme, ...props }) => {

    return (
        <Button theme={theme} {...props}>{children}</Button>
    )
}

export default MyButton