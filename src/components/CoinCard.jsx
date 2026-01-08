import { Link } from 'react-router';


const CoinCard = ({coin}) => {

    
    

    return ( 
      <>
        <Link to={`/coin/${coin.id}`} style={{ textDecoration: 'none' }}>
       <div key={coin.id} className="coin-card">
              <div className="coin-header">
                <img src={coin.image} alt={coin.name} className="coin-image" />
                <h2>
                  {coin.name} ({coin.symbol.toUpperCase()})
                </h2>
              </div>

              <p>Price: ${coin.current_price.toLocaleString()}</p>
              <p>Market Cap: ${coin.market_cap.toLocaleString()}</p>
              <p>
                24h Change:{' '}
                <span className={coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
              </p>
        </div>
        </Link>
        </>
     );
}
 
export default CoinCard;