import React from 'react';
import Message from "./Message";

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe('snapshot tests', () => {
    it('matches snapshot with Message', () => {

        act(() => { render(<Message show={true} msg={{ auth: "Робот", text: `Привет!` }} />, container); });
        expect(container.textContent).toBe("Робот: Привет!");
    });
});
