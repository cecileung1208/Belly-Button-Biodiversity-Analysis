//Call samples.json and display on console
function barPlot() {

  d3.json("samples.json").then((data)=> {console.log(data)
    var otu_list = data.samples[0].otu_ids;
    console.log(otu_list);

    var samples_list = data.samples[0].sample_values;
    console.log(samples_list);
    
    var otu_id = otu_list.slice(0,10).reverse();
    console.log(otu_id);

    var samples = samples_list.slice(0,10).reverse();
    console.log(samples)

    var labels = otu_id.map(row => "OTU" + row)
    console.log(labels)

    var trace1 = {
      x: samples,
      y: labels,
      type:"bar",
      orientation: "h",
    }

    var data = [trace1];

    var layout = {title: "Top 10 OTU"}

    Plotly.newPlot("bar", data, layout);

    })
    
    };


barPlot();



