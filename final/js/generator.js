//http://www.json-generator.com
[
    '{{repeat(168)}}',
    {
        date: function(tags, index){
            //var index = 96;
  var day = Math.floor(index/24)+1;
  //console.log(day);
  var hour = index%24;
  //console.log(hour);
  var unixDate = Date.parse("Jan " + day + ", 2014 0" + hour + ":00:00 GMT");
  //console.log(unixDate);
            return unixDate/1000;
        },
        timeMedian:'{{integer([5], [600]);}}',
        clicks:'{{integer([0], [200])}}'
    }
]