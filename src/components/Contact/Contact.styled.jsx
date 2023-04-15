import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';

export const ContactItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 5px;
  :nth-child(even) {
    background-color: #e9e9ed;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  width: 100%;
`;

export const Name = styled.span``;

export const Number = styled.span`
  margin-left: auto;
`;

export const Form = styled(FormikForm)`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled(FormikError)`
  font-size: 14px;
  color: red;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  min-width: 65px;
  padding: 2px 10px;
  border-radius: 2px;
  background-color: #ee8905;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #ffffff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    background-color: #ff9100;
  }
`;
