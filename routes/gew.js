
    var JG = (QFG - Math.atan((M * E4 + (Math.cos(A0) * Z / Math.sin(A0))) / N)) * 180 / PI
  D0 = D0 * 180 / PI
  JP = JP * 180 / PI

  //2585 
  var QFP = QFP * 180 / PI
  var QFG= QFG * 180 / PI
  var RAG = RAG * 180 / PI
  var MRAG = RAG + X / 60

  console.log(IG)

  //2600 
  if(machine116){
    //THEN GOTO 2662
    //2662 
    if(D0 < 0){
      JP=JP+90
      //GOTO 2666
      //2666 
      if(IG < 0){
        JG=JG+90
        //GOTO 2670
        //2670 
        var G8=(BCX+BCV)/4
        var G9=BGF/2
      }
      else {
        //2668 
        JG=JG-90
      }
    } 
    else {
      //2664 
      JP=JP-90
    }

    //2680 
    console.log("BASIC TILT ANGLE OF CUTTER SPINDLE FOR PINION IS=" + D0)
    console.log("BASIC TILT ANGLE OF CUTTER SPINDLE FOR GEAR IS=" + IG)
    console.log("SEE CUTTER SPINDLE ROTATION ANGLE TABLE AND FIND CORRESPONDING VALUES FOR AUX. & CSRA ANGLES")

    //2700 
    console.log("AUXILIARY ANGLE FOR PINION")
    //var AXP = req.body.auxiliaryAnglePinion
    console.log("INPUT NEW CUTTER SPINDLE ROTATION ANGLE FOR PINION(D0)")
    //D0 = req.body.newD0
    console.log("AUXILIARY ANGLE FOR GEAR")
    //var AXG = req.body.auxiliaryAngleGear
    console.log("INPUT NEW CUTTER SPINDLE ROTATION ANGLE FOR GEAR")
    //IG = req.body.newIG