import Header from "./Headers";
import {Sidebar, GroupSidebar} from "./SideBars";
import SimpleToolBar from './ToolBars';
import floating_action from './assets/images/floating_action.svg'
// import Notification from "./Notification";

const HomePage = ({data, notif, style}) => {
    return (
        <div className="page">
            {/* <Header data={""}/> */}
            <SimpleToolBar />
            <div className="side-bars">
            <Sidebar />
            <GroupSidebar />
            <button className="action-btn">
                <img src={floating_action} alt="" />
            </button>
            </div>
            </div>
    )
}
 
export default HomePage;