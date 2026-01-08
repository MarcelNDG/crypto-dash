const SortSelector = ({ sortedBy, onSortChange }) => {
    return (  
        <div className="controls">
            <label htmlFor="sort">Sort By: </label>
            <select id="sort" value={sortedBy} onChange={(e) => onSortChange(e.target.value)}>
                <option value="market_cap_desc">Market Cap</option>
                <option value="price_desc">Price (Descending)</option>
                <option value="price_asc">Price (Ascending)</option>
                <option value="change_desc">Change (Descending)</option>
                <option value="change_asc">Change (Ascending)</option>
                <option value="name">Name</option>
            </select>
        </div>
    );
}
 
export default SortSelector;