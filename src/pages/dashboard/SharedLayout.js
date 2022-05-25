import {Navbar,BigSidebar} from '../../components'
import Wrapper from '../../assets/wrappers/SharedLayout'
const SharedLayout = () =>{

    return(
        <Wrapper>

        <section >

            <div>
                <Navbar/>
            </div>

                {/* ----------------------------- MAIN ---------------------------*/}


            <main className='dashboard' >
                <div className="container">
                    <BigSidebar/>

                </div>
            </main>

        </section>
        </Wrapper> 
    )
}


export default SharedLayout;