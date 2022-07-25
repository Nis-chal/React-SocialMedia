
import { ImProfile } from 'react-icons/im'
import {AiOutlineHome } from 'react-icons/ai'
import {MdOutlineExplore} from 'react-icons/md'

import {IoBookmarkOutline} from 'react-icons/io5'

const links = [
  {
    id: 1,
    text: "Home",
    path: "/user",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    text: "Explore",
    path: "/profile/Explore",
    icon: <MdOutlineExplore />,
  },
  {
    id: 3,
    text: "bookmarks",
    path: "/profile/bookmarks",
    icon: <IoBookmarkOutline />,
  },
  {
    id: 4,
    text: "profile",
    path: `/profile`,
    icon: <ImProfile />,
  },
];

export default links