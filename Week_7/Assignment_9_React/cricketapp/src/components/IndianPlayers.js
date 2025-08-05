import React from "react";
const IndianPlayers=()=>{
    const oddTeam=["Sachin1","Virat3","Yuvraj5"];
    const evenTeam=["Dhoni2","Rohit4","Raina6"];

    const[first,third,fifth]=oddTeam;
    const[second,fourth,sixth]=evenTeam;

    const T20Players=["First Player","Second Player","Third Player"];
    const RanjiTrophyPlayers=["Fourth Player","Fifth Player","Sixth Player"];

    const IndianPlayers=[...T20Players,...RanjiTrophyPlayers];

    return(
        <div>
            <h2>Odd Players</h2>
            <ul>
                <li>First : {first}</li>
                <li>Third : {third}</li>
                <li>Fifth : {fifth}</li>
            </ul>

            <h2>Even Players</h2>
            <ul>
                <li>Second : {second}</li>
                <li>Fourth : {fourth}</li>
                <li>Sixth : {sixth}</li>
            </ul>

            <h2>List of Indian Players Merged:</h2>
            <ul>
                {IndianPlayers.map((player,index)=>(
                    <li key={index}>Mr. {player}</li>
                ))}
            </ul>
        </div>
    );
};

export default IndianPlayers;