//HORIZONTAL BAR PLOT - TOP 10 OTU ID WITH HIGHEST SAMPLE VALUES
function barPlot() {

  //Retreive JSON data on console log.  Easier to view data structure in console.
  d3.json("samples.json").then((data)=> {console.log(data)

    //Retreive the first sample id
    var first_sample = data.samples[0];
    //Display if information is displayed
    console.log(first_sample)

    //Retrieve the otu_ids for the first id
    var otu_list = data.samples[0].otu_ids;

    //Retreive the sample_values for the first id
    var samples_list = data.samples[0].sample_values;
    
    //Retreive the otu_labels for the first id
    var otu_labels_list = data.samples[0].otu_labels;
  

    //Display lists for otu_id, sample_values, otu_labels
    console.log(otu_list);
    console.log(samples_list);
    console.log(otu_labels_list);
    

    //Only need the 10 otu_id with the highest sample_values, so we need to slice the data from 80 to 10

    //Slice data for otu_id in descending order as we want to show the otu_id with the highest sample value at the top
    var otu_id = otu_list.slice(0,10).reverse();
    
    //Insert "OTU_ID" infront of each value in the otu_id array
    var otu_id = otu_id.map(row => "OTU_ID " + row)
    
    //Slice data for sample_values
    var samples = samples_list.slice(0,10).reverse();
   
    //Slice data for labels
    var labels = otu_labels_list.slice(0,10).reverse();
    

    //Display sliced lists for otu_id, sample_values, otu_labels
    console.log(otu_id);
    console.log(samples);
    console.log(labels)


    var trace1 = {
      x: samples,
      y: otu_id,
      text: labels, 
      type:"bar",
      orientation: "h",
    }

    var data = [trace1];

    var layout = {title: "Top 10 OTU",
                  margin: {
                            l: 100,
                            r: 100,
                            t: 100,
                            b: 100
                          },
                  };

    Plotly.newPlot("bar", data, layout);

    })
    
    };


barPlot();



