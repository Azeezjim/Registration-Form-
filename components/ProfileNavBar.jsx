import ProfileNavItem from "./ProfileNavItem";
import { TiVideo } from "react-icons/ti";
import { MdSmartDisplay } from "react-icons/md";
import {useRouter} from 'next/router';
import {FiPlus} from 'react-icons/fi'

const ProfileNavBar = () => {
  const router = useRouter();
  return (
    <div>
      <ProfileNavItem />
    </div>
  );
};

export default ProfileNavBar;
