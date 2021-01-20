# Plot.ly-Belly-Button-Biodiversity

![Image](https://github.com/cecileung1208/Plot.ly-Belly-Button-Biodiversity/blob/main/Images/microbes-sem.jpg)

An interactive dashboard has been built to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## 1.  Plotly - Building Plots to Determine Sample Values Across OTU IDs

To build an interactive dashboard, we need to use the [json dataset](https://github.com/cecileung1208/Plot.ly-Belly-Button-Biodiversity/blob/main/Belly%20Button%20Biodiversity/samples.json) to retreive the information and write a [javascipt code](https://github.com/cecileung1208/Plot.ly-Belly-Button-Biodiversity/blob/main/Belly%20Button%20Biodiversity/static/js/app.js) and a [html file](https://github.com/cecileung1208/Plot.ly-Belly-Button-Biodiversity/blob/main/Belly%20Button%20Biodiversity/index.html) to display all the information.

The below charts and information retrieved will help the audience understand the results of Belly Button Diversity better with graphs and demographic information.


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
