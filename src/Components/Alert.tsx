
interface Props{
    children: string;
}

const Alert = (props: Props) => {
  return (
    <div className="alert alert-primary">{props.children}</div>
  )
}

export default Alert