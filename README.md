# Belly Button Biodiversity Analysis

![Image](https://github.com/cecileung1208/Plot.ly-Belly-Button-Biodiversity/blob/main/Images/microbes-sem.jpg)

## Background

The objective of this project is to create an webpage with an interactive dashboard using various visualizations to analyze Belly Button Biodiversity for different samples. Datasets are provided in JSON format where D3 was used to import and read the data while using Plotly to create the required visualizations.

## Requirements

Create an interactive dashboard with a dropdown menu for each subject ID by providing the following:
1.  Demographics Information that includes ID, ethnicity, gender, age, location, BB Type and Washing Frequency
2.  Horizontal Bar Chart on Top 10 Operational Taxonomic Units (OTUs) Found
3.  Gauge Chart for Weekly Washing Frequency 
4.  Bubble Chart for the Concentration of Operational Taxonomic Units (OTUs) for each Belly Button Sample

## Datasets
* [Belly Button Biodiversity Samples Dataset](https://github.com/cecileung1208/Belly-Button-Biodiversity-Analysis/blob/main/Belly%20Button%20Biodiversity/samples.json)

## Method

1. Import the belly button sample data from the JSON file and create a function for web page initialization.
2. Extract each sample ID number and append it to the HTML dropdown menu container.
3. Extract and process the demographic information and OTU data for the first sample.
4. Append demographic information for the first sample to the appropriate HTML container.
5. Generate a bar chart of the top ten OTUs by concentration in the first sample and connect it to the appropriate HTML container.
6. Generate a bubble chart of the concentrations of all of the OTUs in the first sample and connect it to the appropriate HTML container.
7. Generate a gauge chart of the weekly wash frequency of the first sample and connect it to the appropriate HTML container.
8. Create a function to monitor and extract the currently selected sample ID number from the HTML dropdown menu.
9. Repeat steps three through seven for the currently selected sample ID number.


## Scripts
* [HTML Website](https://github.com/cecileung1208/Belly-Button-Biodiversity-Analysis/blob/main/Belly%20Button%20Biodiversity/index.html)
* [Javascript Visualizations](https://github.com/cecileung1208/Belly-Button-Biodiversity-Analysis/blob/main/Belly%20Button%20Biodiversity/static/js/app.js)

## Results
https://cecileung1208.github.io/Belly-Button-Biodiversity-Analysis/

![Image](https://github.com/cecileung1208/Belly-Button-Biodiversity-Analysis/blob/main/Images/hw02.png)


