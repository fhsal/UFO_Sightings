# UFO_Sightings

CWRU Data Analytics Module Eleven Challenge


## Overview of Project

The project involved using Javascript to build dynamic webpages using bootstrap and local css, input listeners and object methods.  

### Summary

The effort involved loading a js data object with ~ 1000 sets of UFO siting information which included date, city, state, country, duration, shape and comments for each potential UFO observation.   This data was displayed in a page and table formatted using bootstrap.  A listener was added so that users can filter the display based upon input of criteria for date, state, shape or country.   Upon input, the table updates dynamically using object methods to filter the data and rebuild the table. 

## UFO Sightings 

### Main page

![img](https://github.com/fhsal/UFO_Sitings/blob/main/static/images/ufo_main_page.png)


### Filter entry panel

![img](https://github.com/fhsal/UFO_Sitings/blob/main/static/images/ufo_filter.png)


### UFO Observation table

![img](https://github.com/fhsal/UFO_Sitings/blob/main/static/images/ufo_table.png)


### UFO Table with no filters entered

![img](https://github.com/fhsal/UFO_Sitings/blob/main/static/images/ufo_no_filter.png)

### UFO Table with one filter entered

![img](https://github.com/fhsal/UFO_Sitings/blob/main/static/images/ufo_filter2.png)

### UFO Table with two filters entered

![img](https://github.com/fhsal/UFO_Sitings/blob/main/static/images/ufo_filter1.png)


## Drawbacks and recommendations for further development 

The page functions as specified, but one drawback is that it can be challenging for a user to interact with well unless they are very careful to match the input filters exactly as elements exist within the underlying data.  For example, two items which may be difficult are (1) the search is case sensitive and (2) some of the 'shapes' such as 'light' aren't what people might expect. 

Further development might include changing the filter selection to pulldowns so that a user could pick from already present, valid choices.  Mulit-select could also then be an option to add for further development.   Adding the ability to export the result might also be worthwhile.  
