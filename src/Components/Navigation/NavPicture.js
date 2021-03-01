import react from 'react';
import Logo from '../img/me-atcomp-polished.png';



function NavPicture() {
    return (
      <div className="NavPicture">
        <div className="img-cont">
            <img className="img-zone" src={Logo} />
        </div>
      </div>
    );
  }
  
  export default NavPicture;