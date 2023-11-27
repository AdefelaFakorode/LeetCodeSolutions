
/**
 * @param {number[][]} costs
 * @return {number}
 */

/*
- sort in decending order:
    take abs difference 
    sort largest financial potential impact to smallest financial potential impact

- set cap:
    # of people can go to CityA n City B
    cost.length/1
    2N = len of cost array
    N = len of cost array/2

- have counters to track # of people going to each city

-sum var
    track city with lowest cost
*/

var twoCitySchedCost = function (costs) {
    costs.sort((a, b) => {
        return Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]);
    });

    //cap on # of people going to each city
    let cap = costs.length / 2;
    let A = 0;
    let B = 0;
    let sum = 0;

    for (let i = 0; i < costs.length; i++) {
        let costCityA = costs[i][0];
        let costCityB = costs[i][1];
        //if cityA is cheaper
        if (costCityA <= costCityB) {
            if (A < cap) {
                sum += costCityA;
                A++;
            } else {
                sum += costCityB;
                B++;
            }
        }

        //if cityB is cheaper
        if (costCityB < costCityA) {
            if (B < cap) {
                sum += costCityB;
                B++;
            } else {
                sum += costCityA;
                A++;
            }
        }
    }

    return sum;
};