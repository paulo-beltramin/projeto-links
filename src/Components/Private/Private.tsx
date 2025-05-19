import { useEffect, useState, type ReactNode } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { Navigate } from 'react-router'

import { auth } from '../Services/db'


type privateProps = {
    children: ReactNode
}

export const Private = ({ children }: privateProps) => {
   const [loading,setLoading]=useState(true)
   const [signed,setSigned]=useState(false)



    useEffect(()=>{
     
      onAuthStateChanged(auth, (user)=>{
             if(user){
                setLoading(false)
                setSigned(true)
             }else{
                setLoading(false)
                setSigned(false)
             }
           
        })

    },[])


    if(loading){
        return <>Carregando</>
    }

    if(!signed){
        return <Navigate to={'/login'}/>
    }

  
    return (
        <>
            {children}
        </>
    )



}
