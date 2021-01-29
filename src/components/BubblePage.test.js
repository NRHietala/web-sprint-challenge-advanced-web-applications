import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

import {axiosWithAuth as mockaxiosWithAuth} from '../helpers/axiosWithAuth';

jest.mock('../helpers/axiosWithAuth')

const dummyColors =[
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  }
]


test("Renders BubblePage without errors", () => {
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  const { rerender } = (<BubblePage colorList={dummyColors} />)

  render(<BubblePage colorList={[]} />)

  expect(colorList).toHaveLength(0)

  mockaxiosWithAuth.mockResolvedValueOnce(dummyColors)

  rerender(<BubblePage colorList={dummyColors}/>)



  expect(colorList).toHaveLength(2)
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading