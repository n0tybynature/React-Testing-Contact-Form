import React from "react";
import {render, screen} from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event"

test("testing testing", () => {
    console.log("hello")
});


describe("test two", () => {
    it("passing all", () => {
        console.log("it passed");
    });
});


test("Header Working!", () => {
   render(<App/>);
   

   const firstName = screen.getByLabelText(/first name/i);
   const lastName = screen.getByLabelText(/last name/i);
   const email = screen.getByLabelText(/email/i);
   const message = screen.getByLabelText(/message/i);



    userEvent.type(firstName, "Ton");
    userEvent.type(lastName,"Yang");
    userEvent.type(email, "tony.yang5@yahoo.com");
    userEvent.type(message, "well done tony");


    expect(firstName).toHaveValue("Ton");
    expect(lastName).toHaveValue("Yang");
    expect(email).toHaveValue("tony.yang5@yahoo.com");
    expect(message).toHaveValue("well done tony");
})