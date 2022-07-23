import {  PostCard } from "../../components";
import { useAppContext } from "../../context/appContext";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCallback } from "react";
import {Loading} from '../../components'
const Postdetail = () =>  {
  const { id: postId } = useParams();

  const { token } = useAppContext();
  const [postin, setPost] = useState('');
  const [isLoading, setLoading] = useState(true);

  
  const load = useCallback((value)=>{
    setPost(value)
    setLoading(false)

  },[])


 
  const fetch = async ()=>{

    
     await axios
       .get(`/api/v1/posts/postdetail/${postId}`, {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       })
       .then((res) => load(res.data.post));

  }

 console.log(postin)

 useEffect(()=>{
   fetch()
 },[])

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="middle">
        {/* <h1>{postin.images? 'helle':'hhsdf'}</h1>
      <img src={postin?.images[0]??''} alt="" /> */}
      <PostCard item={postin} />
    </div>
  );
};
export default Postdetail;
