import gql from "graphql-tag";
export const SIGNUP=gql`
mutation SignUp($info:InputInfo){
    signUp(info:$info)
}
`;