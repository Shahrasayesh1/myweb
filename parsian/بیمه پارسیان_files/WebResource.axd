﻿.tabstrip
{
	_height:1%;
}
.tabstrip,
.tabstrip ul
{
	margin:0;
	padding:0;
}

.tabstrip div
{
	width:100%;
}
.tabstrip div:after
{
	content:"";
	clear:both;
	display:block;
	visibility:hidden;
	height:0;
}

.tabstrip ul
{
	width:100%;
}

.tabstrip li
{
	list-style:none;
	list-style-image: none;
	list-style-position:outside;
	float:left;
	margin:0;
	padding:0;
}

.tabstrip li.break
{
	float:none;
}

.tabstrip li.break br
{
	clear:both;
}

.tabstrip li a
{
	float:left;
	position:relative;
	font-size:100%;
}

.tabstrip li a img
{
	float:left;
	margin-top:5px;
	margin-right:5px;
	border:0;
}

.tabstrip li a.selected
{
	z-index:0;
	cursor:default;
}

.tabstrip li a .wrap, 
.tabstrip li a .innerWrap
{
	float:left;
	clear:both;
	white-space:nowrap;	
	cursor:pointer;
	/* IE 5 Win */
	_cursor:hand;
}

.tabstrip li a.selected .wrap, 
.tabstrip li a.selected .innerWrap
{
	cursor:default;
}



.tabstrip .leftArrow,
.tabstrip .rightArrow,
.tabstrip .leftArrowDisabled,
.tabstrip .rightArrowDisabled
{
	position:absolute;
	z-index:100;
	text-decoration:none;
}


/* Disabled tab */

.tabstrip li a.disabled,
.tabstrip li a.disabled:hover
{
	color:Gray;
}

/* arrows */
.tabstrip .rightArrow, 
.tabstrip .leftArrow,
.tabstrip .rightArrowDisabled, 
.tabstrip .leftArrowDisabled
{
	text-indent:-10000px;
	background-position:left 3px;
	background-repeat:no-repeat;
	background-color:transparent;
}

.tabstrip .rightArrowDisabled, 
.tabstrip .leftArrowDisabled
{
	cursor:default;
}