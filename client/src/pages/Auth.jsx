import { useState } from "react"
import Signin from "../components/Signin"
import Signup from '../components/Signup'

export default function Auth(){

    const [isSignin, setIsSignin] = useState(true)
    return(
        <>
            <div className="h-screen w-screen bg-zinc-800 text-white tracking-widest flex justify-center items-center md:p-16">
                <div className="w-full h-full md:w-3/4 lg:w-2/4 md:h-3/4 bg-gradient-to-b from-[#124E66] md:rounded-full md:p-8">
                    {isSignin ? <Signin onClick={setIsSignin} /> : <Signup onClick={setIsSignin}/> }
                </div>
            </div>
        </>
    )
}