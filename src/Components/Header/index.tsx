import { Link } from "react-router"
import { GoSignOut } from "react-icons/go";
import { signOut } from "firebase/auth";
import { auth } from '../Services/db'


export const Header = () => {

  const handleLogout = async () => {
    return signOut(auth)
  }

  return (
    <div>
      <header className="w-full mt-8">
        <nav className=" max-sm:w-11/12 flex items-center justify-between max-w-3xl w-full my-0 mx-auto bg-gray-50 px-3 py-1 rounded-md">
          <div className=" gap-4 flex text-shadow-black text-base">
            <Link to={'/'}>Home</Link>
            <Link to={''}>Link</Link>
            <Link to={''}>Redes sociais</Link>
          </div>

          <div className="flex text-red-600 text-2xl ">
            <span onClick={handleLogout} className="cursor-pointer">
              <GoSignOut />
            </span>
          </div>
        </nav>
      </header>
    </div>
  )
}
