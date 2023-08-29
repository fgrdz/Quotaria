import './quote.css'
const Quote = ({series, quote, author})=>{
    return (
        <div className='container-quote'>
            <h3 >{series}</h3>
            <p>{quote}</p>
            <p>{author}</p>
            <div className='glitch'></div>
        </div>
    )
}

export default Quote