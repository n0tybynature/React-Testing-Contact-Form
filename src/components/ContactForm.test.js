import React from "react";
import {render, screen} from "@testing-library/react";
import App from "../App";

test("testing testing", () => {
    console.log("hello")
});


describe("test two", () => {
    it("passing all", () => {
        console.log("it passed");
    });
});


test("Header Working!", () => {
   const { debug } = render(<App/>);
   debug();

   const firstName = screen.queryByLabelText(/first name/i);
   const email = screen.queryByLabelText(/email/i);
})