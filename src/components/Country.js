import { useState } from "react";
const Country = ({country}) => {

    const [checked, setChecked] = useState(false);
    const [checkedList, setCheckedList] = useState([]);

    // add functionality here for check box ticked
    const handleChecked = ((e) => {
        // filter through countries
        // where isChecked == true
        // append to visited list
        // const value = e.target.value;
        // const isChecked = e.target.checked;
        if(!checked){
            //Add checked item into checkList
            console.log("checked")
            // setChecked(true)
        } else {
            //Remove unchecked item from checkList
            console.log("not checked");
            // const filteredList = checkedList.filter((e) => e !== value);
            // setCheckedList(filteredList);
        }
        
    })
    return(
        <ul>
            <li>
                {country.name.common + " " + country.flag}
                <input 
                    type="checkbox" 
                    checked={checked} 
                    onChange={ () => {
                        handleChecked();
                        setChecked((prev)=> !prev);
                        console.log(checked)
                    }}/>

            </li>
        </ul>
    )

}

export default Country;