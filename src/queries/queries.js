import gql from "graphql-tag";
export const SIGNUP=gql`
mutation signup($info:SignUpInput){
    signUp(info:$info)
}
`;