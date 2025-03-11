function SearchBar({ city, setCity, submit }) {
    return (
        <form className="search_bar" onSubmit={submit}>
            <input
                type="text"
                className="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button className="search_button" type="submit">Enter</button>
        </form>
    );
}

export default SearchBar;