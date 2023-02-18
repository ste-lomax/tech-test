import "../styles/page-buttons.css";

const PageButtons = ({page, setPage}) => {
    return (
        <div className="page-buttons">
            <button 
                onClick={() => setPage(prev => prev -1)}
                disabled={page <= 1}
            >Prev</button>
            <p>Page {page}</p>
            <button onClick={() => setPage(prev => prev +1)}>Next</button>
        </div>
    )
}

export default PageButtons
