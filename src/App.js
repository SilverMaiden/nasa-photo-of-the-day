import React, {useState, useEffect} from "react";
import Basic from "./components/BasicComponent/Basic";
import MyDate from "./components/DateComponent/MyDate";
import "./App.css";
import axios from 'axios';
function App() {

    const [c1_date, setCollection1_date] = useState("");
    const [c1_hdurl, setCollection1_hdurl] = useState("");
    const [c1_exp, setCollection1_exp] = useState("");
    const [c1_title, setCollection1_title] = useState("");

    const [c2_date, setCollection2_date] = useState("");
    const [c2_hdurl, setCollection2_hdurl] = useState("");
    const [c2_exp, setCollection2_exp] = useState("");
    const [c2_title, setCollection2_title] = useState("");

    const [c3_date, setCollection3_date] = useState("");
    const [c3_hdurl, setCollection3_hdurl] = useState("");
    const [c3_exp, setCollection3_exp] = useState("");
    const [c3_title, setCollection3_title] = useState("");

    const [c4_date, setCollection4_date] = useState("");
    const [c4_hdurl, setCollection4_hdurl] = useState("");
    const [c4_exp, setCollection4_exp] = useState("");
    const [c4_title, setCollection4_title] = useState("");

    const [c5_date, setCollection5_date] = useState("");
    const [c5_hdurl, setCollection5_hdurl] = useState("");
    const [c5_exp, setCollection5_exp] = useState("");
    const [c5_title, setCollection5_title] = useState("");

    const [c6_date, setCollection6_date] = useState("");
    const [c6_hdurl, setCollection6_hdurl] = useState("");
    const [c6_exp, setCollection6_exp] = useState("");
    const [c6_title, setCollection6_title] = useState("");

    useEffect(() => {
        let dates = [];
        let numDates = [];

        var date1 = new Date();
        let currentDate = new Date();
        console.log(date1);

        let daysIndex = 5;
        for (let i=0; i<=daysIndex; i++) {
            currentDate.setDate(date1.getDate() - i);
            dates.push(currentDate.toISOString().substring(0,10));
            numDates.push(currentDate.toString().substring(0,15));
        }
        console.log(dates);
        //We now have an array of dates in string form
        //

        //we want to loop the array, and for each date, make an axios request for that dates data.
        //
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=Ir7SyGtDLq9RSTew4VCcTL3eHxoyuLJcEZ8ojl3K&date=${dates[0]}`)
                .then(response => {
                    setCollection1_hdurl(response.data.hdurl);
                    setCollection1_date(numDates[0]);
                    setCollection1_exp(response.data.explanation);
                    setCollection1_title(response.data.title);
                })
                .catch(error => {
                    console.log(error);
                })
                .then(() => {
                    axios.get(`https://api.nasa.gov/planetary/apod?api_key=Ir7SyGtDLq9RSTew4VCcTL3eHxoyuLJcEZ8ojl3K&date=${dates[1]}`)
                    .then(response => {
                        setCollection2_hdurl(response.data.hdurl);
                        setCollection2_date(numDates[1]);
                        setCollection2_exp(response.data.explanation);
                        setCollection2_title(response.data.title);
                    })
                })
                .then(() => {
                    axios.get(`https://api.nasa.gov/planetary/apod?api_key=Ir7SyGtDLq9RSTew4VCcTL3eHxoyuLJcEZ8ojl3K&date=${dates[2]}`)
                    .then(response => {
                        setCollection3_hdurl(response.data.hdurl);
                        setCollection3_date(numDates[2]);
                        setCollection3_exp(response.data.explanation);
                        setCollection3_title(response.data.title);

                    })
                })
                .then(() => {
                    axios.get(`https://api.nasa.gov/planetary/apod?api_key=Ir7SyGtDLq9RSTew4VCcTL3eHxoyuLJcEZ8ojl3K&date=${dates[3]}`)
                    .then(response => {
                        setCollection4_hdurl(response.data.hdurl);
                        setCollection4_date(numDates[3]);
                        setCollection4_exp(response.data.explanation);
                        setCollection4_title(response.data.title);

                    })
                })
                .then(() => {
                    axios.get(`https://api.nasa.gov/planetary/apod?api_key=Ir7SyGtDLq9RSTew4VCcTL3eHxoyuLJcEZ8ojl3K&date=${dates[4]}`)
                    .then(response => {
                        setCollection5_hdurl(response.data.hdurl);
                        setCollection5_date(numDates[4]);
                        setCollection5_exp(response.data.explanation);
                        setCollection5_title(response.data.title);

                    })
                })
                .then(() => {
                    axios.get(`https://api.nasa.gov/planetary/apod?api_key=Ir7SyGtDLq9RSTew4VCcTL3eHxoyuLJcEZ8ojl3K&date=${dates[5]}`)
                    .then(response => {
                        setCollection6_hdurl(response.data.hdurl);
                        setCollection6_date(numDates[5]);
                        setCollection6_exp(response.data.explanation);
                        setCollection6_title(response.data.title);

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
                c1_title = {c1_title}

                c2_date = {c2_date}
                c2_hdurl = {c2_hdurl}
                c2_exp = {c2_exp}
                c2_title = {c2_title}

                c3_date = {c3_date}
                c3_hdurl = {c3_hdurl}
                c3_exp = {c3_exp}
                c3_title = {c3_title}

                c4_date = {c4_date}
                c4_hdurl = {c4_hdurl}
                c4_exp = {c4_exp}
                c4_title = {c4_title}

                c5_date = {c5_date}
                c5_hdurl = {c5_hdurl}
                c5_exp = {c5_exp}
                c5_title = {c5_title}

                c6_date = {c6_date}
                c6_hdurl = {c6_hdurl}
                c6_exp = {c6_exp}
                c6_title = {c6_title}

            />
    </div>
  );
}

export default App;
