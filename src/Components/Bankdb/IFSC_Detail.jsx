import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

const IFSC_Detail = () => {

    const { IFSCcode } = useParams()
    const [IFSCdata, SetIFSCdata] = useState({})

    const fetchIFSC = async () => {
        const responce = await fetch(`https://bank-apis.justinclicks.com/API/V1/IFSC/${IFSCcode}`);
        const data = await responce.json();
        SetIFSCdata(data)
        console.log(data)
    }
    useEffect(() => {
        fetchIFSC()
    }, [])



    return (
        <div className="flex justify-center items-center p-4">
            <div className="overflow-x-auto w-full max-w-4xl border border-gray-300 rounded-lg shadow-md">
                <table className="table-auto w-full border-collapse bg-white text-left max-sm:text-xs text-sm">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="px-4 py-2 border-b">Field</th>
                            <th className="px-4 py-2 border-b">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(IFSCdata).map(([key, value], index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="px-4 py-2 border-b font-medium">{key}</td>
                                <td className="px-4 py-2 border-b">{value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default IFSC_Detail