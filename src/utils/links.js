
import { ImProfile } from 'react-icons/im'
import {AiOutlineHome } from 'react-icons/ai'
import {MdOutlineExplore} from 'react-icons/md'

import {IoBookmarkOutline} from 'react-icons/io'

const links = [
  {
    id: 1,
    text: 'Home',
    path: '/',
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    text: 'Explore',
    path: 'Explore',
    icon: <MdOutlineExplore/>,
  },
  {
    id: 3,
    text: 'bookmarks',
    path: 'bookmarks',
    icon: <IoBookmarkOutline />,
  },
  {
    id: 4,
    text: 'profile',
    path: 'profile',
    icon: <ImProfile />,
  },
]

export default links