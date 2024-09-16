let message="There is no war in Ba Sing Se"
console.log(message.length)
let countries= ['China','Japan','South Korea','Vietnam','Malaysia']
let capitals= ['Beijing','Tokyo','Seoul','Hanoï','Kuala Lumpur']
function printcountryandcapital(countriesArray, capitalsArray)
{ 
    if (countriesArray.length !== capitalsArray.length) {
        console.error('The number of countries and capitals must be the same.');
        return;
    }

    // Loop through the arrays and display the messages
    for (let i = 0; i < countriesArray.length; i++) {
        let country = countriesArray[i];
        let capital = capitalsArray[i];
        console.log(`Your country : ${country} has the capital named : ${capital}.`);
    
}}
printcountryandcapital(countries, capitals)





