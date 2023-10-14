function renderDate(){
    let checkInDate = document.getElementById('checkInDate');
    let checkOutDate = document.getElementById('checkOutDate');

    let selectedCheckInDate = checkInDate.value;
    console.log(selectedCheckInDate);
    let checkInDay = new Date(selectedCheckInDate).getDate();
    let checkIMonth = new Date(selectedCheckInDate).getMonth();
    let checkInYear = new Date(selectedCheckInDate).getFullYear();

    console.log(checkInDay, checkIMonth, checkInYear);

    let selectedCheckOutDate = checkOutDate.value;
    console.log(selectedCheckOutDate);
    let checkOutDay = new Date(selectedCheckOutDate).getDate();
    let checkOutMonth = new Date(selectedCheckOutDate).getMonth();
    let checkOutYear = new Date(selectedCheckOutDate).getFullYear();

    console.log(checkOutDay, checkOutMonth, checkOutYear);


    if(checkOutYear>checkInYear){
        console.log("Valid Dates");
    }else if(checkOutYear==checkInYear){
        if(checkOutMonth>checkIMonth){
            console.log("Valid Dates")
        }else if(checkOutMonth==checkIMonth){
            if(checkOutDay>checkInDay){
                console.log("Valid Dates");
            }else if(checkOutDay==checkInDay){
                alert("Check-Out Day cannot be the same as Check-In Day!");
                checkOutDate.value = "";
            }
            else{
                alert("Check-Out Day cannot be before Check-In Day!");
                checkOutDate.value = "";
            }
        }else{
            alert("Check-Out Day cannot be before Check-In Day!");
            checkOutDate.value = "";
        }
    } else{
        alert("Check-Out Day cannot be before Check-In Day!");
        checkOutDate.value = "";
    }  
}