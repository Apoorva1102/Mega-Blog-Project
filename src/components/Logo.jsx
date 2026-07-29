import Pakkafinal from '../assets/Pakkafinal.png'
export default function Logo({width = '100px'}){
    return(
        <div>
            <img src={Pakkafinal} alt="Blog"
            className="w-14 h-14 text-indigo-500"></img>
        </div>
    )
}