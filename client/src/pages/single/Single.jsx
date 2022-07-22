import "./single.css"
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import Footer from '../../components/footer/Footer'

export default function Single() {
  return (
   <>
    <div className="single">
      {/* post */}
      <SinglePost/>
      <Sidebar/>
    </div>
    <Footer/>
   </> 
  )
}
