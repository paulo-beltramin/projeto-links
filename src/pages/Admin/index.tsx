import { Link } from "react-router"
import { Header } from "../../Components/Header"
import { MdDelete } from "react-icons/md"
import { useState } from "react"


const Admin = () => {

  const [nameLink, setNameLink] = useState('')
  const [urlLink, setUrlLink] = useState('')
  const [backBottom, setBackBottom] = useState('#000')
  const [colorLink, setColorLink] = useState('#ffff')

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
            <input type="color" value={colorLink} onChange={e => setColorLink(e.target.value)} />


            <label>Fundo do link</label>
            <input className="mr-4" type="color" value={backBottom} onChange={e => setBackBottom(e.target.value)} />
          </div>
          {nameLink && (
            <>
              <div>
                <h4 className="text-center text-white font-bold mt-6 mb-6">Pré-visualização...</h4>
              </div>
              <Link to={''} className=' max-md:w-11/12 lg:w-2xl mx-auto my-0 p-2 rounded-md text-gray-50 text-lg mb-5'
                style={{ background: backBottom }}>
                <span className="flex justify-between items-center px-4" style={{ color: colorLink }}>

                  <p className=" mx-auto">
                    {nameLink}
                  </p>

                  <MdDelete size={30} color="white" className="bg-black p-1 cursor-pointer rounded-2xl" />
                </span>
              </Link>
            </>
          )}
          <div className=" max-md:w-11/12 mt-9 bg-blue-600 w-2xl flex justify-center mx-auto py-1 text-white font-medium rounded-lg mb-16 ">
            <button className="cursor-pointer ">Cadastrar</button>
          </div>


        </form>
      </section>
    </div>
  )
}

export default Admin