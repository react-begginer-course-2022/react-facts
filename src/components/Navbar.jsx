import logo from "../assets/icons/logo.svg";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">
        <img src={logo} alt="logo" className="logo__img" />
        <h2 className="logo__title">ReactFacts</h2>
      </div>
      <h3 className="nav__title">React Course - Project 1</h3>
    </nav>
  )
}