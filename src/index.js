const trianglify = require("trianglify")
const fs = require("fs")

const BANKS_DATA = [
    {
        "Organization": "Access Bank Plc",
        "Primary Color": "#FE6404",
        "Secondary Color": "#083F86",
        "Tertiary Color": null
    },
    {
        "Organization": "Citibank Nigeria Limited",
        "Primary Color": "#D63939",
        "Secondary Color": "#FBFBFB",
        "Tertiary Color": null
    },
    {
        "Organization": "Diamond Bank",
        "Primary Color": "#B6D530",
        "Secondary Color": "#EE2C1F",
        "Tertiary Color": "#009AB2"
    },
    {
        "Organization": "Ecobank Nigeria Plc",
        "Primary Color": "#00567B",
        "Secondary Color": "#BED000",
        "Tertiary Color": "#E6E6E6"
    },
    {
        "Organization": "Fidelity Bank Plc",
        "Primary Color": "#0D237D",
        "Secondary Color": "#78B844",
        "Tertiary Color": "#E6E6E6"
    },
    {
        "Organization": "First Bank Nigeria Ltd.",
        "Primary Color": "#0E294B",
        "Secondary Color": "#0E0E0E",
        "Tertiary Color": "#E0AE07"
    },
    {
        "Organization": "First City Monument Bank Plc",
        "Primary Color": "#001123",
        "Secondary Color": "#BA9765",
        "Tertiary Color": "#FFFFFF"
    },
    {
        "Organization": "Globus Bank Limited",
        "Primary Color": "#EB2232",
        "Secondary Color": "#E6E6E6",
        "Tertiary Color": "#242E64"
    },
    {
        "Organization": "Guaranty Trust Bank Plc",
        "Primary Color": "#DF4902",
        "Secondary Color": "#FEFEFE",
        "Tertiary Color": "#FEFEFE"
    },
    {
        "Organization": "Heritage Banking Company Ltd.",
        "Primary Color": "#67AD45",
        "Secondary Color": "#E6E6E6",
        "Tertiary Color": "#E6E6E6"
    },
    {
        "Organization": "Jaiz Bank",
        "Primary Color": "#0C4722",
        "Secondary Color": "#CFB664",
        "Tertiary Color": "#3F6D50"
    },
    {
        "Organization": "Keystone Bank",
        "Primary Color": "#0B3D78",
        "Secondary Color": "#41B2E3",
        "Tertiary Color": "#FDFEFE"
    },
    {
        "Organization": "Polaris Bank",
        "Primary Color": "#8A31AF",
        "Secondary Color": "#F2AA02",
        "Tertiary Color": "#FFFFFF"
    },
    {
        "Organization": "Providus Bank",
        "Primary Color": "#FDB814",
        "Secondary Color": "#374B55",
        "Tertiary Color": "#E6E6E6"
    },
    {
        "Organization": "Stanbic Ibtc Bank Ltd.",
        "Primary Color": "#1A4D8C",
        "Secondary Color": "#E6E6E6",
        "Tertiary Color": "#ADC1D4"
    },
    {
        "Organization": "Standard Chartered Bank Nigeria Ltd.",
        "Primary Color": "#0074EB",
        "Secondary Color": "#35D300",
        "Tertiary Color": "#525355"
    },
    {
        "Organization": "Sterling Bank Plc",
        "Primary Color": "#DC3237",
        "Secondary Color": "#FFFEFE",
        "Tertiary Color": "#686767"
    },
    {
        "Organization": "Unified Payment Services",
        "Primary Color": "#01AFEE",
        "Secondary Color": "#F58634",
        "Tertiary Color": "#FFFFFF"
    },
    {
        "Organization": "Union Bank Of Nigeria Plc",
        "Primary Color": "#00B3F0",
        "Secondary Color": "#E6E6E6",
        "Tertiary Color": "#A3D9E9"
    },
    {
        "Organization": "United Bank For Africa Plc",
        "Primary Color": "#E91300",
        "Secondary Color": "#E6E6E6",
        "Tertiary Color": "#E6E6E6"
    },
    {
        "Organization": "Unity Bank Plc",
        "Primary Color": "#85C449",
        "Secondary Color": "#FFFFFF",
        "Tertiary Color": "#FFFFFF"
    },
    {
        "Organization": "Wema Bank Plc",
        "Primary Color": "#B34DA3",
        "Secondary Color": "#E6E6E6",
        "Tertiary Color": "#E6E6E6"
    },
    {
        "Organization": "Zenith Bank Plc",
        "Primary Color": "#7B7979",
        "Secondary Color": "#E92123",
        "Tertiary Color": "#E6E6E6"
    }
]

let file, canvas

// for (let i = 0; i < BANKS_DATA.length; i++) {
//     canvas = trianglify({
//         width: 1920,
//         height: 1080,
//         xColors: [BANKS_DATA[i]["Primary Color"], BANKS_DATA[i]["Secondary Color"], BANKS_DATA[i]["Tertiary Color"] || BANKS_DATA[i]["Secondary Color"]],
//     }).toCanvas()
//     file = fs.createWriteStream(`${BANKS_DATA[i].Organization}.png`)
//     canvas.createPNGStream().pipe(file)
// }


canvas = trianglify({
    width: 1920,
    height: 1080,
    xColors: ["#0E0E0E", "#E6E6E6"],
}).toCanvas()
file = fs.createWriteStream(`bg.png`)
canvas.createPNGStream().pipe(file)



/*
const BINS_DATA = [
    {
        "Bank Name": "INTERCONTINENTAL BANK PLC",
        "Brand": "VISA",
        "BIN": "400066"
    },
    {
        "Bank Name": "UNITED BANK FOR AFRICA PLC",
        "Brand": "VISA",
        "BIN": "404905"
    },
    {
        "Bank Name": "WELLS FARGO BANK NEVADA, N.A.",
        "Brand": "VISA",
        "BIN": "405030"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "407127"
    },
    {
        "Bank Name": "INTERCONTINENTAL BANK PLC",
        "Brand": "VISA",
        "BIN": "407467"
    },
    {
        "Bank Name": "INTERCONTINENTAL BANK PLC",
        "Brand": "VISA",
        "BIN": "407469"
    },
    {
        "Bank Name": "UNITED BANK FOR AFRICA PLC",
        "Brand": "VISA",
        "BIN": "407591"
    },
    {
        "Bank Name": "INTERCONTINENTAL BANK PLC",
        "Brand": "VISA",
        "BIN": "408301"
    },
    {
        "Bank Name": "INTERCONTINENTAL BANK PLC",
        "Brand": "VISA",
        "BIN": "408304"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "408378"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "408380"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "408407"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "408408"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "408409"
    },
    {
        "Bank Name": "AFRIBANK NIGERIA PLC",
        "Brand": "VISA",
        "BIN": "408410"
    },
    {
        "Bank Name": "INTERCONTINENTAL BANK PLC",
        "Brand": "VISA",
        "BIN": "408423"
    },
    {
        "Bank Name": "ZENITH BANK PLC",
        "Brand": "VISA",
        "BIN": "412053"
    },
    {
        "Bank Name": "ZENITH BANK PLC",
        "Brand": "VISA",
        "BIN": "413183"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "417059"
    },
    {
        "Bank Name": "SKYE BANK PLC",
        "Brand": "VISA",
        "BIN": "419225"
    },
    {
        "Bank Name": "SKYE BANK PLC",
        "Brand": "VISA",
        "BIN": "419227"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "419760"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "419761"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "419762"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "419763"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "419764"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "419765"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "419766"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "419767"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "419768"
    },
    {
        "Bank Name": "GUARANTY TRUST BANK PLC",
        "Brand": "VISA",
        "BIN": "420319"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "420321"
    },
    {
        "Bank Name": "UNITED BANK FOR AFRICA PLC",
        "Brand": "VISA",
        "BIN": "420359"
    },
    {
        "Bank Name": "STANDARD CHARTERED BANK NIGERIA, LTD.",
        "Brand": "VISA",
        "BIN": "422127"
    },
    {
        "Bank Name": "UNITED BANK FOR AFRICA PLC",
        "Brand": "VISA",
        "BIN": "422584"
    },
    {
        "Bank Name": "STANDARD CHARTERED BANK NIGERIA, LTD.",
        "Brand": "VISA",
        "BIN": "423895"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "424226"
    },
    {
        "Bank Name": "VALUCARD NIGERIA PLC",
        "Brand": "VISA",
        "BIN": "424367"
    },
    {
        "Bank Name": "VALUCARD NIGERIA PLC",
        "Brand": "VISA",
        "BIN": "424465"
    },
    {
        "Bank Name": "FIRST BANK OF NIGERIA PLC",
        "Brand": "VISA",
        "BIN": "427011"
    },
    {
        "Bank Name": "FIRST BANK OF NIGERIA PLC",
        "Brand": "VISA",
        "BIN": "427013"
    },
    {
        "Bank Name": "FIRST BANK OF NIGERIA PLC",
        "Brand": "VISA",
        "BIN": "427014"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "428502"
    },
    {
        "Bank Name": "OCEANIC BANK INTERNATIONAL (NIGERIA) PLC",
        "Brand": "VISA",
        "BIN": "427872"
    },
    {
        "Bank Name": "ACCESS BANK PLC",
        "Brand": "VISA",
        "BIN": "427873"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "427875"
    },
    {
        "Bank Name": "FIRST BANK OF NIGERIA PLC",
        "Brand": "VISA",
        "BIN": "427876"
    },
    {
        "Bank Name": "SKYE BANK PLC",
        "Brand": "VISA",
        "BIN": "427877"
    },
    {
        "Bank Name": "STANDARD CHARTERED BANK NIGERIA, LTD.",
        "Brand": "VISA",
        "BIN": "427889"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "428504"
    },
    {
        "Bank Name": "GUARANTY TRUST BANK PLC",
        "Brand": "VISA",
        "BIN": "428222"
    },
    {
        "Bank Name": "UNION BANK OF NIGERIA PLC",
        "Brand": "VISA",
        "BIN": "433960"
    },
    {
        "Bank Name": "SKYE BANK PLC",
        "Brand": "VISA",
        "BIN": "437360"
    },
    {
        "Bank Name": "UNITED BANK FOR AFRICA PLC",
        "Brand": "VISA",
        "BIN": "444585"
    },
    {
        "Bank Name": "UNITED BANK FOR AFRICA PLC",
        "Brand": "VISA",
        "BIN": "444586"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "445817"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "446965"
    },
    {
        "Bank Name": "ZENITH BANK PLC",
        "Brand": "VISA",
        "BIN": "450073"
    },
    {
        "Bank Name": "ZENITH BANK PLC",
        "Brand": "VISA",
        "BIN": "450075"
    },
    {
        "Bank Name": "ZENITH BANK PLC",
        "Brand": "VISA",
        "BIN": "450090"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "450091"
    },
    {
        "Bank Name": "ZENITH BANK PLC",
        "Brand": "VISA",
        "BIN": "450093"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "457766"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "457768"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "457769"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "457770"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "457771"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "457803"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "457804"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "457805"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "457806"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "457807"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "458274"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "458301"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "458478"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "458588"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "458792"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "458793"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "460054"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "460055"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "467768"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "467874"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "467875"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "468588"
    },
    {
        "Bank Name": "AFRIBANK NIGERIA PLC",
        "Brand": "VISA",
        "BIN": "469617"
    },
    {
        "Bank Name": "ACCESS BANK PLC",
        "Brand": "VISA",
        "BIN": "469665"
    },
    {
        "Bank Name": "ACCESS BANK PLC",
        "Brand": "VISA",
        "BIN": "469666"
    },
    {
        "Bank Name": "ACCESS BANK PLC",
        "Brand": "VISA",
        "BIN": "469667"
    },
    {
        "Bank Name": "ACCESS BANK PLC",
        "Brand": "VISA",
        "BIN": "470484"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "470651"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "470653"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "470654"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "471463"
    },
    {
        "Bank Name": "SKYE BANK PLC",
        "Brand": "VISA",
        "BIN": "472482"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "473845"
    },
    {
        "Bank Name": "INTERPAYMENT SERVICES, LTD.",
        "Brand": "VISA",
        "BIN": "474121"
    },
    {
        "Bank Name": "ACCESS BANK PLC",
        "Brand": "VISA",
        "BIN": "475177"
    },
    {
        "Bank Name": "UNITED BANK FOR AFRICA PLC",
        "Brand": "VISA",
        "BIN": "484842"
    },
    {
        "Bank Name": "CITIBANK NIGERIA, LTD.",
        "Brand": "VISA",
        "BIN": "485451"
    },
    {
        "Bank Name": "----",
        "Brand": "VISA",
        "BIN": "485483"
    },
    {
        "Bank Name": "Bank Name",
        "Brand": "Brand",
        "BIN": "BIN"
    },
    {
        "Bank Name": "----",
        "Brand": "Mastercard Cirrus",
        "BIN": "519909"
    },
    {
        "Bank Name": "----",
        "Brand": "Mastercard Cirrus",
        "BIN": "519510"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa",
        "BIN": "488992"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa Visa.",
        "BIN": "482132"
    },
    {
        "Bank Name": "Union Bank Of Nigeria",
        "Brand": "Visa",
        "BIN": "469023"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa Visa Gold",
        "BIN": "460053"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa Visa.",
        "BIN": "458536"
    },
    {
        "Bank Name": "Cscbank S.A.L.",
        "Brand": "Mastercard",
        "BIN": "533897"
    },
    {
        "Bank Name": "----",
        "Brand": "Mastercard Cirrus",
        "BIN": "533678"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa Visa Platinum",
        "BIN": "457789"
    },
    {
        "Bank Name": "Zenith Bank",
        "Brand": "Mastercard",
        "BIN": "533301"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa Visa.",
        "BIN": "432226"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa Visa Gold",
        "BIN": "475176"
    },
    {
        "Bank Name": "Guaranty Trust Bank Plc",
        "Brand": "Visa",
        "BIN": "445807"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa Visa Platinum",
        "BIN": "420335"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa Visa.",
        "BIN": "420332"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa",
        "BIN": "419228"
    },
    {
        "Bank Name": "Skye Bank Plc",
        "Brand": "Visa",
        "BIN": "419226"
    },
    {
        "Bank Name": "Access",
        "Brand": "Visa",
        "BIN": "418742"
    },
    {
        "Bank Name": "----",
        "Brand": "Mastercard Cirrus",
        "BIN": "532155"
    },
    {
        "Bank Name": "----",
        "Brand": "Mastercard Cirrus",
        "BIN": "531931"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa Visa.",
        "BIN": "444582"
    },
    {
        "Bank Name": "----",
        "Brand": "Mastercard Mc Prepaid",
        "BIN": "531505"
    },
    {
        "Bank Name": "----",
        "Brand": "Mastercard Mc Prepaid",
        "BIN": "531504"
    },
    {
        "Bank Name": "----",
        "Brand": "Mastercard Mc Prepaid",
        "BIN": "531499"
    },
    {
        "Bank Name": "----",
        "Brand": "Mastercard Mc Prepaid",
        "BIN": "531498"
    },
    {
        "Bank Name": "----",
        "Brand": "Mastercard",
        "BIN": "531224"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa",
        "BIN": "428603"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa Visa.",
        "BIN": "428503"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa Visa Gold",
        "BIN": "428501"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa Visa.",
        "BIN": "428500"
    },
    {
        "Bank Name": "Intercontinental Bank Plc",
        "Brand": "Visa",
        "BIN": "408424"
    },
    {
        "Bank Name": "Intercontinental Bank Plc",
        "Brand": "Visa",
        "BIN": "408422"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa Visa Gold",
        "BIN": "408379"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa Visa Platinum",
        "BIN": "408303"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa Visa Gold",
        "BIN": "408302"
    },
    {
        "Bank Name": "Union Bank Of Nigeria Plc",
        "Brand": "Visa",
        "BIN": "428272"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa Visa Infinite",
        "BIN": "471459"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa Visa Gold",
        "BIN": "471458"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa Visa Gold",
        "BIN": "471415"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa Visa Corporate",
        "BIN": "443893"
    },
    {
        "Bank Name": "----",
        "Brand": "Mastercard Cirrus",
        "BIN": "529751"
    },
    {
        "Bank Name": "----",
        "Brand": "Mastercard",
        "BIN": "529720"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa Visa.",
        "BIN": "470655"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa Visa Gold",
        "BIN": "470652"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa Visa.",
        "BIN": "406995"
    },
    {
        "Bank Name": "Ecobank Nigeria Plc",
        "Brand": "Mastercard",
        "BIN": "531667"
    },
    {
        "Bank Name": "----",
        "Brand": "Mastercard",
        "BIN": "528649"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa Visa Gold",
        "BIN": "416919"
    },
    {
        "Bank Name": "Access Bank Plc",
        "Brand": "Visa",
        "BIN": "412702"
    },
    {
        "Bank Name": "Banco Caja De Ahorro, S.A.",
        "Brand": "Visa",
        "BIN": "499908"
    },
    {
        "Bank Name": "American Express",
        "Brand": "American Express",
        "BIN": "376862"
    },
    {
        "Bank Name": "United Bank For Africa Plc",
        "Brand": "Visa",
        "BIN": "422594"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa",
        "BIN": "422500"
    },
    {
        "Bank Name": "Standard Chartered Bank Nigeria, Ltd.",
        "Brand": "Visa",
        "BIN": "422808"
    },
    {
        "Bank Name": "Zenith Bank",
        "Brand": "Mastercard",
        "BIN": "559443"
    },
    {
        "Bank Name": "Cscbank S.A.L.",
        "Brand": "Mastercard",
        "BIN": "557669"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa",
        "BIN": "458587"
    },
    {
        "Bank Name": "Visa New Zealand",
        "Brand": "Visa",
        "BIN": "499910"
    },
    {
        "Bank Name": "Intercontinental Bank Plc",
        "Brand": "Mastercard",
        "BIN": "531213"
    },
    {
        "Bank Name": "----",
        "Brand": "Mastercard",
        "BIN": "539948"
    },
    {
        "Bank Name": "Cscbank S.A.L.",
        "Brand": "Mastercard",
        "BIN": "528955"
    },
    {
        "Bank Name": "Guaranty Trust Bank Plc",
        "Brand": "Visa",
        "BIN": "420320"
    },
    {
        "Bank Name": "First Bank Of Nigeria Plc",
        "Brand": "Visa",
        "BIN": "427012"
    },
    {
        "Bank Name": "Access Bank Plc",
        "Brand": "Visa",
        "BIN": "403660"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa",
        "BIN": "408305"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa",
        "BIN": "471449"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa",
        "BIN": "420334"
    },
    {
        "Bank Name": "Zenith Bank Plc",
        "Brand": "Visa",
        "BIN": "450074"
    },
    {
        "Bank Name": "Access Bank Plc",
        "Brand": "Visa",
        "BIN": "407586"
    },
    {
        "Bank Name": "Access Bank Plc",
        "Brand": "Visa",
        "BIN": "475175"
    },
    {
        "Bank Name": "Zenith Bank",
        "Brand": "Mastercard",
        "BIN": "530519"
    },
    {
        "Bank Name": "Wema Bank Plc",
        "Brand": "Visa",
        "BIN": "428270"
    },
    {
        "Bank Name": "----",
        "Brand": "Mastercard",
        "BIN": "549970"
    },
    {
        "Bank Name": "Zenith Bank",
        "Brand": "Mastercard",
        "BIN": "515803"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa",
        "BIN": "428602"
    },
    {
        "Bank Name": "Ecobank Nigeria Plc",
        "Brand": "Mastercard",
        "BIN": "528916"
    },
    {
        "Bank Name": "Skye Bank Plc",
        "Brand": "Mastercard",
        "BIN": "539945"
    },
    {
        "Bank Name": "Banco Caja De Ahorro, S.A.",
        "Brand": "Visa",
        "BIN": "499909"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa",
        "BIN": "408425"
    },
    {
        "Bank Name": "Stanbic Ibtc Bank",
        "Brand": "Mastercard",
        "BIN": "542077"
    },
    {
        "Bank Name": "United Bank For Africa Plc",
        "Brand": "Visa",
        "BIN": "428223"
    },
    {
        "Bank Name": "Access Bank Plc",
        "Brand": "Visa",
        "BIN": "418743"
    },
    {
        "Bank Name": "United Bank For Africa Plc",
        "Brand": "Visa",
        "BIN": "420358"
    },
    {
        "Bank Name": "Zenith Bank Plc",
        "Brand": "Visa",
        "BIN": "413103"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa",
        "BIN": "450092"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa",
        "BIN": "445493"
    },
    {
        "Bank Name": "Standard Chartered Bank Nigeria, Ltd.",
        "Brand": "Visa",
        "BIN": "439358"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa",
        "BIN": "428225"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa",
        "BIN": "420333"
    },
    {
        "Bank Name": "Ecobank Nigeria Plc",
        "Brand": "Mastercard",
        "BIN": "548458"
    },
    {
        "Bank Name": "----",
        "Brand": "Visa",
        "BIN": "471464"
    },
    {
        "Bank Name": "Intercontinental Bank Plc",
        "Brand": "Visa",
        "BIN": "408421"
    },
    {
        "Bank Name": "Guaranty Trust Bank",
        "Brand": "Mastercard",
        "BIN": "533853"
    },
    {
        "Bank Name": "Guaranty Trust Bank Plc",
        "Brand": "Mastercard",
        "BIN": "533856"
    }
]

const BINS_DATA_2 = [
    {
        "BIN/IIN": "403660",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Access Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": ""
    },
    {
        "BIN/IIN": "407586",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Access Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "BUSINESS"
    },
    {
        "BIN/IIN": "412702",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Access Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "INFINITE"
    },
    {
        "BIN/IIN": "418742",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Access Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "418743",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Access Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "427873",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Access Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "ELECTRON"
    },
    {
        "BIN/IIN": "467768",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Access Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "CORPORATE T&E"
    },
    {
        "BIN/IIN": "469665",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Access Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "469666",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Access Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "469667",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Access Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "470484",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Access Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "475175",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Access Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "475176",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Access Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "475177",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Access Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "517731",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Access Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PERSONAL"
    },
    {
        "BIN/IIN": "519902",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Access Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PERSONAL"
    },
    {
        "BIN/IIN": "522522",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Access Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "TITANIUM"
    },
    {
        "BIN/IIN": "529820",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Access Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "531931",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Access Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID RELOADABLE"
    },
    {
        "BIN/IIN": "536613",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Access Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "557694",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Access Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": ""
    },
    {
        "BIN/IIN": "559447",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Access Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },

    {
        "BIN/IIN": "400830",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": ""
    },
    {
        "BIN/IIN": "408407",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "408408",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "408409",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "408410",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "428225",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "ELECTRON"
    },
    {
        "BIN/IIN": "469617",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "CLASSIC"
    },

    {
        "BIN/IIN": "428500",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Keystone Bank",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "428501",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Keystone Bank",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "428502",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Keystone Bank",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "428503",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Keystone Bank",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "428504",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Keystone Bank",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },

    {
        "BIN/IIN": "421201",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Keystone Bank",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": ""
    },

    {
        "BIN/IIN": "483953",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "CAJA RURAL DE ALMERIA Y MALAGA",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "CLASSIC"
    },

    {
        "BIN/IIN": "485451",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Citibank Nigeria Limited",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "CORPORATE T&E"
    },
    {
        "BIN/IIN": "486508",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Citibank Nigeria Limited",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "PURCHASING"
    },
    {
        "BIN/IIN": "533031",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Citibank Nigeria Limited",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "CORPORATE CARD"
    },
    {
        "BIN/IIN": "555060",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Citibank Nigeria Limited",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "CORPORATE PURCHASING"
    },
    {
        "BIN/IIN": "555061",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Citibank Nigeria Limited",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "CORPORATE PURCHASING"
    },
    {
        "BIN/IIN": "555062",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Citibank Nigeria Limited",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "CORPORATE PURCHASING"
    },

    {
        "BIN/IIN": "547638",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "CSCBANK S.A.L.",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "BUSINESS"
    },
    {
        "BIN/IIN": "557669",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "CSCBANK S.A.L.",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },

    {
        "BIN/IIN": "516491",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Diamond Bank",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "527678",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Diamond Bank",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "541042",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Diamond Bank",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PERSONAL"
    },
    {
        "BIN/IIN": "553534",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Diamond Bank",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "GOLD"
    },

    {
        "BIN/IIN": "418547",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Diamond Bank",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "427875",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Diamond Bank",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "ELECTRON"
    },
    {
        "BIN/IIN": "459262",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Diamond Bank",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "496009",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Diamond Bank",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "496021",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Diamond Bank",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "ELECTRON"
    },
    {
        "BIN/IIN": "496022",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Diamond Bank",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "496023",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Diamond Bank",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "496024",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Diamond Bank",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "496026",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Diamond Bank",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "519626",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Diamond Bank",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },

    {
        "BIN/IIN": "462153",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "CLASSIC"
    },

    {
        "BIN/IIN": "512269",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "519789",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID BUSINESS"
    },
    {
        "BIN/IIN": "528917",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "529751",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "529778",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "531224",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "CORPORATE"
    },
    {
        "BIN/IIN": "531498",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "531499",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "BUSINESS"
    },
    {
        "BIN/IIN": "531504",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "531505",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "531667",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "531992",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "532968",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "CORPORATE"
    },
    {
        "BIN/IIN": "537010",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "537011",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "538115",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "548458",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "548712",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "STANDARD"
    },

    {
        "BIN/IIN": "411736",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "411737",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "468555",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": ""
    },

    {
        "BIN/IIN": "405030",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Fidelity Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "ELECTRON"
    },
    {
        "BIN/IIN": "410373",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Fidelity Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": ""
    },
    {
        "BIN/IIN": "446965",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Fidelity Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "458792",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Fidelity Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "458793",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Fidelity Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "460053",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Fidelity Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "460054",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Fidelity Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "460055",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Fidelity Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "468219",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Fidelity Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "514585",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Fidelity Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "517897",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Fidelity Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "524271",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Fidelity Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },

    {
        "BIN/IIN": "427011",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First Bank Nigeria Ltd.",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "427012",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First Bank Nigeria Ltd.",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "427013",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First Bank Nigeria Ltd.",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "427014",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First Bank Nigeria Ltd.",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "427876",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First Bank Nigeria Ltd.",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "ELECTRON"
    },
    {
        "BIN/IIN": "443893",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First Bank Nigeria Ltd.",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "CORPORATE T&E"
    },
    {
        "BIN/IIN": "457714",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First Bank Nigeria Ltd.",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": ""
    },
    {
        "BIN/IIN": "470651",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First Bank Nigeria Ltd.",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "470652",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First Bank Nigeria Ltd.",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "470653",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First Bank Nigeria Ltd.",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "INFINITE"
    },
    {
        "BIN/IIN": "470654",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First Bank Nigeria Ltd.",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "CORPORATE T&E"
    },
    {
        "BIN/IIN": "470655",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First Bank Nigeria Ltd.",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "519510",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First Bank Nigeria Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "519878",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First Bank Nigeria Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "539923",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First Bank Nigeria Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "543338",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First Bank Nigeria Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "550542",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First Bank Nigeria Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": ""
    },

    {
        "BIN/IIN": "400691",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First City Monument Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": ""
    },
    {
        "BIN/IIN": "416919",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First City Monument Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "432226",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First City Monument Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "462516",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First City Monument Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "462517",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First City Monument Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "467874",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First City Monument Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "467875",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First City Monument Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "485483",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First City Monument Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "485484",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First City Monument Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "516005",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First City Monument Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "519830",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First City Monument Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "520725",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First City Monument Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "521886",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First City Monument Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "521973",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First City Monument Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "524282",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First City Monument Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "527699",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First City Monument Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "533797",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First City Monument Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "536337",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First City Monument Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "542390",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First City Monument Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },

    {
        "BIN/IIN": "506105",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "First Bank Nigeria Ltd.",
        "Card Brand": "MAESTRO",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },

    {
        "BIN/IIN": "541569",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Guaranty Trust Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },

    {
        "BIN/IIN": "420319",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Guaranty Trust Bank Plc PLC",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "420320",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Guaranty Trust Bank Plc PLC",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "420321",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Guaranty Trust Bank Plc PLC",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "428222",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Guaranty Trust Bank Plc PLC",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "ELECTRON"
    },
    {
        "BIN/IIN": "442176",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Guaranty Trust Bank Plc PLC",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": ""
    },
    {
        "BIN/IIN": "445807",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Guaranty Trust Bank Plc PLC",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "464782",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Guaranty Trust Bank Plc PLC",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "CORPORATE T&E"
    },
    {
        "BIN/IIN": "517455",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Guaranty Trust Bank Plc PLC",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "522340",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Guaranty Trust Bank Plc PLC",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "BUSINESS"
    },
    {
        "BIN/IIN": "532732",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Guaranty Trust Bank Plc PLC",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "533853",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Guaranty Trust Bank Plc PLC",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "533856",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Guaranty Trust Bank Plc PLC",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "BUSINESS"
    },
    {
        "BIN/IIN": "539983",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Guaranty Trust Bank Plc PLC",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "540746",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Guaranty Trust Bank Plc PLC",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "540761",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Guaranty Trust Bank Plc PLC",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "541508",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Guaranty Trust Bank Plc PLC",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "552264",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Guaranty Trust Bank Plc PLC",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "WORLD"
    },
    {
        "BIN/IIN": "553396",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Guaranty Trust Bank Plc PLC",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "CORPORATE"
    },
    {
        "BIN/IIN": "553415",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Guaranty Trust Bank Plc PLC",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "CORPORATE"
    },
    {
        "BIN/IIN": "559754",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Guaranty Trust Bank Plc PLC",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PLATINUM"
    },

    {
        "BIN/IIN": "512934",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Heritage Banking Company Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "516195",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Heritage Banking Company Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "517058",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Heritage Banking Company Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "518304",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Heritage Banking Company Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "523740",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Heritage Banking Company Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "523776",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Heritage Banking Company Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "528253",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Heritage Banking Company Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID RELOADABLE"
    },
    {
        "BIN/IIN": "528668",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Heritage Banking Company Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "529863",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Heritage Banking Company Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "537610",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Heritage Banking Company Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "541099",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Heritage Banking Company Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },

    {
        "BIN/IIN": "636088",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Access Bank Plc",
        "Card Brand": "MAESTRO",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },

    {
        "BIN/IIN": "474121",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Interpayment Services Ltd.",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID TRAVEL MONEY"
    },

    {
        "BIN/IIN": "553813",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Jaiz Bank",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "559934",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Jaiz Bank",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID RELOADABLE"
    },

    {
        "BIN/IIN": "475186",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Keystone Bank",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": ""
    },
    {
        "BIN/IIN": "546778",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Keystone Bank",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "555940",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Keystone Bank",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },

    {
        "BIN/IIN": "571081",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Maestro International",
        "Card Brand": "MAESTRO",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "576880",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Maestro International",
        "Card Brand": "MAESTRO",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "579876",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Maestro International",
        "Card Brand": "MAESTRO",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },

    {
        "BIN/IIN": "419710",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": ""
    },
    {
        "BIN/IIN": "517054",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "523735",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PERSONAL"
    },

    {
        "BIN/IIN": "603948",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Obi Petrol Card",
        "Card Brand": "MAESTRO",
        "Card Type": "DEBIT",
        "Card Level": ""
    },

    {
        "BIN/IIN": "506122",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "MAESTRO",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },

    {
        "BIN/IIN": "404930",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": ""
    },
    {
        "BIN/IIN": "427872",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "ELECTRON"
    },
    {
        "BIN/IIN": "499908",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "499909",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "499910",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "BUSINESS"
    },

    {
        "BIN/IIN": "408378",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "408379",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "408380",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "428602",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "428603",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "539948",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Ecobank Nigeria Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": ""
    },

    {
        "BIN/IIN": "523046",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Providus Bank",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "523598",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Providus Bank",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "BLACK"
    },

    {
        "BIN/IIN": "419225",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "419226",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "419227",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "419228",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "424226",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "427877",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "ELECTRON"
    },
    {
        "BIN/IIN": "437360",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "CORPORATE T&E"
    },
    {
        "BIN/IIN": "458274",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "458301",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "458302",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "458478",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "458536",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "472482",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "519908",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "519909",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "529539",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "536135",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "538752",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "539945",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "540648",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "546557",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "546894",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "549531",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Polaris Bank",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PLATINUM"
    },

    {
        "BIN/IIN": "552160",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Stanbic IBTC Bank Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "STANDARD"
    },

    {
        "BIN/IIN": "526125",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Stanbic IBTC Bank Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": ""
    },
    {
        "BIN/IIN": "526131",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Stanbic IBTC Bank Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": ""
    },
    {
        "BIN/IIN": "526137",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Stanbic IBTC Bank Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": ""
    },
    {
        "BIN/IIN": "526154",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Stanbic IBTC Bank Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": ""
    },
    {
        "BIN/IIN": "526162",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Stanbic IBTC Bank Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": ""
    },

    {
        "BIN/IIN": "519899",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Stanbic IBTC Bank Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "519904",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Stanbic IBTC Bank Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "519905",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Stanbic IBTC Bank Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "522901",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Stanbic IBTC Bank Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "524275",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Stanbic IBTC Bank Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "524687",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Stanbic IBTC Bank Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "526116",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Stanbic IBTC Bank Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "527074",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Stanbic IBTC Bank Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "WORLD"
    },
    {
        "BIN/IIN": "528649",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Stanbic IBTC Bank Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "528650",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Stanbic IBTC Bank Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "533122",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Stanbic IBTC Bank Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "559424",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Stanbic IBTC Bank Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "559432",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Stanbic IBTC Bank Ltd.",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },

    {
        "BIN/IIN": "417059",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Standard Chartered Bank Nigeria Ltd.",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "ELECTRON"
    },
    {
        "BIN/IIN": "458587",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Standard Chartered Bank Nigeria Ltd.",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "458588",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Standard Chartered Bank Nigeria Ltd.",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "INFINITE"
    },
    {
        "BIN/IIN": "471415",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Standard Chartered Bank Nigeria Ltd.",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "471463",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Standard Chartered Bank Nigeria Ltd.",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "471464",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Standard Chartered Bank Nigeria Ltd.",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "PLATINUM"
    },

    {
        "BIN/IIN": "422127",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Standard Chartered Bank Nigeria Ltd.",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "422808",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Standard Chartered Bank Nigeria Ltd.",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "ELECTRON"
    },
    {
        "BIN/IIN": "423895",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Standard Chartered Bank Nigeria Ltd.",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": ""
    },
    {
        "BIN/IIN": "427889",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Standard Chartered Bank Nigeria Ltd.",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "BUSINESS"
    },
    {
        "BIN/IIN": "439358",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Standard Chartered Bank Nigeria Ltd.",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "ELECTRON"
    },
    {
        "BIN/IIN": "471458",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Standard Chartered Bank Nigeria Ltd.",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "INFINITE"
    },
    {
        "BIN/IIN": "471459",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Standard Chartered Bank Nigeria Ltd.",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "INFINITE"
    },

    {
        "BIN/IIN": "406162",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Sterling Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": ""
    },
    {
        "BIN/IIN": "406995",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Sterling Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "430104",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Sterling Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "430116",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Sterling Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "ELECTRON"
    },
    {
        "BIN/IIN": "445817",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Sterling Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "450710",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Sterling Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "471232",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Sterling Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "488992",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Sterling Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "533477",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Sterling Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "533678",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Sterling Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID RELOADABLE"
    },

    {
        "BIN/IIN": "411898",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Unified Payment Services",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "444368",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Unified Payment Services",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "462091",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Unified Payment Services",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "467817",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Unified Payment Services",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "473845",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Unified Payment Services",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "483427",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Unified Payment Services",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "484776",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Unified Payment Services",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": ""
    },
    {
        "BIN/IIN": "485429",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Unified Payment Services",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "492584",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Unified Payment Services",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PLATINUM"
    },

    {
        "BIN/IIN": "469023",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Union Bank of Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "CLASSIC"
    },

    {
        "BIN/IIN": "419760",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Union Bank of Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "419761",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Union Bank of Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "419762",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Union Bank of Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "419763",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Union Bank of Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "419764",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Union Bank of Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "419765",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Union Bank of Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "419766",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Union Bank of Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "419767",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Union Bank of Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "419768",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Union Bank of Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "420332",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Union Bank of Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "420333",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Union Bank of Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "420334",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Union Bank of Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "420335",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Union Bank of Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "428272",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Union Bank of Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "ELECTRON"
    },
    {
        "BIN/IIN": "433960",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Union Bank of Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": ""
    },
    {
        "BIN/IIN": "517214",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Union Bank of Nigeria Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "517294",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Union Bank of Nigeria Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "518539",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Union Bank of Nigeria Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "524289",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Union Bank of Nigeria Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "536024",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Union Bank of Nigeria Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "537691",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Union Bank of Nigeria Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "549479",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Union Bank of Nigeria Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "BUSINESS"
    },

    {
        "BIN/IIN": "404905",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "United Bank For Africa Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": ""
    },
    {
        "BIN/IIN": "407591",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "United Bank For Africa Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "420358",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "United Bank For Africa Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "420359",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "United Bank For Africa Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "422500",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "United Bank For Africa Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "INFINITE"
    },
    {
        "BIN/IIN": "422584",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "United Bank For Africa Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "422594",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "United Bank For Africa Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "428223",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "United Bank For Africa Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "ELECTRON"
    },
    {
        "BIN/IIN": "444581",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "United Bank For Africa Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "444582",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "United Bank For Africa Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "444585",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "United Bank For Africa Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "444586",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "United Bank For Africa Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "445493",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "United Bank For Africa Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "482132",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "United Bank For Africa Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "484842",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "United Bank For Africa Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "517868",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "United Bank For Africa Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "519863",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "United Bank For Africa Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "WORLD"
    },
    {
        "BIN/IIN": "519885",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "United Bank For Africa Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PERSONAL"
    },
    {
        "BIN/IIN": "519911",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "United Bank For Africa Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PERSONAL"
    },
    {
        "BIN/IIN": "521090",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "United Bank For Africa Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PERSONAL"
    },
    {
        "BIN/IIN": "522899",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "United Bank For Africa Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": ""
    },
    {
        "BIN/IIN": "525634",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "United Bank For Africa Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "528655",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "United Bank For Africa Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": ""
    },
    {
        "BIN/IIN": "531165",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "United Bank For Africa Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "538956",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "United Bank For Africa Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "539586",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "United Bank For Africa Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "557581",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "United Bank For Africa Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": ""
    },

    {
        "BIN/IIN": "521988",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Unity Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "532155",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Unity Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "536399",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Unity Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "BUSINESS"
    },
    {
        "BIN/IIN": "551609",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Unity Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },

    {
        "BIN/IIN": "402438",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Valucard Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": ""
    },
    {
        "BIN/IIN": "424367",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Valucard Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "ELECTRON"
    },
    {
        "BIN/IIN": "424465",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Valucard Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": ""
    },
    {
        "BIN/IIN": "432288",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Valucard Nigeria Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": ""
    },

    {
        "BIN/IIN": "457803",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Wema Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "457804",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Wema Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "457805",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Wema Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "457806",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Wema Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "463958",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Wema Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },

    {
        "BIN/IIN": "428270",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Wema Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "ELECTRON"
    },
    {
        "BIN/IIN": "472491",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Wema Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": ""
    },

    {
        "BIN/IIN": "512336",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "513469",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "BUSINESS"
    },
    {
        "BIN/IIN": "515803",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "521952",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "BUSINESS"
    },
    {
        "BIN/IIN": "521982",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PERSONAL"
    },
    {
        "BIN/IIN": "527282",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "WORLD"
    },
    {
        "BIN/IIN": "529720",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PERSONAL"
    },
    {
        "BIN/IIN": "530519",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "531525",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "533301",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "536579",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "539941",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },
    {
        "BIN/IIN": "540884",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "542231",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID RELOADABLE"
    },
    {
        "BIN/IIN": "547160",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "549970",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "556350",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "FLEET"
    },
    {
        "BIN/IIN": "559443",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "DEBIT",
        "Card Level": "STANDARD"
    },

    {
        "BIN/IIN": "412053",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "413103",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "413183",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "ELECTRON"
    },
    {
        "BIN/IIN": "413185",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "413197",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "INFINITE"
    },
    {
        "BIN/IIN": "443862",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": ""
    },
    {
        "BIN/IIN": "450073",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "450074",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "GOLD"
    },
    {
        "BIN/IIN": "450075",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "PLATINUM"
    },
    {
        "BIN/IIN": "450090",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "450091",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "450092",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "PREPAID"
    },
    {
        "BIN/IIN": "450093",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "CORPORATE T&E"
    },
    {
        "BIN/IIN": "468588",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "DEBIT",
        "Card Level": "CLASSIC"
    },
    {
        "BIN/IIN": "471449",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "VISA",
        "Card Type": "CREDIT",
        "Card Level": "INFINITE"
    },
    {
        "BIN/IIN": "553188",
        "Country": "NIGERIA",
        "Issuer Name / Bank": "Zenith Bank Plc",
        "Card Brand": "MASTERCARD",
        "Card Type": "CREDIT",
        "Card Level": "CORPORATE"
    }
]

// const PARSED_BINS = BINS_DATA.map(bin => {
//     return {
//         merchant: capitalizeFirsts(bin["Bank Name"].toLowerCase()),
//         issuer: bin.Brand,
//         bin: bin.BIN
//     }
// }).sort((a, b) => a.merchant.toLowerCase().localeCompare(b.merchant.toLowerCase()))

// const PARSED_BINS_2 = BINS_DATA_2.map(bin => {
//     return {
//         issuer: capitalizeFirsts(bin["Issuer Name / Bank"].toLowerCase()),
//         brand: bin["Card Brand"],
//         bin: bin["BIN/IIN"],
//         level: bin["Card Level"],
//         type: bin["Card Type"]
//     }
// }).sort((a, b) => a.issuer.toLowerCase().localeCompare(b.issuer.toLowerCase()))


// const extractedData = [...new Set(BINS_DATA_2.map(item => item["Issuer Name / Bank"]))]


// function capitalizeFirsts(name) {
//     const splitName = name.split(" ")
//     const namesUpper = []
//     for (const n of splitName) {
//         namesUpper.push(n[0].toUpperCase() + n.slice(1))
//     }
//     return namesUpper.join(" ")
// }

// console.log(PARSED_BINS_2)

// writeFileSync("./parsedBins2.js", JSON.stringify(PARSED_BINS_2))


// objArray.sort((a, b) => a.DepartmentName.toLowerCase().localeCompare(b.DepartmentName.toLowerCase()))
*/