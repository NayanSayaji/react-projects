import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {

    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/NayanSayaji')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         })
    // }, []);


    return (
        <div>
            <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl"><span className=' font-bold'>Github followers :</span> {data.followers}

            <img src={data.avatar_url} alt="Github Profile Image" width={200} className='center'/> 
                <div className="about-me text-center m-4 p-4 text-lg">
                    <span className=' font-bold text-2xl'>About Me :</span> {data.bio}
                </div>
            </div>
        </div>
    );
}

export default Github;

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/NayanSayaji')
    
    return response.json(); 
}