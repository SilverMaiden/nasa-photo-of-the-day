import React from 'react';
import axios from 'axios';
import { compareAsc, format } from 'date-fns'



let dates = []




var date1 = new Date();
let currentDate = new Date();
var daysPrior = 0;
date1.setDate(date1.getDate() - daysPrior);

let daysIndex = 5;
for (let i=1; i<=daysIndex; i++) {
    currentDate.setDate(date1.getDate() - i);
    dates.push(currentDate.toISOString().substring(0,10));
}


let myArr = [];

let myStr = "";

let daysIndex = 5;

let today = new Date();



//We now have a date string for today





