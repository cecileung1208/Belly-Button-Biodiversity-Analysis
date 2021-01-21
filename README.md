# Plot.ly-Belly-Button-Biodiversity

![Image](https://github.com/cecileung1208/Plot.ly-Belly-Button-Biodiversity/blob/main/Images/microbes-sem.jpg)

An [interactive dashboard](#2.-final-dashboard-deployment) has been built to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.<br><br>
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.<br><br>
Please visit the [website](https://cecileung1208.github.io/Plot.ly-Belly-Button-Biodiversity/) to look at the results for each sample.

## 1.  Plotly - Building Plots to Determine Sample Values Across OTU IDs

To build an interactive dashboard, we need to use the [samples.json](https://github.com/cecileung1208/Plot.ly-Belly-Button-Biodiversity/blob/main/Belly%20Button%20Biodiversity/samples.json) to retreive the information and write a javascript code, [app.js](https://github.com/cecileung1208/Plot.ly-Belly-Button-Biodiversity/blob/main/Belly%20Button%20Biodiversity/static/js/app.js), and a [html file], [index.html](https://github.com/cecileung1208/Plot.ly-Belly-Button-Biodiversity/blob/main/Belly%20Button%20Biodiversity/index.html), to display all the information.

The below charts and information retrieved will help the audience understand the results of Belly Button Diversity better with graphs and demographic information.

## Dropdown Menu by Individual ID

* Update all of the plots any time that a new sample is selected

![Image](https://github.com/cecileung1208/Plot.ly-Belly-Button-Biodiversity/blob/main/Images/Dropdown.png)

### Horizontal Bar Chart 
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


## 2. Final Dashboard Deployment
* Upon completing the horizontal bar graph, bubble chart, gauge chart and demographics information, the final output looks like this.
* The app has been deployed to a GitHub Pages and all the related files are in the [deployment branch](https://github.com/cecileung1208/Plot.ly-Belly-Button-Biodiversity/tree/deployment).
* Link: [https://cecileung1208.github.io/Plot.ly-Belly-Button-Biodiversity/](https://cecileung1208.github.io/Plot.ly-Belly-Button-Biodiversity/)

###Dashboard Output
![Image](https://github.com/cecileung1208/Plot.ly-Belly-Button-Biodiversity/blob/main/Images/final%20dashboard.png)


