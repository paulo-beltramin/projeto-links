import { Link } from "react-router"
import { Header } from "../../Components/Header"
import { MdDelete } from "react-icons/md"
import { useState } from "react"


const Admin = () => {

  const [nameLink, setNameLink] = useState('')
  const [urlLink, setUrlLink] = useState('')
  const [backBottom, setBackBottom] = useState('#A9A9A9')
  const [colorLink, setColorLink] = useState('#000080')

  const handleColorLink = () => {

  }


  return (
    <div>
      <Header />

      <section>
        <form className=" flex flex-col ">
          <div className=" mx-auto">
            <label className="  text-white mt-9 text-base block">Nome do link</label>
            <input className=" max-md:w-[300px]   bg-white w-2xl py-1 px-4 mt-0.5" type="text" placeholder="Digite o nome do link..."
              value={nameLink} onChange={e => setNameLink(e.target.value)} />
          </div>

          <div className="my-0 mx-auto">
            <label className="text-white mt-2 text-base block">Url do link</label>
            <input className="max-md:w-[300px] bg-white w-2xl py-1 px-4 mt-0.5" type="url" placeholder="Insira a url do link..."
              value={urlLink} onChange={e => setUrlLink(e.target.value)} />

          </div>
          <div className="mt-6 text-white flex gap-2 ml-40 max-md:ml-10">

            <label>Cor do link</label>
            <input type="color" value={colorLink} onChange={e => setColorLink(e.target.value)} onClick={handleColorLink} />


            <label>Fundo do link</label>
            <input className="mr-4" type="color" value={backBottom} onChange={e => setBackBottom(e.target.value)} />
          </div>


          <div className=" max-md:w-11/12 mt-9 bg-blue-600 w-2xl flex justify-center mx-auto py-1 text-white font-medium rounded-lg mb-16 ">
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