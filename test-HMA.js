var method = {};

method.init = function() {

    this.name = "TALib-port-tester";


var BollingerSettings = {

       TimePeriod: 20,
        NbDevUp: 2,
        NbDevDn: 2,
        optInMAType: 2


}
var TASMASettings = {

       optInTimePeriod: 14,

}
    this.addIndicator('ind', 'HMA', 14);
    //this.addTalibIndicator("tind", "hma", TASMASettings);
    this.addTulipIndicator("tuind", "hma", TASMASettings);
};


method.check = function() {};
method.update= function(candle) {

var WMA = this.indicators.ind.result;

	  console.log('WMA >> ' + WMA);
    console.log(this.tulipIndicators.tuind.result);
    //console.log(this.talibIndicators.tind.result);

};
method.log = function() {};

module.exports = method;
