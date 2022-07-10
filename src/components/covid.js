import { useEffect, useState } from "react";


const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async() => {
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            console.log(res)
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData(); 
    }, []);

    return ( 
        <div>
            <h1>LIVE</h1>
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>

            <ul>
                <div className="container">
                    <div className="card">
                        <div className="box">
                        <div className="content">
                            <p className="card_name">OUR <span> COUNTRY</span></p>
                            <p className="card_total card_small">INDIA</p>
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                        <div className="content">
                            <p className="card_name">TOTAL <span>RECOVERD</span></p>
                            <p className="card_total card_small">{data.recovered}</p>
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                        <div className="content">
                            <p className="card_name">TOTAL <span>CONFIRMED</span></p>
                            <p className="card_total card_small">{data.confirmed}</p>
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                        <div className="content">
                            <p className="card_name">TOTAL <span>DEATHS</span></p>
                            <p className="card_total card_small">{data.deaths}</p>
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                        <div className="content">
                            <p className="card_name">TOTAL <span>ACTIVE</span></p>
                            <p className="card_total card_small">{data.active}</p>
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                        <div className="content">
                            <p className="card_name">LAST <span>UPDATED</span></p>
                            <p className="card_total card_small">{data.lastupdatedtime}</p>
                        </div>
                        </div>
                    </div>
                   
                </div>
            </ul>
        </div>
     );
}
 
export default Covid;