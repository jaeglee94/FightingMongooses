var options = {
    chart: {
      height: 435,
      type: 'area',
      stacked: false,
      events: {
        selection: function(chart, e) {
          console.log(new Date(e.xaxis.min) )
        }
      },
    },
    title:{
        text: 'Revenue (2005-2014) in Millions',
        align:'center'
    },
    colors: ['#C0C0C0', '#FF0000', '#0000FF'],
    dataLabels: {
        enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    series: [
        {
            name: 'American Airlines',
            data: [20712,    22563,    22935,    23766,    19917,    22170,    23979,    24855,    26743, 42650]
        },
        {
            name: 'Delta Airlines',
            data: [16480,    17532,    19154,    22697,    28063,    31755,    35115,    36670,    37773,    40362]
        },
        {
            name: 'Southwest Airlines',
            data: [7584,    9086,    9861,    11023,    10350,    12104,    15658,    17088,    17699,    18605]
        }
      ],
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8,
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left'
    },
    xaxis: {
        categories: ["2005","2006","2007","2008","2009","2010","2011","2012","2013","2014"],
        type: 'datetime'
    },
  }

  var chart = new ApexCharts(
    document.querySelector("#revenue"),
    options
  );

  chart.render();
