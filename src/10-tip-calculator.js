/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
*/
export function calculateTip(billAmount, serviceRating) {
  // Your code here
  let tip_p
  switch (serviceRating) {
    case 1:
      tip_p = 5
      break;
    case 2:
      tip_p = 10
      break;
    case 3:
      tip_p = 15
      break;
    case 4:
      tip_p = 20
      break;
    case 5:
      tip_p = 25
      break;
    default:
      return null
  }

  if (billAmount <=0) return null 

  let tip_amt = Math.round((tip_p/100 * billAmount) *100,2) /100
  let tot_amt = Math.round((billAmount + tip_amt) *100,2) /100

  return { "tipPercentage": tip_p, "tipAmount": tip_amt, "totalAmount": tot_amt }

}
