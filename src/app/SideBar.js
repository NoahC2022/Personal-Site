import {AiFillHome} from 'react-icons/ai';
import {BiMoviePlay} from 'react-icons/bi';
import {GrDocumentPdf} from 'react-icons/gr';
import {BiCameraMovie} from 'react-icons/bi';

const SideBar = () => {
    return(
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col
         bg-gray-900 text-white
         dark:text-white dark:bg-gray-900 shadow-lg">
            <i><SideBarIcon icon={<AiFillHome size="28" />}/></i>
            <i><SideBarIcon icon={<BiCameraMovie size="28" />}/></i>
            <i><SideBarIcon icon={<AiFillHome size="28" />}/></i>
            <i><SideBarIcon icon={<BiMoviePlay size="28" />} /></i>
        </div>
    )
};

const SideBarIcon = ({icon, text = 'tooltip here'}) => (
    <div className="sidebar-icon group">
        {icon}

        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
)

export default SideBar;