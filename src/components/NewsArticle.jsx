export default function NewsArticle(head, body){
    return(
        <div>
            <div dangerouslySetInnerHTML={{__html: head}}/>
            <div dangerouslySetInnerHTML={{__html: body}}/>
        </div>
    )

}