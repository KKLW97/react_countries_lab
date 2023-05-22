import { useState } from "react";
const Country = ({country, visitedCountries, setVisitedCountries, handleCheckedbox}) => {

    // if set use state as true then in the input checkbox's property of checked ={!checked} this results in 
    // console.log(checked) = false when the box is unticked and true when the box is ticked
    const [checked, setChecked] = useState(true);

    // add functionality here for check box ticked
    const isBoxTicked = () => {
        if(checked){
            console.log("the box is checked", country.name.common, checked)
        }else{
            console.log("the box is not checked", country.name.common, checked)
        }
    }

    return(
        <ul>
            <li>
                {country.name.common + " " + country.flag}
                <input 
                    type="checkbox" 
                    name="checkbox"
                    checked={!checked}
                    onChange={ (e) => {
                        setChecked((prev)=> !prev);
                        handleCheckedbox(e.target.checked);
                        isBoxTicked(); 
                    }}
                    />

            </li>
        </ul>
    )

}

export default Country;