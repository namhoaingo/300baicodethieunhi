//https://leetcode.com/problems/time-based-key-value-store/

class TimeMap {
    private _timeStampArray: Array<TimeValueOject>;
    constructor() {
        this._timeStampArray = new Array<TimeValueOject>();
    }

    set(key: string, value: string, timestamp: number): void {
        var timeValueObject = new TimeValueOject(timestamp, key, value);
        // Always insert into the array
        this._timeStampArray.push(timeValueObject);
    }

    get(key: string, timestamp: number): string {
        var restulTimeStampIndex = -1; 
        var left_index = 0;
        var right_index = this._timeStampArray.length-1;
        // Use binary search
        while(true){
            var mid_index = Math.floor((left_index + right_index) / 2);
            if (left_index == mid_index){
                // 2 truong hop xay ra
                if(this._timeStampArray[right_index].Time() <= timestamp){
                // 1 check voi right
                    restulTimeStampIndex = right_index;
                    break;
                }
                else{
                // 2 check voi left
                    restulTimeStampIndex = left_index;
                    break;
                }
            }
            else if(this._timeStampArray[mid_index].Time() > timestamp){
                right_index = mid_index - 1;
            } else{
                left_index = mid_index;
            }
        }

        return this._timeStampArray[restulTimeStampIndex].Value();
    }
}

class TimeValueOject{
    private _time: number;
    private _key: string; 
    private _value: string;

    constructor(time: number, key: string, value: string){
        this._time = time;
        this._key = key;
        this._value = value;
    }

    Time(): number{
        return this._time;
    }

    Key(): string{
        return this._key;
    }

    Value(): string{
        return this._value;
    }
}


/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */


  function get_test(): number {
        var timestamp = 4;    
        var testArray = [1,4];
        var restulTimeStampIndex = -1; 
        var left_index = 0;
        var right_index = testArray.length-1;
        // Use binary search
        while(true){
            var mid_index = Math.floor((left_index + right_index) / 2);
            //if (mid_index == right_index){
                // So Chan
            //    restulTimeStampIndex = left_index
            //    break;
            //}
            //else 
            if (left_index == mid_index){
                // So le
                // Co 2 truong hop xay ra
                // 1. so do o giua
                // 2. la so lon nhat
                if(testArray[right_index] <= timestamp){
                    restulTimeStampIndex = right_index;
                    break;
                }else{
                    restulTimeStampIndex = left_index;
                    break;
                }
            } 
            else if(testArray[mid_index] > timestamp){
                right_index = mid_index - 1;
            } else{
                left_index = mid_index ;
            }
        }

        return restulTimeStampIndex;
    }

console.log(get_test());
