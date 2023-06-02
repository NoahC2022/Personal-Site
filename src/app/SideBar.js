import { AiFillHome } from 'react-icons/ai';
import { BiMoviePlay } from 'react-icons/bi';
import { BsFileEarmarkPerson } from 'react-icons/bs';
import { BiCameraMovie } from 'react-icons/bi';
import { useRouter } from 'next/navigation';


const SideBar = ({ router }) => {
  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white dark:text-white dark:bg-gray-900 shadow-lg">
      <div className="sidebar-link" onClick={() => handleNavigation('/')}>
        <SideBarIcon icon={<AiFillHome size="28" />} text="Home" />
      </div>
      <div className="sidebar-link" onClick={() => window.open('https://github.com/NoahC2022/Top-Flicks')}>
        <SideBarIcon icon={<BiCameraMovie size="28" />} text="Top Movies" />
      </div>
      <div className="sidebar-link" onClick={() => handleNavigation('/resume')}>
        <SideBarIcon icon={<BsFileEarmarkPerson size="28" />} text="Resume" />
      </div>
      <div className="sidebar-link" onClick={() => window.open('https://www.youtube.com/channel/UCjQzwAqsuFtGi1-QhkRNepw', "_blank")}>
        <SideBarIcon icon={<BiMoviePlay size="28" />} text="Content" />
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip here' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBar;