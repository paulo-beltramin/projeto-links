import { Link } from "react-router"
import { Header } from "../../Components/Header"
import { MdDelete } from "react-icons/md"


const Admin = () => {
  return (
    <div>
      <Header />

      <section>
        <form className=" flex justify-center items-center flex-col">
          <label className="  text-white mt-9 text-base">Nome do link</label>
          <input className=" max-md:w-11/12  bg-white w-2xl py-1 px-4 mt-0.5" type="text" placeholder="Digite o nome do link..." />

          <label className="text-white mt-2 text-base">Url do link</label>
          <input className=" max-md:w-11/12 bg-white w-2xl py-1 px-4 mt-0.5" type="url" placeholder="Insira a url do link..." />

          <div className="mt-6 text-white flex gap-1.5">
            <label>Fundo do link</label>
            <input className="mr-4" type="color" />

            <label>Cor do link</label>
            <input type="color" />
          </div>


          <div className=" max-md:w-11/12 mt-9 bg-blue-600 w-2xl text-center py-1 text-white font-medium rounded-lg mb-16">
            <button className="cursor-pointer ">Cadastrar</button>
          </div>

          <Link to={''} className='bg-green-500  max-md:w-11/12 lg:w-2xl mx-auto my-0 p-2 rounded-md text-gray-50 text-lg mb-5'>
            <span className="flex justify-between items-center px-4">
              [Inscrições Abertas] - Fábrica de Aplicativos

              <MdDelete size={30} color="red" className="bg-black p-1 cursor-pointer rounded-2xl" />
            </span>
          </Link>
        </form>
      </section>
    </div>
  )
}

export default Admin