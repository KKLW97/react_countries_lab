import CheckboxComponent from "./CheckboxComponent";

const Country = ({country}) => {

    // add functionality here for check box ticked

    return(
        <ul>
            <li>
                {country.name.common + " " + country.flag}
                <CheckboxComponent id="visitCheck" label="Have I visited this country?"/>
            </li>
        </ul>
    )

}

export default Country;