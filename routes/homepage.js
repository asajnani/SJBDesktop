const express = require("express"),
      bodyParser = require('body-parser'),
      path = require('path'),
      mysql = require("mysql"),
      bcrypt = require("bcrypt")
      generateAccessToken = require("../generateAccessToken")

const router = express.Router();

var db = mysql.createPool({
  connectionLimit: 100,
  host: "db",
  user: "newuser",
  password: "dehAAn55?",
  database: "userDB",
  port: "3306"
})

router.get("/homepage", (req, res)=> {
  res.sendFile(path.join(__dirname, '..', 'views', 'homepage.html'));
})

router.post("/reqdimension", (req, res) => {

  var UO, K2, ST, MM, A2, H0, gearRatio , PD1, DP, I = null

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
  var date = req.body.date
  var userName = req.body.userName

  var leftHand = determineHandofSpiral(req.body.handospiral)
  var rightHand = !leftHand

  console.log({rightHand})
  console.log({leftHand})

  var NP = req.body.pinionNo
  var NG = req.body.gearTeethNo
  var Q = req.body.pressureAngle
  var Y = req.body.spiralAngle
  var profileMismatch = req.body.profileMismatch
  var D = req.body.PLF

  var machine116 = determineMachine(req.body.machinetype)
  var machine7A = !machine116
  var MC = getMachineNO(machine7A)
  console.log({machine7A})
  console.log({machine116})

  var diametralPitch = determineDPorM(req.body.DPorM)
  var module_ = !diametralPitch

  console.log({diametralPitch})
  console.log({module_})

  var metric = determineUnitSystem(req.body.unit)
  var english = !metric

  console.log({english})
  console.log({metric})

  var yesChangeDiameters = determineYesorNo(req.body.diffDiameters)
  var noChangeDiameters = !yesChangeDiameters

  console.log({yesChangeDiameters})
  console.log({noChangeDiameters})


    // if (gearType = "zerol"){

    // }

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

  console.log({gearRatio})
  
  var circularThicknessFactor = 0.71 //req.body.circularThickness

  var PD = req.body.PD

  PD1 = calculatingPD1(metric, english, diametralPitch, module_, PD)

  if(module_){
    DP = MM / PD
    //820 GO SUB 8000
    if(DP < 1.25){
      I = 1
    }
  }
  else{
    DP = PD
  }


  var heel = determineToothMeasurement(req.body.wheremeasure)
  var midface = !heel

  console.log({heel})
  console.log({midface})


  var PI, L, M, N, O, SA, D1, D2, PAP, PAG, AO, P, A3, F, H0 = null

  PI = Math.PI

  Q = Q * PI / 180


  Y = Y * PI / 180

  L = Math.tan(Q)

  M = Math.sin(Y)

  N = Math.cos(Y)

  console.log({N})

  O = Math.tan(Y)

  // if (gearType == "angular"){

  // }

  SA = 90

  D1 = NP / PD1

  D2 = NG / PD1 

  PAP = Math.atan(NP/NG)

  PAG = PI / 2 - PAP

  AO = D2 / (2 * Math.sin(PAG))

  P = PI / PD1

  A3 = 10 / PD1

  F = AO * 0.3

  console.log({F})
  console.log({A3})


  if(A3 <= F){
    F = A3
  }

  F = round(F)

  console.log({F})
  console.log("Would you like to change the face width?")
  
  if (metric) {
    AO = AO / MM
    if (NP < 12){
    // go to 8380

    } 

  }


  console.log({AO})
  console.log("Would you like to change the outer cone distance in inches?")
  
  var RC = req.body.cutterRadius

  var DC = 2 * RC

  var K = F * 100 / AO

  var HK = 1.7 / PD1

  var HT = 1.888 / PD1

  var AOG = 0.46 / PD1 + 0.39 / (PD1 * Math.pow((NG / NP), 2))

  var AOP = HK - AOG

  var BOP = HT - AOP

  var BOG = HT - AOG

  var C = HT - HK
  console.log({AO})

  if (metric) {
    AO = convertToMetric(AO)
    DC = 2 * RC * MM
    K = F * 100 / AO
    HK = 1.7/PD1
    HT = 1.888/PD1
    AOG = 0.46 / PD1 + 0.39 / (PD1 * Math.pow((NG / NP), 2))
    AOP = HK - AOG
    BOP = HT - AOP 
    BOG = HT - AOG 
    C = HT - HK
  }
  console.log({AO})

  console.log("Would you like to change the pivot distance?")
  console.log("If yes, input the new pivot distance in inches?")

  var DUO = req.body.pivotDistance

  if(DUO == null){
    DUO = 0
  }

  UO = UO + DUO

  var B1 = 0
  var B2 = 0

  console.log({B1})

  if (metric){
    RC = convertToMetric(RC)
    DUO = convertToMetric(DUO)
    UO = convertToMetric(UO)
    ST = convertToMetric(ST)
    B1 = convertToMetric(B1)
    B2 = convertToMetric(B2)
  }

  console.log({B1})

  DP = Math.atan(BOP / AO)

  var DG = Math.atan(BOG / AO)

  var FAP = PAP + DG

  var FAG = PAG + DP

  var RAP = PAP - DP

  var RAG = PAG - DG

  var R = Math.tan(DP)

  var S = Math.tan(DG)

  var DO1 = D1 + 2 * AOP * Math.cos(PAP)

  var DO2 = D2 + 2 * AOG * Math.cos(PAG)

  var XOP = D2 / 2 - AOP * Math.sin(PAP)

  var XOG = D1 / 2 - AOG * Math.sin(PAG)

  var TOG = P / 2 - (AOP-AOG) * L / N - circularThicknessFactor / PD1 

  console.log({TOG})

  var TOP1 = P - TOG

  console.log({TOP1})

  //1200

  var A = AO - F / 2

  var J = AO - F

  var H = 2 * RC * M - A

  var YO = FNASN((A * H / AO + AO) / (2 * RC)) 

  console.log({A})
  console.log({H})
  console.log({AO})
  console.log({RC})

  var YI = FNASN((A * H / J + J) / (2 * RC))

  var A5 = BOP - F * R / 2

  var A6 = BOG - F * S / 2

  console.log({TOG})
  console.log({B1})
  console.log({Q})
  console.log({YO})
  console.log({A})
  console.log({AO})

  var TP = (TOP1 - B2 / (Math.cos(Q) * Math.cos(YO))) * A / AO //could be A0

  var TG = (TOG - B1 / (Math.cos(Q) * Math.cos(YO))) * A / AO

  console.log({TG})


  // 1220

  var A7 = F * PD1

  console.log("FP is " + A7)

  var A8 = (0.3865 * O - 0.0171 * Math.pow(O,3)) * A7

  var A9 = A5 - F * R / 2

  var B3 = A6 - F * S / 2

  var WG1 = N * A * TOP1

  console.log({WG1})

  //1400
  if (metric){

    console.log("Calculated gear fin. p.w. and Wg = " + (WG1/25.4))
    console.log("WHAT GEAR FIN. P.W.= ")
    var WG = req.body.WG
    WG = WG * MM
    var WOP = P * Math.cos(YO) - 2 * L * (BOP + BOG) - WG
    var WIP = J * P * Math.cos(YI) / AO - 2 * L * (A9 + B3) - WG
    if(WOP < WIP){
      //1440
      console.log("CALC. PINTION FIN. LIMIT P.W.   " + "Wlp (WOP)=  " + WOP / MM)
      var WLP=WOP
    }
    else{
      console.log("CALC. PINION FIN. LIMIT P.W.   " + "Wlp (WIP) = " + WIP/MM)
      var WLP=WIP
    }

    //1460

    console.log("WHAT PINION. FIN. P.W.  ")

    var WP = req.body.WP
    WP = WP * MM
    var WRP = WP - ST
    var WRG = WG - ST
    if (WOP > WIP){ //1480
    //1520
      WMP = WOP
    }
    else { 
      WMP = WIP //1500
    }

    

    //1540
    console.log(" MAX. PINION SLOT WIDTH= " + WMP / MM)
    var WBP = WMP / 2 + 0.0762
    console.log("SEE CUTTER SPECS TABLE-THEO. BLD. PT.FOR PIN.CUTTER = " + WBP / MM)
    console.log("INPUT PINION BLD.PT.  " )
    WBP = req.body.newWBP 
    var WBG = req.body.newWBG
    console.log({WBG})
    WBP = WBP * MM
    WBG = WBG * MM


    console.log({WBG})

  }
  else if (english) { //1240
    console.log("CALC. GEAR FIN POINT WIDTH.  " + "Wg=  " + WG1)
    console.log("WHAT GEAR FIN POINT WIDTH= ")
    var WG = req.body.WG
    var WOP = P * Math.cos(YO) - 2 * L * (BOP + BOG) - WG
    var WIP = J * P * Math.cos(YI) / AO - 2 * L * (A9 + B3) - WG
    if(WOP < WIP){
      //1280
      console.log("CALC. PINION FIN. LIMIT P.W.    " + "Wlp=" + WOP)
      var WLP=WOP
    }
    else{
      console.log("CALC. PINION FIN. LIMIT P.W.   " + "Wlp=" + WIP)
      var WLP = WIP //GOTO 1300
    }

    //1300
    console.log("WHAT PINION FIN. P.W.")

    var WRP=WP-ST
    var WRG=WG-ST
    if (WOP > WIP){
      //1360
      var WMP = WOP
    }
    else{
      var WMP = WIP // go to 1380
    }

    //1380
    console.log("MAX. PINION SLOT WIDTH=" + WMP)
    var WBP = WMP / 2 + 0.003
    console.log("SEE CUTTER SPECS TABLE-THEO. BLD. PT.FOR PIN.CUTTER =  " + WBP)
    console.log("INPUT PINION BLD. PT.=  ")
    WBP = req.body.newWBP
    console.log("INPUT GEAR BLD.PT.=  ")
    var WBG = req.body.newWBG
    //GOTO 1560
  }

  //1560

  var B4 = (1 - Math.sin(Q)) / Math.cos(Q)
  var B5 = 0.5 * J * B2 / (AO * L)
  var RIP = J * Math.tan(PAP) / Math.pow( (Math.cos(YI)), 2)
  var RIG = J * Math.tan(PAG) / Math.pow( (Math.cos(YI)), 2)
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
  var R3 = (0.063 * Math.pow(C1,0.5) + C1 + 0.002) / Math.pow(B4,2)

  //1680 
  if(metric){
    RP2 = (WBP - 0.381) / B4
    RG2 = (WBG - 0.381) / B4
    C1 = B4 * (WLP - WBP) + 0.0254
    R3 = (0.3175 * Math.pow(C1, 0.5) + C1 + 0.0508) / Math.pow(B4, 2)
  }

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
  } 
  else if (RG2 < RG1 && RG2 < R3){ //1780
    REG = RG2
  }
  else {
    REG = R3 //1800
  }

  console.log({REG})
  console.log({RG1})
  console.log({RG2})
  console.log({R3})

  //1820  
  var CP = M * DP * 180 / PI * 6 
  var CG = M * DG * 180 / PI * 6
  var C2 = Math.pow((RC * N), 2) + Math.pow((A - RC * M), 2)
  var C3 = RC + (0.5 * WG + L * (A9 + AIG))
  var C4 = RC - (0.5 * WG + L * HT)

  //1840
  var C5 = FNACS((Math.pow(J, 2) - Math.pow(C3, 2) - C2) / (Math.pow(C2, 0.5) * C3 / 0.5))
  var C6 = FNACS((Math.pow(AO, 2) - Math.pow(C4, 2) - C2) / (Math.pow(C2, 0.5) * C4 /0.5))

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
  var AMP = (AOP - C8 * S) + (Math.pow(Math.cos(D7)), 2) / 4 * (Math.cos(PAP) * Math.pow(TMG, 2) / (D1 * D5 / AO))
  var AMG = (AOG - C9 * R) + (Math.pow(Math.cos(D8)), 2) / 4 * (Math.cos(PAG) * Math.pow(TMG, 2) / (D2 * D6 / AO))

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
  var pinion1 = req.body.pinion1
  var pinion2 = req.body.pinion2
  var pinion3 = req.body.pinion3
  var pinion4 = req.body.pinion4
  var T = (pinion1 * pinion2) / (pinion3 * pinion4)
  console.log("THE RATIO OF PINION SELECTED IS " + T)

  console.log({M50P})
  console.log({T})

  //2100 
  H0 = Math.abs(T - M50P)
  if(H0 > 0.0001){
    console.log("Wrong gear selection. SELECT THE PROPER GEAR PLEASE")
    //go sub 8340
  } 

  //2120 
  //GOSUB 8300
  //8300 
  console.log("Do you want to correct an error? ") 

  //2125 
  console.log("NC/50 RATIO FOR GEAR IS " + M50G)
  console.log("INPUT RATIO ROLL GEARS?-SEE NC/50 RATIO BOOK")
  var gear1 = req.body.gear1
  var gear2 = req.body.gear2
  var gear3 = req.body.gear3
  var gear4 = req.body.gear4
  var W = (gear1 * gear2) / (gear3 * gear4)

  console.log("THE RATIO OF GEARS SELECTED IS " + W)

  //2130 
  H0 = Math.abs((W) - M50G)
  if (H0 > 0.0001){
    console.log("Wrong gear selection. SELECT THE PROPER GEAR PLEASE")
  } 

  console.log("Do you want to correct an error?") 

  //2140 
  if(metric){
    var E2 = FNASN(D9 / 25.4 / (Math.sin(E1) * K2))
  } 
  else {
    //2160 
    var E2 = FNASN(D9 / (Math.sin(E1) * K2))
  }

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

  //2220 
  var G = DP * 180 / PI * 60 + DG * 180 / PI * 60
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
  var E7 = L * E5 / (3440 * Math.pow(N,2))
  var E8 = G * M / 3440

  //2240 
  var E9 = RC * (E8 * L + E7 * M * RC / A) - Math.pow((RC * N / D / F), 2) / 500
  var B0 = 344 * (A5 + A6) / RC
  var H1 = (WP + WG) / 2
  var F2 = RC * L / 344
  var F3 = (H1 + E9) / F2 + B0

  //2260 
  if(metric){
    E9 = RC / MM * (E8 * L + E7 * M * RC / A) - Math.pow((RC * N / D / F), 2) / 500
    B0 = 344 * (A5 + A6) / RC
    H1 = (WP + WG) / 2 / MM
    F2 = RC * L / 344 / MM
    F3 = (H1 + E9) / F2 + B0
    console.log(F3)

  }

  //2280 
  console.log(F3)
  console.log("THEORETICAL SUM OF CUTTER NUMBERS FOR THE DESIRED BEARING = " + F3)
  console.log("ACTUAL PINION FINISHING CUTTER #?")

  var CFP = req.body.pinionFinishingCutter 

  console.log("ACTUAL GEAR FINISHING CUTTER #?")

  var CFG = req.body.gearFinishingCutter 

  //2300 

  var CF = CFP + CFG
  if(Math.abs(CF - F3) <= 3){
    //THEN GOTO 2380
    //2380 
    var F4=0

  } 
  else {
    //2320 
    console.log("THIS IS HAPPEING \n\n\n\n\n")
    console.log({CF})
    console.log({F3})
    console.log(" DO YOU WANT TO USE DIFFERENT OB/IB CUTTER POINT DIAMETERS SINCE ACTUAL CUTTER NUMBERS DO NOT MATCH THEORETICAL CUTTER NUMBER - Y/N?")

    //2340
    if(noChangeDiameters) {
      console.log (" WAIT A FEW SECONDS COMPUTER ON THE JOB")

      temparray = bearingLength(F3, CF, D, metric, E9, RC, E8, L, E7, M , A, N, D, F, B0, A5, A6, H1, WP, WG, F2, L,  F3)
      
      console.log("BEARING LENGTH FACTOR DERIVED FOR ACTUAL CUTTER NUMBERS= " + temparray[0])
      console.log("APPROXIMATE SUM OF CUTTER NUMBERS= " + temparray[1])
      //GOTO 2380
      F4 = 0
    } 
    else if (yesChangeDiameters) {
      //2360 
      var F4 = F2 * (CF - B0) - E9 - H1
      var F5 = F4 + 0.5 * WP
      var ROB = RC + F5
      var RIB = RC - F5
      //GOTO 2400
    }

  }

  //2400 
  var F6 = A * N
  var F7 = A * L
  var A0 = (10 * CFG - M * DG * 180 / PI * 60) / 60 * PI / 180
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
  else {
    //2420 
    console.log({A0})
    var IG = FNASN(Math.sin(A0) * N / Math.cos(Math.atan((M * E4 + (Math.cos(A0) * Z / Math.sin(A0))) / N))) * 180 / PI
    //GOTO 2500
    console.log({IG})
  }

  //2500 
  var QFG = Math.atan(1 / (Z * F8 / F9 + G1 * E4))
  var D0 = (10 * CF - E6 - A0 * 180 / PI * 60) / 60 * PI / 180
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
    var G5 = (U * (H1 - I * F7 / MM * E8 / 2 + F4) - (T / Math.pow(N,2) - M) * (F7 * E6 / 3440 / MM) * Math.sin(QO)) * MM
    var G6 = Math.cos(QO - QFP) * N
    var G7 = G5 / G6
    var SPV = (G4 + G7) / MM
    var SPX = (G4 - G7) / MM
    var XBGF = F8 * E4 - F9 * G1 * Z - UO + XBG
    var SG = F9/Math.sin(QFG) / MM
    //GOTO 2580 
  }
  else {
    //2560 
    var G4 = F6 / Math.cos(JP)
    var G5 = (U * (H1 - I * F7 * E8 / 2 + F4) - (T / Math.pow(N, 2) - M) * (F7 * E6 / 3440) * Math.sin(QO))
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
    var AXP = req.body.auxiliaryAnglePinion
    console.log("INPUT NEW CUTTER SPINDLE ROTATION ANGLE FOR PINION(D0)")
    D0 = req.body.newD0
    console.log("AUXILIARY ANGLE FOR GEAR")
    var AXG = req.body.auxiliaryAngleGear
    console.log("INPUT NEW CUTTER SPINDLE ROTATION ANGLE FOR GEAR")
    IG = req.body.newIG

    //2720 
    if(rightHand){
      D0 = 360 - D0
      C0 = (-1 * G8) - JP + AXP
      E0 = 180 - G9 + JG + AXG
      QFP = 90 - G8 - QFP 
      QFG = 90 - G9 + QFG
      //GOTO 2760
      //2760 REM -----------------------------------------------------------------------
    }
    else if (leftHand){
      //2740 
      IG = 360 - IG
      C0 = (-1 * G8) + AXP + JP
      E0 = 180 - G9 + AXG - JG
      QFP = 90 - G8 + QFP
      QFG = 90 - G9 - QFG
      //GOTO 2820
    }


  } 
  else {
    //2620 
    if(leftHand) {
      BCV=360-BCV
      BCX=360-BCX
      IG=360-IG
      JG=360-JG
      if(D0<=0){
        D0=D0+360
        //GOTO 2660
      } 
    }
      else {
        //2640 
        BGF=360-BGF
        D0=360-D0
        JP=360-JP
        if(IG<=0) {
          IG=IG+360
        } 
      }
      
      //2660 
      var G8=(BCX+BCV)/4
      var G9=BGF/2
      G8=G8+270
      G9=G9+270
      var C0=G8+JP
      var E0=G9+JG
      //THEN GOTO 2780
      //2780 
      if (leftHand) {
        QFP = G8 - QFP
        QFG = G9 + QFG
        //GOTO 2820
      }
      else if (rightHand) {
        //2800 
        QFP = G8 + QFP 
        QFG = G9 - QFG
      }
  }

  //2820 
  DP = DP * 180 / PI
  DG = DG * 180 / PI
  RAP = RAP * 180 / PI
  FAP = FAP * 180 / PI
  FAG = FAG * 180 / PI
  PAP = PAP * 180 / PI
  PAG = PAG * 180 / PI
  if(D0>=360){
    D0 = D0 - 360
  } 

  //2840 
  Q = Q * 180 / PI
  QO1 = Q - CFP * 10 / 60
  QI1 = Q + CFP * 10 / 60
  QO2 = Q - CFG * 10 / 60
  QI2 = Q + CFG * 10 / 60
  Y = Y * 180 / PI
  YO = YO * 180 / PI
  YI = YI * 180 / PI
  B = B * 180 / PI
  QP = QP * 180 / PI
  QG = QG * 180 / PI

  if(QG >= 360){
    QG = QG - 360
  } 

  //2860 
  if(IG >=360){
    IG = IG - 360
  } 
  //2880 
  if(XBP < 0) {
    var H ="AD"
    //GOTO 2920
  }
  else {
    //2900 
    var H = "WD"
  }

  //2920 
  if (XBG < 0) {
    var I = "AD"
    //GOTO 2960
  } 
  else {
    //2940
    var I = "WD"
  }
  console.log({WBP})
  //2960 
  if(metric) {
    RC = RC / MM
    DC = DC / MM
    WG1 = WG1 / MM
    WP = WP / MM
    WG = WG / MM
    WRP = WRP / MM
    WRG = WRG / MM
    WMP = WMP / MM
    WBP = WBP / MM
    WBG = WBG / MM
    ST = ST / MM
    RP2 = RP2 / MM
    RG2 = RG2 / MM
    R3 = R3 / MM
    RP1 = RP1 / MM
    RG1 = RG1 / MM
    REP = REP / MM
    REG = REG / MM 
    DUO = DUO / MM
  }

  console.log({WBP})
  console.log({WBG})

  //3020 
  A8 = round(A8)

  //3040 
  F = round(F)

  //3060
  AO = round(AO)

  //3080 
  A = round(A)

  //3100 
  D1 = round(D1)

  //3120 
  D2 = round(D2)

  //3140 
  P = round(P)

  //3160 
  HK = round(HK)

  //3180
  HT = round(HT)

  //3200 
  C = round(C)

  // 3220
  AOP = round(AOP)

  // 3240
  AOG = round(AOG)

  // 3260
  BOP = round(BOP)

  // 3280
  BOG = round(BOG)

  // 3300
  DO1 = round(DO1)
  
  // 3320 
  DO2 = round(DO2)

  // 3340
  XOP = round(XOP)

  // 3360
  XOG = round(XOG)

  // 3380
  TOP1 = round(TOP1)

  // 3400
  TOG = round(TOG)

  // 3420
  WG1 = round(WG1)

  // 3440
  WP = round(WP)

  // 3460
  WG = round(WG)

  // 3480
  WMP = round(WMP)

  // 3500
  RC = round(RC)

  // 3520
  DC = round(DC)

  // 3540
  RP1 = round(RP1)

  // 3560
  RG1 = round(RG1)

  // 3580
  RP2 = round(RP2)
  // 3600

  RG2 = round(RG2)

  // 3620
  R3 = round(R3)

  // 3640
  REP = round(REP)

  // 3660
  REG = round(REG)

  // 3680
  CP = Math.trunc(round(CP))

  // 3700
  CG = Math.trunc(round(CG))

  // 3720
  TP = round(TP)

  // 3740
  TG = round(TG)

  // 3760
  NB = Math.trunc(round(NB))

  // 3780
  XBP = round(XBP)

  // 3800
  XBG = round(XBG)

  // 3820
  DXP = round(DXP)

  //3840
  M50P = round4(M50P)

  //3860 
  M50G = round4(M50G)

  //3880 
  if(CVXB < 0) {
    var J = "AD"
    //GOTO 3920
  } 
  else {
    //3900
    var J = "WD"
  }

  //3920 
  if (CXXB < 0) {
    var K= "AD"
    //:GOTO 3960
  } 
  else {
    //3940 
    var K = "WD"
  }

  //3960 
  if (XBGF < 0) {
    var L = "AD"
    //GOTO 4500
  } 

  else {
    //3980 
    var L = "WD"
    //GOTO 4500
  }

  //4500 
  CVXB = round(CVXB)

  CXXB = round(CXXB)

  XBGF = round(XBGF)

  //4520 
  AMP = round(AMP)

  AMG = round(AMG)

  TMP = round(TMP)

  TMG = round(TMG)

  //4540 
  if (QFP >= 360) {
    QFP = QFP - 360
  } 

  //4560 
  if (QFG >= 360) { 
    QFG = QFG - 360
  } 

  //4580 
  console.log("PRESS ANY KEY TO CONTINUE\n\n")

  //4600  if (INKEY$="" THEN GOTO 4600

  //4620 
  console.log("MEMBER        PINION        GEAR")
  console.log("PINION        GEAR")
  console.log(" BEVEL GEAR DIMENSIONS")
  
  //4640 LOCATE 5,,,,,
  //4660 
  if (metric) {
    console.log("ALL DIMENSIONS IN METRIC EXCEPT CUTTER DIAMETERS")
  } 
  else if (english) {
    //4680
    console.log("ALL DIMENSIONS IN INCHES")
  }

  //4700
  console.log("NO. OF TEETH...= " + NP + "        " + NG)
  console.log("PITCH APEX TO CROWN = " + XOP + "        " + XOG)

  //4720 
  if (module_) {
    var G = "Module"
  } 

  //4740
  if (diametralPitch) {
    var G = "Diametral Pitch"
  } 

  //4760 
  console.log(G + " =        " + PD + "        FACE ANG.JN TO P.A. =        " + XOP)

  //4780 
  console.log("FACE WIDTH..... = " + F)
  console.log("MEAN CIRCULAR THICK = " + TP + "        " + TG)

  //4800 
  console.log({Q})
  var arr = conversion1(Q)
  console.log("PRESSURE ANGLE. = " + arr[0] + " Degrees " + arr[1] + " Minutes ")
  console.log("OUT . NORMAL TOPLAND. = " + TOP1 + "        "  + TOG)

  //4820 
  arr = conversion1(SA)
  console.log("SHAFT ANGLE.... = " + arr[0] + " Degrees " + arr[1] + " Minutes ")
  console.log("MEAN NORMAL TOPLAND = ")
  //4840
  console.log("TRANS. CONT.RAT =         INNER NORML TOPLAND=")
  
  //4860 
  arr = conversion1(PAP)
  var arr2 = conversion2(PAG)
  console.log("FACE CONT. RAT. =         PITCH ANGLE........= " + arr[0] + " Degrees " + arr[1] + " Minutes ")
  console.log("Pitch angle (gear)" + arr2[0] + " Degress " + arr2[1] + " Minutes ")

  //4880 
  arr = conversion1(FAP)

  arr2 = conversion2(FAG)
  console.log("MOD.F.CONT. RAT = ")
  console.log("FACE ANGLE OF BLANK = " + arr[0] + " Degrees " + arr[1] + " Minutes ")
  console.log("FACE ANGLE OF BLANK (gear) " + arr2[0] + " Degrees " + arr2[1] + " Minutes ")

  //4900 
  console.log("OUT. CONE DIST. = " + AO)
  console.log("IN.FACE ANG OF BLNK=")

  //4920 
  arr = conversion1(PAP)
  arr2 = conversion2(PAG)
  console.log("MEAN CONE DIST.= " + A) 
  console.log("ROOT ANGLE........ = " + arr[0] + " Degrees " + arr[1] + " Minutes")
  console.log("ROOT ANGLE........ (gear) = " + arr2[0] + " Degrees " + arr2[1] + " Minutes ")

  //4940 
  arr = conversion1(DP)
  arr2 = conversion2(DG)
  console.log("PITCH DIAMETER = " + D1 + "        " + D2)
  console.log("DEDENDUM ANGLE..... (pinion) =" + arr[0] + " Degrees " + arr[1] + " Minutes ")
  console.log("DEDENDUM ANGLE..... (gear) =" + arr2[0] + " Degrees " + arr2[1] + " Minutes ")

  //4960 
  arr = conversion1(YO)
  console.log("CIRCULAR PITCH = " + P)
  console.log("OUTER SPIRAL ANGLE =" + arr[0] + " Degrees " + arr[1] + "M")

  //5000 

  arr = conversion1(YI)
  console.log("WHOLE DEPTH....= " + HT)
  console.log("INNER SPIRAL ANGLE = " + arr[0] + "D" + arr[1] + "M")

  //5020 
  console.log("CLEARANCE......= " + C)
  console.log("HAND OF SPIRAL..... = " + P + "      " + R)


  //5040 
  console.log("ADDENDUM....... = " + AOP + "      " + AOG)
  console.log("DRIVING MEMBER.....= PIN")

  //5060 
  console.log("DEDENDUM....... = " + BOP + "     " + BOG) 
  console.log("DIRECTION OF ROTATN= REV")
  //5080 
  console.log("OUTSIDE DIAMETR = " + DO1 + "    " + DO2)
  console.log("OUTER NORMAL B/LASH=MIN " + B1 + "MAX " + B2)

  //5100 
  console.log("FACE ANG JN DIA = ") 
  console.log("DEPTH. TOOTH TAPER =" + "GIVEN")
  
  //5110 

  console.log("PRESS ANY KEY TO CONTINUE\n")

  //5115 

  //5120 
  console.log("THEO.CUTTER RAD = " + A)
  console.log("GEO.FACT.STRENGTH-J=")

  //5140
  console.log("CUTTER RADIUS..= " + RC)
  console.log("STRENGTH FACTOR-Q..=")
  
  //5160 
  console.log("CAL.GEAR FIN.PW = " + WG1)
  console.log("EDGE RAD.USED IN STR")
  
  //5180 
  console.log("GEAR FIN. PW...=" + WG)
  console.log("CUTTER RAD.FACT.-KX=")

  //5200 
  console.log("ROUGHING P.W...=" + WRP + "     " + WRG)
  console.log("FACTOR.............=")
  
  //5220 
  console.log("OUTER SLOT WDTH=" + WMP)
  console.log("STRENGTH BAL.DESD..=")

  //5240 
  console.log("MEAN SLOT WIDTH=")
  console.log("STRENGTH BAL.OBTND.=")

  //5260 
  console.log("IN.SLOT WIDTH..=")
  console.log("GEO.FACT.DURBLTY-I")
  
  //5280 
  console.log({WBP})
  console.log({WBG})
  console.log("FIN.CUT.BLD.PT.=" + WBP + "     " + WBG)
  console.log("DURABILITY FACTOR-Z=")

  //5300 
  console.log("STOCK ALLOWANCE=" + ST)
  console.log("GEO.FACT.-SCORING-G=")
  
  //5320
  console.log("MAX.RAD.-BLADES=" + RP2 + "      " + RG2)
  console.log("SCORING FACTOR-X...=")

  //5340
  console.log("MAX.RAD.-MUTLN.=" + R3 + "       " + R3)
  console.log("ROOT LINE F.W......=") 
  //5360 
  console.log("MAX.RAD.-INTER.=" + RP1 + "     " + RG1)
  console.log("PROFIL SLIDING FACT=")

  //5380
  console.log("CUTTER EDGE RAD=" + REP + "     " + REG)
  console.log("RAT.OF INV/OUT.CONE=")

  //5400
  console.log("CALC.CUTTER #..=" + CP + "      " + CG)
  console.log("RATIO-INV/MEAN CONE=")
  
  //5420 
  console.log("MAX.NO.OF BLDS.=" + NB)

  //5460 
  console.log( "PRESS ANY KEY TO CONTINUE\n")
  //5480 IF INKEY$="" THEN GOTO 5480
  
  //5500 
  console.log(O + "BEVEL GEAR SUMMARY")
  console.log("GEAR CUTTER SPECIFICATIONS          ROUGH          FINISH")
  
  //5520 
  console.log("CUTTER DIAMETER..........     " + DC + "       " + DC)
  arr = conversion1(QO1)
  arr2 = conversion2(QO2)
  console.log("OUTSIDE BLADE ANGLE......     " + arr[0] + "D" + arr[1] + "M        " + arr2[0] + "D" + arr2[1] + "M")

  arr = conversion1(QI1)
  arr2 = conversion2(QI2)

  //5540 
  console.log( "INSIDE BLADE ANGLE......."  + arr[0] + "D" + arr[1] + "M" + arr2[0] + "D" + arr2[1] + "M")

  arr = conversion1(Q)
  console.log( "PRESSURE ANGLE..........." + arr[0] + "D" + arr[1] + "M" + arr[0] + "D" + arr[1] + "M")
  console.log( "CUTTER NUMBER............" + CFG + "       " + CFG)

  //5560 
  console.log("BLADE LETTER.............")
  console.log("POINT WIDTH.............." + WRG + "      " + WG)
  console.log( "BLADE EDGE RADIUS........" + REG + "       " + REG)
  console.log("       GEAR SETTINGS        NO." + MC + "  GENERATOR")
  
  //5580 

  arr = conversion1(RAG)
  arr2 = conversion2(MRAG)
  console.log( "MACHINE ROOT ANGLE......." + arr[0] + "D" + arr[1] + "M     " + arr2[0] + "D" + arr2[1] + "M")

  //5600 
  console.log( "M/C CENTER TO BACK......." + " MD+0.00" + " MD+0.00")
  console.log("SLIDING BASE............." + XBG + "       " + XBGF)
  console.log( "BLANK OFFSET............." + " 0.00" + " 0.00")
  
  //5620 
  arr = conversion1(B)
  console.log({B})
  arr2 = conversion2(BGF)
  console.log({BGF})
  console.log( "ECCENTRIC ANGLE.........." + arr[0] + "D" + arr[1] + "M" + arr2[0] + "D" + arr2[1] + "M")

  arr = conversion1(QG)
  arr2 = conversion2(QFG)
  console.log( "CRADLE ANGLE............." + arr[0] + "D" + arr[1] + "M" + arr2[0] + "D" + arr2[1] + "M")
  
  //5640 

  arr = conversion1(E0)
  console.log( "SWIVEL ANGLE............." + " 0 D 0 M" + arr[0] + "D" + arr[1] + "M")

  arr = conversion1(IG)
  console.log( "TILT ANGLE..............." + " 0D 0 M" + arr[0] + "D" + arr[1] + "M")

  
  //5660 
  console.log( "CRADLE TEST ROLL........." + " 20 D 0 M" + " 20 D 0 M")
  console.log("WORK TEST ROLL...........")
  console.log( "DECIMAL RATIO............" + M50G + "       " + M50G) 
  
  //5680 
  if(midface) {
    var D$ = "Middle of face"
  } 
  else if (heel) {
    var D$ = "Heel"
  }
  
  //5700 IF D$="H" THEN D$="HEEL"
  
  //5720 
  console.log( "N/C 50 RATIO GEARS........")
  console.log("GEAR TOOTH SIZES AT" + D$) 
  console.log( "NORMAL CHORDAL ADDENDUM.." + AMG)
  
  //5740 
  console.log( "PRESS ANY KEY TO CONTINUE\n")

  //5760 IF INKEY$=""THEN GOTO 5760
  
  //5780 
  console.log( "NORMAL CHORDAL THICKNESS." + TMG)


  // 8320 REM------------------------------------------------------------------------
  // 8340 LOCATE 12,7:console.log( "WRONG GEAR SELECTION":RETURN
  // 8360 REM-----------------------------------------------------------------------
  // 8380 DIM H(6,7)

  // 8400 FOR I=1 TO 6:READ H(I,1),H(I,2),H(I,3),H(I,4),H(I,5),H(I,6),H(I,7)
  // 8420 NEXT I
  // 8440 REM------------------------------------------------------------------------
  // 8460 I=NP-5:HK1=H(I,1):HT1=H(I,2):AOG1=H(I,3)
  // 8480 console.log( "OUT CONE DIST IN INCH= ";AO:INPUT "CUTTER RADIUS IN INCH ";RC:DC=2*R
  // C:K=F*100/AO:HK=HK1/PD1:HT=HT1/PD1:AOG=AOG1/PD1:AOP=HK-AOG:BOP=HT-AOP:BOG=HT-AOG
  // :C=HT-HK
  // 8500 IF B$="M" THEN AO=AO*MM:DC=2*RC*MM:K=F*100/AO:HK=HK1/PD1:HT=HT1/PD1:AOG=AOG
  // 1/PD1:AOP=HK-AOG:BOP=HT-AOP:BOG=HT-AOG:C=HT-HK
  // 8520 GOTO 1040
  // 9000 DATA .02,.03,.018,.026,.016,.022,.014,.018,.012,.016,.01,.013,8.000001E-03,
  // .011,.007,8.999999E-03,.006,8.000001E-03,.005,.007,.004,.006,.003,.005,.002,.004
  // 9020 DATA 1.5,1.666,.215,.911,.803,0,0,1.56,1.733,.27,.957,.818,.757,0,1.61,1.78
  // 8,.325,.975,.837,.777,.777,1.65,1.832,.38,.997,.86,.828,.828,1.68,1.865,.435,1.0
  // 23,.888,.884,.883,1.695,1.882,.490,1.53,.948,.946,.945

  









   // res.sendFile(path.join(__dirname, '..', 'views', 'homepage.html'));
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
        E9 = RC / 25.4 * (E8 * L + E7 * M * RC / A) - Math.pow((RC * N / D / F), 2) / 500
        B0 = 344 * (A5 + A6) / RC
        H1 = (WP + WG) / 2 / 25.4
        F2 = RC * L / 344 / 25.4
        F3 = (H1 + E9) / F2 + B0
        //:GOTO 7655
      } 
      else {
        //7650 
        E9 = RC * (E8 * L + E7 * M * RC / A) - Math.pow((RC * N / D / F), 2) / 500
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
        E9 = RC / MM * (E8 * L + E7 * M * RC / A) - Math.pow((RC * N / D / F), 2) / 500
        B0 = 344 * (A5 + A6) / RC
        H1 = (WP + WG) / 2 / MM
        F2 = RC * L / 344 / MM
        F3 = (H1 + E9) / F2 + B0
        //:GOTO 7600
      } else {
        //7580 
        E9 = RC * (E8 * L + E7 * M * RC / A) - Math.pow((RC * N / D / F), 2) / 500
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






module.exports = router;
