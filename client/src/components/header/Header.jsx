import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Create a blog on your</span>
        <span className="headerTitleLg">WorkSpace</span>
      </div>
      <img
        className="headerImg" 
        src="https://images.pexels.com/photos/2120624/pexels-photo-2120624.jpeg?cs=srgb&dl=pexels-vlad-alexandru-popa-2120624.jpg&fm=jpg"
        alt="" 
      />
    </div>
  )
}
