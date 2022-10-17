const x = 4.0; 
    try {
      x = 3.5;  //trying to change the value of a constant
    } catch(err) {
        //err will be a javascript type error
      console.error("inner block: " + err);
    }