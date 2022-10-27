import Header from "./Headers";
import {Sidebar, GroupSidebar} from "./SideBars";
import SimpleToolBar from './ToolBars';

const HomePage = () => {
    return (
        <div className="page">
            <Header />
            <SimpleToolBar />
            <div className="side-bars">
            <Sidebar />
            <GroupSidebar />
            </div>
            </div>
    )
}
 
export default HomePage;