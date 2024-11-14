const express = require("express"),
      bodyParser = require('body-parser'),
      path = require('path'),
      mysql = require("mysql"),
      bcrypt = require("bcrypt")
      generateAccessToken = require("../generateAccessToken")

const router = express.Router();

var db = mysql.createPool({
  connectionLimit: 100,
  host: "127.0.0.1",
  user: "newuser",
  password: "dehAAn55?",
  database: "userDB",
  port: "3306"
})

router.post("/change_diameters", (req, res) => {

  var M50G = processJSON("M50G")
  var metric = processJSON("metric")
  var D9 = processJSON("D9")
  var E1 = processJSON("E1")
  var K2 = processJSON("K2")
  var leftHand = processJSON("leftHand")
  var machine116 = processJSON("machine116")
  var profileMismatch = processJSON("profileMismatch")
  var MM = processJSON("MM")
  var F3 = processJSON("F3")
  var CF = processJSON("CF")
  var D = processJSON("D")
  var E9 = processJSON("E9")
  var RC = processJSON("RC")
  var E8 = processJSON("E8")
  var L = processJSON("L")
  var E7 = processJSON("E7")
  var M = processJSON("M")
  var A = processJSON("A")
  var N = processJSON("N")
  var F = processJSON("F")
  var B0 = processJSON("B0")
  var A5 = processJSON("A5")
  var A6 = processJSON("A6")
  var H1 = processJSON("H1")
  var WP = processJSON("WP")
  var WG = processJSON("WG")
  var F2 = processJSON("F2")
  var CFG = processJSON("CFG")
  var DG = processJSON("DG")
  var PI = processJSON("PI")
  var UO = processJSON("UO")
  var O = processJSON("O")
  var E4 = processJSON("E4")
  var Z = processJSON("Z")
  var E6 = processJSON("E6")
  var Y = processJSON("Y")
  var XBP = processJSON("XBP")
  var RAP = processJSON("RAP")
  var U = processJSON("U")
  var I = processJSON("I")
  var T = processJSON("T")
  var XBG = processJSON("XBG")
  var X = processJSON("X")
  var CF = processJSON("CF")
  var rightHand = processJSON("rightHand")
  var machine7A = processJSON("machine7A")
  var RAG = processJSON("RAG")
  var CFP = processJSON("CFP")





  if (req.body.changeDiameters == "yes"){
    var yesChangeDiameters = true
  } else {
    var noChangeDiameters = true
    console.log("noooooo")
  }
  //2340
  if(noChangeDiameters) {
    console.log (" WAIT A FEW SECONDS COMPUTER ON THE JOB")

    temparray = bearingLength(F3, CF, D, metric, E9, RC, E8, L, E7, M , A, N, D, F, B0, A5, A6, H1, WP, WG, F2, L,  F3)
    
    D = temparray[0]
    F3 = temparray[1]
    F4 = 0

      //2400 
    var F6 = A * N
    var F7 = A * L
    var A0 = (10 * CFG - M * DG * 180 / PI * 60) / 60 * PI / 180
    console.log({CFG, M, DG})
    var F8 = Math.sin(A0) * RC + Math.cos(A0) * UO
    var F9 = (Math.cos(A0) * RC - Math.sin(A0) * UO) * N
    var G1 = A / F9 - O
    console.log({A0})
    if(A0 == 0){
      //THEN GOTO 2440
      //2440 
      console.log("hello")
      if(X==0){
        //THEN GOTO 2480
        //2480 
        var IG=0
        console.log("hello")
      } 
      else {
        //2460 
        var IG = FNASN(Math.abs(Z)) * 180 / PI
        //GOTO 2500
      }
    } 
    if(A0 !=0){
      //2420 
      console.log({A0})
      var IG = FNASN(Math.sin(A0) * N / Math.cos(Math.atan((M * E4 + (Math.cos(A0) * Z / Math.sin(A0))) / N))) * 180 / PI
      //GOTO 2500
      console.log({IG})
    }

    //2500 
    var QFG = Math.atan(1 / (Z * F8 / F9 + G1 * E4))
    var D0 = (10 * CF - E6 - A0 * 180 / PI * 60) / 60 * PI / 180
    console.log({D0, CF, E6, A0, PI})
    var JP = Math.atan((Math.cos(D0) * RC - Math.sin(D0) * UO) / F6 - O)
    var QFP = Y + JP

    //2520 
    var G2 = (Math.sin(D0) * RC + Math.cos(D0) * UO) - UO + XBP
    var DXP = A * E7 / Math.cos(RAP)
    var G3 = F4 * Math.sin(D0)
    var CVXB = G2 + DXP * Math.sin(RAP) + G3
    var CXXB = G2 - DXP * Math.sin(RAP) - G3
    var QO = Y + Math.atan(RC / F6 - O)

    //2540 
    if (metric){
      var G4 = F6 / Math.cos(JP)
      var G5 = (U * (H1 - I * F7 / MM * E8 / 2 + F4) - (T / Math.pow(Math.abs(N),2) - M) * (F7 * E6 / 3440 / MM) * Math.sin(QO)) * MM
      var G6 = Math.cos(QO - QFP) * N
      var G7 = G5 / G6
      var SPV = (G4 + G7) / MM
      var SPX = (G4 - G7) / MM
      var XBGF = F8 * E4 - F9 * G1 * Z - UO + XBG
      var SG = F9/Math.sin(QFG) / MM
      //GOTO 2580 
    }
    if(!metric) {
      //2560 
      var G4 = F6 / Math.cos(JP)
      var G5 = (U * (H1 - I * F7 * E8 / 2 + F4) - (T / Math.pow(Math.abs(N), 2) - M) * (F7 * E6 / 3440) * Math.sin(QO))
      var G6 = Math.cos(QO - QFP) * N
      var G7 = G5 / G6
      var SPV = (G4 + G7)
      var SPX = (G4 - G7)
      var XBGF = F8 * E4 - F9 * G1 * Z - UO + XBG
      var SG = F9 / Math.sin(QFG)

    }

    //2580 
    var BCV = 2 * 180 / PI * FNASN(SPV / K2)
    var BCX = 2 * 180 / PI * FNASN(SPX / K2)
    var BGF = 2 * 180 / PI * FNASN(SG / K2)
    console.log({PI, SG, K2})
    var JG = (QFG - Math.atan((M * E4 + (Math.cos(A0) * Z / Math.sin(A0))) / N)) * 180 / PI
    D0 = D0 * 180 / PI
    JP = JP * 180 / PI

    //2585 
    var QFP = QFP * 180 / PI
    var QFG= QFG * 180 / PI
    var RAG1 = RAG * 180 / PI
    var MRAG = RAG1 + X / 60

    console.log(IG)

    //2600 
    if(machine116){
      //THEN GOTO 2662
      //2662 
      if(D0 < 0) {
        JP = JP + 90
      }

      if (D0 >= 0) {
        JP = JP - 90
      }

      if (IG < 0) {
        JG = JG + 90
      }

      if( IG >= 0) {
        JG = JG - 90
      }

      G8 = (BCX + BCV) / 4
      G9 = BGF / 2
    }

    if (!machine116) {
      if(leftHand){
        BCV = 360 - BCV
        BCX = 360 - BCX
        IG = 360 - IG
        JG = 360 - JG
        if(D0 <=  0) {
          D0 = D0 + 360
        }
      }
      if (rightHand) {
        BGF = 360 - BGF
        D0 = 360 - D0
        JP = 360 - JP
        if (IG <= 0){
          IG = IG + 360
        }
      } 

      //2660 
      G8 = (BCX + BCV) / 4
      G9 = BGF / 2
      G8 = G8 + 270
      G9 = G9 + 270
      var C0 = G8 + JP
      var E0 = G9 + JG
      console.log({E0, G9, JG})
      //IF MC=7 THEN GOTO 2780
    }

    const jsonString = fs.readFileSync("./routes/temp.json");
    const temp = JSON.parse(jsonString);

    temp.variables[0]["T"] = T
    temp.variables[0]["D"] = D
    temp.variables[0]["F3"] = F3
    temp.variables[0]["CFG"] = CFG
    temp.variables[0]["CFP"] = CFP
    temp.variables[0]["CF"] = CF
    temp.variables[0]["F4"] = F4
    temp.variables[0]["F6"] = F6
    temp.variables[0]["F7"] = F7
    temp.variables[0]["A0"] = A0
    temp.variables[0]["F8"] = F8
    temp.variables[0]["F9"] = F9
    temp.variables[0]["G1"] = G1
    temp.variables[0]["F3"] = F3
    temp.variables[0]["IG"] = IG
    temp.variables[0]["D0"] = D0
    temp.variables[0]["JP"] = JP
    temp.variables[0]["G2"] = G2
    temp.variables[0]["DXP"] = DXP
    temp.variables[0]["G3"] = G3
    temp.variables[0]["CVXB"] = CVXB
    temp.variables[0]["CXXB"] = CXXB
    temp.variables[0]["QO"] = QO
    temp.variables[0]["G4"] = G4
    temp.variables[0]["G5"] = G5
    temp.variables[0]["G6"] = G6
    temp.variables[0]["G7"] = G7
    temp.variables[0]["SPV"] = SPV
    temp.variables[0]["XBGF"] = XBGF
    temp.variables[0]["SG"] = SG
    temp.variables[0]["BCV"] = BCV
    temp.variables[0]["BCX"] = BCX
    temp.variables[0]["BGF"] = BGF
    temp.variables[0]["JG"] = JG
    temp.variables[0]["QFP"] = QFP
    temp.variables[0]["QFG"] = QFG
    temp.variables[0]["RAG"] = RAG
    temp.variables[0]["MRAG"] = MRAG
    temp.variables[0]["G8"] = G8
    temp.variables[0]["G9"] = G9
    temp.variables[0]["E0"] = E0
    temp.variables[0]["yesChangeDiameters"] = yesChangeDiameters
    temp.variables[0]["noChangeDiameters"] = noChangeDiameters
    temp.variables[0]["F5"] = F5
    temp.variables[0]["ROB"] = ROB
    temp.variables[0]["RIB"] = RIB
    temp.variables[0]["SPX"] = SPX
    temp.variables[0]["C0"] = C0
    temp.variables[0]["RAG1"] = RAG1

    


    fs.writeFileSync("./routes/temp.json", JSON.stringify(temp));

    if(machine116) {

      //2680 
      console.log("BASIC TILT ANGLE OF CUTTER SPINDLE FOR PINION IS=" + D0)
      console.log("BASIC TILT ANGLE OF CUTTER SPINDLE FOR GEAR IS=" + IG)
      console.log("SEE CUTTER SPINDLE ROTATION ANGLE TABLE AND FIND CORRESPONDING VALUES FOR AUX. & CSRA ANGLES")


      console.log({D0})
      console.log({IG})



      D0arr = conversion1(-D0)
      D0arrD = D0arr[0]
      D0arrM = D0arr[1]



      console.log({D0arrM})

      IGarr = conversion1(-IG)
      IGarrD = IGarr[0]
      IGarrM = IGarr[1]
      //2700 
      console.log("AUXILIARY ANGLE FOR PINION")
      console.log("INPUT NEW CUTTER SPINDLE ROTATION ANGLE FOR PINION(D0)")
      console.log("AUXILIARY ANGLE FOR GEAR")
      console.log("INPUT NEW CUTTER SPINDLE ROTATION ANGLE FOR GEAR")

      res.render('homepage_noChangeDiameters', {D, F3, D0arrD, D0arrM, IGarrD, IGarrM});
      

    }
    
  } 
  if(yesChangeDiameters) {
    //2360 
    var F4 = F2 * (CF - B0) - E9 - H1
    var F5 = F4 + 0.5 * WP
    var ROB = RC + F5
    var RIB = RC - F5
    //GOTO 2400

    //2400 
    var F6 = A * N
    var F7 = A * L
    var A0 = (10 * CFG - M * DG * 180 / PI * 60) / 60 * PI / 180
    console.log({CFG, M, DG})
    var F8 = Math.sin(A0) * RC + Math.cos(A0) * UO
    var F9 = (Math.cos(A0) * RC - Math.sin(A0) * UO) * N
    var G1 = A / F9 - O
    console.log({A0})
    if(A0 == 0){
      //THEN GOTO 2440
      //2440 
      console.log("hello")
      if(X==0){
        //THEN GOTO 2480
        //2480 
        var IG=0
        console.log("hello")
      } 
      else {
        //2460 
        var IG = FNASN(Math.abs(Z)) * 180 / PI
        //GOTO 2500
      }
    } 
    if(A0 !=0){
      //2420 
      console.log({A0})
      var IG = FNASN(Math.sin(A0) * N / Math.cos(Math.atan((M * E4 + (Math.cos(A0) * Z / Math.sin(A0))) / N))) * 180 / PI
      //GOTO 2500
      console.log({IG})
    }

    //2500 
    var QFG = Math.atan(1 / (Z * F8 / F9 + G1 * E4))
    var D0 = (10 * CF - E6 - A0 * 180 / PI * 60) / 60 * PI / 180
    console.log({D0, CF, E6, A0, PI})
    var JP = Math.atan((Math.cos(D0) * RC - Math.sin(D0) * UO) / F6 - O)
    var QFP = Y + JP

    //2520 
    var G2 = (Math.sin(D0) * RC + Math.cos(D0) * UO) - UO + XBP
    var DXP = A * E7 / Math.cos(RAP)
    var G3 = F4 * Math.sin(D0)
    var CVXB = G2 + DXP * Math.sin(RAP) + G3
    var CXXB = G2 - DXP * Math.sin(RAP) - G3
    var QO = Y + Math.atan(RC / F6 - O)

    //2540 
    if (metric){
      var G4 = F6 / Math.cos(JP)
      var G5 = (U * (H1 - I * F7 / MM * E8 / 2 + F4) - (T / Math.pow(Math.abs(N),2) - M) * (F7 * E6 / 3440 / MM) * Math.sin(QO)) * MM
      var G6 = Math.cos(QO - QFP) * N
      var G7 = G5 / G6
      var SPV = (G4 + G7) / MM
      var SPX = (G4 - G7) / MM
      var XBGF = F8 * E4 - F9 * G1 * Z - UO + XBG
      var SG = F9/Math.sin(QFG) / MM
      //GOTO 2580 
    }
    if(!metric) {
      //2560 
      var G4 = F6 / Math.cos(JP)
      var G5 = (U * (H1 - I * F7 * E8 / 2 + F4) - (T / Math.pow(Math.abs(N), 2) - M) * (F7 * E6 / 3440) * Math.sin(QO))
      var G6 = Math.cos(QO - QFP) * N
      var G7 = G5 / G6
      var SPV = (G4 + G7)
      var SPX = (G4 - G7)
      var XBGF = F8 * E4 - F9 * G1 * Z - UO + XBG
      var SG = F9 / Math.sin(QFG)

    }

    //2580 
    var BCV = 2 * 180 / PI * FNASN(SPV / K2)
    var BCX = 2 * 180 / PI * FNASN(SPX / K2)
    var BGF = 2 * 180 / PI * FNASN(SG / K2)
    console.log({PI, SG, K2})
    var JG = (QFG - Math.atan((M * E4 + (Math.cos(A0) * Z / Math.sin(A0))) / N)) * 180 / PI
    D0 = D0 * 180 / PI
    JP = JP * 180 / PI

    //2585 
    var QFP = QFP * 180 / PI
    var QFG= QFG * 180 / PI
    var RAG1 = RAG * 180 / PI
    var MRAG = RAG1 + X / 60

    console.log(IG)

    //2600 
    if(machine116){
      //THEN GOTO 2662
      //2662 
      if(D0 < 0) {
        JP = JP + 90
      }

      if (D0 >= 0) {
        JP = JP - 90
      }

      if (IG < 0) {
        JG = JG + 90
      }

      if( IG >= 0) {
        JG = JG - 90
      }

      G8 = (BCX + BCV) / 4
      G9 = BGF / 2
    }

    if (!machine116) {
      if(leftHand){
        BCV = 360 - BCV
        BCX = 360 - BCX
        IG = 360 - IG
        JG = 360 - JG
        if(D0 <=  0) {
          D0 = D0 + 360
        }
      }
      if (rightHand) {
        BGF = 360 - BGF
        D0 = 360 - D0
        JP = 360 - JP
        if (IG <= 0){
          IG = IG + 360
        }
      } 

      //2660 
      G8 = (BCX + BCV) / 4
      G9 = BGF / 2
      G8 = G8 + 270
      G9 = G9 + 270
      var C0 = G8 + JP
      E0 = G9 + JG
      //IF MC=7 THEN GOTO 2780
    }

    const jsonString = fs.readFileSync("./routes/temp.json");
    const temp = JSON.parse(jsonString);

    temp.variables[0]["T"] = T
    temp.variables[0]["D"] = D
    temp.variables[0]["F3"] = F3
    temp.variables[0]["CFG"] = CFG
    temp.variables[0]["CFP"] = CFP
    temp.variables[0]["CF"] = CF
    temp.variables[0]["F4"] = F4
    temp.variables[0]["F6"] = F6
    temp.variables[0]["F7"] = F7
    temp.variables[0]["A0"] = A0
    temp.variables[0]["F8"] = F8
    temp.variables[0]["F9"] = F9
    temp.variables[0]["G1"] = G1
    temp.variables[0]["F3"] = F3
    temp.variables[0]["IG"] = IG
    temp.variables[0]["D0"] = D0
    temp.variables[0]["JP"] = JP
    temp.variables[0]["G2"] = G2
    temp.variables[0]["DXP"] = DXP
    temp.variables[0]["G3"] = G3
    temp.variables[0]["CVXB"] = CVXB
    temp.variables[0]["CXXB"] = CXXB
    temp.variables[0]["QO"] = QO
    temp.variables[0]["G4"] = G4
    temp.variables[0]["G5"] = G5
    temp.variables[0]["G6"] = G6
    temp.variables[0]["G7"] = G7
    temp.variables[0]["SPV"] = SPV
    temp.variables[0]["XBGF"] = XBGF
    temp.variables[0]["SG"] = SG
    temp.variables[0]["BCV"] = BCV
    temp.variables[0]["BCX"] = BCX
    temp.variables[0]["BGF"] = BGF
    temp.variables[0]["JG"] = JG
    temp.variables[0]["QFP"] = QFP
    temp.variables[0]["QFG"] = QFG
    temp.variables[0]["RAG"] = RAG
    temp.variables[0]["MRAG"] = MRAG
    temp.variables[0]["G8"] = G8
    temp.variables[0]["G9"] = G9
    temp.variables[0]["E0"] = E0
    temp.variables[0]["yesChangeDiameters"] = yesChangeDiameters
    temp.variables[0]["noChangeDiameters"] = noChangeDiameters
    temp.variables[0]["F5"] = F5
    temp.variables[0]["ROB"] = ROB
    temp.variables[0]["RIB"] = RIB
    temp.variables[0]["SPX"] = SPX
    temp.variables[0]["C0"] = C0
    temp.variables[0]["RAG1"] = RAG1

    


    fs.writeFileSync("./routes/temp.json", JSON.stringify(temp));

    if(machine116) {

      //2680 
      console.log("BASIC TILT ANGLE OF CUTTER SPINDLE FOR PINION IS=" + D0)
      console.log("BASIC TILT ANGLE OF CUTTER SPINDLE FOR GEAR IS=" + IG)
      console.log("SEE CUTTER SPINDLE ROTATION ANGLE TABLE AND FIND CORRESPONDING VALUES FOR AUX. & CSRA ANGLES")

      //2700 
      console.log("AUXILIARY ANGLE FOR PINION")
      console.log("INPUT NEW CUTTER SPINDLE ROTATION ANGLE FOR PINION(D0)")
      console.log("AUXILIARY ANGLE FOR GEAR")
      console.log("INPUT NEW CUTTER SPINDLE ROTATION ANGLE FOR GEAR")

      res.render('homepage_cutterTilt', {D0, IG});

    }

    if(machine7A){
      if(leftHand){
        QFP = G8 - QFP
        QFG = G9 + QFG
      }
      if(rightHand) {
        QFP = G8 + QFP
        QFG = G9 - QFG
      }

      res.render('homepage_continue');
    }
  }

  

  
})

function calculatingPD1(metric, english, diametralPitch, module_, PD){
  if(metric && diametralPitch) {
    return PD / 25.4
  }
  else if (metric && module_){
   return 1 / PD
  }
  else if (english && diametralPitch){
    return PD
  }
  else if (english && module_){
    return 25.4 / PD
  }

}

function determineGearType(geartype){
    if (geartype == "spiral"){
      return "spiral"
    }
    if (geartype == "zerol") {
      return "zerol"
    }
    if (geartype == "bevel") { 
      return "bevel"
    }
    if (geartype == "angular"){
      return "angular"
    }

}

function isSpiral(geartype){
  if (geartype == "spiral"){
    return true
  }
  else {
    return false
  }
}

function isZerol(geartype){
  if (geartype == "zerol"){
    return true
  }
  else {
    return false
  }
}

function isBevel(geartype){
  if (geartype == "bevel"){
    return true
  }
  else {
    return false
  }
}

function isAngular(geartype){
  if (geartype == "angular"){
    return true
  }
  else {
    return false
  }
}

function determineHandofSpiral(handospiral){
    if (handospiral == "left") {
      return true
    }
    else {
      return false
    }
}

function determineMachine(machine){
    if(machine == "116") {
      return true
    }
    else {
      return false
    }
}

function getMachineNO(machine){
  if(machine){
    return "7A"
  }
  else{
    return "116"
  }
}

function determineDPorM(diametralPitch){
    if(diametralPitch == "diametralPitch") {
      return true
    } 

    else{
      return false
    }
}

function determineUnitSystem(unit){

    if (unit == "metric"){
      return true
    }
    else if (unit == "english"){
      return false
    }

}

function determineToothMeasurement(wheremeasure){
    if(wheremeasure == "heel") {
      return true
    }
    else{
      return false
    }
}

function determineYesorNo(diffDiameters) {
  if (diffDiameters == "yes") {
    return true
  }
  else if (diffDiameters = "no") {
    return false
  }
}

function round(A2){
  return Math.trunc(A2 * 1000 + 0.5) / 1000
}

function round4(A2){
  return Math.trunc(A2 * Math.pow(10,4) + 0.5) / Math.pow(10,4)
}

function convertToMetric(x){
  if(x == 0){
    return 0
  }

  return x * 25.4
  
}

function convertToEnglish(x){
  if(x == 0){
    return 0
  }

  return x / 25.4
  
}

function FNASN(x){
  return Math.atan(x / Math.sqrt(-x * x + 1))
}

function FNACS(x){
  return (-1 * (Math.atan(x / Math.sqrt(-x * x + 1)))) + Math.PI / 2
}

//7000 REM*********FOR CONVERSION FROM Dec. deg to deg/min AFTER ROUNDING OFF MINUTES****************************************************************************
//7020
function conversion1(H2) {
  var H3 = Math.trunc(H2)
  var H4 = Math.trunc((H2 - H3) * 60 + 0.5)
  return [H3, H4]
} 

//7040 
function conversion2(H2){
  var H8 = Math.trunc(H2)
  var H9 = Math.trunc((H2 - H8) * 60 + 0.5)
  return [H8, H9]

}

//7060
function conversion3(H2) {
  var H10 = Math.trunc(H2)
  var H11 = Math.trunc((H2 - H10) * 60 + 0.5)
  return [H10, H11]
} 

//7080
function conversion4(H2) {
  var H12 = Math.trunc(H2)
  var H13 = Math.trunc((H2 - H12) * 60 + 0.5)
  return [H12, H13]
} 

//7100
function conversion5(H2) {
  var H14 = Math.trunc(H2)
  var H15 = Math.trunc((H2 - H14) * 60 + 0.5)
  return [H14, H15]
} 

function bearingLength(F3, CF, D, metric, E9, RC, E8, L, E7, M , A, N, D, F, B0, A5, A6, H1, WP, WG, F2, L,  F3) {

  var MM = 25.4
  //7500
  if (F3 < CF) {
    //THEN GOTO 7640

    //7640
    while (!(D > 1)){ 
      //7645 
      if(metric) {
        E9 = RC / 25.4 * (E8 * L + E7 * M * RC / A) - Math.pow(Math.abs(RC * N / D / F), 2) / 500
        B0 = 344 * (A5 + A6) / RC
        H1 = (WP + WG) / 2 / 25.4
        F2 = RC * L / 344 / 25.4
        F3 = (H1 + E9) / F2 + B0
        //:GOTO 7655
      } 
      else {
        //7650 
        E9 = RC * (E8 * L + E7 * M * RC / A) - Math.pow(Math.abs(RC * N / D / F), 2) / 500
        B0 = 344 * (A5 + A6) / RC
        H1 = (WP + WG) / 2
        F2 = RC * L / 344
        F3 = (H1 + E9) / F2 + B0
      }
      //7655 
      if ((Math.abs(CF-F3)) <= 0.5) {
       //THEN GOTO 7660
       break;
      }
  // 7657 NEXT D
      D = D + 0.001
    }
  
  } 
  else { 
    //7520 
    console.log({D})

    while (!(D < 0)){
      //7560 
      if(metric){
        E9 = RC / MM * (E8 * L + E7 * M * RC / A) - Math.pow(Math.abs(RC * N / D / F), 2) / 500
        B0 = 344 * (A5 + A6) / RC
        H1 = (WP + WG) / 2 / MM
        F2 = RC * L / 344 / MM
        F3 = (H1 + E9) / F2 + B0
        //:GOTO 7600
      } else {
        //7580 
        E9 = RC * (E8 * L + E7 * M * RC / A) - Math.pow(Math.abs(RC * N / D / F), 2) / 500
        B0 = 344 * (A5 + A6) / RC
        H1 = (WP + WG) / 2
        F2 = RC * L / 344
        F3 = (H1 + E9) / F2 + B0
      }
      
      //7600 
      if ((Math.abs(CF-F3)) <= 0.5) {
        //THEN GOTO 7660
        break;
      } 
     
      //7620 
      D = D - 0.001
      //:GOTO 7660 
    }
  }
  
  
  // 7660 
  return [D, F3]
  
}

function _7680(H2) {
  // 7680 REM-----------------------------------------------------------------------
  // 7700 
  if ((H2 <= 90) &&  (H2 >= 0)) {
    //THEN GOTO 7760
    // 7760 RETURN
  }
  //7720
  else if ((H2 >= 270) && (H2 <= 360)) {
    //THEN GOTO 7740
    // 7740 
    H2 = 360 - H2

  }

  return H2

}

function _7780(H2, L8){
  // 7780 REM-----------------------------------------------------------------------
  // 7800 
  if ((H2 >= 0) && (H2 <= 90)) {
    //THEN GOTO 7840
    // 7840 
    L8 = L8 + 90
    //GOTO 7880
  } 
  // 7820 
  if ((H2>=270) && (H2<=360)) {
    //THEN GOTO 7860
    // 7860 
    L8 = L8 - 90
  }
  
  return L8
  // 7880 RETURN
}

function processJSON(data){
  try {
  // Note that jsonString will be a <Buffer> since we did not specify an
  // encoding type for the file. But it'll still work because JSON.parse() will
  // use <Buffer>.toString().
    const jsonString = fs.readFileSync("./routes/temp.json");
    const temp = JSON.parse(jsonString);
    console.log(data + " " + temp.variables[0][data])
    return temp.variables[0][data]
  } catch (err) {
    console.log(err);
    return;
  }
}

function check_ratio1(pg1, pg2, pg3, pg4, ratio){
  var T = (pg1 * pg2) / (pg3 * pg4)
  console.log("THE RATIO OF PINION SELECTED IS " + T)

  //2100 
  var H0 = Math.abs(T - ratio)
  console.log({H0})
  return H0
}






module.exports = router;