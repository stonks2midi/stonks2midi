// const testData = {
//   "companyA": {

//     'sharePrice': [67, 70, 76, 56, 45, 40, 32, 25],
//     'volume': [45, 50, 56, 60, 62, 62, 61, 58]
//   },

//   "companyB": {

//     'sharePrice': [67, 70, 76, 56, 45, 40, 32, 25],
//     'volume': [45, 50, 56, 60, 62, 62, 61, 58]
//   },

//   "companyC": {
//     'sharePrice': [67, 70, 76, 56, 45, 40, 32, 25],
//     'volume': [45, 50, 56, 60, 62, 62, 61, 58]
//   },

//   "companyD": {
//     'sharePrice': [67, 70, 76, 56, 45, 40, 32, 25],
//     'volume': [45, 50, 56, 60, 62, 62, 61, 58]
//   },

//   "ukInterestRate": [0.67, 0.70, 0.76, 0.56, 0.45, 0.40, 0.32, 0.25],
//   "GBPtoUSD": [1.67, 1.70, 1.76, 1.56, 1.45, 1.40, 1.32, 1.25]

// }

// async function getAsyncData() {
//   const data = await getData();
//   console.log(data);
// }

// getAsyncData();

// TODO:
// 1. Fix this.currentValues
// If you see 'getData.js:34 Uncaught (in promise) TypeError: Cannot convert undefined or null to object'  it's probably an api calls error, check the Network tab. Maybe cache these results!

// IMPORTANT UNMUTE BUSINESS

// import UnmuteButton from "../node_modules/unmute/build/unmute.js";

// UnmuteButton();

// VARIABLES

const companyKeys = ["apple", "google", "microsoft", "wetherspoons"];

// FUNCTIONS

function mapRange(value, a, b, c, d) {
  // first map value from (a..b) to (0..1)
  value = (value - a) / (b - a);
  // then map it from (0..1) to (c..d) and return it
  return c + value * (d - c);
}

// NOT FUNCTIONS

//testData = await getData()
let testData = {
  google: {
    volume: [
      67171200,
      36527700,
      37898400,
      34516100,
      27586000,
      33421676,
      52083039,
      28445740,
      45796626,
      50087655,
      32508126,
      38542782,
      42283442,
      31866779,
      34342523,
      63319457,
      53395840,
      47857854,
      49513250,
      33934938,
      43110708,
      46561234,
      64367114,
      41727507,
      42154738,
      35000414,
      39375913,
      29914808,
      26385341,
      27600794,
      33956196,
      42688236,
      32097980,
      33332821,
      25689522,
      33840342,
      24742467,
      31802202,
      42736021,
      35416014,
      27325965,
      27177858,
      30768015,
      23866071,
      27458240,
      27111134,
      40388224,
      43301942,
      41773275,
      31849196,
      32103642,
      31953386,
      28820379,
      28863199,
      48496167,
      36735570,
      40256461,
      30714651,
      28934646,
      31658936,
      27860634,
      33323762,
      34098832,
      32952483,
      7642178
    ],
    sharePrice: [
      526.66,
      559.89,
      575.28,
      571.6,
      571.6,
      577.36,
      559.08,
      541.83,
      526.4,
      534.52,
      558.4,
      548,
      537.34,
      532.11,
      520.51,
      625.61,
      618.25,
      608.42,
      710.81,
      742.6,
      758.88,
      742.95,
      697.77,
      744.95,
      693.01,
      735.72,
      692.1,
      768.79,
      767.05,
      777.29,
      784.54,
      758.04,
      771.82,
      796.79,
      823.21,
      829.56,
      905.96,
      964.86,
      908.73,
      930.5,
      939.33,
      959.11,
      1016.64,
      1021.41,
      1046.4,
      1169.94,
      1104.73,
      1031.79,
      1017.33,
      1084.99,
      1115.65,
      1217.26,
      1218.19,
      1193.47,
      1076.77,
      1094.43,
      1035.61,
      1116.37,
      1119.92,
      1173.31,
      1188.48,
      1103.63,
      1080.91,
      1216.68,
      1169.95
    ]
  },
  microsoft: {
    volume: [
      215522751,
      274981438,
      254743859,
      273845180,
      308287638,
      307324038,
      337509459,
      298080659,
      410761838,
      290676280,
      275380038,
      368129301,
      399775401,
      423915767,
      581799259,
      562128080,
      443715838,
      572350159,
      673996638,
      488636359,
      531151759,
      732627559,
      630488438,
      637437180,
      667243380,
      1014093317,
      1129072901,
      672214938,
      733524638,
      617092480,
      609699417,
      712766480,
      1234707338,
      991730859,
      1028333680,
      1002765159,
      768447401,
      947674438,
      1037903080,
      888652438,
      724588459,
      727600059,
      576947717,
      755411885,
      875445017,
      665483859,
      488544080,
      680057459,
      565579201,
      536621680,
      708739238,
      710132638,
      917036080,
      1216093538,
      857878138,
      847852480,
      1237684817,
      777998180,
      634184659,
      859330659,
      910627751,
      1371902159,
      1249617259,
      1311003259,
      1569995359,
      1292010538,
      966506459,
      1253308659,
      1400032017,
      1442336301,
      1476460838,
      1232188580,
      1032065201,
      1703040517,
      1558947359,
      1141456480,
      1534889259,
      1550446459,
      1094194838,
      1141011859,
      1300590759,
      1739406859,
      1803777238,
      1521413880,
      1361125601,
      1541410838,
      1520253259,
      1270563259,
      1303029038,
      1321407280,
      1441978817,
      1348861059,
      1439659459,
      1444947859,
      1271695059,
      1388622280,
      1047698601,
      1437940417,
      1446126501,
      2309192938,
      1971636738,
      1332297680,
      1134187917,
      1097482180,
      1290966938,
      1239141559,
      1137160480,
      1324517780,
      1290850501,
      1269506038,
      958964480,
      1327154238,
      1181412359,
      1295547559,
      1228579017,
      1117419101,
      1772076217,
      1830846359,
      1064816680,
      1950301159,
      2324580380,
      1452389780,
      1444719538,
      1405169759,
      1560438659,
      1579424984,
      1206949259,
      1927538259,
      3044578917,
      1794911401,
      1546942938,
      1564042980,
      1456213001,
      1625752338,
      1562400259,
      1101121980,
      1411144238,
      1517459338,
      993249959,
      1038979259,
      1523429638,
      1018256280,
      920605038,
      1359650501,
      1074642901,
      1110236717,
      1319029059,
      1720129780,
      1671811138,
      1408590159,
      1279371638,
      1273139059,
      1281432359,
      1361175859,
      1033709538,
      1361258280,
      1114368101,
      1310884717,
      1313844380,
      1364062359,
      1297757138,
      1259327780,
      1719339017,
      1279919759,
      1218142059,
      1046206959,
      1007166159,
      1354857680,
      984331880,
      942366038,
      940739280,
      1014372138,
      973130959,
      846603659,
      671747917,
      893107301,
      1105401859,
      1310515659,
      947310480,
      1145053959,
      780586601,
      844945580,
      1322882766,
      1071859538,
      945155080,
      1111130138,
      1051264538,
      1242961080,
      965331017,
      800431180,
      826617259,
      930225759,
      705304101,
      778425259,
      746113059,
      574362459,
      555779259,
      731616038,
      513428959,
      860084091,
      853296576,
      523007841,
      626810144,
      918737602,
      656509428,
      824334878,
      874534654,
      633072330,
      664852878,
      725457640,
      776276953,
      670779125,
      857330193,
      662621800,
      793069538,
      927914086,
      814770360,
      640371888,
      699025199,
      530868906,
      823987036,
      647587214,
      467078521,
      526854642,
      614841334,
      613056523,
      513578987,
      494435406,
      440743644,
      489172717,
      428857214,
      505248834,
      610120431,
      451248514,
      429156199,
      367133976,
      440509656,
      416151819,
      447827836,
      543376881,
      690287197,
      732865965,
      668258129,
      509417657,
      602584900,
      569501132,
      456630238,
      480255275,
      927547459,
      720228202,
      944287236,
      714204346,
      469095571,
      589044900,
      433157427,
      547217986,
      508324017,
      484552837,
      146609831
    ],
    sharePrice: [
      84.75,
      89.5,
      90.12,
      84.81,
      108.37,
      109.94,
      95.94,
      110.06,
      105.87,
      122,
      138.69,
      175,
      150.13,
      89.62,
      81.31,
      80.69,
      90.19,
      85.81,
      92.56,
      90.56,
      92.56,
      91.05,
      116.75,
      97.87,
      89.37,
      106.25,
      69.75,
      62.56,
      80,
      69.81,
      69.81,
      60.31,
      68.87,
      57.38,
      43.38,
      61.06,
      59,
      54.69,
      67.75,
      69.18,
      73,
      66.19,
      57.05,
      51.17,
      58.15,
      64.21,
      66.25,
      63.71,
      58.34,
      60.31,
      52.26,
      50.91,
      54.7,
      47.98,
      49.08,
      43.74,
      53.47,
      57.68,
      51.7,
      47.46,
      23.7,
      24.21,
      25.57,
      24.61,
      25.64,
      26.41,
      26.52,
      27.8,
      26.14,
      25.71,
      27.37,
      27.65,
      26.53,
      24.93,
      26.13,
      26.23,
      28.56,
      28.49,
      27.3,
      27.65,
      27.97,
      26.81,
      26.72,
      26.28,
      25.16,
      24.17,
      25.3,
      25.8,
      24.84,
      25.61,
      27.38,
      25.73,
      25.7,
      27.68,
      26.15,
      28.15,
      26.87,
      27.21,
      24.15,
      22.65,
      23.3,
      24.06,
      25.7,
      27.35,
      28.71,
      29.36,
      29.86,
      30.86,
      28.17,
      27.87,
      29.94,
      30.6901,
      29.47,
      28.99,
      28.73,
      29.46,
      36.81,
      33.6,
      35.6,
      32.6,
      27.1999,
      28.38,
      28.52,
      28.32,
      27.51,
      25.72,
      27.29,
      26.69,
      22.33,
      20.22,
      19.44,
      17.1,
      16.15,
      18.37,
      20.26,
      20.89,
      23.77,
      23.52,
      24.65,
      25.72,
      27.73,
      29.41,
      30.48,
      28.18,
      28.67,
      29.2875,
      30.535,
      25.8,
      23.01,
      25.81,
      23.465,
      24.49,
      26.665,
      25.2575,
      27.91,
      27.725,
      26.58,
      25.39,
      25.92,
      25.01,
      26,
      27.4,
      26.6,
      24.89,
      26.63,
      25.58,
      25.96,
      29.53,
      31.74,
      32.255,
      32.015,
      29.19,
      30.59,
      29.47,
      30.82,
      29.76,
      28.54,
      26.615,
      26.7097,
      27.45,
      27.8,
      28.605,
      33.1,
      34.9,
      34.545,
      31.84,
      33.4,
      33.28,
      35.405,
      38.13,
      37.41,
      37.84,
      38.31,
      40.99,
      40.4,
      40.94,
      41.7,
      43.16,
      45.43,
      46.36,
      46.95,
      47.81,
      46.45,
      40.4,
      43.85,
      40.655,
      48.64,
      46.86,
      44.15,
      46.7,
      43.52,
      44.26,
      52.64,
      54.35,
      55.48,
      55.09,
      50.88,
      55.23,
      49.87,
      53,
      51.17,
      56.68,
      57.46,
      57.6,
      59.92,
      60.26,
      62.14,
      64.65,
      63.98,
      65.86,
      68.46,
      69.84,
      68.93,
      72.7,
      74.77,
      74.49,
      83.18,
      84.17,
      85.54,
      95.01,
      93.77,
      91.27,
      93.52,
      98.84,
      98.61,
      106.08,
      112.33,
      114.37,
      106.81,
      110.89,
      101.57,
      104.43,
      112.03,
      117.94,
      130.6,
      123.68,
      133.96,
      136.27,
      134.69
    ]
  },
  apple: {
    volume: [
      65662200,
      94874800,
      72159700,
      60744100,
      34909300,
      97568400,
      118043500,
      72145700,
      115454700,
      90388600,
      115393800,
      135066100,
      72468900,
      88857100,
      141865800,
      79543800,
      61773400,
      102380200,
      82541100,
      169352400,
      129183000,
      77008300,
      84091200,
      112099800,
      65355200,
      77663900,
      77342900,
      87569200,
      89106200,
      102620900,
      100644400,
      259230900,
      391174800,
      151578100,
      158195900,
      244811800,
      125424400,
      192840400,
      199267700,
      133364900,
      136397600,
      154555400,
      91595700,
      98777200,
      134718700,
      95888300,
      82675700,
      152060300,
      139954000,
      94974700,
      114693500,
      106717100,
      155500300,
      144971700,
      91994400,
      94497100,
      118061300,
      80923600,
      80900700,
      107961300,
      73469700,
      71935800,
      138845400,
      193063300,
      109166700,
      93183400,
      76920800,
      95490800,
      125717700,
      88823300,
      97390600,
      141567900,
      87893400,
      207609200,
      159467400,
      94719200,
      146914900,
      173153200,
      143060100,
      137026900,
      287399400,
      311421500,
      284796700,
      459075800,
      383016900,
      524140000,
      691982800,
      459224800,
      404542700,
      360508800,
      335743100,
      440991800,
      665837400,
      480586700,
      466577300,
      781370400,
      670024900,
      828308300,
      718545800,
      557456400,
      640593700,
      624276500,
      638844500,
      632912800,
      513855600,
      494103000,
      603242600,
      971777900,
      490084100,
      568523000,
      480705000,
      620181000,
      831412200,
      857806200,
      870028500,
      747543700,
      831349700,
      935706800,
      616167100,
      1256210300,
      888069800,
      818831200,
      813820800,
      663864800,
      695564100,
      705348600,
      467348400,
      859555800,
      1479525400,
      843552200,
      721923100,
      646633600,
      495266100,
      550878500,
      422202900,
      337755100,
      452699000,
      390790600,
      291611600,
      356761400,
      462720600,
      301956600,
      406927100,
      541749800,
      384860000,
      434077600,
      441683200,
      645809100,
      594687600,
      559632300,
      342468600,
      423211400,
      436949200,
      339574500,
      249044100,
      387197700,
      331998200,
      403802100,
      330493900,
      246859300,
      330851800,
      380498100,
      576521400,
      427766000,
      469336700,
      320132200,
      225233300,
      244994800,
      406019800,
      556583500,
      557106800,
      396655200,
      280565200,
      318201800,
      295578800,
      328535900,
      433672500,
      461780400,
      433312600,
      468693700,
      333715500,
      327745600,
      391553200,
      337411800,
      250662000,
      233504100,
      287797800,
      308247900,
      279919000,
      186612700,
      252049900,
      313069800,
      210013100,
      178632100,
      229823600,
      204845300,
      853194497,
      1035191700,
      930931500,
      1523782675,
      1360280122,
      820471729,
      1073775862,
      1304879185,
      1136535493,
      1138641910,
      996135511,
      954152126,
      878606841,
      1058280697,
      1606359115,
      1203789074,
      1113703829,
      750606735,
      922626259,
      1271848087,
      810862547,
      745756771,
      872383623,
      901144768,
      780630235,
      685779613,
      630128567,
      970096738,
      686914224,
      721554967,
      608771645,
      563331160,
      574968547,
      562091214,
      371280180,
      635292989,
      664986406,
      411377229,
      638221161,
      669594016,
      496135305,
      581876496,
      518560008,
      639245534,
      888378184,
      701387082,
      666360147,
      620976206,
      527624365,
      393843881,
      700318837,
      678972040,
      789748068,
      961321947,
      898917007,
      828099179,
      472540723,
      650981384,
      506117812,
      739456573,
      515218768,
      473957094,
      182967238
    ],
    sharePrice: [
      23.62,
      27.5,
      27.37,
      26.62,
      28.69,
      34.63,
      31.19,
      38.13,
      37.13,
      31.94,
      40.94,
      41.19,
      34.81,
      35.94,
      46,
      44.06,
      46.31,
      55.69,
      65.25,
      63.31,
      80.12,
      97.87,
      102.81,
      103.75,
      114.62,
      135.81,
      124.06,
      84,
      52.38,
      50.81,
      60.94,
      25.75,
      19.56,
      16.5,
      14.88,
      21.62,
      18.25,
      22.07,
      25.49,
      19.95,
      23.25,
      18.79,
      18.55,
      15.51,
      17.56,
      21.3,
      21.9,
      24.72,
      21.7,
      23.67,
      24.27,
      23.3,
      17.72,
      15.26,
      14.75,
      14.5,
      16.07,
      15.5,
      14.33,
      14.36,
      15.01,
      14.14,
      14.22,
      17.95,
      19.06,
      21.08,
      22.61,
      20.72,
      22.89,
      20.91,
      21.37,
      22.56,
      23.92,
      27.04,
      25.78,
      28.06,
      32.54,
      32.34,
      34.49,
      38.75,
      52.4,
      67.05,
      64.4,
      76.9,
      44.86,
      41.67,
      36.06,
      39.7593,
      36.81,
      42.65,
      46.89,
      53.61,
      57.59,
      67.82,
      71.89,
      75.51,
      68.49,
      62.72,
      70.39,
      59.77,
      57.27,
      67.96,
      67.85,
      76.98,
      81.08,
      91.66,
      84.84,
      85.73,
      84.61,
      92.91,
      99.8,
      121.191,
      122.04,
      131.76,
      138.48,
      153.47,
      189.95,
      182.22,
      198.08,
      135.36,
      125.02,
      143.5,
      173.95,
      188.75,
      167.44,
      158.95,
      169.53,
      113.66,
      107.59,
      92.67,
      85.35,
      90.13,
      89.31,
      105.12,
      125.83,
      135.81,
      142.43,
      163.39,
      168.21,
      185.35,
      188.5,
      199.91,
      210.732,
      192.063,
      204.62,
      235,
      261.09,
      256.88,
      251.53,
      257.25,
      243.1,
      283.75,
      300.98,
      311.15,
      322.56,
      339.32,
      353.21,
      348.5075,
      350.13,
      347.83,
      335.67,
      390.48,
      384.83,
      381.32,
      404.78,
      382.2,
      405,
      456.48,
      542.44,
      599.55,
      583.98,
      577.73,
      584,
      610.76,
      665.24,
      667.105,
      595.32,
      585.28,
      532.1729,
      455.49,
      441.4,
      442.66,
      442.78,
      449.735,
      396.53,
      452.53,
      487.216,
      476.75,
      522.702,
      556.07,
      561.02,
      500.6,
      526.24,
      536.74,
      590.09,
      633,
      92.93,
      95.6,
      102.5,
      100.75,
      108,
      118.93,
      110.38,
      117.16,
      128.46,
      124.43,
      125.15,
      130.28,
      125.425,
      121.3,
      112.76,
      110.3,
      119.5,
      118.3,
      105.26,
      97.34,
      96.69,
      108.99,
      93.74,
      99.86,
      95.6,
      104.21,
      106.1,
      113.05,
      113.54,
      110.52,
      115.82,
      121.35,
      136.99,
      143.66,
      143.65,
      152.76,
      144.02,
      148.73,
      164,
      154.12,
      169.04,
      171.85,
      169.23,
      167.43,
      178.12,
      167.78,
      165.26,
      186.87,
      185.11,
      190.29,
      227.63,
      225.74,
      218.86,
      178.58,
      157.74,
      166.44,
      173.15,
      189.95,
      200.67,
      175.07,
      197.92,
      213.04,
      197
    ]
  },
  wetherspoons: {
    volume: [
      7674920,
      10602457,
      9951310,
      4891798,
      13559081,
      3105417,
      12939981,
      7313772,
      13913045,
      17719321,
      5546504,
      24400305,
      13207281,
      11268516,
      8029984,
      9738441,
      11524678,
      7493287,
      11216789,
      14945851,
      16909160,
      8667421,
      7603792,
      18939919,
      9569632,
      17345430,
      10706267,
      11851462,
      12928650,
      33059099,
      15956643,
      18516756,
      13999893,
      33096527,
      22909363,
      11307383,
      2186430,
      9244957,
      7008241,
      9169036,
      7661254,
      4279602,
      16603810,
      12977744,
      20348799,
      15624541,
      9420097,
      20915140,
      10390351,
      26595112,
      18622887,
      25809574,
      19565856,
      33907373,
      33701509,
      61716314,
      29140294,
      57616076,
      21608949,
      27927396,
      38134434,
      43834942,
      39555715,
      31270946,
      38415686,
      29534806,
      15193709,
      18247167,
      18204542,
      32171194,
      13976268,
      17796128,
      7871200,
      19709686,
      13408824,
      18404363,
      29070807,
      12552928,
      11779935,
      38359067,
      25715196,
      18615136,
      9573647,
      15972965,
      14393592,
      25498309,
      11042704,
      35637639,
      24995131,
      22212099,
      27097730,
      20096921,
      15355307,
      21171072,
      14483076,
      37710519,
      19397082,
      29342777,
      25385736,
      19999557,
      32153443,
      28465528,
      22273421,
      40001776,
      30708249,
      13368483,
      7797074,
      17100789,
      15758367,
      26340503,
      19119015,
      16830202,
      14449382,
      14209567,
      11373502,
      20282348,
      11715399,
      11689007,
      8321554,
      10557980,
      6976354,
      15342534,
      7678378,
      16652746,
      8045617,
      8259684,
      4212335,
      9855482,
      6943882,
      9332168,
      4536253,
      5154226,
      4388457,
      20047358,
      4173735,
      4851613,
      3963943,
      3882393,
      6365333,
      4419437,
      3247042,
      4223846,
      1952944,
      2117605,
      1694609,
      8735705,
      8239391,
      9148169,
      4989752,
      2594243,
      1360348,
      2723559,
      2774161,
      2243171,
      1617825,
      1778567,
      1640380,
      1720472,
      3255708,
      1775504,
      1713814,
      2330077,
      1514011,
      1787384,
      1350172,
      1491138,
      1715598,
      1595187,
      1005711,
      1552674,
      2647843,
      2685797,
      2444458,
      3170906,
      1353191,
      2400093,
      1948930,
      3595853,
      1472380,
      2780215,
      1784037,
      6315871,
      3503821,
      4196940,
      3995264,
      12565384,
      3477012,
      3323249,
      2861223,
      2678424,
      2230885,
      4071510,
      4214837,
      5989260,
      6168185,
      7683779,
      7797658,
      4903402,
      4231078,
      5675975,
      6699463,
      4068694,
      4299867,
      4795324,
      3865089,
      6777347,
      4881534,
      5042541,
      2954353,
      7937073,
      5533801,
      6686978,
      3935250,
      4009325,
      3116117,
      4110739,
      3052976,
      5379334,
      3419560,
      4271917,
      3551605,
      4270848,
      2651483,
      5573692,
      5868240,
      7903514,
      3961923,
      4629740,
      2483137,
      5040111,
      2690193,
      2374874,
      3593157,
      3551728,
      338933
    ],
    sharePrice: [
      355.5,
      446,
      415.5,
      364.5,
      373.5,
      361.5,
      376,
      309,
      312,
      330.5,
      332.5,
      389.5,
      397.5,
      360,
      388.5,
      359.5,
      367.5,
      339.5,
      341,
      345,
      377.5,
      375,
      433.5,
      371,
      370.5,
      387.5,
      360.5,
      352.5,
      313,
      303,
      288,
      296.5,
      282.5,
      181.5,
      166.5,
      165,
      163,
      165.5,
      222.5,
      234,
      234,
      225.5,
      266.5,
      231,
      264.5,
      269.75,
      280,
      279.75,
      275.5,
      294.75,
      304,
      288,
      286.5,
      251.5,
      243,
      244.75,
      233.25,
      228,
      255,
      257.5,
      272.75,
      257.75,
      250,
      277.5,
      266,
      278,
      291,
      289.25,
      295.5,
      325,
      331.5,
      350,
      360.25,
      372.25,
      390.25,
      395,
      429.25,
      445.5,
      448,
      510.75,
      560,
      647.25,
      695.5,
      712.5,
      726,
      751,
      711,
      622.5,
      555.5,
      590,
      585,
      530,
      542.5,
      399.5,
      369.5,
      341.25,
      307.25,
      273,
      272.75,
      287.25,
      201,
      211.25,
      264.5,
      234,
      257.5,
      300,
      311,
      342,
      385.25,
      423.25,
      410,
      419.25,
      387.75,
      452,
      473.4,
      478.2,
      460.9,
      464.4,
      425,
      455.8,
      449.5,
      505.5,
      541,
      430.7,
      390.5,
      436.4,
      418.8,
      439.2,
      410,
      420.9,
      450,
      443.8,
      440,
      424.5,
      454.8,
      445.1,
      431.3,
      432.8,
      415,
      389.7,
      431.2,
      432.4,
      415.2,
      407.1,
      401.6,
      411.4,
      405.5,
      388,
      426.2,
      463.4,
      447.9,
      481,
      501.5,
      544,
      533,
      512.5,
      523.5,
      537.5,
      587.5,
      658.5,
      664.5,
      711,
      710,
      730.5,
      705,
      713,
      761.5,
      796.5,
      816,
      856.5,
      843.5,
      803,
      791,
      743.5,
      744.5,
      798,
      842.5,
      819,
      820,
      791,
      819.5,
      752.5,
      761,
      787,
      788,
      715.5,
      752,
      736,
      774.5,
      715,
      748.5,
      677,
      719.5,
      703.5,
      663,
      750,
      706,
      852,
      887.5,
      940.5,
      870,
      820,
      888,
      937,
      979.5,
      945,
      994.5,
      1029,
      975.5,
      1023,
      1092,
      1255,
      1245,
      1222,
      1257,
      1259,
      1268,
      1139,
      1164,
      1220,
      1260,
      1219,
      1245,
      1306,
      1235,
      1143,
      1113,
      1214,
      1312,
      1310,
      1368,
      1331,
      1428,
      1531,
      1478
    ]
  },
  GBPtoUSD: [
    1.4559,
    1.4725,
    1.455,
    1.424,
    1.4559,
    1.4099,
    1.4171,
    1.4249,
    1.4567,
    1.4556,
    1.5307,
    1.5618,
    1.549,
    1.5679,
    1.5641,
    1.5561,
    1.6109,
    1.6466,
    1.5733,
    1.58,
    1.5985,
    1.6384,
    1.655,
    1.6097,
    1.5752,
    1.661,
    1.694,
    1.7216,
    1.785,
    1.8243,
    1.8679,
    1.8424,
    1.7784,
    1.8318,
    1.813,
    1.82,
    1.802,
    1.8119,
    1.8365,
    1.9096,
    1.9184,
    1.8826,
    1.921,
    1.89,
    1.9077,
    1.817,
    1.7906,
    1.756,
    1.8035,
    1.7634,
    1.7698,
    1.7293,
    1.7198,
    1.7793,
    1.7535,
    1.7363,
    1.8232,
    1.8712,
    1.8487,
    1.8678,
    1.9039,
    1.8723,
    1.9073,
    1.9661,
    1.9586,
    1.9652,
    1.9637,
    1.9677,
    1.9994,
    1.9798,
    2.0086,
    2.0311,
    2.017,
    2.0471,
    2.081,
    2.0569,
    1.9848,
    1.9868,
    1.9877,
    1.9832,
    1.9873,
    1.9821,
    1.9933,
    1.9831,
    1.821,
    1.7833,
    1.6067,
    1.5364,
    1.4626,
    1.454,
    1.4316,
    1.432,
    1.4782,
    1.6185,
    1.646,
    1.6707,
    1.6282,
    1.6004,
    1.6445,
    1.644,
    1.616,
    1.5979,
    1.5232,
    1.5177,
    1.5272,
    1.4535,
    1.4939,
    1.568,
    1.5351,
    1.571,
    1.6037,
    1.5563,
    1.5608,
    1.6011,
    1.6255,
    1.6039,
    1.6708,
    1.645,
    1.6041,
    1.6423,
    1.6255,
    1.5583,
    1.608,
    1.5705,
    1.5533,
    1.5759,
    1.5915,
    1.6005,
    1.6237,
    1.5403,
    1.5706,
    1.5672,
    1.5863,
    1.616,
    1.6128,
    1.6008,
    1.6245,
    1.5855,
    1.5163,
    1.5211,
    1.5537,
    1.5196,
    1.522,
    1.5196,
    1.5502,
    1.6184,
    1.6039,
    1.6365,
    1.6558,
    1.6436,
    1.674,
    1.6663,
    1.6873,
    1.6744,
    1.7109,
    1.6884,
    1.6596,
    1.6214,
    1.599,
    1.5632,
    1.5575,
    1.5058,
    1.5434,
    1.4828,
    1.5348,
    1.5287,
    1.5683,
    1.5619,
    1.535,
    1.5123,
    1.5424,
    1.5063,
    1.4734,
    1.4234,
    1.3925,
    1.4368,
    1.4606,
    1.4492,
    1.3312,
    1.3219,
    1.3144,
    1.2976,
    1.2234,
    1.2511,
    1.2346,
    1.258,
    1.2376,
    1.2543,
    1.2927,
    1.287,
    1.3022,
    1.32,
    1.2941,
    1.3393,
    1.3286,
    1.3513,
    1.3505,
    1.4196,
    1.3756,
    1.401,
    1.3768,
    1.3299,
    1.3207,
    1.3116,
    1.2956,
    1.3031,
    1.2771,
    1.2751,
    1.275,
    1.3107,
    1.3262,
    1.3019,
    1.3032,
    1.2626,
    1.2699,
    1.2159,
    1.2165
  ]
};

// volume = 0...1
// sharePrice = 0...27
const normalise = function(data) {
  Object.keys(data)
    .filter(function(companyName) {
      return companyKeys.includes(companyName);
    })
    .forEach(function(companyName) {
      let company = data[companyName];

      let minVolume = Math.min(...company.volume);
      let maxVolume = Math.max(...company.volume);

      let minSharePrice = Math.min(...company.sharePrice);
      let maxSharePrice = Math.max(...company.sharePrice);

      company.volume = company.volume.map(function(volume) {
        return mapRange(volume, minVolume, maxVolume, 0, 1);
      });
      company.sharePrice = company.sharePrice.map(function(sharePrice) {
        return mapRange(sharePrice, minSharePrice, maxSharePrice, 0, 27);
      });
    });
};

normalise(testData);

console.log(testData);

const dummyArray = [60, 0.8];

class Company {
  constructor(name) {
    this.companyName = name;
    this.synth = new Tone.Synth().toMaster();
    this.currentValues = [];
  }

  makeNoteValues(index) {
    // FIX THIS, this.currentValues is not being set
    var volume = testData[this.companyName].volume[index];
    var sharePrice = testData[this.companyName].sharePrice[index];

    // this.currentValues = [Math.round(volume), Math.round(sharePrice)];
    this.currentValues = [volume, "8n"];
  }

  playNote() {
    //this.synth.volume.value = this.currentValues[0];
    // var note = Tone.Frequency(this.currentValues[1], "midi").toNote();
    // console.log(`note is ${note}`);
    // var velocity = mapRange(this.currentValues[0], 0, 100, 0, 1);
    // console.log(velocity);
    // this.synth.triggerAttackRelease("C4", "16n", undefined, 1);
  }

  makeAndPlay(beat) {
    this.makeNoteValues(beat);
    this.playNote();
  }
}

async function start() {
  var beat = 0;
  // var maxBeats = 0;

  const companies = companyKeys.map(function(companyKey) {
    return new Company(companyKey);
  });

  // console.log(companies);

  // maxBeats = testData[Object.keys(testData)[0]].sharePrice.length;

  var mainLoop = new Tone.Clock(function() {
    for (var i = 0; i < companies.length; i++) {
      companies[i].makeAndPlay(beat);
    }

    beat++;

    // if (beat >= maxBeats) {
    //   mainLoop.stop();
    // }
  }, 4);

  mainLoop.start();
}

// function setup() {
//   // create a canvas
//   createCanvas(600, 800);

//   console.log(makeNoteValues(1, 0))
// }

// function draw() {
//   // colour the background black
//   background(0);
//   // select white as a colour
//   fill(255);
//   // draw a rectangle
//   rect(150, 150, 100, 100);
// }

start();
