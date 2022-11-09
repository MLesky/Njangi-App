import {MiniSidebar, GroupSidebar} from "./SideBars";
import SimpleToolBar from './ToolBars';
import floating_action from './assets/images/floating_action.svg'
import { MessageBox } from "./Fields";

const HomePage = () => {
    return (
        <div className="page">
            <Header />
            <SimpleToolBar />
            <div className="side-bars">
            <MiniSidebar />
            <GroupSidebar />
            <MessageBox />
            </div>
            </div>
    )
}
 
export default HomePage;