import { Link } from 'react-router'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import type { linkProps } from '../Admin'
import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore'
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
        getLinks()
        getSociais()
    }, [])


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
                setLinks(list)
            })
    }


    const getSociais = () => {
        getDoc(doc(db, "social", "link"))
            .then((item) => {
                setSocialLinks({
                    facebook: item.data()?.facebook,
                    instagram: item.data()?.instagram,
                    yotube: item.data()?.youtube
                })
            })

    }


    return (
        <>
            <div className='w-full text-center mt-28 flex-col flex  '>
                <h1 className=' text-gray-50 text-3xl md:text-5xl font-semibold mb-5 '>Paulo beltramin</h1>
                <p className='text-gray-50 text-base mb-10'>Veja meus links</p>

                {links && links.map((item) => (


                    <div key={item.id} className='mb-4  w-2xl my-0 mx-auto max-md:w-2xs ' >
                        <Link to={`${item.url}`} target='_blank'>
                            <span style={{ background: item.background, color: item.color }} className='py-1 px-4 rounded-lg block '>
                                {item.nameLink}
                            </span>
                        </Link>
                    </div>
                )

                )}

                {socialLinks && Object.keys(socialLinks).length > 0 && (
                    <>
                        <footer className='flex justify-center gap-4 text-white text-2xl'>
                            <Link to={socialLinks.facebook} target='_blank'>
                                <FaFacebook />
                            </Link>

                            <Link to={socialLinks.instagram} target='_blank'>
                                <FaInstagram />
                            </Link>

                            <Link to={socialLinks.yotube} target='_blank'>
                                <FaYoutube />
                            </Link>
                        </footer>

                    </>
                )}
            </div>
        </>
    )
}
