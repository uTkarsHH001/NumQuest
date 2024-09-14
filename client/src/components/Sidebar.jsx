// Sidebar.js
import Avatar from 'react-avatar';
import RecentScores from './RecentScores';
import Leaderboard from './Leaderboards';
import { IoClose } from "react-icons/io5";

export default function Sidebar({ username, recentScore, isVisible, onClose }) {
    return (
        <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform transform ${isVisible ? 'translate-x-0' : '-translate-x-full'} lg:hidden w-4/5 sm:w-1/2 md:w-1/3`}>
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <div className='flex items-center space-x-4 text-3xl'>
                    <Avatar name={username} size="45" className="rounded-full" />
                    <p>{username}</p>
                </div>
                <button onClick={onClose} className="text-2xl">
                <IoClose />
                </button>
            </div>
            <div className="p-4 flex flex-col items-start gap-2">
                <button onClick={onClose} className="text-2xl p-1 border w-full rounded-md hover:opacity-75">Recent Scores</button>
                <button onClick={onClose} className="text-2xl p-1 border w-full rounded-md hover:opacity-75">Leaderboard</button>
            </div>
        </div>
    );
}
