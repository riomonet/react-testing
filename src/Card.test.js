import React from 'react'
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";


//smoke test
test("it renders without crashing", () => {
    render(<Card />)
})

//snapshot test

test('it mathces snapshot', () => {
    const {asFragment} = render(<Card />);
    expect(asFragment()).toMatchSnapshot()
    
})

it('matches snapshot with props', () => {
    const {asFragment} = render(<Card caption="A nice pic" currNum={1} totalNum={3} />);
    expect(asFragment()).toMatchSnapshot()

})
