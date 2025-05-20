import { Link } from 'react-router'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import type { linkProps } from '../Admin'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../Components/Services/db'

type socialProps = {
    instagram: string,
    facebook: string,
    yotube: string
}

export const Home = () => {
    const [links, setLinks] = useState<linkProps[]>([])
    const [socialLinks, setSocialLinks] = useState<socialProps>()


    useEffect(() => {

        const getLinks = () => {
            const docRef = collection(db, "links")

            const getLink = query(docRef)
            const list = [] as linkProps[]
            getDocs(getLink)
                .then((item) => {
                    item.forEach((doc) => {
                        list.push({
                            id: doc.id,
                            nameLink: doc.data().nameLink,
                            color: doc.data().color,
                            background: doc.data().background,
                            url: doc.data().url
                        })
                    })
                })

            setLinks(list)
        }

        getLinks()
    }, [])

    return (
        <>
            <div className='w-full text-center mt-28 flex-col flex  '>
                <h1 className=' text-gray-50 text-3xl md:text-5xl font-semibold mb-5 '>Paulo beltramin</h1>
                <p className='text-gray-50 text-base mb-10'>Veja meus links</p>

                {links && links.map((item) => (


                    <>
                        <Link to={`${item.url}`} className='sm:w-2xs md:w-2xl mx-auto my-0 p-2 rounded-md text-lg mb-5' target='_blank' style={{ background: item.background, color: item.color }}>
                            <span>
                                {item.nameLink}
                            </span>
                        </Link>
                    </>
                )

                )}

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
