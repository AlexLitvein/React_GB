import GistsList from './GistsList';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import gistsReducer from './reduserGists/reducer';
import { render, screen } from '@testing-library/react';

function myRender(ui,
    {
        preloadedState,
        store = configureStore(
            {
                reducer: { gists: gistsReducer },
                preloadedState
            }),
        ...renderOptions
    } = {}) {

    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    return render(ui, { wrapper: Wrapper, ...renderOptions })
}

describe('GistsList tests', () => {
    test('Find "loading" strin in', () => {
        myRender(<GistsList />);
        let node = screen.queryByText(/Loading.../i);
        expect(node).not.toBeNull();
    });
});
