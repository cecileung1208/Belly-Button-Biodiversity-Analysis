//HORIZONTAL BAR PLOT - TOP 10 OTU ID WITH HIGHEST SAMPLE VALUES
function BuildPlots(id) {

  //Retreive JSON data to be used to extract information
  d3.json("samples.json").then((data)=> {console.log(data)

    //Retreive the sample dataset
    var sample_data = data.samples;
    //console.log(sample_data)

    //Filter sample data by id
    var samples_filter = sample_data.filter(object => object.id == id);
    var samples= samples_filter[0]
      
    //Retrieve the otu_ids, sample_values, and otu_labels list from filtered id
    var otu_list = samples.otu_ids;
    var samples_list = samples.sample_values;
    var otu_labels_list = samples.otu_labels;
  
    //Slice Data for sample-values, labels, otu_id as we only need to display the top 10 OTU ID with the highest sample value.
    //Slice data for otu_id in descending order as we want to show the otu_id with the highest sample value at the top
    var sample_values = samples_list.slice(0,10).reverse();
    var labels = otu_labels_list.slice(0,10).reverse();
    var otu_id = otu_list.slice(0,10).reverse();
    
    //Insert "OTU_ID" infront of each value in the otu_id array
    var otu_id = otu_id.map(row => "OTU_ID " + row)
    
    //Display what the datasets look like on the console
    //console.log(sample_data, samples_filter, samples)
    //console.log(otu_list, samples_list, otu_labels_list)
    //console.log(otu_id, sample_values, labels);
    
    // Trace1 for Top 10 OTU_ID Found
    var trace1 = {
      x: sample_values,
      y: otu_id,
      text: labels, 
      type:"bar",
      orientation: "h",
    }

    // Trace 2 for the Sample Values for all the OTU_ID under each ID
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
    var layout1 = {title: "Top 10 OTU IDs Found",
                  margin: {
                            l: 120,
                            r: 40,
                            t: 75,
                            b: 75
                          },
                  };

    //Render the plot to the div tag with id "plot"
    Plotly.newPlot("bar", data1, layout1);
    Plotly.newPlot("bubble", data2);

    })
    
    };


// DEMOGRAPHICS INFOMRATION

function MetaData(id){

  //Retreive JSON data to be used to extract information
  d3.json("samples.json").then((data)=> {

    //Retreive the metadata dataset
    var metadata = data.metadata;

    //Filter metadata by ID
    var metadata_list = metadata.filter(object => object.id == id);
    var results = metadata_list[0]

     //Display what the datasets look like on the console
     //console.log(metadata, metadata_list, results)

    //Select the demographics info box
    var select = d3.select("#sample-metadata");

    //Empty existing table before we select new id
    select.html("");

    //Insert the filtered metadata into the demographics info box
    Object.entries(results).forEach(([key, value]) => {
      select.append("h6").text(`${key}: ${value}`);

 
      });
    });
  };

// BONUS:  GAUGE CHART

function Gauge(id){

  //Retreive JSON data to be used to extract information
  d3.json("samples.json").then((data)=> {console.log(data)
    var metadata = data.metadata;
    console.log(metadata);


    var metadata_filter = metadata.filter(object => object.id == id);
    var results = metadata_filter[0]
    console.log(results);

    var wfreq = results.wfreq;
  
    var trace3 = {
      domain: { x: [0, 1], y: [0, 1] },
      value: wfreq,
      title: { text: "Scrubs per Week" },
	  	type: "indicator",
      mode: "gauge+number",
      gauge: {
              axis: {range: [null, 9]},

      }
    }

    var data3 = [trace3]

    var layout3 = { width: 600, height: 500, margin: { t: 0, b: 0 } };

    Plotly.newPlot('gauge', data3, layout3);
  
  });
}


//DROPDOWN MENU

function DropDown(){
  //Retreive JSON data to be used to extract information
  d3.json("samples.json").then((data)=> {

    //Retreive id values in name list to create an array for the dropdown menu
    var names = data.names;
    //Display names list 
    //console.log(names)

    //Select the dropdown menu into html file
    var select = document.getElementById("selDataset");

    
    //Loop through each item in the name list to add in the dropdown menu
    for (i=0; i< names.length; i++)
    {
      //Create a new div element
      var option = document.createElement("OPTION");

      //Give some content to the element
      var id = document.createTextNode(names[i]);

      //Add the text node to the newly created div
      option.appendChild(id);

      //Set value in name list
      option.setAttribute("value",names[i]);

      //Insert the id names into the dropdown menu
      select.insertBefore(option, select.lastChild);
    };

  //Call the BuildPlots & MetaData function and display the visuals/demographics info from the first id
    BuildPlots(names[0]);
    MetaData(names[0]);
    Gauge(names[0]);
  });
};


//Create the function for the change event
function optionChanged(id) {
  BuildPlots(id);
  MetaData(id);
  Gauge(id);
}

//Call DropDown() Function
DropDown();