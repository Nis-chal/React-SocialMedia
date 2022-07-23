import { useEffect } from 'react'
import Wrapper from '../assets/wrappers/Explore'
import { useAppContext } from '../context/appContext'
import {Loading} from '../components'
import {Link} from "react-router-dom"
import {FaImages} from "react-icons/fa"


const Explore = ()=>{

    const {explorePage,explorePost,isLoading} = useAppContext()
    
    useEffect(()=>{
         explorePage()
    },[])

    if(isLoading){
        return <Loading/>
    }
    return (
        <Wrapper>


    <div>
        <div className="explore-content">
            {explorePost.map((item,index)=>{
                return(
<Link to={`/user/detailpost/${item._id}`} className ="profile-posts-link">


              <div className="profile-posts-content">
                <img src={item.images[0]} alt="" key={item._id} />
                 <FaImages className={item.images.length > 1 ? "multipleimage":"d-none"}/>
              </div> 
                </Link>            )
            })}
        </div>
    </div>
        </Wrapper>
    )
}

export default Explore