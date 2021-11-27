function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here

    // Drive 
    // true False True
    
    // No drive
    // hasDrivingLiscence - False

    // Tired - True - No drive
    // Sober - False - No drive
    // Tired - False , Sober - True - Drive


    // Input - false, false, true
    // Output - "You cannot drive"
    
    // Input - true, false, true
    // Output - "You can drive"
    
    // Input - true, true, false
    // Output - "You shouldn't drive"


    if(hasDrivingLiscence === false){
        return 'You cannot drive'
    }
    else if(isTired === true){
        return "You shouldn't drive"
    }
    else if(isSober===false){
        return "You shouldn't drive"
    }
    else{
        return 'You can drive'
    }


}

module.exports = CanDrive;
