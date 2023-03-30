import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearch } from '../store/actions';

export default function Skills() {
    const { items, loading, error, search } = useSelector(state => state.seting);
    const dispatch = useDispatch();
    const spaceStr = search.trim() !== '';
    
    const handleSearch = evt => {
        const { value } = evt.target;
        dispatch(changeSearch(value));
    };

    return (
        <>
            <div><input className="inp" type="search" value={search} onChange={handleSearch} /></div>
            {!spaceStr && <div className="text">Type something to search</div>}
            {spaceStr && loading && <div className="text">searching...</div>}
            {error ? <div>Error occured</div> : <ul>{items.map(o => <li key={o.id}>{o.name}</li>)}</ul>}
        </>
    )
}