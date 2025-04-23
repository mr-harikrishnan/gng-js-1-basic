function who_can_vote(age,isCitizen){
    if(age >= 18 && isCitizen == true){
        console.log("Eligible for vote")
    }
    else{
        console.log("not eligible vote")
    }
}
who_can_vote(17,true)