//HORIZONTAL BAR PLOT - TOP 10 OTU ID WITH HIGHEST SAMPLE VALUES
//BUBBLE CHART - ALL OTU ID SAMPLE VALUES


//Create function to build h-bar graph and bubble chart to display per ID.
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
    
    // PLOT H BAR Trace1 for Top 10 OTU_ID Found 
    var trace1 = {
      x: sample_values,
      y: otu_id,
      text: labels, 
      type:"bar",
      orientation: "h",
    }

    //Apply the group bar mode to the layout
    var layout1 = {
      margin: {
                l: 120,
                r: 40,
                t: 75,
                b: 75
              },
            };

    //data to display for trace 1
    var data1 = [trace1];

    // PLOT BUBBLE CHART for the Sample Values for all the OTU_ID under each ID
    var trace2={
      x: otu_list,
      y: samples_list,
      text: otu_labels_list,
      mode: "markers",
      marker: {
        color: otu_list,
        colorscale: "Viridis",
        size: samples_list,
        }
    };
    
    //data to display for trace 2
    var data2=[trace2]

    
    //Bubbule Chart Layout
    var layout2 = {
          xaxis: {title: 'OTU ID'},
          }
       

    //Render the plots to the div tag with id "plot"
    Plotly.newPlot("bar", data1, layout1);
    Plotly.newPlot("bubble", data2, layout2);

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

// BONUS:  GAUGE CHART

function Gauge(id){
  

  //Retreive JSON data to be used to extract information
  d3.json("samples.json").then((data)=> {console.log(data)
    var metadata = data.metadata;
    
    //Filter metadata by ID
    var metadata_filter = metadata.filter(object => object.id == id);
    var results = metadata_filter[0];

     //Retrieve the washing fequency (wfreq) from filtered id
    var wfreq = results.wfreq;
    console.log(wfreq)

  //Display info on console
  //console.log(metadata);
  //console.log(results);
  //console.log(wfreq)

  
    // PLOT GAUGE CHART for the washign frequency (wfreq) under each ID
    var trace3 = [
      {
        domain: { x: [0, 1], y: [0, 1] },
        value: wfreq,
        title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week" },
        type: "indicator",
        mode: "gauge+number",
        //delta: { reference: 380 },
        gauge: {
          axis: { range: [null, 9] },
          bar: { color: "darkseagreen"},
          steps: [
            {range: [0, 1], color: "#f5f5f5" },
            {range: [1, 2], color: "#f2f2f2"},
            {range: [2, 3], color: "#ecf9f2"},
            {range: [3, 4], color: "#c6ecd7"},
            {range: [4, 5], color: "#9fdfbc"},
            {range: [5, 6], color: "#79d2a1"},
            {range: [6, 7], color: "#53c687"},
            {range: [7, 8], color: "#39ac6d"},
            {range: [8, 9], color: "#2d8655"},
          ],
          threshold: {
            line: { color: "darkred", width: 4 },
            thickness: 0.75,
            value: wfreq
          }
        }
      }
    ];


    //Gauge Chart Layout
    var layout3 = { width: 600, height: 450, margin: { t: 0, b: 0 } };
    
     //Render the plots to the div tag with id "plot"
    Plotly.newPlot('gauge', trace3, layout3); 

  });
}

