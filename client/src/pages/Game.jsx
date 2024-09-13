import { useEffect, useState } from "react";
import Leaderboard from "../components/Leaderboards";
import PlayingArea from "../components/PlayingArea";
import RecentScores from "../components/RecentScores";
import Avatar from "react-avatar";
import { jwtDecode } from 'jwt-decode'
import axios from "axios";

export default function Game(){

    const [recentScore, setRecentScore] = useState([])
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem('token')
                const decodedToken = jwtDecode(token)
                const userId = decodedToken.id
                const response = await axios.get('http://localhost:5000/user', { userId });
                setUser(response.data);
                console.log(response.data)
            } catch (err) {
              console.error(err)
            } finally {
              setLoading(false);
            }
          };
      
          fetchUser();
    },[])
    return(
        <div className="h-screen w-screen overflow-hidden tracking-widest text-white bg-zinc-800 lg:p-16 flex lg:space-x-8">
            <div className="w-1/5 hidden lg:block">
            {recentScore.length > 0 && <RecentScores recentScore={recentScore} />}
            {/* <button className="p-1 bg-[#273b40] hover:opacity-75 border border-2 w-full py-2 rounded-lg my-4 outline-none">Reset</button> */}
            <div className="flex items-center space-x-2 lg:absolute lg:left-10 lg:bottom-10">
                <Avatar name="Utkarsh kataria" size="45" className="rounded-full" />
                <p>Utkarsh Kataria</p>
            </div>
            </div>
            <PlayingArea recentScore={recentScore} setRecentScore={setRecentScore} />
            <Leaderboard />
      </div>
    )
}