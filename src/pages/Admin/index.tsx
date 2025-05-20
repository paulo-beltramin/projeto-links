import { Link } from "react-router"
import { Header } from "../../Components/Header"
import { MdDelete } from "react-icons/md"
import { useEffect, useState, type FormEvent } from "react"
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, } from "firebase/firestore"
import { db } from "../../Components/Services/db"


export type linkProps = {
  id: string,
  nameLink: string,
  color: string,
  background: string,
  url?: string
}

const Admin = () => {

  const [nameLink, setNameLink] = useState('')
  const [urlLink, setUrlLink] = useState('')
  const [backBottom, setBackBottom] = useState('#000')
  const [colorLink, setColorLink] = useState('#ffff')
  const [link, setLink] = useState<linkProps[]>([])



  const handleRegisterLinks = (e: FormEvent) => {
    e.preventDefault()


    addDoc(collection(db, "links"), {
      nameLink: nameLink,
      url: urlLink,
      color: colorLink,
      background: backBottom,
      created: new Date()
    })

      .then(() => {

        setNameLink('');
        setUrlLink('')
        alert('Adicionando com sucesso')
      })
      .catch((error) => {
        alert('Erro as cadastrar' + error)
      })

  }

  useEffect(() => {
    const linkRef = collection(db, "links")
    const getLink = query(linkRef)

    const unSub = onSnapshot(getLink, (snapshot) => {
      let list = [] as linkProps[]

      snapshot.forEach((doc) => {
        list.push({
          id: doc.id,
          nameLink: doc.data().nameLink,
          color: doc.data().color,
          background: doc.data().background
        })
      })
      setLink(list)
    })

    return () => {

      unSub()
    }
  }, [])

  const handleDelete = async (id: string) => {
    const refDoc = doc(db, "links", id)

    await deleteDoc(refDoc)

  }

  return (
    <div>
      <Header />

      <section>
        <form className=" flex flex-col " onSubmit={handleRegisterLinks}>
          <div className=" mx-auto">
            <label className="  text-white mt-9 text-base block">Nome do link</label>
            <input className=" max-md:w-[300px]   bg-white w-2xl py-1 px-4 mt-0.5" type="text" placeholder="Digite o nome do link..." required
              value={nameLink} onChange={e => setNameLink(e.target.value)} />
          </div>

          <div className="my-0 mx-auto">
            <label className="text-white mt-2 text-base block">Url do link</label>
            <input className="max-md:w-[300px] bg-white w-2xl py-1 px-4 mt-0.5" type="url" placeholder="Insira a url do link..." required
              value={urlLink} onChange={e => setUrlLink(e.target.value)} />

          </div>
          <div className="mt-6 text-white flex gap-2 mx-auto max-md:ml-10">

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
              <Link to={''} className=' max-md:w-11/12  w-2xl mx-auto my-0 p-2 rounded-md text-gray-50 text-lg mb-5'
                style={{ background: backBottom }}>
                <span className="flex justify-between items-center px-4" style={{ color: colorLink }}>

                  <p className=" mx-auto">
                    {nameLink}
                  </p>
                </span>
              </Link>
            </>
          )}
          <div className=" max-md:w-11/12 mt-9 bg-blue-600 w-2xl flex justify-center mx-auto py-1 text-white font-medium rounded-lg mb-16 ">
            <button className="cursor-pointer ">Cadastrar</button>
          </div>
        </form>


        {link && (
          <>
            {link.map((item) => (
              <>
                <Link to={''} key={item.id} className=" flex w-2xl max-md:w-11/12 mx-auto p-2 rounded-md text-lg mb-5 " style={{ background: `${item.background}`, color: `${item.color}` }}>
                  <span className="flex justify-between w-full ">

                    <p className=" mx-auto">
                      {item.nameLink}
                    </p>
                    <MdDelete size={30} color="white" className="bg-black p-1 cursor-pointer rounded-2xl" onClick={() => handleDelete(item.id)} />
                  </span>
                </Link>
              </>
            ))}
          </>
        )}
      </section>
    </div>
  )
}

export default Admin