//Qno.11:
// let a = [5, 1, 1]
// let b = [3, 44, 1]
// let e = a.filter(f=>f!==0)

// function diff(e, b) {
//     let timeDiff = []
//   for (let i = 0; i < e.length; i++) {
//     timeDiff[i] = e[i] - b[i]
//     if (timeDiff[2]<0) {
//         timeDiff[2] = timeDiff[2] + 60;
//         timeDiff[1] = timeDiff[1] - 1;
//     }
//     if (timeDiff[1]<0) {
//         timeDiff[1] = timeDiff[1] + 60;
//         timeDiff[0] = timeDiff[0] - 1;
//     }
//   }

//   return e.join(":")+ " - " + b.join(":")+ " = " + timeDiff.join(":")
// }

// console.log(diff(e, b));

//Qno.12:
// let cPrice = 100
// let sPrice = 100

// function profitLoss(sp, cp) {
//     let pOrf = sp - cp;
//     let percent = pOrf * 100 / cp
//     if (percent < 0) {
//         percent = percent - 2 * percent;
//         return "Loss" + " " + percent.toFixed(2) + "" + "%"
//     }
//     if (percent == 0) {
//         return "No Profit/Loss"
//     }
//     return "Profit" + " " + percent.toFixed(2) + "" + "%";
// }

// console.log(profitLoss(sPrice, cPrice));














