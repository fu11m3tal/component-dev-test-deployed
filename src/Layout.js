const Layout = ({logo, pages, setMain}) => {
    return (
        <div className='Layout'>
        <img className="Logo" src={`${logo}`}/>
        <button className="Contact">Contact Us</button>
        <div className='Menu'>
          {pages.map((item, index) => (
            <a id={index} href={`#${item.title}`} onClick={setMain}>{item.title}</a>
          ))}
        </div>
    </div>
    )
}

export default Layout;