const calculateTemp =() =>{
    const inputTemp = document.getElementById("degree").value;
    const tempSelected = document.getElementById("temp_type");
    const valueTemp = temp_type.options[tempSelected.selectedIndex].value;
 
    //Fahrenheit to Celsius
    const FtoC = (fahrenheit) => {
     let celsius = (((fahrenheit- 32) * 5) / 9).toFixed(2);
     return celsius;
    };

    // Celsius to Fahrenheit
    const CtoF = (celsius) => {
        let fahrenheit =((celsius * 9)/5+32).toFixed(2);
        return fahrenheit;
    };
    if (valueTemp === "celsius") {
        const result = FtoC(inputTemp);
        document.getElementById("temp").innerHTML = result + "°C";
    } else {
        const result = CtoF(inputTemp);
        document.getElementById("temp").innerHTML = result + "°F";
    }
};
