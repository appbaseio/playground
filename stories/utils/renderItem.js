export const renderBookItemWithDate = (suggestion)=>(
    <div>{suggestion._source.original_title}
        <span style={{color: "crimson", backgroundColor: "lightgray", padding: 5, borderRadius: 3}}>
            {new Date(Number(suggestion._source._timestamp) * 1000).toDateString() || ""}
        </span>
    </div>
)
export const renderBookItemWithLink = (suggestion)=>(
    <a
        style={{
                width:'100%',
                height: '100%',
                display: 'block',
                textDecoration: "none",
                color: "inherit"
            }}
        href={`https://www.google.com/search?q=${suggestion._source.original_title}`}
        target="_blank"
        rel="noreferrer"
    >
        {suggestion._source.original_title}
    </a>
)
