import { Link } from "react-router-dom"

export const Dashboard = () => {

  return (
    <>
      <p>dashboard</p>
      <Link to='/auth'>login</Link>
    </>
  )
}