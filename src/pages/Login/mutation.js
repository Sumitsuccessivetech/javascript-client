import { gql } from 'apollo-boost';

const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
  loginUser(payLoad: { email: $email, password: $password})
  }
`;

export {
  LOGIN_USER,
};
