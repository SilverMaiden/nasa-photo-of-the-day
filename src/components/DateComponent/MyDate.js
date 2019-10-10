import React from "react";
import MyCard from '../CardComponent/Card';


const MyDate = (props) => {

        return (
            <div className="card-holder">
                <MyCard hdurl={props.c1_hdurl} exp={props.c1_exp} sub={props.c1_date} />
                <MyCard hdurl={props.c2_hdurl} exp={props.c2_exp} sub={props.c2_date} />
                <MyCard hdurl={props.c3_hdurl} exp={props.c3_exp} sub={props.c3_date} />
                <MyCard hdurl={props.c4_hdurl} exp={props.c4_exp} sub={props.c4_date} />
                <MyCard hdurl={props.c5_hdurl} exp={props.c5_exp} sub={props.c5_date} />
                <MyCard hdurl={props.c6_hdurl} exp={props.c6_exp} sub={props.c6_date} />
            </div>
        )
}
export default MyDate;
