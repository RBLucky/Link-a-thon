import { PROJECT_VIEWS_QUERY } from "@/sanity/lib/queries"
import Ping from "./Ping"
import { client } from "@/sanity/lib/client";

const View = async ({ id }: { id: string }) => {
  
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(PROJECT_VIEWS_QUERY, { id });

  const formatNumber = (queryResult: number) => {
    if (queryResult === 1) {
        const viewInnerHTML = `${queryResult} View`;
        
        return viewInnerHTML;
    } else {
        const viewInnerHTML = `${queryResult} Views`;

        return viewInnerHTML;
    }
  }

  return (
    <div className="view-container">
        <div className="absolute -top-2 -right-2">
            <Ping />
        </div>

        <p className="view-text">
            <span className="font-black">{formatNumber(totalViews)}</span>
        </p>

    </div>
  )
}

export default View;