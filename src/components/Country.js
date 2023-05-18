import { useState } from "react";
const Country = ({country}) => {

    // if set use state as true then in the input checkbox's property of checked ={!checked} this results in 
    // console.log(checked) = false when the box is unticked and true when the box is ticked
    const [checked, setChecked] = useState(true);
    const [checkedList, setCheckedList] = useState([]);

    // add functionality here for check box ticked
    const isBoxTicked = () => {
        if(checked){
            console.log("the box is checked", country.name.common, checked)
        }else{
            console.log("the box is not checked", country.name.common, checked)
        }
    }
    // const handleCheckedbox = ((event) => {
    //     // filter through countries
    //     // where isChecked == true
    //     // append to visited list
    //     const isChecked = event.target.checked;
    //     if(isChecked){
    //         setCheckedList([...checkedList, event.target.value])
    //     }else{
    //         const index = country.indexOf(event.target.value);

    //     }

    //     const visitedCountriesList = countriesList.map((country) => {

    //     })
        
    // })

    return(
        <ul>
            <li>
                {country.name.common + " " + country.flag}
                <input 
                    type="checkbox" 
                    name="checkbox"
                    checked={!checked}
                    onChange={ () => {
                        setChecked((prev)=> !prev);
                        // console.log(checked)
                        isBoxTicked();
                        // handleCheckedbox();
                    }}/>

            </li>
        </ul>
    )

}

export default Country;