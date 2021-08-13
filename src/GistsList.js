import React, { useCallback, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { setGistsLoading } from './reduserGists/actions';
import { STATUS } from './reduserGists/reducer';
import { selectGists, selectGistsError, selectGistsLoading } from './reduserGists/selectors';

const GistsList = () => {
    const gists = useSelector(selectGists);
    const dispatch = useDispatch();
    const error = useSelector(selectGistsError);
    const status = useSelector(selectGistsLoading);

    const requestGists = () => {
        dispatch(setGistsLoading());
    };

    useEffect(() => {
        requestGists();
    }, []);

    const renderGist = useCallback(
        (gist) => <li key={gist.id}>{gist.description || 'No description'}</li>,
        []
    );

    if (status === STATUS.LOADING) {
        return (
            <div>
                <CircularProgress />
                <span>Loading...</span>
            </div>
        );
    }

    if (status === STATUS.FAILURE) {
        return (
            <div>
                <h3>{error}</h3>
                <button onClick={requestGists}>Retry</button>
            </div>
        );
    }

    return <ul>{gists.map(renderGist)}</ul>;

}

export default GistsList;