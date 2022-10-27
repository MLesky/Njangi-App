import Header from "./Headers";
import Sidebar from "./SideBar";
import SimpleToolBar from './ToolBars';

const HomePage = () => {
    return (
        <div className="page">
            <Header />
            <SimpleToolBar />
            <Sidebar />
            </div>
    )
}
 
export default HomePage;