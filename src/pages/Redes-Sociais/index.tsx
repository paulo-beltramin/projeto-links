import { useEffect, useState, type FormEvent } from "react"
import { Header } from "../../Components/Header"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "../../Components/Services/db"

const Networks = () => {
 const [facebook,setFacebook]=useState('')
 const [instagram,setInstagram]=useState('')
 const [youtube,setYoutube]=useState('')

 const handleRegisteNetworks=(e:FormEvent)=>{
      e.preventDefault()
   setDoc(doc(db, "social", "link"),{
       instagram:instagram,
       facebook:facebook,
       youtube:youtube
   })

 }

 const getNetworks =()=>{

   const docRef = doc(db, "social", "link")

   getDoc(docRef)
   .then((item)=>{
      if(item.data()!== undefined){
        setFacebook(item.data()?.facebook)
        setInstagram(item.data()?.instagram)
        setYoutube(item.data()?.youtube)
      }
   })
 }

 useEffect(()=>{
   getNetworks()

 },[])

  return (
    <div>
      <Header/>

      <div>
        <h1 className="  font-bold text-4xl text-white text-center my-9">Suas redes sociais</h1>

        <form className="text-center" onSubmit={handleRegisteNetworks}>
           <div>
            <label className="block text-white  mb-1">Link do facebook</label>
            <input className="bg-white text-base max-md:w-11/12 w-2xl mb-4 py-1 px-3 rounded-lg" type="url" placeholder="ex: https://facebook.com.br/ -----"
            value={facebook} onChange={e=> setFacebook(e.target.value)} />
           </div>

            <div >
            <label className="block text-white mb-1">Link do instagram</label>
            <input className="bg-white text-base max-sm:w-11/12 w-2xl mb-4 py-1 px-3 rounded-lg" type="url" placeholder="ex: https://instagram.com.br/ -----" 
            value={instagram} onChange={e=> setInstagram(e.target.value)}/>
           </div>

            <div>
            <label className="block text-white mb-1">Link do youtube</label>
            <input className="bg-white text-base max-sm:w-11/12 w-2xl mb-4 py-1 px-3 rounded-lg" type="url" placeholder="ex: https://youtube.com.br/ -----"
            value={youtube} onChange={e=> setYoutube(e.target.value)} />
           </div>

           <div>
            <button className="bg-[#3366FF] max-md:w-11/12 w-2xl text-white py-1 cursor-pointer">Salvar links</button>
           </div>
        </form>
      </div>
    </div>
  )
}

export default Networks