Highcharts.stockChart('container2', {
    chart: {
        events: {
            load: function () {
  
                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = nilaiTemperature;
                    series.addPoint([x, y], true, true);
                }, 1000);
            }
        }
    },
  
    time: {
        useUTC: false
    },
  
    rangeSelector: {
        buttons: [{
            count: 1,
            type: 'minute',
            text: '1M'
        }, {
            count: 5,
            type: 'minute',
            text: '5M'
        }, {
            type: 'all',
            text: 'All'
        }],
        inputEnabled: false,
        selected: 0
    },
  
    title: {
        text: 'Live Data Temperature'
    },
  
    exporting: {
        enabled: false
    },
  
    series: [{
        name: 'Temperature',
        data: (function () {
            // generate an array of random data
            var data1 = [],
                time = (new Date()).getTime(),
                i;
  
            for (i = -999; i <= 0; i += 1) {
                data.push([
                    time + i * 1000,
                    nilaiTemperature
                ]);
            }
            return data1;
        }())
    }]
  });
  
 
  