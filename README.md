activemaps
==========

This is a repo that uses D3 and leaflet to animate the movement of people throughout a region.

it was originally written by Fletcher Foti to visualize travel survey data. 


This fork is an attempt to show the mobility patterns of voucher holders who participated in the Moving to Opportunity experiment between 1995 and 2010. Households in the program were assigned to one of three groups:
 - Treatment group households received a voucher with the stipulation that it had to be used in a low-poverty census tract for at least one year
 - Section 8 group households received a regular voucher with no restrictions
 - Control group households remained in public housing (although because many public housing sites were demolished between 1995 and 2010, the households display a considerable amount of movement)
 
 The final impacts of MTO are still being studied, but interim reports suggested that treatment households realized very few, if any, economic benefits from participating in the program. This application helps offer insights into **why**.
 
 as it turns out, the opportunity distribution isn't startlingly different between groups. Treatment households initially moved to better neighborhoods but subsequently moved back to poorer communities. Furthermore, aside from low-poverty status, the neighborhoods into which treatment group families moved initially were only marginally better than reference groups


In *my* version:

* Each dot represents a *household* from the program
* There is a time slider which can move time through a *16 year* period. In this way, the households are visualized moving through time.  Moving the time slider uses D3 to **animate** the positions of the households in the program.
* The *neighborhood opportunity score* is used to color the circle representing each household. The opportunity score is a composite measure of the embedded neighborhood structures that promote social mobility.
* The active region can be modified with drop down menus.