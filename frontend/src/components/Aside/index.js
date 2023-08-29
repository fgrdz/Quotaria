import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Quote from '../Quote';
const Aside = ()=>{
    const [allQuotes,setAllquotes] = useState([])

    useEffect(()=>{
        async function getAll(){
            const response = await api.get(`/quote?count=10`)
            setAllquotes(response.data)
        }
        getAll()
    },[allQuotes])

    return(
        <div>
            <nav>
                {Array.isArray(allQuotes) && allQuotes.map((quote)=>(
                    <Quote 
                        key={quote.id}
                        series={quote.series}
                        quote={quote.quote}
                        author={quote.author}
                    />
                ))}
            </nav>
        </div>
    )
}

export default Aside