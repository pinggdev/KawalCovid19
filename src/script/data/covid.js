const dataIndonesia = [{
    "name": "Indonesia",
    "positif": "115,056",
    "sembuh": "72,050",
    "meninggal": "5,388",
    "dirawat": "37,618"
}];

const dataProvinsi = [{
        "attributes": {
            "FID": 15,
            "Kode_Provi": 35,
            "Provinsi": "Jawa Timur",
            "Kasus_Posi": 23412,
            "Kasus_Semb": 15877,
            "Kasus_Meni": 1781
        }
    },
    {
        "attributes": {
            "FID": 11,
            "Kode_Provi": 31,
            "Provinsi": "DKI Jakarta",
            "Kasus_Posi": 23026,
            "Kasus_Semb": 14381,
            "Kasus_Meni": 874
        }
    },
    {
        "attributes": {
            "FID": 13,
            "Kode_Provi": 33,
            "Provinsi": "Jawa Tengah",
            "Kasus_Posi": 9887,
            "Kasus_Semb": 5980,
            "Kasus_Meni": 665
        }
    },
    {
        "attributes": {
            "FID": 27,
            "Kode_Provi": 73,
            "Provinsi": "Sulawesi Selatan",
            "Kasus_Posi": 9861,
            "Kasus_Semb": 6780,
            "Kasus_Meni": 328
        }
    },
    {
        "attributes": {
            "FID": 12,
            "Kode_Provi": 32,
            "Provinsi": "Jawa Barat",
            "Kasus_Posi": 6787,
            "Kasus_Semb": 4210,
            "Kasus_Meni": 216
        }
    },
    {
        "attributes": {
            "FID": 22,
            "Kode_Provi": 63,
            "Provinsi": "Kalimantan Selatan",
            "Kasus_Posi": 6357,
            "Kasus_Semb": 3609,
            "Kasus_Meni": 297
        }
    },
    {
        "attributes": {
            "FID": 2,
            "Kode_Provi": 12,
            "Provinsi": "Sumatera Utara",
            "Kasus_Posi": 4261,
            "Kasus_Semb": 1717,
            "Kasus_Meni": 209
        }
    },
    {
        "attributes": {
            "FID": 17,
            "Kode_Provi": 51,
            "Provinsi": "Bali",
            "Kasus_Posi": 3578,
            "Kasus_Semb": 3085,
            "Kasus_Meni": 48
        }
    },
    {
        "attributes": {
            "FID": 6,
            "Kode_Provi": 16,
            "Provinsi": "Sumatera Selatan",
            "Kasus_Posi": 3490,
            "Kasus_Semb": 1890,
            "Kasus_Meni": 169
        }
    },
    {
        "attributes": {
            "FID": 33,
            "Kode_Provi": 94,
            "Provinsi": "Papua",
            "Kasus_Posi": 3164,
            "Kasus_Semb": 1444,
            "Kasus_Meni": 33
        }
    },
    {
        "attributes": {
            "FID": 25,
            "Kode_Provi": 71,
            "Provinsi": "Sulawesi Utara",
            "Kasus_Posi": 2776,
            "Kasus_Semb": 1391,
            "Kasus_Meni": 134
        }
    },
    {
        "attributes": {
            "FID": 18,
            "Kode_Provi": 52,
            "Provinsi": "Nusa Tenggara Barat",
            "Kasus_Posi": 2171,
            "Kasus_Semb": 1334,
            "Kasus_Meni": 118
        }
    },
    {
        "attributes": {
            "FID": 16,
            "Kode_Provi": 36,
            "Provinsi": "Banten",
            "Kasus_Posi": 1924,
            "Kasus_Semb": 1422,
            "Kasus_Meni": 93
        }
    },
    {
        "attributes": {
            "FID": 21,
            "Kode_Provi": 62,
            "Provinsi": "Kalimantan Tengah",
            "Kasus_Posi": 1844,
            "Kasus_Semb": 1277,
            "Kasus_Meni": 91
        }
    },
    {
        "attributes": {
            "FID": 23,
            "Kode_Provi": 64,
            "Provinsi": "Kalimantan Timur",
            "Kasus_Posi": 1598,
            "Kasus_Semb": 974,
            "Kasus_Meni": 41
        }
    },
    {
        "attributes": {
            "FID": 32,
            "Kode_Provi": 82,
            "Provinsi": "Maluku Utara",
            "Kasus_Posi": 1568,
            "Kasus_Semb": 558,
            "Kasus_Meni": 49
        }
    },
    {
        "attributes": {
            "FID": 29,
            "Kode_Provi": 75,
            "Provinsi": "Gorontalo",
            "Kasus_Posi": 1387,
            "Kasus_Semb": 763,
            "Kasus_Meni": 37
        }
    },
    {
        "attributes": {
            "FID": 31,
            "Kode_Provi": 81,
            "Provinsi": "Maluku",
            "Kasus_Posi": 1146,
            "Kasus_Semb": 756,
            "Kasus_Meni": 23
        }
    },
    {
        "attributes": {
            "FID": 3,
            "Kode_Provi": 13,
            "Provinsi": "Sumatera Barat",
            "Kasus_Posi": 987,
            "Kasus_Semb": 773,
            "Kasus_Meni": 34
        }
    },
    {
        "attributes": {
            "FID": 28,
            "Kode_Provi": 74,
            "Provinsi": "Sulawesi Tenggara",
            "Kasus_Posi": 859,
            "Kasus_Semb": 600,
            "Kasus_Meni": 14
        }
    },
    {
        "attributes": {
            "FID": 14,
            "Kode_Provi": 34,
            "Provinsi": "Daerah Istimewa Yogyakarta",
            "Kasus_Posi": 784,
            "Kasus_Semb": 448,
            "Kasus_Meni": 21
        }
    },
    {
        "attributes": {
            "FID": 4,
            "Kode_Provi": 14,
            "Provinsi": "Riau",
            "Kasus_Posi": 577,
            "Kasus_Semb": 344,
            "Kasus_Meni": 13
        }
    },
    {
        "attributes": {
            "FID": 10,
            "Kode_Provi": 21,
            "Provinsi": "Kepulauan Riau",
            "Kasus_Posi": 493,
            "Kasus_Semb": 321,
            "Kasus_Meni": 19
        }
    },
    {
        "attributes": {
            "FID": 34,
            "Kode_Provi": 91,
            "Provinsi": "Papua Barat",
            "Kasus_Posi": 471,
            "Kasus_Semb": 304,
            "Kasus_Meni": 6
        }
    },
    {
        "attributes": {
            "FID": 1,
            "Kode_Provi": 11,
            "Provinsi": "Aceh",
            "Kasus_Posi": 440,
            "Kasus_Semb": 91,
            "Kasus_Meni": 17
        }
    },
    {
        "attributes": {
            "FID": 20,
            "Kode_Provi": 61,
            "Provinsi": "Kalimantan Barat",
            "Kasus_Posi": 387,
            "Kasus_Semb": 371,
            "Kasus_Meni": 4
        }
    },
    {
        "attributes": {
            "FID": 9,
            "Kode_Provi": 18,
            "Provinsi": "Lampung",
            "Kasus_Posi": 297,
            "Kasus_Semb": 215,
            "Kasus_Meni": 13
        }
    },
    {
        "attributes": {
            "FID": 24,
            "Kode_Provi": 65,
            "Provinsi": "Kalimantan Utara",
            "Kasus_Posi": 287,
            "Kasus_Semb": 265,
            "Kasus_Meni": 2
        }
    },
    {
        "attributes": {
            "FID": 30,
            "Kode_Provi": 76,
            "Provinsi": "Sulawesi Barat",
            "Kasus_Posi": 241,
            "Kasus_Semb": 150,
            "Kasus_Meni": 5
        }
    },
    {
        "attributes": {
            "FID": 7,
            "Kode_Provi": 17,
            "Provinsi": "Bengkulu",
            "Kasus_Posi": 238,
            "Kasus_Semb": 118,
            "Kasus_Meni": 20
        }
    },
    {
        "attributes": {
            "FID": 26,
            "Kode_Provi": 72,
            "Provinsi": "Sulawesi Tengah",
            "Kasus_Posi": 213,
            "Kasus_Semb": 191,
            "Kasus_Meni": 7
        }
    },
    {
        "attributes": {
            "FID": 8,
            "Kode_Provi": 19,
            "Provinsi": "Kepulauan Bangka Belitung",
            "Kasus_Posi": 191,
            "Kasus_Semb": 173,
            "Kasus_Meni": 2
        }
    },
    {
        "attributes": {
            "FID": 5,
            "Kode_Provi": 15,
            "Provinsi": "Jambi",
            "Kasus_Posi": 188,
            "Kasus_Semb": 116,
            "Kasus_Meni": 4
        }
    },
    {
        "attributes": {
            "FID": 19,
            "Kode_Provi": 53,
            "Provinsi": "Nusa Tenggara Timur",
            "Kasus_Posi": 151,
            "Kasus_Semb": 120,
            "Kasus_Meni": 1
        }
    }
];

const dataGlobal = [{
        "attributes": {
            "OBJECTID": 18,
            "Country_Region": "US",
            "Last_Update": 1596530083000,
            "Lat": 40,
            "Long_": -100,
            "Confirmed": 4717716,
            "Deaths": 155471,
            "Recovered": 1513446,
            "Active": 2258222
        }
    },
    {
        "attributes": {
            "OBJECTID": 22,
            "Country_Region": "Brazil",
            "Last_Update": 1596530083000,
            "Lat": -14.235,
            "Long_": -51.9253,
            "Confirmed": 2750318,
            "Deaths": 94665,
            "Recovered": 2098976,
            "Active": 556677
        }
    },
    {
        "attributes": {
            "OBJECTID": 27,
            "Country_Region": "India",
            "Last_Update": 1596530083000,
            "Lat": 20.593684,
            "Long_": 78.96288,
            "Confirmed": 1855745,
            "Deaths": 38938,
            "Recovered": 1230509,
            "Active": 586298
        }
    },
    {
        "attributes": {
            "OBJECTID": 14,
            "Country_Region": "Russia",
            "Last_Update": 1596530083000,
            "Lat": 61.524,
            "Long_": 105.3188,
            "Confirmed": 859762,
            "Deaths": 14327,
            "Recovered": 660235,
            "Active": 185200
        }
    },
    {
        "attributes": {
            "OBJECTID": 163,
            "Country_Region": "South Africa",
            "Last_Update": 1596530083000,
            "Lat": -30.5595,
            "Long_": 22.9375,
            "Confirmed": 516862,
            "Deaths": 8539,
            "Recovered": 358037,
            "Active": 150286
        }
    },
    {
        "attributes": {
            "OBJECTID": 20,
            "Country_Region": "Mexico",
            "Last_Update": 1596530083000,
            "Lat": 23.6345,
            "Long_": -102.5528,
            "Confirmed": 443813,
            "Deaths": 48012,
            "Recovered": 353442,
            "Active": 42359
        }
    },
    {
        "attributes": {
            "OBJECTID": 23,
            "Country_Region": "Peru",
            "Last_Update": 1596530083000,
            "Lat": -9.19,
            "Long_": -75.0152,
            "Confirmed": 433100,
            "Deaths": 19811,
            "Recovered": 298091,
            "Active": 115198
        }
    },
    {
        "attributes": {
            "OBJECTID": 21,
            "Country_Region": "Chile",
            "Last_Update": 1596530083000,
            "Lat": -35.6751,
            "Long_": -71.543,
            "Confirmed": 361493,
            "Deaths": 9707,
            "Recovered": 333976,
            "Active": 17810
        }
    },
    {
        "attributes": {
            "OBJECTID": 24,
            "Country_Region": "Colombia",
            "Last_Update": 1596530083000,
            "Lat": 4.5709,
            "Long_": -74.2973,
            "Confirmed": 327850,
            "Deaths": 11017,
            "Recovered": 173727,
            "Active": 143106
        }
    },
    {
        "attributes": {
            "OBJECTID": 97,
            "Country_Region": "Iran",
            "Last_Update": 1596530083000,
            "Lat": 32.427908,
            "Long_": 53.688046,
            "Confirmed": 312035,
            "Deaths": 17405,
            "Recovered": 270228,
            "Active": 24402
        }
    },
    {
        "attributes": {
            "OBJECTID": 17,
            "Country_Region": "United Kingdom",
            "Last_Update": 1596530083000,
            "Lat": 55,
            "Long_": -3,
            "Confirmed": 307251,
            "Deaths": 46295,
            "Recovered": 1445,
            "Active": 259511
        }
    },
    {
        "attributes": {
            "OBJECTID": 19,
            "Country_Region": "Spain",
            "Last_Update": 1596530083000,
            "Lat": 40.463667,
            "Long_": -3.74922,
            "Confirmed": 297054,
            "Deaths": 28472,
            "Recovered": 150376,
            "Active": 118207
        }
    },
    {
        "attributes": {
            "OBJECTID": 28,
            "Country_Region": "Pakistan",
            "Last_Update": 1596530083000,
            "Lat": 30.3753,
            "Long_": 69.3451,
            "Confirmed": 280461,
            "Deaths": 5999,
            "Recovered": 249397,
            "Active": 25065
        }
    },
    {
        "attributes": {
            "OBJECTID": 154,
            "Country_Region": "Saudi Arabia",
            "Last_Update": 1596530083000,
            "Lat": 23.885942,
            "Long_": 45.079162,
            "Confirmed": 280093,
            "Deaths": 2949,
            "Recovered": 242055,
            "Active": 35089
        }
    },
    {
        "attributes": {
            "OBJECTID": 11,
            "Country_Region": "Italy",
            "Last_Update": 1596530083000,
            "Lat": 41.8719,
            "Long_": 12.5674,
            "Confirmed": 248229,
            "Deaths": 35166,
            "Recovered": 200589,
            "Active": 12474
        }
    },
    {
        "attributes": {
            "OBJECTID": 40,
            "Country_Region": "Bangladesh",
            "Last_Update": 1596530083000,
            "Lat": 23.685,
            "Long_": 90.3563,
            "Confirmed": 242102,
            "Deaths": 3184,
            "Recovered": 137905,
            "Active": 101013
        }
    },
    {
        "attributes": {
            "OBJECTID": 177,
            "Country_Region": "Turkey",
            "Last_Update": 1596530083000,
            "Lat": 38.9637,
            "Long_": 35.2433,
            "Confirmed": 233851,
            "Deaths": 5747,
            "Recovered": 217497,
            "Active": 10607
        }
    },
    {
        "attributes": {
            "OBJECTID": 7,
            "Country_Region": "France",
            "Last_Update": 1596530083000,
            "Lat": 46.2276,
            "Long_": 2.2137,
            "Confirmed": 225198,
            "Deaths": 30268,
            "Recovered": 81764,
            "Active": 113166
        }
    },
    {
        "attributes": {
            "OBJECTID": 8,
            "Country_Region": "Germany",
            "Last_Update": 1596530083000,
            "Lat": 51.165691,
            "Long_": 10.451526,
            "Confirmed": 212328,
            "Deaths": 9161,
            "Recovered": 194008,
            "Active": 9159
        }
    },
    {
        "attributes": {
            "OBJECTID": 35,
            "Country_Region": "Argentina",
            "Last_Update": 1596530083000,
            "Lat": -38.4161,
            "Long_": -63.6167,
            "Confirmed": 206743,
            "Deaths": 3813,
            "Recovered": 91302,
            "Active": 111628
        }
    },
    {
        "attributes": {
            "OBJECTID": 98,
            "Country_Region": "Iraq",
            "Last_Update": 1596530083000,
            "Lat": 33.223191,
            "Long_": 43.679291,
            "Confirmed": 131886,
            "Deaths": 4934,
            "Recovered": 94111,
            "Active": 32841
        }
    },
    {
        "attributes": {
            "OBJECTID": 3,
            "Country_Region": "Canada",
            "Last_Update": 1596530083000,
            "Lat": 60.001,
            "Long_": -95.001,
            "Confirmed": 118973,
            "Deaths": 8995,
            "Recovered": 103284,
            "Active": 6695
        }
    },
    {
        "attributes": {
            "OBJECTID": 96,
            "Country_Region": "Indonesia",
            "Last_Update": 1596530083000,
            "Lat": -0.7893,
            "Long_": 113.9213,
            "Confirmed": 113134,
            "Deaths": 5302,
            "Recovered": 70237,
            "Active": 37595
        }
    },
    {
        "attributes": {
            "OBJECTID": 146,
            "Country_Region": "Qatar",
            "Last_Update": 1596530083000,
            "Lat": 25.3548,
            "Long_": 51.1839,
            "Confirmed": 111322,
            "Deaths": 177,
            "Recovered": 108002,
            "Active": 3143
        }
    },
    {
        "attributes": {
            "OBJECTID": 143,
            "Country_Region": "Philippines",
            "Last_Update": 1596530083000,
            "Lat": 12.879721,
            "Long_": 121.774017,
            "Confirmed": 106330,
            "Deaths": 2104,
            "Recovered": 65821,
            "Active": 38405
        }
    },
    {
        "attributes": {
            "OBJECTID": 74,
            "Country_Region": "Egypt",
            "Last_Update": 1596530083000,
            "Lat": 26.820553,
            "Long_": 30.802498,
            "Confirmed": 94640,
            "Deaths": 4888,
            "Recovered": 44066,
            "Active": 45686
        }
    },
    {
        "attributes": {
            "OBJECTID": 102,
            "Country_Region": "Kazakhstan",
            "Last_Update": 1596530083000,
            "Lat": 48.0196,
            "Long_": 66.9237,
            "Confirmed": 93820,
            "Deaths": 1058,
            "Recovered": 65132,
            "Active": 27630
        }
    },
    {
        "attributes": {
            "OBJECTID": 4,
            "Country_Region": "China",
            "Last_Update": 1596530083000,
            "Lat": 30.5928,
            "Long_": 114.3055,
            "Confirmed": 88099,
            "Deaths": 4672,
            "Recovered": 81113,
            "Active": 2314
        }
    },
    {
        "attributes": {
            "OBJECTID": 73,
            "Country_Region": "Ecuador",
            "Last_Update": 1596530083000,
            "Lat": -1.8312,
            "Long_": -78.1834,
            "Confirmed": 87041,
            "Deaths": 5767,
            "Recovered": 59344,
            "Active": 21930
        }
    },
    {
        "attributes": {
            "OBJECTID": 47,
            "Country_Region": "Bolivia",
            "Last_Update": 1596530083000,
            "Lat": -16.2902,
            "Long_": -63.5887,
            "Confirmed": 81846,
            "Deaths": 3228,
            "Recovered": 24510,
            "Active": 54108
        }
    },
    {
        "attributes": {
            "OBJECTID": 15,
            "Country_Region": "Sweden",
            "Last_Update": 1596530083000,
            "Lat": 60.1282,
            "Long_": 18.6435,
            "Confirmed": 81012,
            "Deaths": 5744,
            "Recovered": null,
            "Active": 75268
        }
    },
    {
        "attributes": {
            "OBJECTID": 139,
            "Country_Region": "Oman",
            "Last_Update": 1596530083000,
            "Lat": 21.512583,
            "Long_": 55.923255,
            "Confirmed": 79159,
            "Deaths": 421,
            "Recovered": 61421,
            "Active": 17317
        }
    },
    {
        "attributes": {
            "OBJECTID": 26,
            "Country_Region": "Ukraine",
            "Last_Update": 1596530083000,
            "Lat": 48.3794,
            "Long_": 31.1656,
            "Confirmed": 75880,
            "Deaths": 1788,
            "Recovered": 41849,
            "Active": 32243
        }
    },
    {
        "attributes": {
            "OBJECTID": 99,
            "Country_Region": "Israel",
            "Last_Update": 1596530083000,
            "Lat": 31.046051,
            "Long_": 34.851612,
            "Confirmed": 74903,
            "Deaths": 546,
            "Recovered": 49757,
            "Active": 24600
        }
    },
    {
        "attributes": {
            "OBJECTID": 72,
            "Country_Region": "Dominican Republic",
            "Last_Update": 1596530083000,
            "Lat": 18.7357,
            "Long_": -70.1627,
            "Confirmed": 73117,
            "Deaths": 1183,
            "Recovered": 38824,
            "Active": 33110
        }
    },
    {
        "attributes": {
            "OBJECTID": 43,
            "Country_Region": "Belgium",
            "Last_Update": 1596530083000,
            "Lat": 50.8333,
            "Long_": 4.469936,
            "Confirmed": 70314,
            "Deaths": 9850,
            "Recovered": 17598,
            "Active": 42866
        }
    },
    {
        "attributes": {
            "OBJECTID": 140,
            "Country_Region": "Panama",
            "Last_Update": 1596530083000,
            "Lat": 8.538,
            "Long_": -80.7821,
            "Confirmed": 68456,
            "Deaths": 1497,
            "Recovered": 42093,
            "Active": 24866
        }
    },
    {
        "attributes": {
            "OBJECTID": 106,
            "Country_Region": "Kuwait",
            "Last_Update": 1596530083000,
            "Lat": 29.31166,
            "Long_": 47.481766,
            "Confirmed": 68299,
            "Deaths": 461,
            "Recovered": 59739,
            "Active": 8099
        }
    },
    {
        "attributes": {
            "OBJECTID": 42,
            "Country_Region": "Belarus",
            "Last_Update": 1596530083000,
            "Lat": 53.7098,
            "Long_": 27.9534,
            "Confirmed": 68166,
            "Deaths": 571,
            "Recovered": 62943,
            "Active": 4652
        }
    },
    {
        "attributes": {
            "OBJECTID": 179,
            "Country_Region": "United Arab Emirates",
            "Last_Update": 1596530083000,
            "Lat": 23.424076,
            "Long_": 53.847818,
            "Confirmed": 61163,
            "Deaths": 351,
            "Recovered": 54863,
            "Active": 5949
        }
    },
    {
        "attributes": {
            "OBJECTID": 12,
            "Country_Region": "Netherlands",
            "Last_Update": 1596530083000,
            "Lat": 52.3167,
            "Long_": 5.55,
            "Confirmed": 55786,
            "Deaths": 6169,
            "Recovered": 207,
            "Active": 49410
        }
    },
    {
        "attributes": {
            "OBJECTID": 147,
            "Country_Region": "Romania",
            "Last_Update": 1596530083000,
            "Lat": 45.9432,
            "Long_": 24.9668,
            "Confirmed": 54009,
            "Deaths": 2432,
            "Recovered": 27750,
            "Active": 23827
        }
    },
    {
        "attributes": {
            "OBJECTID": 159,
            "Country_Region": "Singapore",
            "Last_Update": 1596530083000,
            "Lat": 1.2833,
            "Long_": 103.8333,
            "Confirmed": 53346,
            "Deaths": 27,
            "Recovered": 47179,
            "Active": 6140
        }
    },
    {
        "attributes": {
            "OBJECTID": 145,
            "Country_Region": "Portugal",
            "Last_Update": 1596530083000,
            "Lat": 39.3999,
            "Long_": -8.2245,
            "Confirmed": 51569,
            "Deaths": 1738,
            "Recovered": 37111,
            "Active": 12720
        }
    },
    {
        "attributes": {
            "OBJECTID": 88,
            "Country_Region": "Guatemala",
            "Last_Update": 1596530083000,
            "Lat": 15.7835,
            "Long_": -90.2308,
            "Confirmed": 51542,
            "Deaths": 2013,
            "Recovered": 39346,
            "Active": 10183
        }
    },
    {
        "attributes": {
            "OBJECTID": 144,
            "Country_Region": "Poland",
            "Last_Update": 1596530083000,
            "Lat": 51.9194,
            "Long_": 19.1451,
            "Confirmed": 47469,
            "Deaths": 1732,
            "Recovered": 35056,
            "Active": 10681
        }
    },
    {
        "attributes": {
            "OBJECTID": 137,
            "Country_Region": "Nigeria",
            "Last_Update": 1596530083000,
            "Lat": 9.082,
            "Long_": 8.6753,
            "Confirmed": 44129,
            "Deaths": 896,
            "Recovered": 20663,
            "Active": 22570
        }
    },
    {
        "attributes": {
            "OBJECTID": 94,
            "Country_Region": "Honduras",
            "Last_Update": 1596530083000,
            "Lat": 15.2,
            "Long_": -86.2419,
            "Confirmed": 43794,
            "Deaths": 1384,
            "Recovered": 5854,
            "Active": 36556
        }
    },
    {
        "attributes": {
            "OBJECTID": 39,
            "Country_Region": "Bahrain",
            "Last_Update": 1596530083000,
            "Lat": 26.0275,
            "Long_": 50.55,
            "Confirmed": 41835,
            "Deaths": 150,
            "Recovered": 39007,
            "Active": 2678
        }
    },
    {
        "attributes": {
            "OBJECTID": 25,
            "Country_Region": "Japan",
            "Last_Update": 1596530083000,
            "Lat": 36.204824,
            "Long_": 138.252924,
            "Confirmed": 40749,
            "Deaths": 1018,
            "Recovered": 26476,
            "Active": 13255
        }
    },
    {
        "attributes": {
            "OBJECTID": 36,
            "Country_Region": "Armenia",
            "Last_Update": 1596530083000,
            "Lat": 40.0691,
            "Long_": 45.0382,
            "Confirmed": 39298,
            "Deaths": 768,
            "Recovered": 30372,
            "Active": 8158
        }
    },
    {
        "attributes": {
            "OBJECTID": 85,
            "Country_Region": "Ghana",
            "Last_Update": 1596530083000,
            "Lat": 7.9465,
            "Long_": -1.0232,
            "Confirmed": 37812,
            "Deaths": 191,
            "Recovered": 34313,
            "Active": 3308
        }
    },
    {
        "attributes": {
            "OBJECTID": 107,
            "Country_Region": "Kyrgyzstan",
            "Last_Update": 1596530083000,
            "Lat": 41.20438,
            "Long_": 74.766098,
            "Confirmed": 37541,
            "Deaths": 1427,
            "Recovered": 28743,
            "Active": 7371
        }
    },
    {
        "attributes": {
            "OBJECTID": 29,
            "Country_Region": "Afghanistan",
            "Last_Update": 1596530083000,
            "Lat": 33.93911,
            "Long_": 67.709953,
            "Confirmed": 36747,
            "Deaths": 1288,
            "Recovered": 25669,
            "Active": 9790
        }
    },
    {
        "attributes": {
            "OBJECTID": 16,
            "Country_Region": "Switzerland",
            "Last_Update": 1596530083000,
            "Lat": 46.8182,
            "Long_": 8.2275,
            "Confirmed": 35616,
            "Deaths": 1981,
            "Recovered": 31500,
            "Active": 2135
        }
    },
    {
        "attributes": {
            "OBJECTID": 37,
            "Country_Region": "Azerbaijan",
            "Last_Update": 1596530083000,
            "Lat": 40.1431,
            "Long_": 47.5769,
            "Confirmed": 32684,
            "Deaths": 468,
            "Recovered": 27760,
            "Active": 4456
        }
    },
    {
        "attributes": {
            "OBJECTID": 31,
            "Country_Region": "Algeria",
            "Last_Update": 1596530083000,
            "Lat": 28.0339,
            "Long_": 1.6596,
            "Confirmed": 31972,
            "Deaths": 1239,
            "Recovered": 21901,
            "Active": 8832
        }
    },
    {
        "attributes": {
            "OBJECTID": 181,
            "Country_Region": "Uzbekistan",
            "Last_Update": 1596530083000,
            "Lat": 41.377491,
            "Long_": 64.585262,
            "Confirmed": 26550,
            "Deaths": 161,
            "Recovered": 17262,
            "Active": 9127
        }
    },
    {
        "attributes": {
            "OBJECTID": 156,
            "Country_Region": "Serbia",
            "Last_Update": 1596530083000,
            "Lat": 44.0165,
            "Long_": 21.0059,
            "Confirmed": 26451,
            "Deaths": 598,
            "Recovered": null,
            "Active": 25853
        }
    },
    {
        "attributes": {
            "OBJECTID": 10,
            "Country_Region": "Ireland",
            "Last_Update": 1596530083000,
            "Lat": 53.1424,
            "Long_": -7.6921,
            "Confirmed": 26208,
            "Deaths": 1763,
            "Recovered": 23364,
            "Active": 1081
        }
    },
    {
        "attributes": {
            "OBJECTID": 130,
            "Country_Region": "Morocco",
            "Last_Update": 1596530083000,
            "Lat": 31.7917,
            "Long_": -7.0926,
            "Confirmed": 26196,
            "Deaths": 401,
            "Recovered": 18968,
            "Active": 6827
        }
    },
    {
        "attributes": {
            "OBJECTID": 126,
            "Country_Region": "Moldova",
            "Last_Update": 1596530083000,
            "Lat": 47.4116,
            "Long_": 28.3699,
            "Confirmed": 25482,
            "Deaths": 800,
            "Recovered": 17942,
            "Active": 6740
        }
    },
    {
        "attributes": {
            "OBJECTID": 103,
            "Country_Region": "Kenya",
            "Last_Update": 1596530083000,
            "Lat": -0.0236,
            "Long_": 37.9062,
            "Confirmed": 22597,
            "Deaths": 382,
            "Recovered": 8740,
            "Active": 13475
        }
    },
    {
        "attributes": {
            "OBJECTID": 2,
            "Country_Region": "Austria",
            "Last_Update": 1596530083000,
            "Lat": 47.5162,
            "Long_": 14.5501,
            "Confirmed": 21385,
            "Deaths": 718,
            "Recovered": 19063,
            "Active": 1604
        }
    },
    {
        "attributes": {
            "OBJECTID": 182,
            "Country_Region": "Venezuela",
            "Last_Update": 1596530083000,
            "Lat": 6.4238,
            "Long_": -66.5897,
            "Confirmed": 20754,
            "Deaths": 180,
            "Recovered": 11622,
            "Active": 8952
        }
    },
    {
        "attributes": {
            "OBJECTID": 133,
            "Country_Region": "Nepal",
            "Last_Update": 1596530083000,
            "Lat": 28.1667,
            "Long_": 84.25,
            "Confirmed": 20750,
            "Deaths": 57,
            "Recovered": 14961,
            "Active": 5732
        }
    },
    {
        "attributes": {
            "OBJECTID": 63,
            "Country_Region": "Costa Rica",
            "Last_Update": 1596530083000,
            "Lat": 9.7489,
            "Long_": -83.7534,
            "Confirmed": 19402,
            "Deaths": 171,
            "Recovered": 4689,
            "Active": 14542
        }
    },
    {
        "attributes": {
            "OBJECTID": 80,
            "Country_Region": "Ethiopia",
            "Last_Update": 1596530083000,
            "Lat": 9.145,
            "Long_": 40.4897,
            "Confirmed": 19289,
            "Deaths": 336,
            "Recovered": 7931,
            "Active": 11022
        }
    },
    {
        "attributes": {
            "OBJECTID": 1,
            "Country_Region": "Australia",
            "Last_Update": 1596530083000,
            "Lat": -25,
            "Long_": 133,
            "Confirmed": 18730,
            "Deaths": 232,
            "Recovered": 10795,
            "Active": 7703
        }
    },
    {
        "attributes": {
            "OBJECTID": 75,
            "Country_Region": "El Salvador",
            "Last_Update": 1596530083000,
            "Lat": 13.7942,
            "Long_": -88.8965,
            "Confirmed": 17843,
            "Deaths": 486,
            "Recovered": 8845,
            "Active": 8512
        }
    },
    {
        "attributes": {
            "OBJECTID": 57,
            "Country_Region": "Cameroon",
            "Last_Update": 1596530083000,
            "Lat": 3.848,
            "Long_": 11.5021,
            "Confirmed": 17255,
            "Deaths": 391,
            "Recovered": 15320,
            "Active": 1544
        }
    },
    {
        "attributes": {
            "OBJECTID": 68,
            "Country_Region": "Czechia",
            "Last_Update": 1596530083000,
            "Lat": 49.8175,
            "Long_": 15.473,
            "Confirmed": 17008,
            "Deaths": 386,
            "Recovered": 11708,
            "Active": 4914
        }
    },
    {
        "attributes": {
            "OBJECTID": 64,
            "Country_Region": "Cote d'Ivoire",
            "Last_Update": 1596530083000,
            "Lat": 7.54,
            "Long_": -5.5471,
            "Confirmed": 16220,
            "Deaths": 102,
            "Recovered": 11887,
            "Active": 4231
        }
    },
    {
        "attributes": {
            "OBJECTID": 104,
            "Country_Region": "Korea, South",
            "Last_Update": 1596530083000,
            "Lat": 35.907757,
            "Long_": 127.766922,
            "Confirmed": 14423,
            "Deaths": 301,
            "Recovered": 13352,
            "Active": 770
        }
    },
    {
        "attributes": {
            "OBJECTID": 5,
            "Country_Region": "Denmark",
            "Last_Update": 1596530083000,
            "Lat": 56.2639,
            "Long_": 9.5018,
            "Confirmed": 14235,
            "Deaths": 616,
            "Recovered": 12887,
            "Active": 732
        }
    },
    {
        "attributes": {
            "OBJECTID": 184,
            "Country_Region": "West Bank and Gaza",
            "Last_Update": 1596530083000,
            "Lat": 31.9522,
            "Long_": 35.2332,
            "Confirmed": 12541,
            "Deaths": 84,
            "Recovered": 5390,
            "Active": 7067
        }
    },
    {
        "attributes": {
            "OBJECTID": 48,
            "Country_Region": "Bosnia and Herzegovina",
            "Last_Update": 1596530083000,
            "Lat": 43.9159,
            "Long_": 17.6791,
            "Confirmed": 12462,
            "Deaths": 362,
            "Recovered": 6359,
            "Active": 5741
        }
    },
    {
        "attributes": {
            "OBJECTID": 51,
            "Country_Region": "Bulgaria",
            "Last_Update": 1596530083000,
            "Lat": 42.7339,
            "Long_": 25.4858,
            "Confirmed": 12159,
            "Deaths": 404,
            "Recovered": 6684,
            "Active": 5071
        }
    },
    {
        "attributes": {
            "OBJECTID": 166,
            "Country_Region": "Sudan",
            "Last_Update": 1596530083000,
            "Lat": 12.8628,
            "Long_": 30.2176,
            "Confirmed": 11738,
            "Deaths": 752,
            "Recovered": 6137,
            "Active": 4849
        }
    },
    {
        "attributes": {
            "OBJECTID": 118,
            "Country_Region": "Madagascar",
            "Last_Update": 1596530083000,
            "Lat": -18.766947,
            "Long_": 46.869107,
            "Confirmed": 11660,
            "Deaths": 118,
            "Recovered": 8825,
            "Active": 2717
        }
    },
    {
        "attributes": {
            "OBJECTID": 138,
            "Country_Region": "North Macedonia",
            "Last_Update": 1596530083000,
            "Lat": 41.6086,
            "Long_": 21.7453,
            "Confirmed": 11128,
            "Deaths": 500,
            "Recovered": 6972,
            "Active": 3656
        }
    },
    {
        "attributes": {
            "OBJECTID": 155,
            "Country_Region": "Senegal",
            "Last_Update": 1596530083000,
            "Lat": 14.4974,
            "Long_": -14.4524,
            "Confirmed": 10386,
            "Deaths": 211,
            "Recovered": 6901,
            "Active": 3274
        }
    },
    {
        "attributes": {
            "OBJECTID": 13,
            "Country_Region": "Norway",
            "Last_Update": 1596530083000,
            "Lat": 60.472,
            "Long_": 8.4689,
            "Confirmed": 9334,
            "Deaths": 256,
            "Recovered": 8752,
            "Active": 326
        }
    },
    {
        "attributes": {
            "OBJECTID": 62,
            "Country_Region": "Congo (Kinshasa)",
            "Last_Update": 1596530083000,
            "Lat": -4.0383,
            "Long_": 21.7587,
            "Confirmed": 9178,
            "Deaths": 215,
            "Recovered": 7727,
            "Active": 1236
        }
    },
    {
        "attributes": {
            "OBJECTID": 105,
            "Country_Region": "Kosovo",
            "Last_Update": 1596530083000,
            "Lat": 42.602636,
            "Long_": 20.902977,
            "Confirmed": 9049,
            "Deaths": 256,
            "Recovered": 4989,
            "Active": 3804
        }
    },
    {
        "attributes": {
            "OBJECTID": 120,
            "Country_Region": "Malaysia",
            "Last_Update": 1596530083000,
            "Lat": 4.210484,
            "Long_": 101.975766,
            "Confirmed": 9001,
            "Deaths": 125,
            "Recovered": 8668,
            "Active": 208
        }
    },
    {
        "attributes": {
            "OBJECTID": 82,
            "Country_Region": "Gabon",
            "Last_Update": 1596530083000,
            "Lat": -0.8037,
            "Long_": 11.6094,
            "Confirmed": 7646,
            "Deaths": 51,
            "Recovered": 5408,
            "Active": 2187
        }
    },
    {
        "attributes": {
            "OBJECTID": 170,
            "Country_Region": "Tajikistan",
            "Last_Update": 1596530083000,
            "Lat": 38.861034,
            "Long_": 71.276093,
            "Confirmed": 7538,
            "Deaths": 61,
            "Recovered": 6317,
            "Active": 1160
        }
    },
    {
        "attributes": {
            "OBJECTID": 92,
            "Country_Region": "Haiti",
            "Last_Update": 1596530083000,
            "Lat": 18.9712,
            "Long_": -72.2852,
            "Confirmed": 7511,
            "Deaths": 166,
            "Recovered": 4832,
            "Active": 2513
        }
    },
    {
        "attributes": {
            "OBJECTID": 6,
            "Country_Region": "Finland",
            "Last_Update": 1596530083000,
            "Lat": 61.9241,
            "Long_": 25.7482,
            "Confirmed": 7466,
            "Deaths": 329,
            "Recovered": 6950,
            "Active": 187
        }
    },
    {
        "attributes": {
            "OBJECTID": 89,
            "Country_Region": "Guinea",
            "Last_Update": 1596530083000,
            "Lat": 9.9456,
            "Long_": -9.6966,
            "Confirmed": 7364,
            "Deaths": 46,
            "Recovered": 6505,
            "Active": 813
        }
    },
    {
        "attributes": {
            "OBJECTID": 116,
            "Country_Region": "Luxembourg",
            "Last_Update": 1596530083000,
            "Lat": 49.8153,
            "Long_": 6.1296,
            "Confirmed": 6864,
            "Deaths": 118,
            "Recovered": 5498,
            "Active": 1248
        }
    },
    {
        "attributes": {
            "OBJECTID": 187,
            "Country_Region": "Zambia",
            "Last_Update": 1596530083000,
            "Lat": -13.133897,
            "Long_": 27.849332,
            "Confirmed": 6580,
            "Deaths": 171,
            "Recovered": 4701,
            "Active": 1708
        }
    },
    {
        "attributes": {
            "OBJECTID": 124,
            "Country_Region": "Mauritania",
            "Last_Update": 1596530083000,
            "Lat": 21.0079,
            "Long_": -10.9408,
            "Confirmed": 6382,
            "Deaths": 157,
            "Recovered": 5174,
            "Active": 1051
        }
    },
    {
        "attributes": {
            "OBJECTID": 142,
            "Country_Region": "Paraguay",
            "Last_Update": 1596530083000,
            "Lat": -23.4425,
            "Long_": -58.4438,
            "Confirmed": 5724,
            "Deaths": 55,
            "Recovered": 4249,
            "Active": 1420
        }
    },
    {
        "attributes": {
            "OBJECTID": 30,
            "Country_Region": "Albania",
            "Last_Update": 1596530083000,
            "Lat": 41.1533,
            "Long_": 20.1683,
            "Confirmed": 5620,
            "Deaths": 172,
            "Recovered": 3031,
            "Active": 2417
        }
    },
    {
        "attributes": {
            "OBJECTID": 65,
            "Country_Region": "Croatia",
            "Last_Update": 1596530083000,
            "Lat": 45.1,
            "Long_": 15.2,
            "Confirmed": 5294,
            "Deaths": 153,
            "Recovered": 4438,
            "Active": 703
        }
    },
    {
        "attributes": {
            "OBJECTID": 70,
            "Country_Region": "Djibouti",
            "Last_Update": 1596530083000,
            "Lat": 11.8251,
            "Long_": 42.5903,
            "Confirmed": 5240,
            "Deaths": 59,
            "Recovered": 5028,
            "Active": 153
        }
    },
    {
        "attributes": {
            "OBJECTID": 110,
            "Country_Region": "Lebanon",
            "Last_Update": 1596530083000,
            "Lat": 33.8547,
            "Long_": 35.8623,
            "Confirmed": 5062,
            "Deaths": 65,
            "Recovered": 1837,
            "Active": 3160
        }
    },
    {
        "attributes": {
            "OBJECTID": 76,
            "Country_Region": "Equatorial Guinea",
            "Last_Update": 1596530083000,
            "Lat": 1.6508,
            "Long_": 10.2679,
            "Confirmed": 4821,
            "Deaths": 83,
            "Recovered": 2182,
            "Active": 2556
        }
    },
    {
        "attributes": {
            "OBJECTID": 86,
            "Country_Region": "Greece",
            "Last_Update": 1596530083000,
            "Lat": 39.0742,
            "Long_": 21.8243,
            "Confirmed": 4737,
            "Deaths": 209,
            "Recovered": 1374,
            "Active": 3154
        }
    },
    {
        "attributes": {
            "OBJECTID": 58,
            "Country_Region": "Central African Republic",
            "Last_Update": 1596530083000,
            "Lat": 6.6111,
            "Long_": 20.9394,
            "Confirmed": 4614,
            "Deaths": 59,
            "Recovered": 1635,
            "Active": 2920
        }
    },
    {
        "attributes": {
            "OBJECTID": 95,
            "Country_Region": "Hungary",
            "Last_Update": 1596530083000,
            "Lat": 47.1625,
            "Long_": 19.5033,
            "Confirmed": 4553,
            "Deaths": 598,
            "Recovered": 3415,
            "Active": 540
        }
    },
    {
        "attributes": {
            "OBJECTID": 121,
            "Country_Region": "Maldives",
            "Last_Update": 1596530083000,
            "Lat": 3.2028,
            "Long_": 73.2207,
            "Confirmed": 4293,
            "Deaths": 18,
            "Recovered": 2670,
            "Active": 1605
        }
    },
    {
        "attributes": {
            "OBJECTID": 119,
            "Country_Region": "Malawi",
            "Last_Update": 1596530083000,
            "Lat": -13.254308,
            "Long_": 34.301525,
            "Confirmed": 4272,
            "Deaths": 123,
            "Recovered": 1945,
            "Active": 2204
        }
    },
    {
        "attributes": {
            "OBJECTID": 188,
            "Country_Region": "Zimbabwe",
            "Last_Update": 1596530083000,
            "Lat": -19.015438,
            "Long_": 29.154857,
            "Confirmed": 4075,
            "Deaths": 80,
            "Recovered": 1057,
            "Active": 2938
        }
    },
    {
        "attributes": {
            "OBJECTID": 113,
            "Country_Region": "Libya",
            "Last_Update": 1596530083000,
            "Lat": 26.3351,
            "Long_": 17.228331,
            "Confirmed": 4063,
            "Deaths": 93,
            "Recovered": 625,
            "Active": 3345
        }
    },
    {
        "attributes": {
            "OBJECTID": 135,
            "Country_Region": "Nicaragua",
            "Last_Update": 1596530083000,
            "Lat": 12.865416,
            "Long_": -85.207229,
            "Confirmed": 3672,
            "Deaths": 116,
            "Recovered": 2492,
            "Active": 1064
        }
    },
    {
        "attributes": {
            "OBJECTID": 61,
            "Country_Region": "Congo (Brazzaville)",
            "Last_Update": 1596530083000,
            "Lat": -0.228,
            "Long_": 15.8277,
            "Confirmed": 3546,
            "Deaths": 58,
            "Recovered": 1589,
            "Active": 1899
        }
    },
    {
        "attributes": {
            "OBJECTID": 172,
            "Country_Region": "Thailand",
            "Last_Update": 1596530083000,
            "Lat": 15.870032,
            "Long_": 100.992541,
            "Confirmed": 3321,
            "Deaths": 58,
            "Recovered": 3142,
            "Active": 121
        }
    },
    {
        "attributes": {
            "OBJECTID": 129,
            "Country_Region": "Montenegro",
            "Last_Update": 1596530083000,
            "Lat": 42.708678,
            "Long_": 19.37439,
            "Confirmed": 3301,
            "Deaths": 52,
            "Recovered": 1445,
            "Active": 1804
        }
    },
    {
        "attributes": {
            "OBJECTID": 162,
            "Country_Region": "Somalia",
            "Last_Update": 1596530083000,
            "Lat": 5.152149,
            "Long_": 46.199616,
            "Confirmed": 3220,
            "Deaths": 93,
            "Recovered": 1598,
            "Active": 1529
        }
    },
    {
        "attributes": {
            "OBJECTID": 79,
            "Country_Region": "Eswatini",
            "Last_Update": 1596530083000,
            "Lat": -26.5225,
            "Long_": 31.4659,
            "Confirmed": 2838,
            "Deaths": 45,
            "Recovered": 1253,
            "Active": 1540
        }
    },
    {
        "attributes": {
            "OBJECTID": 165,
            "Country_Region": "Sri Lanka",
            "Last_Update": 1596530083000,
            "Lat": 7.873054,
            "Long_": 80.771797,
            "Confirmed": 2828,
            "Deaths": 11,
            "Recovered": 2517,
            "Active": 300
        }
    },
    {
        "attributes": {
            "OBJECTID": 66,
            "Country_Region": "Cuba",
            "Last_Update": 1596530083000,
            "Lat": 21.521757,
            "Long_": -77.781167,
            "Confirmed": 2670,
            "Deaths": 87,
            "Recovered": 2373,
            "Active": 210
        }
    },
    {
        "attributes": {
            "OBJECTID": 55,
            "Country_Region": "Cabo Verde",
            "Last_Update": 1596530083000,
            "Lat": 16.5388,
            "Long_": -23.0418,
            "Confirmed": 2583,
            "Deaths": 25,
            "Recovered": 1911,
            "Active": 647
        }
    },
    {
        "attributes": {
            "OBJECTID": 122,
            "Country_Region": "Mali",
            "Last_Update": 1596530083000,
            "Lat": 17.570692,
            "Long_": -3.996166,
            "Confirmed": 2543,
            "Deaths": 124,
            "Recovered": 1943,
            "Active": 476
        }
    },
    {
        "attributes": {
            "OBJECTID": 164,
            "Country_Region": "South Sudan",
            "Last_Update": 1596530083000,
            "Lat": 6.877,
            "Long_": 31.307,
            "Confirmed": 2429,
            "Deaths": 46,
            "Recovered": 1175,
            "Active": 1208
        }
    },
    {
        "attributes": {
            "OBJECTID": 132,
            "Country_Region": "Namibia",
            "Last_Update": 1596530083000,
            "Lat": -22.9576,
            "Long_": 18.4904,
            "Confirmed": 2406,
            "Deaths": 12,
            "Recovered": 187,
            "Active": 2207
        }
    },
    {
        "attributes": {
            "OBJECTID": 160,
            "Country_Region": "Slovakia",
            "Last_Update": 1596530083000,
            "Lat": 48.669,
            "Long_": 19.699,
            "Confirmed": 2368,
            "Deaths": 29,
            "Recovered": 1771,
            "Active": 568
        }
    },
    {
        "attributes": {
            "OBJECTID": 161,
            "Country_Region": "Slovenia",
            "Last_Update": 1596530083000,
            "Lat": 46.1512,
            "Long_": 14.9955,
            "Confirmed": 2181,
            "Deaths": 122,
            "Recovered": 1831,
            "Active": 228
        }
    },
    {
        "attributes": {
            "OBJECTID": 115,
            "Country_Region": "Lithuania",
            "Last_Update": 1596530083000,
            "Lat": 55.1694,
            "Long_": 23.8813,
            "Confirmed": 2137,
            "Deaths": 80,
            "Recovered": 1647,
            "Active": 410
        }
    },
    {
        "attributes": {
            "OBJECTID": 148,
            "Country_Region": "Rwanda",
            "Last_Update": 1596530083000,
            "Lat": -1.9403,
            "Long_": 29.8739,
            "Confirmed": 2092,
            "Deaths": 5,
            "Recovered": 1169,
            "Active": 918
        }
    },
    {
        "attributes": {
            "OBJECTID": 78,
            "Country_Region": "Estonia",
            "Last_Update": 1596530083000,
            "Lat": 58.5953,
            "Long_": 25.0136,
            "Confirmed": 2091,
            "Deaths": 63,
            "Recovered": 1937,
            "Active": 91
        }
    },
    {
        "attributes": {
            "OBJECTID": 90,
            "Country_Region": "Guinea-Bissau",
            "Last_Update": 1596530083000,
            "Lat": 11.8037,
            "Long_": -15.1804,
            "Confirmed": 1981,
            "Deaths": 27,
            "Recovered": 803,
            "Active": 1151
        }
    },
    {
        "attributes": {
            "OBJECTID": 131,
            "Country_Region": "Mozambique",
            "Last_Update": 1596530083000,
            "Lat": -18.665695,
            "Long_": 35.529562,
            "Confirmed": 1973,
            "Deaths": 14,
            "Recovered": 676,
            "Active": 1283
        }
    },
    {
        "attributes": {
            "OBJECTID": 9,
            "Country_Region": "Iceland",
            "Last_Update": 1596530083000,
            "Lat": 64.9631,
            "Long_": -19.0208,
            "Confirmed": 1915,
            "Deaths": 10,
            "Recovered": 1825,
            "Active": 80
        }
    },
    {
        "attributes": {
            "OBJECTID": 167,
            "Country_Region": "Suriname",
            "Last_Update": 1596530083000,
            "Lat": 3.9193,
            "Long_": -56.0278,
            "Confirmed": 1893,
            "Deaths": 27,
            "Recovered": 1227,
            "Active": 639
        }
    },
    {
        "attributes": {
            "OBJECTID": 158,
            "Country_Region": "Sierra Leone",
            "Last_Update": 1596530083000,
            "Lat": 8.460555,
            "Long_": -11.779889,
            "Confirmed": 1848,
            "Deaths": 67,
            "Recovered": 1375,
            "Active": 406
        }
    },
    {
        "attributes": {
            "OBJECTID": 45,
            "Country_Region": "Benin",
            "Last_Update": 1596530083000,
            "Lat": 9.3077,
            "Long_": 2.3158,
            "Confirmed": 1805,
            "Deaths": 36,
            "Recovered": 1036,
            "Active": 733
        }
    },
    {
        "attributes": {
            "OBJECTID": 186,
            "Country_Region": "Yemen",
            "Last_Update": 1596530083000,
            "Lat": 15.552727,
            "Long_": 48.516388,
            "Confirmed": 1734,
            "Deaths": 499,
            "Recovered": 863,
            "Active": 372
        }
    },
    {
        "attributes": {
            "OBJECTID": 134,
            "Country_Region": "New Zealand",
            "Last_Update": 1596530083000,
            "Lat": -40.9006,
            "Long_": 174.886,
            "Confirmed": 1567,
            "Deaths": 22,
            "Recovered": 1523,
            "Active": 22
        }
    },
    {
        "attributes": {
            "OBJECTID": 176,
            "Country_Region": "Tunisia",
            "Last_Update": 1596530083000,
            "Lat": 33.886917,
            "Long_": 9.537499,
            "Confirmed": 1565,
            "Deaths": 51,
            "Recovered": 1225,
            "Active": 289
        }
    },
    {
        "attributes": {
            "OBJECTID": 180,
            "Country_Region": "Uruguay",
            "Last_Update": 1596530083000,
            "Lat": -32.5228,
            "Long_": -55.7658,
            "Confirmed": 1291,
            "Deaths": 36,
            "Recovered": 1023,
            "Active": 232
        }
    },
    {
        "attributes": {
            "OBJECTID": 33,
            "Country_Region": "Angola",
            "Last_Update": 1596530083000,
            "Lat": -11.2027,
            "Long_": 17.8739,
            "Confirmed": 1280,
            "Deaths": 58,
            "Recovered": 476,
            "Active": 746
        }
    },
    {
        "attributes": {
            "OBJECTID": 109,
            "Country_Region": "Latvia",
            "Last_Update": 1596530083000,
            "Lat": 56.8796,
            "Long_": 24.6032,
            "Confirmed": 1249,
            "Deaths": 32,
            "Recovered": 1070,
            "Active": 147
        }
    },
    {
        "attributes": {
            "OBJECTID": 101,
            "Country_Region": "Jordan",
            "Last_Update": 1596530083000,
            "Lat": 31.24,
            "Long_": 36.51,
            "Confirmed": 1218,
            "Deaths": 11,
            "Recovered": 1131,
            "Active": 76
        }
    },
    {
        "attributes": {
            "OBJECTID": 112,
            "Country_Region": "Liberia",
            "Last_Update": 1596530083000,
            "Lat": 6.428055,
            "Long_": -9.429499,
            "Confirmed": 1214,
            "Deaths": 78,
            "Recovered": 696,
            "Active": 440
        }
    },
    {
        "attributes": {
            "OBJECTID": 178,
            "Country_Region": "Uganda",
            "Last_Update": 1596530083000,
            "Lat": 1.373333,
            "Long_": 32.290275,
            "Confirmed": 1195,
            "Deaths": 5,
            "Recovered": 1070,
            "Active": 120
        }
    },
    {
        "attributes": {
            "OBJECTID": 84,
            "Country_Region": "Georgia",
            "Last_Update": 1596530083000,
            "Lat": 42.3154,
            "Long_": 43.3569,
            "Confirmed": 1182,
            "Deaths": 17,
            "Recovered": 962,
            "Active": 203
        }
    },
    {
        "attributes": {
            "OBJECTID": 67,
            "Country_Region": "Cyprus",
            "Last_Update": 1596530083000,
            "Lat": 35.1264,
            "Long_": 33.4299,
            "Confirmed": 1155,
            "Deaths": 19,
            "Recovered": 856,
            "Active": 280
        }
    },
    {
        "attributes": {
            "OBJECTID": 136,
            "Country_Region": "Niger",
            "Last_Update": 1596530083000,
            "Lat": 17.607789,
            "Long_": 8.081666,
            "Confirmed": 1152,
            "Deaths": 69,
            "Recovered": 1032,
            "Active": 51
        }
    },
    {
        "attributes": {
            "OBJECTID": 52,
            "Country_Region": "Burkina Faso",
            "Last_Update": 1596530083000,
            "Lat": 12.2383,
            "Long_": -1.5616,
            "Confirmed": 1150,
            "Deaths": 53,
            "Recovered": 947,
            "Active": 150
        }
    },
    {
        "attributes": {
            "OBJECTID": 174,
            "Country_Region": "Togo",
            "Last_Update": 1596530083000,
            "Lat": 8.6195,
            "Long_": 0.8248,
            "Confirmed": 976,
            "Deaths": 19,
            "Recovered": 663,
            "Active": 294
        }
    },
    {
        "attributes": {
            "OBJECTID": 32,
            "Country_Region": "Andorra",
            "Last_Update": 1596530083000,
            "Lat": 42.5063,
            "Long_": 1.5218,
            "Confirmed": 937,
            "Deaths": 52,
            "Recovered": 821,
            "Active": 64
        }
    },
    {
        "attributes": {
            "OBJECTID": 59,
            "Country_Region": "Chad",
            "Last_Update": 1596530083000,
            "Lat": 15.4542,
            "Long_": 18.7322,
            "Confirmed": 936,
            "Deaths": 75,
            "Recovered": 814,
            "Active": 47
        }
    },
    {
        "attributes": {
            "OBJECTID": 100,
            "Country_Region": "Jamaica",
            "Last_Update": 1596530083000,
            "Lat": 18.1096,
            "Long_": -77.2975,
            "Confirmed": 905,
            "Deaths": 12,
            "Recovered": 743,
            "Active": 150
        }
    },
    {
        "attributes": {
            "OBJECTID": 123,
            "Country_Region": "Malta",
            "Last_Update": 1596530083000,
            "Lat": 35.9375,
            "Long_": 14.3754,
            "Confirmed": 874,
            "Deaths": 9,
            "Recovered": 666,
            "Active": 199
        }
    },
    {
        "attributes": {
            "OBJECTID": 153,
            "Country_Region": "Sao Tome and Principe",
            "Last_Update": 1596530083000,
            "Lat": 0.18636,
            "Long_": 6.613081,
            "Confirmed": 874,
            "Deaths": 15,
            "Recovered": 787,
            "Active": 72
        }
    },
    {
        "attributes": {
            "OBJECTID": 168,
            "Country_Region": "Syria",
            "Last_Update": 1596530083000,
            "Lat": 34.802075,
            "Long_": 38.996815,
            "Confirmed": 847,
            "Deaths": 46,
            "Recovered": 268,
            "Active": 533
        }
    },
    {
        "attributes": {
            "OBJECTID": 49,
            "Country_Region": "Botswana",
            "Last_Update": 1596530083000,
            "Lat": -22.3285,
            "Long_": 24.6849,
            "Confirmed": 804,
            "Deaths": 2,
            "Recovered": 63,
            "Active": 739
        }
    },
    {
        "attributes": {
            "OBJECTID": 111,
            "Country_Region": "Lesotho",
            "Last_Update": 1596530083000,
            "Lat": -29.609988,
            "Long_": 28.233608,
            "Confirmed": 718,
            "Deaths": 19,
            "Recovered": 173,
            "Active": 526
        }
    },
    {
        "attributes": {
            "OBJECTID": 69,
            "Country_Region": "Diamond Princess",
            "Last_Update": 1596530083000,
            "Lat": null,
            "Long_": null,
            "Confirmed": 712,
            "Deaths": 13,
            "Recovered": 651,
            "Active": 48
        }
    },
    {
        "attributes": {
            "OBJECTID": 152,
            "Country_Region": "San Marino",
            "Last_Update": 1596530083000,
            "Lat": 43.9424,
            "Long_": 12.4578,
            "Confirmed": 699,
            "Deaths": 42,
            "Recovered": 657,
            "Active": 0
        }
    },
    {
        "attributes": {
            "OBJECTID": 38,
            "Country_Region": "Bahamas",
            "Last_Update": 1596530083000,
            "Lat": 25.025885,
            "Long_": -78.035889,
            "Confirmed": 679,
            "Deaths": 14,
            "Recovered": 91,
            "Active": 574
        }
    },
    {
        "attributes": {
            "OBJECTID": 183,
            "Country_Region": "Vietnam",
            "Last_Update": 1596530083000,
            "Lat": 14.058324,
            "Long_": 108.277199,
            "Confirmed": 652,
            "Deaths": 8,
            "Recovered": 374,
            "Active": 270
        }
    },
    {
        "attributes": {
            "OBJECTID": 171,
            "Country_Region": "Tanzania",
            "Last_Update": 1596530083000,
            "Lat": -6.369028,
            "Long_": 34.888822,
            "Confirmed": 509,
            "Deaths": 21,
            "Recovered": 183,
            "Active": 305
        }
    },
    {
        "attributes": {
            "OBJECTID": 83,
            "Country_Region": "Gambia",
            "Last_Update": 1596530083000,
            "Lat": 13.4432,
            "Long_": -15.3101,
            "Confirmed": 498,
            "Deaths": 9,
            "Recovered": 68,
            "Active": 421
        }
    },
    {
        "attributes": {
            "OBJECTID": 91,
            "Country_Region": "Guyana",
            "Last_Update": 1596530083000,
            "Lat": 4.860416,
            "Long_": -58.93018,
            "Confirmed": 474,
            "Deaths": 21,
            "Recovered": 185,
            "Active": 268
        }
    },
    {
        "attributes": {
            "OBJECTID": 169,
            "Country_Region": "Taiwan*",
            "Last_Update": 1596530083000,
            "Lat": 23.7,
            "Long_": 121,
            "Confirmed": 474,
            "Deaths": 7,
            "Recovered": 441,
            "Active": 26
        }
    },
    {
        "attributes": {
            "OBJECTID": 54,
            "Country_Region": "Burundi",
            "Last_Update": 1596530083000,
            "Lat": -3.3731,
            "Long_": 29.9189,
            "Confirmed": 395,
            "Deaths": 1,
            "Recovered": 304,
            "Active": 90
        }
    },
    {
        "attributes": {
            "OBJECTID": 60,
            "Country_Region": "Comoros",
            "Last_Update": 1596530083000,
            "Lat": -11.6455,
            "Long_": 43.3333,
            "Confirmed": 386,
            "Deaths": 7,
            "Recovered": 330,
            "Active": 49
        }
    },
    {
        "attributes": {
            "OBJECTID": 53,
            "Country_Region": "Burma",
            "Last_Update": 1596530083000,
            "Lat": 21.9162,
            "Long_": 95.956,
            "Confirmed": 355,
            "Deaths": 6,
            "Recovered": 302,
            "Active": 47
        }
    },
    {
        "attributes": {
            "OBJECTID": 125,
            "Country_Region": "Mauritius",
            "Last_Update": 1596530083000,
            "Lat": -20.348404,
            "Long_": 57.552152,
            "Confirmed": 344,
            "Deaths": 10,
            "Recovered": 334,
            "Active": 0
        }
    },
    {
        "attributes": {
            "OBJECTID": 128,
            "Country_Region": "Mongolia",
            "Last_Update": 1596530083000,
            "Lat": 46.8625,
            "Long_": 103.8467,
            "Confirmed": 293,
            "Deaths": 0,
            "Recovered": 230,
            "Active": 63
        }
    },
    {
        "attributes": {
            "OBJECTID": 77,
            "Country_Region": "Eritrea",
            "Last_Update": 1596530083000,
            "Lat": 15.1794,
            "Long_": 39.7823,
            "Confirmed": 282,
            "Deaths": 0,
            "Recovered": 225,
            "Active": 57
        }
    },
    {
        "attributes": {
            "OBJECTID": 56,
            "Country_Region": "Cambodia",
            "Last_Update": 1596530083000,
            "Lat": 11.55,
            "Long_": 104.9167,
            "Confirmed": 240,
            "Deaths": 0,
            "Recovered": 197,
            "Active": 43
        }
    },
    {
        "attributes": {
            "OBJECTID": 175,
            "Country_Region": "Trinidad and Tobago",
            "Last_Update": 1596530083000,
            "Lat": 10.6918,
            "Long_": -61.2225,
            "Confirmed": 182,
            "Deaths": 8,
            "Recovered": 135,
            "Active": 39
        }
    },
    {
        "attributes": {
            "OBJECTID": 50,
            "Country_Region": "Brunei",
            "Last_Update": 1596530083000,
            "Lat": 4.5353,
            "Long_": 114.7277,
            "Confirmed": 141,
            "Deaths": 3,
            "Recovered": 138,
            "Active": 0
        }
    },
    {
        "attributes": {
            "OBJECTID": 41,
            "Country_Region": "Barbados",
            "Last_Update": 1596530083000,
            "Lat": 13.1939,
            "Long_": -59.5432,
            "Confirmed": 132,
            "Deaths": 7,
            "Recovered": 98,
            "Active": 27
        }
    },
    {
        "attributes": {
            "OBJECTID": 127,
            "Country_Region": "Monaco",
            "Last_Update": 1596530083000,
            "Lat": 43.7333,
            "Long_": 7.4167,
            "Confirmed": 121,
            "Deaths": 4,
            "Recovered": 105,
            "Active": 12
        }
    },
    {
        "attributes": {
            "OBJECTID": 157,
            "Country_Region": "Seychelles",
            "Last_Update": 1596530083000,
            "Lat": -4.6796,
            "Long_": 55.492,
            "Confirmed": 114,
            "Deaths": 0,
            "Recovered": 113,
            "Active": 1
        }
    },
    {
        "attributes": {
            "OBJECTID": 141,
            "Country_Region": "Papua New Guinea",
            "Last_Update": 1596530083000,
            "Lat": -6.314993,
            "Long_": 143.95555,
            "Confirmed": 111,
            "Deaths": 2,
            "Recovered": 34,
            "Active": 75
        }
    },
    {
        "attributes": {
            "OBJECTID": 46,
            "Country_Region": "Bhutan",
            "Last_Update": 1596530083000,
            "Lat": 27.5142,
            "Long_": 90.4336,
            "Confirmed": 103,
            "Deaths": 0,
            "Recovered": 90,
            "Active": 13
        }
    },
    {
        "attributes": {
            "OBJECTID": 34,
            "Country_Region": "Antigua and Barbuda",
            "Last_Update": 1596530083000,
            "Lat": 17.0608,
            "Long_": -61.7964,
            "Confirmed": 92,
            "Deaths": 3,
            "Recovered": 75,
            "Active": 14
        }
    },
    {
        "attributes": {
            "OBJECTID": 114,
            "Country_Region": "Liechtenstein",
            "Last_Update": 1596530083000,
            "Lat": 47.14,
            "Long_": 9.55,
            "Confirmed": 89,
            "Deaths": 1,
            "Recovered": 85,
            "Active": 3
        }
    },
    {
        "attributes": {
            "OBJECTID": 44,
            "Country_Region": "Belize",
            "Last_Update": 1596530083000,
            "Lat": 17.1899,
            "Long_": -88.4976,
            "Confirmed": 57,
            "Deaths": 2,
            "Recovered": 30,
            "Active": 25
        }
    },
    {
        "attributes": {
            "OBJECTID": 151,
            "Country_Region": "Saint Vincent and the Grenadines",
            "Last_Update": 1596530083000,
            "Lat": 12.9843,
            "Long_": -61.2872,
            "Confirmed": 55,
            "Deaths": 0,
            "Recovered": 45,
            "Active": 10
        }
    },
    {
        "attributes": {
            "OBJECTID": 81,
            "Country_Region": "Fiji",
            "Last_Update": 1596530083000,
            "Lat": -17.7134,
            "Long_": 178.065,
            "Confirmed": 27,
            "Deaths": 1,
            "Recovered": 18,
            "Active": 8
        }
    },
    {
        "attributes": {
            "OBJECTID": 150,
            "Country_Region": "Saint Lucia",
            "Last_Update": 1596530083000,
            "Lat": 13.9094,
            "Long_": -60.9789,
            "Confirmed": 25,
            "Deaths": 0,
            "Recovered": 22,
            "Active": 3
        }
    },
    {
        "attributes": {
            "OBJECTID": 87,
            "Country_Region": "Grenada",
            "Last_Update": 1596530083000,
            "Lat": 12.1165,
            "Long_": -61.679,
            "Confirmed": 24,
            "Deaths": 0,
            "Recovered": 23,
            "Active": 1
        }
    },
    {
        "attributes": {
            "OBJECTID": 173,
            "Country_Region": "Timor-Leste",
            "Last_Update": 1596530083000,
            "Lat": -8.874217,
            "Long_": 125.727539,
            "Confirmed": 24,
            "Deaths": 0,
            "Recovered": 24,
            "Active": 0
        }
    },
    {
        "attributes": {
            "OBJECTID": 108,
            "Country_Region": "Laos",
            "Last_Update": 1596530083000,
            "Lat": 19.85627,
            "Long_": 102.495496,
            "Confirmed": 20,
            "Deaths": 0,
            "Recovered": 19,
            "Active": 1
        }
    },
    {
        "attributes": {
            "OBJECTID": 71,
            "Country_Region": "Dominica",
            "Last_Update": 1596530083000,
            "Lat": 15.415,
            "Long_": -61.371,
            "Confirmed": 18,
            "Deaths": 0,
            "Recovered": 18,
            "Active": 0
        }
    },
    {
        "attributes": {
            "OBJECTID": 149,
            "Country_Region": "Saint Kitts and Nevis",
            "Last_Update": 1596530083000,
            "Lat": 17.357822,
            "Long_": -62.782998,
            "Confirmed": 17,
            "Deaths": 0,
            "Recovered": 16,
            "Active": 1
        }
    },
    {
        "attributes": {
            "OBJECTID": 93,
            "Country_Region": "Holy See",
            "Last_Update": 1596530083000,
            "Lat": 41.9029,
            "Long_": 12.4534,
            "Confirmed": 12,
            "Deaths": 0,
            "Recovered": 12,
            "Active": 0
        }
    },
    {
        "attributes": {
            "OBJECTID": 185,
            "Country_Region": "Western Sahara",
            "Last_Update": 1596530083000,
            "Lat": 24.2155,
            "Long_": -12.8858,
            "Confirmed": 10,
            "Deaths": 1,
            "Recovered": 8,
            "Active": 1
        }
    },
    {
        "attributes": {
            "OBJECTID": 117,
            "Country_Region": "MS Zaandam",
            "Last_Update": 1596530083000,
            "Lat": null,
            "Long_": null,
            "Confirmed": 9,
            "Deaths": 2,
            "Recovered": null,
            "Active": 7
        }
    }
];

const dataGlobalPositif = {
    "name": "Total Positif",
    "value": "18,295,434"
};

const dataGlobalSembuh = {
    "name": "Total Sembuh",
    "value": "10,926,704"
};

const dataGlobalMeninggal = {
    "name": "Total Meninggal",
    "value": "694,233"
};

export {
    dataIndonesia,
    dataGlobal,
    dataProvinsi,
    dataGlobalPositif,
    dataGlobalMeninggal,
    dataGlobalSembuh
};