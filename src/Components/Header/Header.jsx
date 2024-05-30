import { faHouse } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons';

const Header = () => {

    return(

        <>
        
        <div className="row">
            <div className="header mt-3">
                <div className="d-flex justify-content-between p-4 justify-content-center">
                    <div className="icon">
                        <FontAwesomeIcon icon={faHouse} className='icons'/>
                    </div>
                    <div className="management">
                        <div className="d-flex justify-content-center"> 
                            <FontAwesomeIcon icon={faUser} className='iconsUser'/>
                            <p className='ps-2 text-light font'>Employee Management</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>

    )

}

export default Header;








