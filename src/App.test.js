import React from 'react'
import { render, fireEvent } from "@testing-library/react";
import App from "./App";


//smoke test
test("it renders without crashing", () => {
    render(<App />)
})
