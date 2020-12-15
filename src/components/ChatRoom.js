import ChannelBar from './ChannelBar.js'
import MainChat from './MainChat.js'
import MessageForm from './MessageForm'
import NavBar from './Navbar'
import '../App.css';

const Chatroom = () => {
    return (
        <>
        <div className="marginLeftAdjustment">
            <div className="navbar">
                <NavBar /> 
            </div>
            <div className="mainchat">
                <MainChat />
            </div>
            <div className="messagebar">
                <MessageForm />
            </div>
        </div>
            <ChannelBar />
        </>
    )
}
export default Chatroom