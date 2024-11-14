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

router.post("/if_metric", (req, res) => {

  var F = processJSON("F")
  var AO = processJSON("AO")
  var PD1 = processJSON("PD1")
  var NG = processJSON("NG")
  var metric = processJSON("metric")
  var NP = processJSON("NP")
  var MM = processJSON("MM")
  var UO = processJSON("UO")
  var RC = processJSON("RC")
  var DUO = processJSON("DUO")
  var ST = processJSON("ST")
  var BOP = processJSON("BOP")
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
  var i = processJSON("i")
  var flag = processJSON("flag")
  var A1 = processJSON("A1")
  var flag_newPivotDistance = processJSON("flag_newPivotDistance")


//RED FLAG WHY IS B1 AND B2 0

  if(flag_newPivotDistance >= 1){
    C = Number(req.body.newPivotDistance)
    console.log("New pivot distance" + C)
  }

  console.log({flag})

  flag = flag + 1

  console.log({flag})


  let data = [
  [0.02, 0.03],
  [.018,.026],
  [.016,.022],
  [.014,.018],
  [.012,.016],
  [.01,.013],
  [8.000001E-03, .011],
  [.007,8.999999E-03],
  [.006,8.000001E-03],
  [.005,.007],
  [.004,.006],
  [.003,.005],
  [.002,.004]

  ];

  console.log(i)

  var B1 = data[i-1][0]
  var B2 = data[i-1][1]

  console.log({B1})

  console.log({RC})

  if (metric && flag <= 1){

    console.log("THIS HAPPENED?")
    RC = convertToMetric(RC)
    DUO = convertToMetric(DUO)
    UO = convertToMetric(UO)
    ST = convertToMetric(ST)
    B1 = convertToMetric(B1)
    B2 = convertToMetric(B2)
  }

  console.log({B1})
  console.log({B2})
  console.log({ST})


  DP = Math.atan(BOP / AO)

  console.log({BOG})
  console.log({AO})

  var DG = Math.atan(BOG / AO)

  var FAP = PAP + DG

  var FAG = PAG + DP

  var RAP = PAP - DP

  var RAG = PAG - DG

  console.log({RAG, PAG, DG})

  var R = Math.tan(DP)

  var S = Math.tan(DG)

  console.log({DG})

  console.log("Hello its S " + S)

  var DO1 = D1 + 2 * AOP * Math.cos(PAP)

  var DO2 = D2 + 2 * AOG * Math.cos(PAG)

  var XOP = D2 / 2 - AOP * Math.sin(PAP)

  var XOG = D1 / 2 - AOG * Math.sin(PAG)

  var TOG = P / 2 - (AOP-AOG) * L / N - A1 / PD1

  console.log({TOG, P, AOP, AOG, L, N, A1, PD1})

  var TOP = P - TOG

  console.log({P, TOG})

  console.log({TOP})

  //1200

  console.log({A})
  var A = AO - F / 2
  console.log({A})

  console.log({AO, F})

  var J = AO - F

  var H = 2 * RC * M - A

  console.log({RC, M, A})

  var YO = FNASN((A * H / AO + AO) / (2 * RC)) 

  console.log({YO, A, H, AO, RC})

  console.log({A})
  console.log({H})
  console.log({AO})
  console.log({RC})

  var YI = FNASN((A * H / J + J) / (2 * RC))

  var A5 = BOP - F * R / 2

  var A6 = BOG - F * S / 2



  var TP = (TOP - B2 / (Math.cos(Q) * Math.cos(YO))) * (A / AO) //could be A0

  console.log({TP, TOP, B2, Q, YO, A, AO})

  var TG = (TOG - B1 / (Math.cos(Q) * Math.cos(YO))) * A / AO

  console.log({TG})


  // 1220

  var A7 = F * PD1

  console.log("FP is " + A7)

  var A8 = (0.3865 * O - 0.0171 * Math.pow(Math.abs(O),3)) * A7

  var A9 = A5 - F * R / 2

  var B3 = A6 - F * S / 2

  console.log({F})
  console.log({S})
  console.log({B3})

  var WG1 = N * A * TOP / AO - 2 * L * A6

  console.log({N, A, TOP, AO, L, A6})



  console.log("this is wg1: " + WG1)
  console.log({flag})

  const jsonString = fs.readFileSync("./routes/temp.json");
  const temp = JSON.parse(jsonString);

  temp.variables[0]["F"] = F
  temp.variables[0]["AO"] = AO
  temp.variables[0]["PD1"] = PD1
  temp.variables[0]["NG"] = NG
  temp.variables[0]["metric"] = metric
  temp.variables[0]["NP"] = NP
  temp.variables[0]["MM"] = MM
  temp.variables[0]["UO"] = UO
  temp.variables[0]["RC"] = RC
  temp.variables[0]["DUO"] = DUO
  temp.variables[0]["ST"] = ST
  temp.variables[0]["BOP"] = BOP
  temp.variables[0]["BOG"] = BOG
  temp.variables[0]["PAP"] = PAP
  temp.variables[0]["PAG"] = PAG
  temp.variables[0]["D1"] = D1
  temp.variables[0]["AOP"] = AOP
  temp.variables[0]["D2"] = D2
  temp.variables[0]["AOG"] = AOG
  temp.variables[0]["P"] = P
  temp.variables[0]["L"] = L
  temp.variables[0]["N"] = N
  temp.variables[0]["circularThicknessFactor"] = circularThicknessFactor
  temp.variables[0]["M"] = M
  temp.variables[0]["Q"] = Q
  temp.variables[0]["O"] = O
  temp.variables[0]["DC"] = DC
  temp.variables[0]["K"] = K
  temp.variables[0]["HK"] = HK
  temp.variables[0]["HT"] = HT
  temp.variables[0]["C"] = C
  temp.variables[0]["YO"] = YO
  temp.variables[0]["J"] = J
  temp.variables[0]["YI"] = YI
  temp.variables[0]["A9"] = A9
  temp.variables[0]["B3"] = B3
  temp.variables[0]["A"] = A
  temp.variables[0]["B1"] = B1
  temp.variables[0]["B2"] = B2
  temp.variables[0]["DG"] = DG
  temp.variables[0]["H"] = H
  temp.variables[0]["S"] = S
  temp.variables[0]["R"] = R
  temp.variables[0]["A5"] = A5
  temp.variables[0]["A6"] = A6
  temp.variables[0]["RAP"] = RAP
  temp.variables[0]["WG1"] = WG1
  temp.variables[0]["A8"] = A8
  temp.variables[0]["DO1"] = DO1
  temp.variables[0]["DO2"] = DO2
  temp.variables[0]["XOP"] = XOP
  temp.variables[0]["XOG"] = XOG
  temp.variables[0]["TOP"] = TOP
  temp.variables[0]["TOG"] = TOG
  temp.variables[0]["TP"] = TP
  temp.variables[0]["TG"] = TG
  temp.variables[0]["FAP"] = FAP
  temp.variables[0]["FAG"] = FAG
  temp.variables[0]["DP"] = DP
  temp.variables[0]["RAG"] = RAG
  temp.variables[0]["A7"] = A7
  temp.variables[0]["english"] = english
  temp.variables[0]["i"] = i
  temp.variables[0]["flag"] = flag


  fs.writeFileSync("./routes/temp.json", JSON.stringify(temp));

  console.log({WG1})
  var WG1metric = WG1/25.4
  console.log({WG1metric})

  if (metric && flag <= 1){
    console.log("Calculated gear fin. p.w. and Wg = " + (WG1/25.4))
    console.log("WHAT GEAR FIN. P.W.= ")
    res.render('homepage_ifmetric', {WG1metric, A7});


  }
  else if (english) { //1240
    console.log("CALC. GEAR FIN POINT WIDTH.  " + "Wg=  " + WG1)
    console.log("WHAT GEAR FIN POINT WIDTH= ")
    res.render('homepage_ifenglish', {WG1, A7});
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
  return Math.atan(x / Math.sqrt((-1 * (x * x)) + 1))
}

function FNACS(x){
  return (-1 * (Math.atan(x / Math.sqrt((-1 * (x * x)) + 1)))) + Math.PI / 2
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
    console.log(temp.variables[0][data])
    return temp.variables[0][data]
  } catch (err) {
    console.log(err);
    return;
  }
}






module.exports = router;