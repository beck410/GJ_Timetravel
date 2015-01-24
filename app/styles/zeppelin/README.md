zeppelin
========

sass library of mixins i like, and some style features

## Variables

#### Web Safe Colors
There are a multitude of web safe flat color variables with simple color names.

#### Gutter

The global gutter variable is the amount of space between columns in the grid, simply set it to change the grid spacing.

## Grid System
Zeppelin uses a simple grid system, it currently only takes 12 grids as an argument.

#### span
The span mixin takes an argument for how many columns you want an item to inhabit.

####row
Shortcut to make an element take a full row

#### slide
The slide mixin takes an argument that will clear that many columns to the left of the item, you can also use a negative number to clear columns to the right.

## Useful Mixins

####Reset
Gerneral styling and normalization, include by itself, not in a selector.

#### Clearfix
Add the clearfix mixin to quickly ad a clearfix to an element, to keep floated elements from escapint their containers.

####Size
Add the size mixin to quickly set an even height and width on an element

####Side-Margin
Used to add an even left and right margin to an item

####Vert-Margin
Used to add an even top and bottom margin to an item

####Side-Pad
Used to add an even left and right padding to an item

####Vert-pad
Used to add an even top and bottom paddingn to an item

##Layout

####Center
Used to center an item on the page, and center its text within it

####Container
Used to set an outer bounds for a wrapper, default value is 960px, but if you add a size argument it will use that value instead, also centers the container on the page

##Shapes

####Circle
takes a size argument and turns the element into a circle of that size

####Triangle
takes a height, width, color, and direction(up, down, left, right) arguments, all are required, and transforms the element into a matching triangle

##Components

####Button
Takes a color, font-color, and style argument, and defaults for any argument that isn't set. styles include inverse, pill, pill-inverse, and float. Button sizes are based off of the font size

####Input
Styles input fields, like text, date, text-area

####Disabled
Disables an form element so it can not be interacted with

####Fixed-Nav
Turns an element into a bar fixed to the top of  the screen, optional argument shade, will five it ashadow

####Striped-Table
Turns a table into one with alternating colors, accepts two colors, otherwise will default

####Hover-table
Turns a table into a table that highlights items that are hovered over, accepts two colors, otherwise will default

####Ribbon
turns an element into a ribbon, put any text into another element inside of it

####smooth
Rounds off the corners of an element

##Vendor Prefixes

There are a multitude of vendor prefix shortcuts so that you don't have to type in multiple.
