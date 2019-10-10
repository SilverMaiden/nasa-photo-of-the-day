import React, {useState, useEffect} from "react";
import axios from 'axios';
import MyCard from '../CardComponent/Card';


const MyDate = (props) => {

        return (
            <div className="card-holder">
                <MyCard hdurl={props.c1_hdurl} exp={props.c1_exp} />
                <MyCard hdurl={props.c2_hdurl} exp={props.c2_exp} />
                <MyCard hdurl={props.c3_hdurl} exp={props.c3_exp} />
                <MyCard hdurl={props.c4_hdurl} exp={props.c4_exp} />
                <MyCard hdurl={props.c5_hdurl} exp={props.c5_exp} />
            </div>
        )
}
export default MyDate;
