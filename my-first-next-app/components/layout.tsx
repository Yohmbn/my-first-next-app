import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";


export const Layout: React.FC = ({children}) => {
  return (
    <div>
      <span><nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link href="/">
  <a className="navbar-brand" >Home</a>
  </Link>


  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">




          <Link href="/Blog/first-article" >
          <a className="dropdown-item" href="#">First article</a>
          </Link>
          <Link  href="/Blog/second-article">
             <a className="dropdown-item" href="#">Second article</a>
          </Link>




    </ul>

  </div>
</nav></span>
      <article>
        {children}
      </article>
    </div>
  )
}
