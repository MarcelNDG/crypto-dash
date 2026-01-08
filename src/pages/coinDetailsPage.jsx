import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";
import Spinner from "../components/Spinner.jsx";
import CoinChart from "../components/CoinChart.jsx";
const API_URL = import.meta.env.VITE_COIN_API_URL;

const CoinDetailsPage = () => {

    const { id } = useParams();

    const [coin, setCoin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCoin = async () => {
            try {
                const response = await fetch(`${API_URL}/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch coin details");
                }
                const data = await response.json();
                setCoin(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCoin();
    }, [id]);

    

    return (
        
           // in line 38 the coin has a ? to avoid error before data is loaded if it doesn't have this ? it will
           //  try to access name of null and throw an error

           // what line 54 does speciffically in the split syntax is it takes the description string of the coin
           // and splits it into an array of sentences wherever it finds a period followed by two spaces (".  ")
           // then it takes the first sentence from that array (index 0) and adds a period at the end for proper punctuation.
       <div className="coin-details-container">

           <Link to="/">← Back to Home</Link>
            {coin ? <p className="coin-details-title">Coin Details {coin?.name}</p> : null}

           {loading && <div><Spinner /></div>}
            {error && <div>Error: {error}</div>}

            {!loading && !error && (
                <>
                <img src={coin.image.large} alt={coin.name} className="coin-details-image" />
                <h2>{coin.name} ({coin.symbol.toUpperCase()})</h2>
                <p>Current Price: ${coin.market_data.current_price.usd.toLocaleString()}</p>

                <p>{coin.description.en.split('. ')[0] + '.'}</p>

                <div className="coin-details-info">
                    <h3>Rank:{coin.market_cap_rank}</h3>
                    <h3>Price: ${coin.market_data.current_price.usd.toLocaleString()}</h3>
                    <h4>Market Cap: ${coin.market_data.market_cap.usd.toLocaleString()}</h4>
                    <h4>24h High: ${coin.market_data.high_24h.usd.toLocaleString()}</h4>
                    <h4>24h Low: ${coin.market_data.low_24h.usd.toLocaleString()}</h4>
                    <h4>Total Supply: ${coin.market_data.total_supply?.toLocaleString() || "N/A"}</h4>
                    <h4>All Time High: {coin.market_data.ath.usd.toLocaleString()} on {' '}
                         {new Date(coin.market_data.ath_date.usd).toLocaleDateString()} </h4>
                    <h4>All Time low: {coin.market_data.atl.usd.toLocaleString()} on {' '}
                         {new Date(coin.market_data.atl_date.usd).toLocaleDateString()} </h4>           
                  
                </div>

                <CoinChart coinId={coin.id} />

                <div className="coin-details-links">
                    {coin.links.homepage[0] && (
                        <p>
                            🌐
                        <a 
                        href={coin.links.homepage[0]}
                         target="_blank"
                          rel="noopener noreferrer">
                            Website
                        </a>
                        </p>
                    )}
                    {coin.links.blockchain_site[0] && (
                        <p>
                            🧩
                        <a 
                        href={coin.links.blockchain_site[0]}
                         target="_blank"
                          rel="noopener noreferrer">
                            Blockchain Site
                        </a>
                        </p>
                    )}

                {coin.categories.length > 0 && (
                    <p>Categories: {coin.categories.join(', ')}</p>
                )}

                {!loading && !error && coin && <p>No Data Found</p>}

                </div>                
                </>
            )}
       </div>

            
      );
      
}
 
export default CoinDetailsPage;