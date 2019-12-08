export const fetchMoods = () => dispatch => {
    return fetch('http://localhost:3001/api/v1/moods')
        .then(res => res.json())
        //res.json()
        .then(moods =>
            dispatch({type: 'FETCH_MOODS_SUCCESS', payload: moods })
            )
}