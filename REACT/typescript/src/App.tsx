type Props = {
  name: string 
}

let Props = {
  name: 'paramjot'
}

function Welcome({ name }: Props) {
  return <h1>Hello {Props.name}</h1>
}

export default Welcome;