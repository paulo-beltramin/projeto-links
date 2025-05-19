import { useState, type FormEvent } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router"

import { auth } from "../../Components/Services/db"


export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const navigate = useNavigate()

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()



    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Logado com sucesso")
        navigate('/admin')
      })
      .catch((error) => {
        console.log(error)
      })



  }


  return (
    <>
      <form onSubmit={handleLogin} className="flex justify-center items-center flex-col mt-40">
        <div className="flex mb-6 max-md:text-4xl">
          <p className="font-bold text-7xl text-white ">Dev</p>
          <p className="font-bold text-7xl text-yellow-500 ">Link</p>
        </div>

        <div className="flex flex-col w-full  ">
          <input  type="text" placeholder="Digite seu email" required
            className="w-xl my-0 mx-auto px-2 py-1 text-base outline bg-gray-50 mb-4
           max-md:w-2xs lg:w-2xl 
           " value={email} onChange={e => setEmail(e.target.value)} />
          <input  type="password" placeholder="Digite sua senha"
            className="w-xl my-0 mx-auto px-2 py-1 text-base outline bg-gray-50
           mb-4 max-md:w-2xs lg:w-2xl " value={password} onChange={e => setPassword(e.target.value)} required/>
          <button
            className="max-md:w-2xs  bg-blue-600 w-xl my-0 mx-auto py-1 cursor-pointer
             text-white">
            Acessar</button>
        </div>
      </form>

    </>
  )
}
