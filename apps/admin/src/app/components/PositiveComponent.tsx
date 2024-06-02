import { Review } from "../types/type"; 
                
interface PositiveComponentProps {
    data: Review[];
}

export const PositiveComponent: React.FC<PositiveComponentProps> = ({ data }) => {
    const sortedData = [...data].sort((a, b) => new Date(b.fields.created_at).getTime() - new Date(a.fields.created_at).getTime());
    const latestThreeReviews = sortedData.slice(0, 3);
    
    return(
        <div>
            <div className="p-2">
                <h1>ostatnie 3 POZYTYWNE komentarze:</h1>
                {latestThreeReviews.map((elem: Review) => (
                    <p className="bg-green-200 pl-2 mb-1 break-words w-64" key={elem.id}>{elem.fields.content}</p>
                ))}
            </div>
        </div>
    )
}
