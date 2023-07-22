const maxUint32 = 4294967295;
const maxFixedPoint = 10**5;


const results = [
  {
    "name": "Red Blood Count",
    "value": 6.2 * maxFixedPoint
  },
  {
    "name": "White Blood Count",
    "value": Math.round(5.1 * maxFixedPoint)
  },
  {
    "name": "Hemoglobin",
    "value": 140 * maxFixedPoint
  },
  {
    "name": "Hematocrit",
    "value": 42 * maxFixedPoint
  },
  {
    "name": "Platelets",
    "value": 180 * maxFixedPoint
  }
]

results.forEach(({name, value}) => {
  console.log(`${name}: ${value}`)
})