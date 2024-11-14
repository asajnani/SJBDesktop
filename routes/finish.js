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

router.post("/finish", (req, res) => {

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
  var JP = processJSON("JP")
  var JG = processJSON("JG")
  var QFP = processJSON("QFP")
  var QFG = processJSON("QFG")
  var DP = processJSON("DP")
  var FAP = processJSON("FAP")
  var FAG = processJSON("FAG")
  var PAP = processJSON("PAP")
  var PAG = processJSON("PAG")
  var Q = processJSON("Q")
  var CFP = processJSON("CFP")
  var YO = processJSON("YO")
  var YI = processJSON("YI")
  var B = processJSON("B")
  var QP = processJSON("QP")
  var QG = processJSON("QG")
  var WBP = processJSON("WBP")
  var DC = processJSON("DC")
  var WG1 = processJSON("WG1")
  var WRP = processJSON("WRP")
  var WRG = processJSON("WRG")
  var WMP = processJSON("WMP")
  var WBG = processJSON("WBG")
  var ST = processJSON("ST")
  var RP2 = processJSON("RP2")
  var RG2 = processJSON("RG2")
  var R3 = processJSON("R3")
  var RP1 = processJSON("RP1")
  var RG1 = processJSON("RG1")
  var REP = processJSON("REP")
  var REG = processJSON("REG")
  var DUO = processJSON("DUO")
  var A8 = processJSON("A8")
  var AO = processJSON("AO")
  var DUO = processJSON("DUO")
  var D1 = processJSON("D1")
  var D2 = processJSON("D2")
  var P = processJSON("P")
  var HK = processJSON("HK")
  var HT = processJSON("HT")
  var C = processJSON("C")
  var AOP = processJSON("AOP")
  var AOG = processJSON("AOG")
  var BOP = processJSON("BOP")
  var BOG = processJSON("BOG")
  var DO1 = processJSON("DO1")
  var DO2 = processJSON("DO2")
  var XOP = processJSON("XOP")
  var XOG = processJSON("XOG")
  var TOP = processJSON("TOP")
  var TOG = processJSON("TOG")
  var CP = processJSON("CP")
  var CG = processJSON("CG")
  var TP = processJSON("TP")
  var TG = processJSON("TG")
  var NB = processJSON("NB")
  var DXP = processJSON("DXP")
  var M50P = processJSON("M50P")
  var CVXB = processJSON("CVXB")
  var CXXB = processJSON("CXXB")
  var XBGF = processJSON("XBGF")
  var AMP = processJSON("AMP")
  var AMG = processJSON("AMG")
  var TMP = processJSON("TMP")
  var TMG = processJSON("TMG")
  var NP = processJSON("NP")
  var NG = processJSON("NG")
  var module_ = processJSON("module_")
  var diametralPitch = processJSON("diametralPitch")
  var PD = processJSON("PD")
  var SA = processJSON("SA")
  var R = processJSON("R")
  var B1 = processJSON("B1")
  var B2 = processJSON("B2")
  var R = processJSON("R")
  var MC = processJSON("MC")
  var RAG = processJSON("RAG")
  var MRAG = processJSON("MRAG")
  var BGF = processJSON("BGF")
  var midface = processJSON("midface")
  var G8 = processJSON("G8")
  var D0 = processJSON("D0")
  var IG  = processJSON("IG")
  var E0 = processJSON("E0")
  var RAG1 = processJSON("RAG1")
  var BCV = processJSON("BCV")
  var BCX = processJSON("BCX")
  var C0 = processJSON("C0")
  var D0 = processJSON("D0")
  var toothMeasurementAt = processJSON("toothMeasurementAt")
  var Q1 = processJSON("Q1")
  

  console.log({WBP})

  
  console.log({QFG})

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



  console.log({Q, Y, YO, YI, B, QP, QG})
  //2840 
  Q = Q * 180 / PI
  var QO1 = Q - CFP * 10 / 60
  var QI1 = Q + CFP * 10 / 60
  var QO2 = Q - CFG * 10 / 60
  var QI2 = Q + CFG * 10 / 60
  
  //Y = Y * 180 / PI
  YO = YO * 180 / PI
  YI = YI * 180 / PI
  B = B * 180 / PI
  QP = QP * 180 / PI
  QG = QG * 180 / PI

  console.log({Q, QO1, QI1, QO2, QI2, Y, YO, YI, B, QP, QG})

  
  if(QG >= 360){
    QG = QG - 360
  } 

  //2860 
  if(IG >=360){
    IG = IG - 360
  } 
  console.log({XBP})
  //2880 
  if(XBP <= 0) {
    var H ="AD"
    //GOTO 2920
  }
  else {
    //2900 
    var H = "WD"
  }

  //2920 
  if (XBG <= 0) {
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

  console.log({RC, DC, WG1, WP, WG, WRP, WRG, WMP, WBP, WBG, ST, RP2, RG2, R3, RP1, RG1, REP, REG, DUO})

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
  TOP = round(TOP)

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

  console.log({TP})
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

  RAP = round(RAP)

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
    console.log({QFG})
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
  console.log({TP})
  console.log("FACE WIDTH..... = " + F)
  console.log("MEAN CIRCULAR THICK = " + TP + "        " + TG)

  //4800 
  console.log({Q})
  var arr = conversion1(Q)
  var Qarr1 = arr[0]
  var Qarr2 = arr[1]
  console.log("PRESSURE ANGLE. = " + arr[0] + " Degrees " + arr[1] + " Minutes ")
  console.log("OUT . NORMAL TOPLAND. = " + TOP + "        "  + TOG)

  //4820 
  arr = conversion1(SA)
  var SA1 = arr[0]
  var SA2 = arr[1]
  console.log("SHAFT ANGLE.... = " + arr[0] + " Degrees " + arr[1] + " Minutes ")
  console.log("MEAN NORMAL TOPLAND = ")
  //4840
  console.log("TRANS. CONT.RAT =         INNER NORML TOPLAND=")
  
  //4860 
  arr = conversion1(PAP)
  var PAParr1 = arr[0]
  var PAParr2 = arr[1]
  var arr2 = conversion2(PAG)
  var PAGarr1 = arr2[0]
  var PAGarr2 = arr2[1]
  console.log("FACE CONT. RAT. =         PITCH ANGLE........= " + arr[0] + " Degrees " + arr[1] + " Minutes ")
  console.log("Pitch angle (gear)" + arr2[0] + " Degress " + arr2[1] + " Minutes ")

  //4880 
  arr = conversion1(FAP)

  arr2 = conversion2(FAG)
  console.log({FAP})
  var faceAngleofBlankPinionD = arr[0]
  var faceAngleofBlankPinionM = arr[1]
  var faceAngleofBlankGearD = arr2[0]
  var faceAngleofBlankGearM = arr2[1]
  console.log("MOD.F.CONT. RAT = ")
  console.log("FACE ANGLE OF BLANK = " + arr[0] + " Degrees " + arr[1] + " Minutes ")
  console.log("FACE ANGLE OF BLANK (gear) " + arr2[0] + " Degrees " + arr2[1] + " Minutes ")

  //4900 
  console.log("OUT. CONE DIST. = " + AO)
  console.log("IN.FACE ANG OF BLNK=")

  //4920 

  console.log("this is ROOT ANGLE:" + PAP)
  console.log({RAG})
  arr = conversion1(RAP)
  arr2 = conversion2(RAG1)

  var rootAnglePinionD = arr[0]
  var rootAnglePinionM = arr[1]
  var rootAngleGearD = arr2[0]
  var rootAngleGearM = arr2[1]
  console.log("MEAN CONE DIST.= " + A) 
  console.log("ROOT ANGLE........ = " + arr[0] + " Degrees " + arr[1] + " Minutes")
  console.log("ROOT ANGLE........ (gear) = " + arr2[0] + " Degrees " + arr2[1] + " Minutes ")

  //4940 
  arr = conversion1(DP)
  arr2 = conversion2(DG)
  var dedendumAnglePinionD = arr[0]
  var dedendumAnglePinionM = arr[1]
  var dedendumAngleGearD = arr2[0]
  var dedendumAngleGearM = arr2[1]
  console.log("PITCH DIAMETER = " + D1 + "        " + D2)
  console.log("DEDENDUM ANGLE..... (pinion) =" + arr[0] + " Degrees " + arr[1] + " Minutes ")
  console.log("DEDENDUM ANGLE..... (gear) =" + arr2[0] + " Degrees " + arr2[1] + " Minutes ")

  //4960 
  arr = conversion1(YO)
  var outerSpiralAngleGearD = arr[0]
  var outerSpiralAngleGearM = arr[1]
  console.log("CIRCULAR PITCH = " + P)
  console.log("OUTER SPIRAL ANGLE =" + arr[0] + " Degrees " + arr[1] + "M")

  //5000 

  console.log({Y})
  arr = conversion1(Y)
  var meanSpiralAngleGearD = arr[0]
  var meanSpiralAngleGearM = arr[1]
  console.log("WORKING DEPTH..=" + HK)
  console.log("MEAN SPIRAL ANGLE..=" + meanSpiralAngleGearD + "D" + meanSpiralAngleGearM + "M")


  arr = conversion1(YI)
  var innerSpiralAngleGearD = arr[0]
  var innerSpiralAngleGearM = arr[1]
  console.log("WHOLE DEPTH....= " + HT)
  console.log("INNER SPIRAL ANGLE = " + arr[0] + "D" + arr[1] + "M")

  //5020 
  if(leftHand){
    var handOfSpiralPinion = "LH"
    var handOfSpiralGear = "RH"
  }else {
    var handOfSpiralPinion = "RH"
    var handOfSpiralGear = "LH"
  }
  console.log("CLEARANCE......= " + C)
  console.log("HAND OF SPIRAL..... = " + handOfSpiralPinion + "      " + handOfSpiralGear)


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
  var outsideBladeAngleRoughD = arr[0]
  var outsideBladeAngleRoughM = arr[1]
  var outsideBladeAngleFinishD = arr2[0]
  var outsideBladeAngleFinishM = arr2[1]
  console.log("OUTSIDE BLADE ANGLE......     " + arr[0] + "D" + arr[1] + "M        " + arr2[0] + "D" + arr2[1] + "M")

  arr = conversion1(QI1)
  arr2 = conversion2(QI2)

  //5540 
  var insideBladeAngleRoughD = arr[0]
  var insideBladeAngleRoughM = arr[1]
  var insideBladeAngleFinishD = arr2[0]
  var insideBladeAngleFinishM = arr2[1]
  console.log( "INSIDE BLADE ANGLE......."  + arr[0] + "D" + arr[1] + "M" + arr2[0] + "D" + arr2[1] + "M")

  arr = conversion1(Q)
  var pressureAngleRoughD = arr[0]
  var pressureAngleRoughM = arr[1]
  console.log( "PRESSURE ANGLE..........." + arr[0] + "D" + arr[1] + "M" + arr[0] + "D" + arr[1] + "M")
  console.log( "CUTTER NUMBER............" + CFG + "       " + CFG)

  //5560 
  console.log("BLADE LETTER.............")
  console.log("POINT WIDTH.............." + WRG + "      " + WG)
  console.log( "BLADE EDGE RADIUS........" + REG + "       " + REG)
  console.log("       GEAR SETTINGS        NO." + MC + "  GENERATOR")
  
  //5580 

  arr = conversion1(RAG1)
  arr2 = conversion2(MRAG)
  console.log({RAG})
  var machineRootAngleRoughD = arr[0]
  var machineRootAngleRoughM = arr[1]
  var machineRootAngleFinishD = arr2[0]
  var machineRootAngleFinishM = arr2[1]
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
  var eccentricAngleRD = arr[0]
  var eccentricAngleRM = arr[1]
  var eccentricAngleFD = arr2[0]
  var eccentricAngleFM = arr2[1]
  console.log( "ECCENTRIC ANGLE.........." + arr[0] + "D" + arr[1] + "M" + arr2[0] + "D" + arr2[1] + "M")

  arr = conversion1(QG)
  console.log({QG})
  arr2 = conversion2(QFG)
  console.log({QG})
  console.log({QFG})
  console.log(arr[0])
  var cradleAngleRD = arr[0]
  var cradleAngleRM = arr[1]
  var cradleAngleFD = arr2[0]
  var cradleAngleFM = arr2[1]
  console.log( "CRADLE ANGLE............." + arr[0] + "D" + arr[1] + "M" + arr2[0] + "D" + arr2[1] + "M")
  
  //5640 

  arr = conversion1(E0)
  console.log({E0})
  var swivelAngleFD = arr[0]
  var swivelAngleFM = arr[1]
  console.log( "SWIVEL ANGLE............." + " 0 D 0 M" + arr[0] + "D" + arr[1] + "M")

  arr = conversion1(IG)
  var tiltAngleFD = arr[0]
  var tiltAngleFM = arr[1]
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

  //5800 =====start here
  console.log("PINION ROUGHING " + MC + " GENERATOR")

  console.log("PINION FINISHING " + MC + " GENERATOR")

  console.log("SIDE OF TOOTH  BOTH   SIDE OF TOOTH   CONCAVE-O.B.   CONVEX-I.B.")

  console.log("CUTTER DIAMETER " + DC + "     " + DC)

  arr = conversion1(QO1)

  var outsideBladeAngleRoughD = arr[0]
  var outsideBladeAngleRoughM = arr[1]

  console.log("OUTSIDE BLADE ANGLE......     " + outsideBladeAngleRoughD + "D" + outsideBladeAngleRoughM + "M        " + outsideBladeAngleRoughD + "D" + outsideBladeAngleRoughM + "M")

  arr = conversion1(QI1)

  //5540 
  var insideBladeAngleRoughD = arr[0]
  var insideBladeAngleRoughM = arr[1]

  console.log( "INSIDE BLADE ANGLE......."  + insideBladeAngleRoughD + "D" + insideBladeAngleRoughM + "M" + insideBladeAngleRoughD + "D" + insideBladeAngleRoughM + "M")

  console.log({Q1})
  var arr = conversion1(Q)
  var Qarr1 = arr[0]
  var Qarr2 = arr[1]
  console.log("PRESSURE ANGLE. = " + arr[0] + " Degrees " + arr[1] + " Minutes " + arr[0] + " Degrees " + arr[1] + " Minutes ")
  
  console.log("CUTTER NUMBER " + CFP + "    " + CFP)

  console.log(" BLADE LETTER..." + "   POINT WIDTH " + WRP + "   " + WP)

  console.log("BLADE EDGE RADIUS " + REP + "     " + REP)

  console.log("MACHINE SETTINGS       MACHINE SETTINGS")

  arr = conversion1(RAP)
  var machineRAD = arr[0]
  var machineRAM = arr[1]
  console.log("MACHINE ROOT ANGLE    " + arr[0] + " Degrees " + arr[1] + " Minutes " + arr[0] + " Degrees " + arr[1] + " Minutes ")

  console.log("M/C CENTER TO BACK      MD+0.00     MD-" + DXP + "     MD-" + DXP)

  console.log("BLANK OFFSET    0.00   0.00   0.00")


  //5865 in doxbox
  if (MC == "16"){
    console.log("RADIAL     " + RAD + SPV + SPX)
    res.render('dimension_sheet16', {NP, NG, RAD, SPV, SPXXOP, WP, DXP, XBP, CVXB, CXXB, H, J, K, XOG, machineRAD, machineRAM, G, PD, F, TP, TG, Qarr1, Qarr2, TOP, TOG, SA1, SA2, PAParr1, PAParr2, PAGarr1, PAGarr2, faceAngleofBlankPinionD, faceAngleofBlankPinionM, faceAngleofBlankGearM, faceAngleofBlankGearD, AO, A, rootAnglePinionD, rootAnglePinionM, rootAngleGearM, rootAngleGearD, D1, D2, dedendumAnglePinionM, dedendumAnglePinionD, dedendumAngleGearD, dedendumAngleGearM, P, outerSpiralAngleGearM, outerSpiralAngleGearD, HT, innerSpiralAngleGearD, innerSpiralAngleGearM, C, handOfSpiralPinion, handOfSpiralGear, AOP, AOG, BOP, BOG, DO1, DO2, B1, B2, A, RC, WG1, WG, WRP, WRG, WMP, WBP, WBG, ST, RP2, RG2, R3, RP1, RG1, REP, REG, CP, CG, NB, DC, outsideBladeAngleRoughD, outsideBladeAngleRoughM, outsideBladeAngleFinishM, outsideBladeAngleFinishD, insideBladeAngleRoughD, insideBladeAngleRoughM, insideBladeAngleFinishD, insideBladeAngleFinishM, pressureAngleRoughD, pressureAngleRoughM, CFG, WRG, WG, REG, MC, machineRootAngleRoughD, machineRootAngleRoughM, machineRootAngleFinishD, machineRootAngleFinishM, XBG, XBGF, eccentricAngleRD, eccentricAngleRM, eccentricAngleFD, eccentricAngleFM, cradleAngleRD, cradleAngleRM, cradleAngleFD, cradleAngleFM, swivelAngleFD, swivelAngleFM, tiltAngleFD, tiltAngleFM, M50G, D$, AMG, TMG, HK, meanSpiralAngleGearD, meanSpiralAngleGearM, CFP});
  } else {
    arr = conversion1(B)
    var eccAngD = arr[0]
    var eccAngM = arr[1]
    arr1 = conversion2(BCV)
    var eccAng3 = arr1[0]
    var eccAng4 = arr1[1]
    arr2 = conversion3(BCX)
    var eccAng5 = arr2[0]
    var eccAng6 = arr2[1]
    console.log("ECCENTRIC ANGLE " + eccAngD + "D" + eccAngM + "M" + eccAng3 + "D" + eccAng4 + "M" + eccAng5 + "D" + eccAng6 + "M" )
  }

  arr = conversion1(C0)
  var swivelAngleD = arr[0]
  var swivelAngleM = arr[1]
  
  console.log("SWIVEL ANGLE" + 0 + "D" + 0 + "M" + swivelAngleD + "D" + swivelAngleM + "M")

  console.log(QFP)
  arr = conversion1(QP)
  arr1 = conversion2(QFP)
  var cradleAngleD = arr[0]
  var cradleAngleM = arr[1]
  var cradleAngleD1 = arr1[0]
  var cradleAngleM1 = arr1[1]

  console.log("CRADLE ANGLE" + cradleAngleD + "D" + cradleAngleM + "M" + cradleAngleD1 + "D" + cradleAngleM1 + "M")

  arr = conversion1(D0)
  var tiltAngleD = arr[0]
  var tiltAngleM = arr[1]

  
  console.log("TILT ANGLE" + 0 + " D " + 0 + " M " + tiltAngleD + " D " + tiltAngleM + " M ")

  console.log("CRADLE TEST ROLL" + 20 + " D " + 0 + " M " + 20 + " D " + 0 + " M ")

  console.log("DECIMAL RATIO " + M50P + M50P)

  console.log( "NORMAL CHORDAL ADDENDUM.." + AMG + AMP)
  
  //5740 
  console.log( "PRESS ANY KEY TO CONTINUE\n")

  //5760 IF INKEY$=""THEN GOTO 5760
  
  //5780 
  console.log( "NORMAL CHORDAL THICKNESS." + TMG + TMP)




  console.log("===================================")
  console.log("FINISHED")
  console.log("===================================")

  const jsonString = fs.readFileSync("./routes/temp.json");
  const temp = JSON.parse(jsonString);

  


  fs.writeFileSync("./routes/temp.json", JSON.stringify(temp));

  res.render('dimension_sheet', {NP, M50P, AMP, TMP, toothMeasurementAt, tiltAngleD, tiltAngleM, swivelAngleD, swivelAngleM, cradleAngleD, cradleAngleM, cradleAngleD1, cradleAngleM1, eccAngD, eccAngM, eccAng3, eccAng4, eccAng5, eccAng6, NG, XOP, WP, DXP, XBP, CVXB, CXXB, H, J, K, XOG, machineRAD, machineRAM, G, PD, F, TP, TG, Qarr1, Qarr2, TOP, TOG, SA1, SA2, PAParr1, PAParr2, PAGarr1, PAGarr2, faceAngleofBlankPinionD, faceAngleofBlankPinionM, faceAngleofBlankGearM, faceAngleofBlankGearD, AO, A, rootAnglePinionD, rootAnglePinionM, rootAngleGearM, rootAngleGearD, D1, D2, dedendumAnglePinionM, dedendumAnglePinionD, dedendumAngleGearD, dedendumAngleGearM, P, outerSpiralAngleGearM, outerSpiralAngleGearD, HT, innerSpiralAngleGearD, innerSpiralAngleGearM, C, handOfSpiralPinion, handOfSpiralGear, AOP, AOG, BOP, BOG, DO1, DO2, B1, B2, A, RC, WG1, WG, WRP, WRG, WMP, WBP, WBG, ST, RP2, RG2, R3, RP1, RG1, REP, REG, CP, CG, NB, DC, outsideBladeAngleRoughD, outsideBladeAngleRoughM, outsideBladeAngleFinishM, outsideBladeAngleFinishD, insideBladeAngleRoughD, insideBladeAngleRoughM, insideBladeAngleFinishD, insideBladeAngleFinishM, pressureAngleRoughD, pressureAngleRoughM, CFG, WRG, WG, REG, MC, machineRootAngleRoughD, machineRootAngleRoughM, machineRootAngleFinishD, machineRootAngleFinishM, XBG, XBGF, eccentricAngleRD, eccentricAngleRM, eccentricAngleFD, eccentricAngleFM, cradleAngleRD, cradleAngleRM, cradleAngleFD, cradleAngleFM, swivelAngleFD, swivelAngleFM, tiltAngleFD, tiltAngleFM, M50G, D$, AMG, TMG, HK, meanSpiralAngleGearD, meanSpiralAngleGearM, CFP});
  
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
  if(H2 < 0){
    var H3 = Math.trunc(H2) - 1
  } else {
    var H3 = Math.trunc(H2)
  }
  
  var H4 = Math.trunc((H2 - H3) * 60 + 0.5)
  if (H4 < 0){
    H4 = H4 * -1
  }
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