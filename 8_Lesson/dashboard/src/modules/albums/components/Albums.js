import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AlbumPage from './AlbumPage';
import AlbumsListPage from './AlbumsListPage';

function Albums() {
    const { path } = useRouteMatch();
    return (
        <>
            <Switch>
                <Route path={path} exact component={AlbumsListPage} />
                <Route path={path + '/:albumId'} component={AlbumPage} />
            </Switch>
        </>
    );
}

export default Albums;
