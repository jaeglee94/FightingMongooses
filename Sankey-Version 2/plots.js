var data = {
  type: "sankey",
  orientation: "h",
  node: {
    pad: 15,
    thickness: 30,
    line: {
      color: "black",
      width: 0.5
    },
   label: ["Delta","United","American Airlines"],
   color: ["Blue", "Green", "Red"]
      },

  link: {
    source: [0,1,0,2,3,3],
    target: [2,3,3,4,4,5],
    value:  [8,4,2,8,4,2]
  }
}

var data = [data]

var layout = {
  title: "Basic Sankey",
  font: {
    size: 10
  }
}

Plotly.react('plot', data, layout)