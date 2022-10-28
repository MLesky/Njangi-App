import Header from "./Headers";
import {Sidebar, GroupSidebar} from "./SideBars";
import SimpleToolBar from './ToolBars';
import floating_action from './assets/images/floating_action.svg'

const HomePage = () => {
    return (
        <div className="page">
            <Header />
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