activemaps
========

This is a repo that uses D3 and leaflet to animate the movement of people throughout a region.

it was originally written by Fletcher Foti to visualize travel survey data. 

In his version:

* Each dot represents a person from the survey.  The size of the dots are scaled by the age of the person.  Because of these scaling, sometimes you can see parents (big dot) moving with their children (small dot).
* There is a time slider which can move time through a 24 hour period. from 1AM to 12AM the next day.  In this way, the travel survey day(s) are visualized moving through time.  Moving the time slider uses D3 to **animate** the positions of the people in the survey.
* The mode of the most recent trip is used to color the circle representing each person.  Note that "home" is also used as a default mode for people that haven't left home yet and so aren't yet assigned a mode.
* The income classifications and active region can be modified with drop down menus.

![bayarea](https://raw.github.com/fscottfoti/batsmaps/master/images/bayarea.jpg)



This fork is an attempt to show the movement of MTO participants throughout the duration of the program.
In concept, this is quite similar. 

Voucher holders were assigned to different treatment groups and moved several times over the program's 20 year duration


In *my* version:

* Each dot represents a *household* from the program.  The size of the dots are scaled by the *size of the household*.
* There is a time slider which can move time through a *20 year* period. In this way, the households are visualized moving through time.  Moving the time slider uses D3 to **animate** the positions of the households in the program.
* The *treatment group into which the household was assigned* is used to color the circle representing each household.  
* The active region can be modified with drop down menus.