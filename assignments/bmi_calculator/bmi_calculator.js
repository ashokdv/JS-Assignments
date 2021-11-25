// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here

    if(height === 0){
        return 'INVALID INPUT'
    }

    if(mass === 0){
        return 'INVALID INPUT'
    }

    return ((mass)/(height*height))
}

module.exports = BMICalculator;

