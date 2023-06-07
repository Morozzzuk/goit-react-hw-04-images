import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { HiMagnifyingGlass } from 'react-icons/hi2';

export const SearchForm = styled(Form)`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Input = styled(Field)`
  display: flex;
  align-items: center;
  width: 360px;
  height: 35px;
  padding: 10px 20px 10px 40px;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormBtn = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 35px;
  height: 35px;
  font-family: inherit;
  font-weight: 600;
  text-transform: capitalize;
  background-color: transparent;

  border: none;
  outline: none;
  border-radius: 30px;
  cursor: pointer;
  color: #615e5e;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: black;
  }
`;

export const SearchIcon = styled(HiMagnifyingGlass)`
  padding-top: 20px;
  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.2);
    fill: black;
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;
