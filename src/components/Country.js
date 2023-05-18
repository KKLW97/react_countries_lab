import { useState } from "react";

const Country = ({country}) => {

    const [isChecked, setIsChecked] = useState(false);

    // add functionality here for check box ticked

    return(
        <ul>
            <li>
                {country.name.common + " " + country.flag}
                <input 
                    type="checkbox" 
                    checked={isChecked} 
                    onChange={() => setIsChecked((prev)=> !prev)}/>

            </li>
        </ul>
    )

}

export default Country;