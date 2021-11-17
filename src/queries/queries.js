import gql from "graphql-tag";

export const SIGNUP = gql`
mutation SignUp($info:InputInfo){
    signUp(info:$info)
}
`;

export const UPLOAD = gql`
    mutation UploadFile($file:Upload!){
        uploadFile(file:$file){
            filename
        }
    }
`;