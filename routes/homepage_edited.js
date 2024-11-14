const express = require("express"),
      bodyParser = require('body-parser'),
      path = require('path'),
      mysql = require("mysql"),
      bcrypt = require("bcrypt")
      generateAccessToken = require("../generateAccessToken")
      fs = require('fs')

const router = express.Router();

var db = mysql.createPool({
  connectionLimit: 100,
  host: "127.0.0.1",
  user: "newuser",
  password: "dehAAn55?",
  database: "userDB",
  port: "3306"
})

router.get("/homepage_edited", (req, res)=> {
  res.sendFile(path.join(__dirname, '..', 'views', 'homepage_edited.html'));
})

router.post("/reqdimension_edited", (req, res) => {

  if(req.body.back){
    
    var firstback = true
    const jsonString = fs.readFileSync("./routes/temp.json");
    const temp = JSON.parse(jsonString);

    temp.variables[0]["firstback"] = firstback
    fs.writeFileSync("./routes/temp.json", JSON.stringify(temp));

    res.render('homepage_2');

  }

  var UO, K2, ST, MM, A2, H0, gearRatio , PD1, DP, I = null

  var outerconeflag = 0

  var gearType = determineGearType(req.body.geartype)

  var spiral = isSpiral(gearType)
  var zerol = isZerol(gearType)
  var bevel = isBevel(gearType)
  var angular = isAngular(gearType)

  console.log({spiral})
  console.log({zerol})
  console.log({bevel})
  console.log({angular})

  var sumNo = req.body.sumNo
  console.log({sumNo})
  var date = req.body.date
  console.log({date})
  var userName = req.body.userName
  console.log({userName})

  var leftHand = determineHandofSpiral(req.body.handospiral)
  var rightHand = !leftHand

  console.log({rightHand})
  console.log({leftHand})

  var NP = Number(req.body.pinionNo)
  console.log({NP})
  var NG = Number(req.body.gearTeethNo)
  console.log({NG})
  var Q = Number(req.body.pressureAngle)
  console.log({Q})
  var Y = Number(req.body.spiralAngle)
  console.log({Y})
  var profileMismatch = Number(req.body.profileMismatch)
  console.log({profileMismatch})
  var D = Number(req.body.PLF)
  console.log({D})

  var machine116 = determineMachine(req.body.machinetype)
  var machine7A = !machine116
  var MC = getMachineNO(machine7A)
  console.log({machine7A})
  console.log({machine116})

  MM = 25.4
  ST = 0.01

  if (machine116){
    UO = 0
    K2 = 8.75
  }
  else {
    UO = 6.5
    K2 = 5
  }

  A2 = NP / NG

  gearRatio = round(A2)

  A1 = CTFCalc(NP, A2)

  A1 = round(A1)

  console.log({NP, A2, A1})

  console.log({gearRatio})

  let newData = {
    "variables": [
      {"spiral": spiral,
      "zerol": zerol,
      "bevel": bevel,
      "angular": angular,
      "sumNo": sumNo,
      "date": date,
      "userName": userName,
      "rightHand": rightHand,
      "leftHand": leftHand,
      "NP": NP,
      "NG": NG,
      "Q": Q,
      "Y": Y,
      "profileMismatch": profileMismatch,
      "D": D,
      "machine7A": machine7A,
      "machine116": machine116,
      "gearRatio": gearRatio,
      "MC": MC,
      "outerconeflag": outerconeflag,
      "gearType": gearType,
      "MM": MM,
      "ST": ST,
      "UO": UO,
      "K2": K2,
      "A2": A2,
      "flagpivot": 0,
      "flagpinion_ratio": 0,
      "flag": 0,
      "flag_machine116": 0,
      "flag_newF": 0,
      "flag_newPivotDistance": 0,
      "A1": A1
      }
    ]
  }

  fs.writeFile('./routes/temp.json', JSON.stringify(newData), err => {
        if (err) console.log("Error writing file:", err);
      
  });

  res.render('homepage_2');
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

function jsonReader(filePath, cb) {
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      return cb && cb(err);
    }
    try {
      const object = JSON.parse(fileData);
      return cb && cb(null, object);
    } catch (err) {
      return cb && cb(err);
    }
  });
}

function CTFCalc(NP, A2){
  if(NP == 12){
    A12 = .28226989
    B12 = -.76249442
    C12 = 1.3887928
    D12 = -8.5232434
    E12 = 21.977786
    F12 = -18.451624
    CTF12 = A12 + B12 * A2 + C12 * (Math.pow(A2,2)) + D12 * (Math.pow(A2,3)) + E12 * (Math.pow(A2,4)) + F12 * (Math.pow(A2,5))
    A1 = CTF12
  } else if(NP == 13){
    A13 = .27883747
    B13 = -.063772464
    C13 = -6.3808277
    D13 = 31.950293
    E13 = -80.781391 
    F13 = 101.8885
    G13 = -49.646168
    CTF13 = A13 + B13 * A2 + C13 * (Math.pow(A2,2)) + D13 * (Math.pow(A2,3)) + E13 * (Math.pow(A2,4)) + F13 * (Math.pow(A2,5)) + G13 * (Math.pow(A2,6))
    A1 = CTF13
  } else if(NP == 14){
    A14 = .30675335
    B14 = -2.4455759
    C14 = -.683104
    D14 = 3.8581352
    E14 = .26851389
    F14 = -4.5324318
    G14 = .12908583
    H14 = 2.3858978
    CTF14 = (A14 + C14 * (Math.pow(A2,.5)) + E14 * A2 + G14 * (Math.pow(A2,1.5))) / (1 + B14 * (Math.pow(A2,.5)) + D14 * A2 + F14 * (Math.pow(A2,1.5)) + H14 * (Math.pow(A2,2)))
    A1=CTF14
  } else if(NP == 15){
    A15 = .29601162
    B15 = .07500852
    C15 = -8.8170281
    D15 = 52.503779
    E15 = -165.01898
    F15 = 281.31726
    G15 = -238.67376
    H15 = 62.197163
    I15 = 35.216156
    J15 = -19.021767
    CTF15 = A15 + (B15 * A2) + (C15 * (Math.pow(A2,2))) + (D15 * (Math.pow(A2,3))) + (E15 * (Math.pow(A2,4))) + (F15 * (Math.pow(A2,5))) + (G15 * (Math.pow(A2,6))) + (H15 * (Math.pow(A2,7))) + (I15 * (Math.pow(A2,8))) + (J15 * (Math.pow(A2,9))) 
    A1 = CTF15
    console.log({A15, B15, C15, D15, E15, F15, G15, G15, I15, J15, CTF15, A1, A2})
  } else if (NP == 16) {
    A16 = .29741377
    B16 = .04609813
    C16 = -7.4225108
    D16 = 43.120887
    E16 = -142.27781
    F16 = 273.09866
    G16 = -295.78944
    H16 = 167.86343
    I16 = -38.867738
    CTF16 = A16 + B16 * A2 + C16 * (Math.pow(A2,2)) + D16 * (Math.pow(A2,3)) + E16 * (Math.pow(A2,4)) + F16 * (Math.pow(A2,5)) + G16 * (Math.pow(A2,6)) + H16 * (Math.pow(A2,7)) + I16 * (Math.pow(A2,8))
    A1 = CTF16
  } else if (NP == 17) {
    A17 = .30302538
    B17 = .19952935
    C17 = -9.8886862
    D17 = 57.149861
    E17 = -180.92855
    F17 = 331.331
    G17 = -345.24999
    H17 = 190.20868
    I17 = -43.061928
    CTF17 = A17 + B17 * A2 + C17 * (Math.pow(A2,2)) + D17 * (Math.pow(A2,3)) + E17 * (Math.pow(A2,4)) + F17 * (Math.pow(A2,5)) + G17 * (Math.pow(A2,6)) + H17 * (Math.pow(A2,7)) + I17 * (Math.pow(A2,8))
    A1 = CTF17
  } else if (NP == 20){
    A20 = .29509076
    B20 = .33090057
    C20 = -9.3304321
    D20 = 46.178891
    E20 = -128.11554
    F20 = 211.55292
    G20 = -203.31893
    H20 = 104.97961
    I20 = -22.515483
    CTF20 = A20 + B20 * A2 + C20 * (Math.pow(A2,2)) + D20 * (Math.pow(A2,3)) + E20 * (Math.pow(A2,4)) + F20 * (Math.pow(A2,5)) + G20 * (Math.pow(A2,6)) + H20 * (Math.pow(A2,7)) + I20 * (Math.pow(A2,8))
    A1 = CTF20
  }
  return A1;
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






module.exports = router;