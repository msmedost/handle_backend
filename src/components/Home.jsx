import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
        <Link to="/admin"><button>See all users</button></Link>
    </div>
  )
}
export default Home