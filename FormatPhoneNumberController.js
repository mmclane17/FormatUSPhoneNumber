({

     handleTelephone : function(component, event, helper) {

        var number = component.get("v.clientContactNumber");
        var newPhoneNo;

        if(number !== null) {
            //If Phone number has proper number of digits
            if(number.length === 10  && number[0] !== "(" ) {
                newPhoneNo = "(" + number[0] + number[1] + number[2] + ")" + number[3] + number[4] + number[5] + "-" + number[6] + number[7] + number[8] + number[9];
                component.set("{!v.clientContactNumber}", newPhoneNo );
            }

            else if(number.length == 11 & number[0] == "(" && number[4] != ")") {
                newPhoneNo = number[0] + number[1] + number[2] + number[3] + ")" + number[4] + number[5] + number[6]  + "-" + number[7] + number[8] + number[9] + number[10];
                component.set("{!v.clientContactNumber}", newPhoneNo );
            }
                else if(number.length == 12 && number[0] == "(" && number[4] == ")"  && number[8] != "-") {
                    newPhoneNo = number;
                    newPhoneNo = number[0] + number[1] + number[2] + number[3] + number[4] + number[5] + number[6] + number[7] + "-" + number[8] + number[9] + number[10] + number[11];
                    component.set("{!v.clientContactNumber}", newPhoneNo );
                }

            //If the phone number has improper digits
                    else if(number.length < 10) {
                        newPhoneNo = number;
                        component.set("{!v.clientContactNumber}", newPhoneNo );
                    }
        }

    }
})