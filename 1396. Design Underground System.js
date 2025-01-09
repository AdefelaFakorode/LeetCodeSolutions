
var UndergroundSystem = function () {
    this.checkIns = new Map()
    this.journeys = new Map()
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
    /*
    init map 
    key: id
    value: [stationName, time checked in]
    */
    if (!this.checkIns.has(id)) {
        this.checkIns.set(id, [stationName, t])
    }

};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
    /*
    if map has user id
         take station name and time checkout out

    */
    let [startStation, startTime] = this.checkIns.get(id) //getting original state & start time
    let travelTime = t - startTime // time traveled
    let key = startStation + '|' + stationName //pair for start and end station

    if (!this.journeys.has(key)) {
        this.journeys.set(key, [0, 0])
    }
    let [totalTime, count] = this.journeys.get(key);
    this.journeys.set(key, [totalTime + travelTime, count + 1]);

    // Remove the checkIn record (optional, but often done for correctness)
    this.checkIns.delete(id)
}
/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {
    /*
    startStation = users t
    endStation = users checkout out time 
    */
    let key = startStation + '|' + endStation;
    let [totalTime, count] = this.journeys.get(key);
    return totalTime / count;

};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */