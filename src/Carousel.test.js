import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

//smoke tests 
test("it renders without crashing", () => {
    render(<Carousel photos={TEST_IMAGES} />)
})

//snapshot test

test('it mathces snapshot', () => {
    const {asFragment} = render(<Carousel photos={TEST_IMAGES} />);
    expect(asFragment()).toMatchSnapshot()
    
})

it("works when you click on the right and left arrows", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing" />);
//   expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

    const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
    
});

it('tests that left arrow disappears when idx 0', () => {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing" />);
    const leftArrow = container.querySelector(".bi-arrow-left-circle");
    expect(leftArrow).not.toBeInTheDocument();
})

it('tests that left arrow disappears when idx 0', () => {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing" />);
    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    fireEvent.click(rightArrow)
    fireEvent.click(rightArrow)
    expect(rightArrow).not.toBeInTheDocument();
})


