//HORIZONTAL BAR PLOT - TOP 10 OTU ID WITH HIGHEST SAMPLE VALUES
function SamplePlot() {

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

    // Trace1 for Top 10 OTU_ID Found

    var trace1 = {
      x: samples,
      y: otu_id,
      text: labels, 
      type:"bar",
      orientation: "h",
    }
    var trace2={
      x: otu_list,
      y: samples_list,
      text: otu_labels_list,
      mode: "markers",
      marker: {
        color: otu_list,
        size: samples_list,
        }
    };
    

    //data
    var data1 = [trace1];
    var data2=[trace2]

    //Apply the group bar mode to the layout
    var layout = {title: "Top 10 OTU IDs Found",
                  margin: {
                            l: 120,
                            r: 40,
                            t: 75,
                            b: 75
                          },
                  };

    //Render the plot to the div tag with id "plot"
    Plotly.newPlot("bar", data1, layout);
    Plotly.newPlot("bubble", data2);

    })
    
    };

SamplePlot();

// METADATA INFO ON DROPDOWN MENU


// Use D3 to create an event handler

function inputID(){
  d3.json("samples.json").then((data)=> {console.log(data)

    var names = data.names;
    console.log(names)

    var select = document.getElementById("selDataset");

    

    for (i=0; i< names.length; i++)
    {
      var option = document.createElement("OPTION");
      var txt = document.createTextNode(names[i]);
      option.appendChild(txt);
      option.setAttribute("value",names[i]);
      select.insertBefore(option, select.lastChild);
    }

  });
};

  inputID()
