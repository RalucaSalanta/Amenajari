import "./FooterStyles.css"

const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
             <div>
                <h1> SI Design </h1>
                <p> Your Home Your Style </p>
              </div> 
             <div>
                <a href="/">
                <i className="fa-brands fa-facebook-square"></i>
                </a>   
                <a href="/">
                <i className="fa-brands fa-instagram-square"></i>
                </a>
             </div>
             </div>   
         <div className="bottom">
            <div>
              <h4>Project</h4>  
              <a href="/">Changelog</a>
              <a href="/">Status</a>
              <a href="/">License</a>
              <a href="/">All Versions</a>
            </div>
             <div>
              <h4>Comunity</h4>  
              <a href="/">GitHub</a>
              <a href="/">Issues</a>
              <a href="/">Facebook</a>
            </div>
            <div>
              <h4>Help</h4>  
              <a href="/">Support</a>
              <a href="/">Troubleshooting</a>
              <a href="/">Contact Us</a>
              <a href="/">All Versions</a>
            </div>
            <div>
              <h4>Others</h4>  
              <a href="/">Terms of Service</a>
              <a href="/">Privacy Policy</a>
            </div>

         </div>
      </div>   
    )
}
export default Footer;
