import React, { useEffect, useState } from 'react'

export default function DisplayTable() {


    const [fetchData, setFetchData] = useState([]);

    useEffect(() => {
        var lol = localStorage.getItem('user') ?
            JSON.parse(localStorage.getItem('user')) : null;
        console.log("lol", lol)
        setFetchData(lol);
    }, [])
    console.log(fetchData)
    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>LastName</th>
                    <th>Email Id</th>
                    <th>Password</th>
                </tr>
                {fetchData !== null ? fetchData.map(i => (
                    <tr>
                        <th>{i.firstName}</th>
                        <th>{i.lastName}</th>
                        <th>{i.email}</th>
                        <th>{i.password}</th>
                    </tr>
                )) : ''}

            </table>
        </div>
    )
}
