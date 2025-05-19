import { Link } from 'react-router'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'


export const Home = () => {
    return (
        <>
            <div className='w-full text-center mt-28 flex-col flex  '>
                <h1 className=' text-gray-50 text-3xl md:text-5xl font-semibold mb-5 '>Paulo beltramin</h1>
                <p className='text-gray-50 text-base mb-10'>Veja meus links</p>

                <Link to={''} className='bg-green-500  sm:w-2xs md:w-2xl mx-auto my-0 p-2 rounded-md text-gray-50 text-lg mb-5'>
                    <span>
                        [Inscrições Abertas] - Fábrica de Aplicativos
                    </span>
                </Link>

                <section className='flex justify-center gap-4 text-white text-2xl'>
                    <Link to={''} target='_blank'>
                        <FaFacebook />
                    </Link>

                    <Link to={''} target='_blank'>
                        <FaInstagram />
                    </Link>

                    <Link to={''} target='_blank'>
                        <FaYoutube />
                    </Link>
                </section>

            </div>
        </>
    )
}
