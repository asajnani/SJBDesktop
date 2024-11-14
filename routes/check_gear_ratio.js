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

router.post("/check_gear_ratio", (req, res) => {

  var M50G = processJSON("M50G")
  var metric = processJSON("metric")
  var D9 = processJSON("D9")
  var E1 = processJSON("E1")
  var K2 = processJSON("K2")
  var leftHand = processJSON("leftHand")
  var machine116 = processJSON("machine116")
  var profileMismatch = processJSON("profileMismatch")
  var D = processJSON("D")
  var F = processJSON("F")
  var A5 = processJSON("A5")
  var RC = processJSON("RC")
  var A6 = processJSON("A6")
  var WP = processJSON("WP")
  var BOG = processJSON("BOG")
  var PAP = processJSON("PAP")
  var PAG = processJSON("PAG")
  var D1 = processJSON("D1")
  var AOP = processJSON("AOP")
  var D2 = processJSON("D2")
  var AOG = processJSON("AOG")
  var P = processJSON("P")
  var L = processJSON("L")
  var N = processJSON("N")
  var circularThicknessFactor = processJSON("circularThicknessFactor")
  var M = processJSON("M")
  var Q = processJSON("Q")
  var O = processJSON("O")
  var DC = processJSON("DC")
  var K = processJSON("K")
  var HK = processJSON("HK")
  var HT = processJSON("HT")
  var C = processJSON("C")
  var english = processJSON("english")
  var YO = processJSON("YO")
  var J = processJSON("J")
  var YI = processJSON("YI")
  var A9 = processJSON("A9")
  var B3 = processJSON("B3")
  var WG = processJSON("WG")
  var B2 = processJSON("B2")
  var DP = processJSON("DP")
  var DG = processJSON("DG")
  var WLP = processJSON("WLP")
  var PI = processJSON("PI")
  var A = processJSON("A")
  var heel = processJSON("heel")
  var midface = processJSON("midface")
  var H = processJSON("H")
  var S = processJSON("S")
  var B1 = processJSON("B1")
  var R = processJSON("R")
  var MM = processJSON("MM")

  console.log("INPUT RATIO ROLL GEARS?-SEENC/50 RATIO BOOK")

  var H0 = Math.abs(Number(req.body.gear1) - M50G)

  console.log({H0})
  if(H0 > 0.0001){
    console.log("Wrong gear selection. SELECT THE PROPER GEAR PLEASE")
    //go sub 8340

    res.render('homepage_wrongGearRatio', {M50G}) ;
  } 
  else {
    //2125
    if(metric){
      var E2 = FNASN(D9 / 25.4 / (Math.sin(E1) * K2))
      console.log({D9})
      console.log({E1})
      console.log({K2})
      console.log({E2})
      console.log("METRIC HERE/////////////")
    } 
    if (!metric){
      //2160 
      var E2 = FNASN(D9 / (Math.sin(E1) * K2))
    }

    console.log("Cdniownc")
    //2180 
    var B = 2 * E2
    var E3 = 3 * PI / 2 + E2
    var QP = E3 + E1
    var QG = E3 - E1
    if (leftHand) {
      QP = E3 - E1
      QG = E3 + E1
    } 
    //2190 
    if(machine116){
      QP = 2 * PI - QP
      QG = 2 * PI - QG
    } 
    console.log({E3})
    console.log({QG})
    //2220 
    var G=DP*180/PI*60+DG*180/PI*60
    var I = 2 * O / N
    var T = A / RC - M
    var U = 1 - A * M / RC
    var V = 1 + T * I
    var W = T * G / V
    var X = (U * (G - I * W) - profileMismatch) / (U * I * M / V + 1)
    var Z = Math.sin(X / 60 * PI / 180)
    var E4 = Math.cos(X / 60 * PI / 180)
    var E5 = X * M / V + W
    var E6 = E5 + G * M
    var E7 = L * E5 / (3440 * Math.pow(Math.abs(N),2))
    var E8 = G * M / 3440

    console.log({G, DP, PI})

    console.log({X, U, G, I, W, M, V})

    console.log({E5, X, M, V, W})

    console.log({E7, L, E5, N})

    console.log({E8, G, M})

    //2240 
    var E9 = RC * (E8 * L + E7 * M * RC / A) - Math.pow(Math.abs(RC * N / D / F), 2) / 500
    var B0 = 344 * (A5 + A6) / RC
    var H1 = (WP + WG) / 2
    var F2 = RC * L / 344
    var F3 = (H1 + E9) / F2 + B0


    

    //2260 
    if(metric){
      E9 = RC / MM * (E8 * L + E7 * M * RC / A) - Math.pow(Math.abs(RC * N / D / F), 2) / 500
      console.log({E9, RC, E8, L, E7, M, A, N, D, F})
      B0 = 344 * (A5 + A6) / RC
      H1 = (WP + WG) / 2 / MM
      F2 = RC * L / 344 / MM
      F3 = (H1 + E9) / F2 + B0
      console.log(F3)

    }

    console.log({H1, WP, WG})
    console.log({F3, H1, E9, F2, B0})
    //2280 
    console.log(F3)
    console.log("THEORETICAL SUM OF CUTTER NUMBERS FOR THE DESIRED BEARING = " + F3)
    console.log("ACTUAL PINION FINISHING CUTTER #?")

    console.log("ACTUAL GEAR FINISHING CUTTER #?")

    res.render('homepage_finishingCutter', {F3});

  }


  const jsonString = fs.readFileSync("./routes/temp.json");
  const temp = JSON.parse(jsonString);

  temp.variables[0]["H1"] = H1
  temp.variables[0]["F2"] = F2
  temp.variables[0]["E4"] = E4
  temp.variables[0]["Z"] = Z
  temp.variables[0]["E6"] = E6
  temp.variables[0]["E2"] = E2
  temp.variables[0]["B"] = B
  temp.variables[0]["E3"] = E3
  temp.variables[0]["QP"] = QP
  temp.variables[0]["QG"] = QG
  temp.variables[0]["G"] = G
  temp.variables[0]["I"] = I
  temp.variables[0]["T"] = T
  temp.variables[0]["U"] = U
  temp.variables[0]["V"] = V
  temp.variables[0]["W"] = W
  temp.variables[0]["X"] = X
  temp.variables[0]["E5"] = E5
  temp.variables[0]["E7"] = E7
  temp.variables[0]["E8"] = E8
  temp.variables[0]["E9"] = E9
  temp.variables[0]["B0"] = B0
  temp.variables[0]["F3"] = F3
  temp.variables[0]["D9"] = D9
  temp.variables[0]["E1"] = E1




  fs.writeFileSync("./routes/temp.json", JSON.stringify(temp));
  
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