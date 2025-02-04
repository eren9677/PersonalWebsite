import {  MdLocationOn   } from "react-icons/md";
import { FaCalendar, FaCarAlt } from "react-icons/fa";
import { GiPistolGun  } from "react-icons/gi";


const contact = [
    {
      title: 'Birth Date',
      value: '2 Haziran 2002',
      dateTime: '2002-06-01',
      icon: <FaCalendar  size={25}/>
    },
    {
      title: 'Address',
      value: 'Cekmekoy, Istanbul',
      icon: <MdLocationOn size={25}/>
    },
    {
      title: 'Ehliyet',
      value: 'B1',
      icon: <FaCarAlt size={25}/>
    },
    {
      title: 'Askerlik',
      value: 'Muaf',
      icon: <GiPistolGun size={25}/>
    }
  ];

  export default contact;