import { Header } from "../../Components/Header"

const Networks = () => {
  return (
    <div>
      <Header/>

      <div>
        <h1 className="  font-bold text-4xl text-white text-center my-9">Suas redes sociais</h1>

        <form className="text-center">
           <div>
            <label className="block text-white  mb-1">Link do facebook</label>
            <input className="bg-white text-base max-md:w-11/12 w-2xl mb-4 py-1 px-3 rounded-lg" type="url" placeholder="ex: https://facebook.com.br/ -----" />
           </div>

            <div >
            <label className="block text-white mb-1">Link do instagram</label>
            <input className="bg-white text-base max-sm:w-11/12 w-2xl mb-4 py-1 px-3 rounded-lg" type="url" placeholder="ex: https://instagram.com.br/ -----" />
           </div>

            <div>
            <label className="block text-white mb-1">Link do youtube</label>
            <input className="bg-white text-base max-sm:w-11/12 w-2xl mb-4 py-1 px-3 rounded-lg" type="url" placeholder="ex: https://youtube.com.br/ -----" />
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