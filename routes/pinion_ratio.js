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

router.post("/pinion_ratio", (req, res) => {

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
  var flagpinion_ratio = processJSON("flagpinion_ratio")

  var WP = Number(req.body.WP)
  var WBP = Number(req.body.WBP)
  var WBG = Number(req.body.WBG)

  flagpinion_ratio = flagpinion_ratio + 1

  console.log({flagpinion_ratio})

  console.log({WP, WBP, WBG})

  if (metric && flagpinion_ratio <= 1) {
    WP = WP * MM
    WBP = WBP * MM
    WBG = WBG * MM
  }

  console.log({WP, WBP, WBG})
 
  var WRP = WP - ST
  var WRG = WG - ST

  console.log({WRP, WRG, WP, ST})

  //1560

  var B4 = (1 - Math.sin(Q)) / Math.cos(Q)
  var B5 = 0.5 * J * B2 / (AO * L)
  var RIP = J * Math.tan(PAP) / Math.pow( Math.abs((Math.cos(YI))), 2)
  var RIG = J * Math.tan(PAG) / Math.pow( Math.abs((Math.cos(YI))), 2)
  var AIP = A9 - C
  var AIG = B3 - C

  //1580

  var B6 = NP / Math.cos(PAP)
  var B7 = NG / Math.cos(PAG)
  var A1P = AIP + B5 * B7 / (B6 + B7)
  A1G = AIG + B5 * B6 / (B6 + B7)
  R1P = RIG - B5 * B7 / (B6 + B7)
  R1G = RIP - B5 * B6 / (B6 + B7)

  //1600

  var B8 = R1P / A1P 
  var B9 = R1G / A1G
  console.log("R1P/A1P= " + B8)
  console.log("R1G/A1G= " + B9)
  console.log("SEE GRAPH FOR MAX TOOL EDGE RAD. FACTOR K1")

  //1620
  var DQ = FNACS(R1P * Math.cos(Q) / (R1P + A1P)) - Q
  var K1P = Math.cos(Q) * (DQ - (R1P / A1P + 1) * (DQ - Math.sin(DQ) + Math.tan(Q) * (1 - Math.cos(DQ)))) / (1 - Math.sin(Q))
  var DQ1 = FNACS(R1G * Math.cos(Q) / (R1G + A1G)) - Q
  var K1G = Math.cos(Q) * (DQ1 - (R1G / A1G + 1) * (DQ1 - Math.sin(DQ1) + Math.tan(Q) * (1 - Math.cos(DQ1)))) / (1 - Math.sin(Q))

  console.log({Q, DQ, R1P, A1P})
  console.log("K1p= " + K1P)
  console.log("K1g= "+ K1G)

  //1630 
  var ROP = A1P * K1P 
  var ROG = A1G * K1G

  //1640 
  var BIP = BOP - F * Math.tan(DP)
  var BIG = BOG - F * Math.tan(DG)
  var CI1 = BOP / BIP * C
  var CI2 = BOG / BIG * C
  var CI = (CI1 + CI2) / 2

  //1660 
  var DR = (CI - B5) / (1 - Math.sin(Q))
  var RP1 = ROP + DR
  var RG1 = ROG + DR
  var RP2 = (WBP - 0.015) / B4
  var RG2 = (WBG - 0.015) / B4
  var C1 = B4 * (WLP - WBP) + 0.001 

  console.log({RP2, WBP, B4})

  C1 = B4 * (WLP - WBP) + .001
  var R3 = (0.063 * Math.pow(Math.abs(C1),0.5) + C1 + 0.002) / Math.pow(Math.abs(B4),2)
  console.log({R3, C1, B4})
  console.log({C1, B4, WLP, WBP})

  //1680 
  if(metric){
    RP2 = (WBP - 0.381) / B4
    RG2 = (WBG - 0.381) / B4
    C1 = B4 * (WLP - WBP) + 0.0254
    R3 = (0.3175 * Math.pow(Math.abs(C1), 0.5) + C1 + 0.0508) / Math.pow(Math.abs(B4), 2)
  }

  console.log({R3, C1, B4})

  console.log({RG2, WBG, B4})


  var REG, REP = null
  //1700 
  if(RP1 < RP2 && RP1 < R3){
    REP = RP1      
  }
  else if (RP2 < RP1 && RP2 < R3){
    REP = RP2
  }
  else{
    //1740 
    REP = R3
  }


  
  if (RG1 < RG2 && RG1 < R3){ //1760
    REG = RG1 //GOTO 1820
    console.log("here1")
  } 
  else if (RG2 < RG1 && RG2 < R3){ //1780
    REG = RG2
    console.log("here2")
  }
  else {
    REG = R3 //1800
    console.log("here3")
  }

  console.log({REG})
  console.log({RG1})
  console.log({RG2})
  console.log({R3})

  //1820  
  var CP = M * DP * 180 / PI * 6 
  var CG = M * DG * 180 / PI * 6
  var C2 = Math.pow(Math.abs((RC * N)), 2) + Math.pow(Math.abs((A - RC * M)), 2)
  var C3 = RC + (0.5 * WG + L * (A9 + AIG))
  var C4 = RC - (0.5 * WG + L * HT)

  //1840
  var C5 = FNACS((Math.pow(Math.abs(J), 2) - Math.pow(C3, 2) - C2) / (Math.pow(Math.abs(C2), 0.5) * C3 / 0.5))
  var C6 = FNACS((Math.pow(Math.abs(AO), 2) - Math.pow(Math.abs(C4), 2) - C2) / (Math.pow(Math.abs(C2), 0.5) * C4 /0.5))

  // 1860 
  if (C5 > PI){
    C5 = PI - C5
  } 

  // 1880 
  if(C6 > PI){
    C6 = PI - C6
  } 

  // 1900 
  var NB = 2 * PI / (C5 - C6 - PI / 180)
  var C7 = L * BOG / 0.5 + WG
  var C8 = Math.sin(YO) * C7 / 2
  var C9 = Math.sin(YO) * (P * Math.cos(YO) - C7) / 2

  var D3, D4 = null
  //1920 
  if (heel){
    D3 = 0
    D4 = 0
  }
  //1940

  else if (midface){
    D3 = F / 2
    D4 = F / 2
  }

  //1960 
  if (D3 > C8){
    C8=D3
  } 
  //1980 
  if (D4 > C9){
    C9 = D4
  } 

  //2000 
  var D5 = AO - C8
  var D6 = AO - C9
  var D7 = FNASN((A * H / D5 + D5) / (2 * RC))
  var D8 = FNASN((A * H / D6 + D6) / (2 * RC))
  var TMP = L * (BOG - C8 * S) / 0.5 + WG - B1

  //2020 
  var TMG = (P * Math.cos(D8) * D6 / AO) - (L * (BOG - C9 * S) / 0.5 + WG)
  var AMP = (AOP - C8 * S) + (Math.pow(Math.abs(Math.cos(D7)), 2)) / 4 * (Math.cos(PAP) * Math.pow(Math.abs(TMG), 2) / (D1 * D5 / AO))
  var AMG = (AOG - C9 * R) + (Math.pow(Math.abs(Math.cos(D8)), 2)) / 4 * (Math.cos(PAG) * Math.pow(Math.abs(TMG), 2) / (D2 * D6 / AO))

  console.log({AMG})

  //2040 
  var XBP = AO * R - BOP + DUO
  var XBG = AO * S - BOG + DUO
  var D9 = RC * N
  var E1 = Math.atan(D9 / (A - RC * M))

  //2060 
  var M50P = NP * Math.cos(DP) / (150 * Math.sin(PAP))
  var M50G = NG * Math.cos(DG) / (150 * Math.sin(PAG))
  var M50P = 3 * M50P
  var M50G = 3 * M50G

  //2080 
  console.log("NC/50 RATIO FOR PINION IS : " + M50P)
  console.log("INPUT RATIO ROLL GEARS?-SEENC/50 RATIO BOOK")
  console.log({WBP})

  res.render('homepage_pratio', {B8, B9, K1P, K1G, M50P});

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
  temp.variables[0]["M50P"] = M50P
  temp.variables[0]["M50G"] = M50G
  temp.variables[0]["D9"] = D9
  temp.variables[0]["WP"] = WP
  temp.variables[0]["XBP"] = XBP
  temp.variables[0]["XBG"] = XBG
  temp.variables[0]["WRP"] = WRP
  temp.variables[0]["WRG"] = WRG
  temp.variables[0]["WBG"] = WBG
  temp.variables[0]["RP2"] = RP2
  temp.variables[0]["RG2"] = RG2
  temp.variables[0]["R3"] = R3
  temp.variables[0]["RP1"] = RP1
  temp.variables[0]["RG1"] = RG1
  temp.variables[0]["REP"] = REP
  temp.variables[0]["REG"] = REG
  temp.variables[0]["CP"] = CP
  temp.variables[0]["CG"] = CG
  temp.variables[0]["NB"] = NB  
  temp.variables[0]["AMP"] = AMP
  temp.variables[0]["AMG"] = AMG
  temp.variables[0]["TMP"] = TMP
  temp.variables[0]["TMG"] = TMG
  temp.variables[0]["E1"] = E1
  temp.variables[0]["english"] = english
  temp.variables[0]["WG"] = WG
  temp.variables[0]["B2"] = B2
  temp.variables[0]["DP"] = DP
  temp.variables[0]["DG"] = DG
  temp.variables[0]["WLP"] = WLP
  temp.variables[0]["A"] = A
  temp.variables[0]["H"] = H
  temp.variables[0]["S"] = S
  temp.variables[0]["B1"] = B1
  temp.variables[0]["R"] = R
  temp.variables[0]["WBP"] = WBP
  temp.variables[0]["B4"] = B4
  temp.variables[0]["B5"] = B5
  temp.variables[0]["RIP"] = RIP
  temp.variables[0]["RIG"] = RIG
  temp.variables[0]["AIP"] = AIP
  temp.variables[0]["AIG"] = AIG
  temp.variables[0]["B6"] = B6
  temp.variables[0]["B7"] = B7
  temp.variables[0]["A1P"] = A1P
  temp.variables[0]["A1G"] = A1G
  temp.variables[0]["R1P"] = R1P
  temp.variables[0]["R1G"] = R1G
  temp.variables[0]["B8"] = B8
  temp.variables[0]["B9"] = B9
  temp.variables[0]["DQ"] = DQ
  temp.variables[0]["K1P"] = K1P
  temp.variables[0]["DQ1"] = DQ1
  temp.variables[0]["K1G"] = K1G
  temp.variables[0]["ROP"] = ROP
  temp.variables[0]["ROG"] = ROG
  temp.variables[0]["BIP"] = BIP
  temp.variables[0]["BIG"] = BIG
  temp.variables[0]["CI1"] = CI1
  temp.variables[0]["CI2"] = CI2
  temp.variables[0]["CI"] = CI
  temp.variables[0]["DR"] = DR
  temp.variables[0]["C1"] = C1
  temp.variables[0]["C2"] = C2
  temp.variables[0]["C3"] = C3
  temp.variables[0]["C4"] = C4
  temp.variables[0]["C5"] = C5
  temp.variables[0]["C6"] = C6
  temp.variables[0]["C7"] = C7
  temp.variables[0]["C8"] = C8
  temp.variables[0]["C9"] = C9
  temp.variables[0]["D3"] = D3
  temp.variables[0]["D4"] = D4
  temp.variables[0]["D5"] = D5
  temp.variables[0]["D6"] = D6
  temp.variables[0]["D7"] = D7
  temp.variables[0]["D8"] = D8












  



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
        E9 = RC / 25.4 * (E8 * L + E7 * M * RC / A) - Math.pow(Math.abs((RC * N / D / F)), 2) / 500
        B0 = 344 * (A5 + A6) / RC
        H1 = (WP + WG) / 2 / 25.4
        F2 = RC * L / 344 / 25.4
        F3 = (H1 + E9) / F2 + B0
        //:GOTO 7655
      } 
      else {
        //7650 
        E9 = RC * (E8 * L + E7 * M * RC / A) - Math.pow(Math.abs((RC * N / D / F)), 2) / 500
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






module.exports = router;