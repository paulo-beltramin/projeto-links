import { Link } from "react-router"
import { GoSignIn, GoSignOut } from "react-icons/go";




export const Header = () => {



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
            <span>
              <GoSignIn />
            </span>
            <span className="hidden"><GoSignOut /></span>
          </div>
        </nav>
      </header>
    </div>
  )
}
