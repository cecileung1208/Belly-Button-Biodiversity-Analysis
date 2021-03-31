# Belly Button Biodiversity Analysis

![Image](https://github.com/cecileung1208/Plot.ly-Belly-Button-Biodiversity/blob/main/Images/microbes-sem.jpg)

## Background

The objective of this project is to create an webpage with an interactive dashboard using various visualizations to analyze Belly Button Biodiversity for different samples. Datasets are provided in JSON format where D3 was used to import and read the data while using Plotly to create the required visualizations.

## Requirements

For each Subject ID, provide the following: 
1.  Demographics Information that includes ID, ethnicity, gender, age, location, BB Type and Washing Frequency
2.  Horizontal Bar Chart on Top 10 Operational Taxonomic Units (OTUs) Found
3.  Gauge Chart for Weekly Washing Frequency 
4.  Bubble Chart for the Concentration of Operational Taxonomic Units (OTUs) for each Belly Button Sample

## Datasets

## Method

## Scripts

## Results


Please visit the [website](https://cecileung1208.github.io/Plot.ly-Belly-Button-Biodiversity/) to look at the results for each sample.

## 1.  Plotly - Building Plots to Determine Sample Values Across OTU IDs

To build an interactive dashboard, we need to use the [samples.json](https://github.com/cecileung1208/Plot.ly-Belly-Button-Biodiversity/blob/main/Belly%20Button%20Biodiversity/samples.json) to retreive the information and write a javascript code, [app.js](https://github.com/cecileung1208/Plot.ly-Belly-Button-Biodiversity/blob/main/Belly%20Button%20Biodiversity/static/js/app.js), and a [html file], [index.html](https://github.com/cecileung1208/Plot.ly-Belly-Button-Biodiversity/blob/main/Belly%20Button%20Biodiversity/index.html), to display all the information.

The below charts and information will help the audience understand the results of Belly Button Diversity better with graphs, demographic information and dropdown menus.

### Horizontal Bar Graph
Using D3 library to read in samples.json, a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in the individual.

* Using **sample_values** as the **values** for the bar chart.
* Using **otu_ids** as the **labels** for the bar chart.
* Using **otu_labels** as the **hovertext** for the chart.

![Image](https://github.com/cecileung1208/Plot.ly-Belly-Button-Biodiversity/blob/main/Images/hw01.png)

### Bubble Chart
A Bubble Chart has been created to display all the OTU IDs found in the individual.

* Using **otu_ids** for the **x values**.
* Using **sample_values** for the **y values**.
* Using **sample_values** for the **marker size**.
* Using **otu_ids** for the **marker colors**.
* Using **otu_labels** for the **text values**.

![Image](https://github.com/cecileung1208/Plot.ly-Belly-Button-Biodiversity/blob/main/Images/bubble_chart.png)

## Gauge Chart

* A Gauge Chart has been plotted to show the weekly washing frequency of the individual.
* Templates of gauge charts can be found in [https://plot.ly/javascript/gauge-charts/]([https://plot.ly/javascript/gauge-charts/]
* The Gauge Chart has been modifed from the example gauge code to account for values ranging from 0 through 9.

![Image](https://github.com/cecileung1208/Plot.ly-Belly-Button-Biodiversity/blob/main/Images/gauge_chart.png)

## Demographic Information

* Display the sample metadata, i.e., an individual's demographic information.
* Display each key-value pair from the metadata JSON object somewhere on the page.

![Image](https://github.com/cecileung1208/Plot.ly-Belly-Button-Biodiversity/blob/main/Images/hw03.png)

## Dropdown Menu by Individual ID

* Update all of the plots any time that a new sample is selected

![Image](https://github.com/cecileung1208/Plot.ly-Belly-Button-Biodiversity/blob/main/Images/Dropdown.png)


## 2. Final Dashboard Deployment
* See below for the final dashboard output that includes the horizontal bar graph, bubble chart, gauge chart and demographics information.
* The app has been deployed to a GitHub Pages and all the related files are in the [deployment branch](https://github.com/cecileung1208/Plot.ly-Belly-Button-Biodiversity/tree/deployment).
* Link: [https://cecileung1208.github.io/Plot.ly-Belly-Button-Biodiversity/](https://cecileung1208.github.io/Plot.ly-Belly-Button-Biodiversity/)

![Image](https://github.com/cecileung1208/Plot.ly-Belly-Button-Biodiversity/blob/main/Images/final%20dashboard.png)

[Back to Top](#Plotly-Belly-Button-Biodiversity)
     
