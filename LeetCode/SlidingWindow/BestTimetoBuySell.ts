//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Understand the problem 
// Phair xem giai moi lam duoc bai nay
// Minh ngu vai ca lon

function maxProfit(prices: number[]): number {
  var max_profit = 0; 
  var min_price = prices[0];
  for(var i = 0; i < prices.length; i++){
    min_price = Math.min(prices[i], min_price);
    var current_profit = prices[i] - min_price;
    max_profit = Math.max(current_profit, max_profit);
  }  

  return max_profit;
};

console.log(maxProfit([7,1,5,3,6,4]));