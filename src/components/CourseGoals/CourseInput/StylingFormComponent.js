import React from "react";
import styled from "styled-components";

const StylingFormComponent = styled.div`
    margin: 0.5rem 0;

    & label {
      font-weight: bold;
      display: block;
      margin-bottom: 0.5rem;
    }

    & input {
      display: block;
      width: 100%;
      border: 1px solid #ccc;
      font: inherit;
      line-height: 1.5rem;
      padding: 0 0.25rem;
    }

    & input:focus {
      outline: none;
      background: #fad0ec;
      border-color: #8b005d;
    }

    &.ifValid input {
      border-color: red;
      background-color: rgb(228, 147, 147);
    }

    &.ifValid label {
      color: red;
    }
  `
export default StylingFormComponent;
