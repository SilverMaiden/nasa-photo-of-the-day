import React, {useState, useEffect} from "react";
import Basic from "./components/BasicComponent/Basic";
import MyDate from "./components/DateComponent/MyDate";
import "./App.css";
import axios from 'axios';
import { Button } from 'reactstrap';
function App() {

    const [c1_date, setCollection1_date] = useState("");
    const [c1_hdurl, setCollection1_hdurl] = useState("");
    const [c1_exp, setCollection1_exp] = useState("");

    const [c2_date, setCollection2_date] = useState("");
    const [c2_hdurl, setCollection2_hdurl] = useState("");
    const [c2_exp, setCollection2_exp] = useState("");

    const [c3_date, setCollection3_date] = useState("");
    const [c3_hdurl, setCollection3_hdurl] = useState("");
    const [c3_exp, setCollection3_exp] = useState("");

    const [c4_date, setCollection4_date] = useState("");
    const [c4_hdurl, setCollection4_hdurl] = useState("");
    const [c4_exp, setCollection4_exp] = useState("");

    const [c5_date, setCollection5_date] = useState("");
    const [c5_hdurl, setCollection5_hdurl] = useState("");
    const [c5_exp, setCollection5_exp] = useState("");

    const [c6_date, setCollection6_date] = useState("");
    const [c6_hdurl, setCollection6_hdurl] = useState("");
    const [c6_exp, setCollection6_exp] = useState("");

    useEffect(() => {
        let dates = [];

        var date1 = new Date();
        let currentDate = new Date();

        let daysIndex = 5;
        for (let i=1; i<=daysIndex; i++) {
            currentDate.setDate(date1.getDate() - i);
            dates.push(currentDate.toISOString().substring(0,10));
        }
        console.log(dates);
        //We now have an array of dates in string form
        //

        //we want to loop the array, and for each date, make an axios request for that dates data.
        //
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=Ir7SyGtDLq9RSTew4VCcTL3eHxoyuLJcEZ8ojl3K&date=${dates[0]}`)
                .then(response => {
                    setCollection1_hdurl(response.data.hdurl);
                    setCollection1_date(response.data.date);
                    setCollection1_exp(response.data.explanation);
                })
                .catch(error => {
                    console.log(error);
                })
                .then(() => {
                    axios.get(`https://api.nasa.gov/planetary/apod?api_key=Ir7SyGtDLq9RSTew4VCcTL3eHxoyuLJcEZ8ojl3K&date=${dates[1]}`)
                    .then(response => {
                        setCollection2_hdurl(response.data.hdurl);
                        setCollection2_date(response.data.date);
                        setCollection2_exp(response.data.explanation);
                    })
                })
                .then(() => {
                    axios.get(`https://api.nasa.gov/planetary/apod?api_key=Ir7SyGtDLq9RSTew4VCcTL3eHxoyuLJcEZ8ojl3K&date=${dates[2]}`)
                    .then(response => {
                        setCollection3_hdurl(response.data.hdurl);
                        setCollection3_date(response.data.date);
                        setCollection3_exp(response.data.explanation);

                    })
                })
                .then(() => {
                    axios.get(`https://api.nasa.gov/planetary/apod?api_key=Ir7SyGtDLq9RSTew4VCcTL3eHxoyuLJcEZ8ojl3K&date=${dates[3]}`)
                    .then(response => {
                        setCollection4_hdurl(response.data.hdurl);
                        setCollection4_date(response.data.date);
                        setCollection4_exp(response.data.explanation);

                    })
                })
                .then(() => {
                    axios.get(`https://api.nasa.gov/planetary/apod?api_key=Ir7SyGtDLq9RSTew4VCcTL3eHxoyuLJcEZ8ojl3K&date=${dates[4]}`)
                    .then(response => {
                        setCollection5_hdurl(response.data.hdurl);
                        setCollection5_date(response.data.date);
                        setCollection5_exp(response.data.explanation);

                    })
                })


       }, []);


  return (
    <div className="App">
        <Basic />
            <MyDate
                c1_date = {c1_date}
                c1_hdurl = {c1_hdurl}
                c1_exp = {c1_exp}

                c2_date = {c2_date}
                c2_hdurl = {c2_hdurl}
                c2_exp = {c2_exp}

                c3_date = {c3_date}
                c3_hdurl = {c3_hdurl}
                c3_exp = {c3_exp}

                c4_date = {c4_date}
                c4_hdurl = {c4_hdurl}
                c4_exp = {c4_exp}

                c5_date = {c5_date}
                c5_hdurl = {c5_hdurl}
                c5_exp = {c5_exp}
            />
    </div>
  );
}

export default App;
