import { DEFAULT_TIME, TIME_FORMAT } from "./constants.js"

/**
 * Decremental timer alert
 */
class Timer {
    /**
    * Constructor
    * @param {Number} total Total time in seconds
    */
    constructor(total) {
        this.total = total || DEFAULT_TIME
        this.remainingTime = this.total
        console.log('New Timer: ', this.total)
    }

    /**
    * Get formatted minutes
    * @return {String} minutes in two digits
    */
    getMinutes() {
        let minutes = (Math.floor(this.remainingTime/60))
        return minutes.toLocaleString(...TIME_FORMAT)
    }

    /**
    * Get formatted seconds
    * @return {String} seconds in two digits
    */
    getSeconds() {
        let minutes = (this.remainingTime % 60)
        return minutes.toLocaleString(...TIME_FORMAT)
    }
}

export default Timer