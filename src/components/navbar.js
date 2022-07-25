import Wrapper from "../assets/wrappers/navbar";
import { useState } from "react";
import { useAppContext } from "../context/appContext";
import {Searchbar,SearchResult} from "../components"
import {ImCross} from "react-icons/im"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { logoutUser,addShorts } = useAppContext();
  const [shortForm, setShort] = useState(false)
  const [description,SetDescription] = useState("")
  const [video,setValues] = useState('');

  const navigate = useNavigate()

  const handleChange=(e)=>{

    SetDescription(e.target.value)

  }

     const FileChange =  (e) => {
       var image =  e.target.files[0];

       setValues(image );
     };

  const submit = (e)=>{
    addShorts({description,video})
    navigate('/user/shorts')
    setShort(false)

  }
  

  return (
    <Wrapper>
      <nav>
        <div className="container">
          <h2 className="log">WinkleMedia</h2>
          <Searchbar />
          <div className="create">
            <span onClick={() => setShort(true)} className="btn btn-purple">
              Add Post
            </span>
            <div className="btn-container">
              <button
                className="profile-picture btn-none"
                onClick={() => setShowLogout(!showLogout)}
              >
                <img
                  className="profile-photo"
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8361ef54-5fa8-42b0-9e75-01a5034ef26a/de6os69-7c1d25a3-c1c8-4cc5-8419-9d4f32eea6ef.jpg/v1/fit/w_300,h_900,q_70,strp/halloween_icon_wendell_2020_by_ijustwannahavefunn_de6os69-300w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcLzgzNjFlZjU0LTVmYTgtNDJiMC05ZTc1LTAxYTUwMzRlZjI2YVwvZGU2b3M2OS03YzFkMjVhMy1jMWM4LTRjYzUtODQxOS05ZDRmMzJlZWE2ZWYuanBnIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.EMqbhme0Qy7MEUL6XiZ7Eb6D-TYs4rnBLH70CHtF8I4"
                  alt=""
                />
              </button>
              <div
                className={showLogout ? "dropdown show-dropdown" : "dropdown"}
              >
                <button
                  type="button"
                  className="dropdown-btn"
                  onClick={() => logoutUser()}
                >
                  logout
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={shortForm ? "addShorts" : "display-none"}>
          <h2>Add Shorts</h2>
          <input type="text" placeholder="Description" onChange={handleChange}  value={description}/>
          <input type="file" onChange={FileChange} />
          <ImCross onClick={() => setShort(false)} className="cross-icon" />

          <button onClick={submit} className="save-btn">Submit</button>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
