import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import {
  TextField,
  makeStyles,
  InputLabel,
  NativeSelect,
} from "@material-ui/core";

export const UpdateForm = () => {
  const [dropDownData, setdropDownData] = useState({
    contactType: [
      {
        id: 1,
        name: "Mobile",
      },
      {
        id: 2,
        name: "Phone",
      },
      {
        id: 3,
        name: "Fax",
      },
    ],
    state: [
      {
        id: 1,
        name: "NT",
      },
      {
        id: 1,
        name: "ACT",
      },
      {
        id: 1,
        name: "VIC",
      },
      {
        id: 1,
        name: "NSW",
      },
      {
        id: 1,
        name: "QLD",
      },
      {
        id: 1,
        name: "WA",
      },
      {
        id: 1,
        name: "TAS",
      },
    ],
  });
  const [formData, setformData] = useState({
    firstName: "hey",
    lastName: "there",
    addresses: [
      {
        country: "Australia",
        id: 26186,
        line1: null,
        line2: null,
        line3: "10 gsfjfh stree",
        postcode: "5044",
        state: "South Australia",
        suburb: "GLENGOWRIE",
        type: "Home",
      },
    ],
    contacts: [
      {
        detail: "Aggggg@mail.com.au",
        id: 34676,
        type: "Primary Email",
      },
      {
        detail: "Second@mail.com.au",
        id: 34688,
        type: "Secondary Email",
      },
      {
        detail: "0444333222",
        id: 39304,
        type: "Phone",
      },
    ],
  });
  const [emailBtn, setemailBtn] = useState(false);
  const [phoneBtn, setPhoneBtn] = useState(false);
  const [inputList, setInputList] = useState([]);
  const [date, setdate] = useState("2021-05-03");

  console.log(dropDownData);
  console.log(formData);

  useEffect(() => {
    setInputList(formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputList({ ...inputList, [name]: value });
  };
  console.log("Input List", inputList);

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    const arr = { ...inputList };
    arr.addresses[0][name] = value;
    setInputList(arr);
    /*  setNewData({
      ...newData,
      addresses: {
        ...newData.addresses,
        [name]: value,
      },
    }); */
  };
  return (
    <div style={{ marginTop: "50px" }}>
      <form>
        {/*      Contact Grid */}
        <div style={{ padding: "30px" }}>
          <TextField
            id="standard-helperText"
            name="firstName"
            label="First Name"
            defaultValue={formData.firstName}
            required="true"
            onChange={handleChange}
            // helperText="Some important text"
          />

          <TextField
            id="standard-helperText"
            name="lastName"
            label="Last Name"
            defaultValue={formData.lastName}
            required="true"
            style={{ marginLeft: "50px" }}
            onChange={handleChange}
            // helperText="Some important text"
          />
        </div>
        {/* Address Grid */}
        <div style={{ backgroundColor: "grey" }}>
          <div>
            {/* First Row */}

            <TextField
              id="standard-helperText"
              label="Address line 1"
              name="line1"
              defaultValue={formData.addresses[0].line1}
              className="threeColTxt"
              helperText="Unit / Townhouse number"
              onChange={handleAddressChange}
            />

            <TextField
              id="standard-helperText"
              label="Address line 2"
              name="line2"
              defaultValue={formData.addresses[0].line2}
              className="threeColTxt"
              style={{ marginLeft: "50px" }}
              // helperText="Some important text"
              onChange={handleAddressChange}
            />
          </div>
          <div>
            {/* Second Row */}
            <TextField
              id="standard-helperText"
              label="Address line 3"
              name="line3"
              defaultValue={formData.addresses[0].line3}
              required="true"
              className="twoColTxt"
              // helperText="Some important text"
              onChange={handleAddressChange}
            />
          </div>
          <div>
            {/* Third Row */}

            <TextField
              id="standard-helperText"
              name="suburb"
              label="Suburb"
              defaultValue={formData.addresses[0].suburb}
              className="threeColTxt"
              onChange={handleAddressChange}
              // helperText="Some important text"
            />

            <div>
              <InputLabel htmlFor="uncontrolled-native">State</InputLabel>
              <NativeSelect
                defaultValue={formData.addresses[0].state}
                inputProps={{
                  name: "state",
                  id: "uncontrolled-native",
                }}
                className="threeColList"
                onChange={handleAddressChange}
              >
                {dropDownData.state.map((state) => (
                  <option value={state.name}>{state.name}</option>
                ))}
              </NativeSelect>
            </div>

            <TextField
              id="standard-helperText"
              label="Postcode"
              name="postcode"
              defaultValue={formData.addresses[0].postcode}
              className="threeColTxt"
              onChange={handleAddressChange}
              // helperText="Some important text"
            />
          </div>
        </div>

        {/* Contacts grid */}
        <div style={{ marginTop: "50px", backgroundColor: "grey" }}>
          <div>
            {/* First Row */}

            <TextField
              id="standard-helperText"
              label="Primary Email"
              name="detail"
              required="true"
              defaultValue={""}
              className="emailTxt"
              type="email"

              // helperText="Some important text"
            />

            <TextField
              id="standard-helperText"
              label="Secondary Email"
              defaultValue={""}
              className="emailTxt"
              style={{ marginLeft: "50px" }}
              // helperText="Some important text"
            />
            {!emailBtn ? (
              <button className="addbtn" onClick={() => setemailBtn(true)}>
                <FaIcons.FaPlusCircle size="16px" color="rgb(10, 124, 192)" />
              </button>
            ) : null}
          </div>

          {emailBtn ? (
            <div style={{ marginTop: "50px" }}>
              {/* Optionsal Row for email*/}

              <TextField
                id="standard-helperText"
                label="Other Email"
                defaultValue={""}
                className="emailTxt"
                // helperText="Some important text"
              />

              <button
                className="addbtn" /* onClick={() => setemailBtn(true)} */
              >
                <FaIcons.FaPlusCircle size="16px" color="rgb(10, 124, 192)" />
              </button>
              <button className="addbtn" onClick={() => setemailBtn(false)}>
                <FaIcons.FaTimes size="16px" color="#e4e4e4" />
              </button>
            </div>
          ) : null}

          <div style={{ marginTop: "50px" }}>
            {/* Second Row */}

            <TextField
              id="standard-helperText"
              label="Phone"
              defaultValue={""}
              className="threeColTxt"
              // helperText="Some important text"
            />

            <TextField
              id="standard-helperText"
              label="Mobile"
              defaultValue={""}
              className="threeColTxt"
              style={{ marginLeft: "50px" }}
              // helperText="Some important text"
            />
            <TextField
              id="standard-helperText"
              label="Fax"
              defaultValue={""}
              className="threeColTxt"
              style={{ marginLeft: "50px" }}
              // helperText="Some important text"
            />

            {!phoneBtn ? (
              <button className="addbtn" onClick={() => setPhoneBtn(true)}>
                <FaIcons.FaPlusCircle size="16px" color="rgb(10, 124, 192)" />
              </button>
            ) : null}
          </div>

          {phoneBtn ? (
            <div style={{ marginTop: "50px" }}>
              {/* Option Row for Other phone */}

              <TextField
                id="standard-helperText"
                label="Other Phone"
                defaultValue={/* getOtherPhone(form.contacts) */ ""}
                className="threeColTxt"

                // helperText="Some important text"
              />

              <button className="addbtn" onClick={() => setPhoneBtn(true)}>
                <FaIcons.FaPlusCircle size="16px" color="rgb(10, 124, 192)" />
              </button>
              <button className="addbtn" onClick={() => setPhoneBtn(false)}>
                <FaIcons.FaTimes size="16px" color="#e4e4e4" />
              </button>
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
