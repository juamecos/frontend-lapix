import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  stoneID: Scalars['ID'];
  userID: Scalars['ID'];
  comment: Scalars['String'];
  registerDate: Scalars['String'];
  active: Scalars['Boolean'];
  abuse: Scalars['Boolean'];
};

export type CommentInput = {
  id?: Maybe<Scalars['ID']>;
  stoneID?: Maybe<Scalars['ID']>;
  comment: Scalars['String'];
};

export type Location = {
  __typename?: 'Location';
  latitude: Scalars['Float'];
  longitud: Scalars['Float'];
};

export type LocationInput = {
  /** Latitude */
  latitude: Scalars['Float'];
  /** Longitude */
  longitude: Scalars['Float'];
};

export type Mail = {
  __typename?: 'Mail';
  /** Sender email address */
  from?: Maybe<Scalars['String']>;
  /** Receiver */
  to: Scalars['String'];
  /** Subject of the email */
  subject: Scalars['String'];
  /** Body of the email in HTML */
  html: Scalars['String'];
};

export type MailInput = {
  /** Sender email address */
  from?: Maybe<Scalars['String']>;
  /** Receiver */
  to: Scalars['String'];
  /** Subject of the email */
  subject: Scalars['String'];
  /** Body of the email in HTML */
  html: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** User operations */
  signup?: Maybe<ResultUser>;
  signIn?: Maybe<ResultSignIn>;
  updateUser?: Maybe<ResultUser>;
  deleteUser?: Maybe<ResultUser>;
  blockUser?: Maybe<ResultUser>;
  activeUserAction?: Maybe<ResultUser>;
  resetPasswordAction?: Maybe<ResultUser>;
  /** Stone operations */
  addStone?: Maybe<ResultStone>;
  updateStone?: Maybe<ResultStone>;
  deleteStone?: Maybe<ResultStone>;
  blockStone?: Maybe<ResultStone>;
  reportStone?: Maybe<ResultStone>;
  /** Comment operations */
  addComment?: Maybe<ResultComment>;
  updateComment?: Maybe<ResultComment>;
  deleteComment?: Maybe<ResultComment>;
  blockComment?: Maybe<ResultComment>;
  reportComment?: Maybe<ResultComment>;
  /** Automatic emails sending */
  sendEmail?: Maybe<ResultMail>;
  activeUserEmail?: Maybe<ResultMail>;
  resetPasswordEmail?: Maybe<ResultMail>;
};


export type MutationSignupArgs = {
  user: UserInput;
};


export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  user: UserInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int'];
};


export type MutationBlockUserArgs = {
  id: Scalars['Int'];
};


export type MutationActiveUserActionArgs = {
  email: Scalars['String'];
  otp: Scalars['String'];
};


export type MutationResetPasswordActionArgs = {
  email: Scalars['String'];
  otp: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
};


export type MutationAddStoneArgs = {
  stone: StoneInput;
};


export type MutationUpdateStoneArgs = {
  id: Scalars['Int'];
  stone: StoneInput;
};


export type MutationDeleteStoneArgs = {
  id: Scalars['Int'];
};


export type MutationBlockStoneArgs = {
  id: Scalars['Int'];
};


export type MutationReportStoneArgs = {
  id: Scalars['Int'];
};


export type MutationAddCommentArgs = {
  comment: CommentInput;
};


export type MutationUpdateCommentArgs = {
  id: Scalars['Int'];
  comment: CommentInput;
};


export type MutationDeleteCommentArgs = {
  id: Scalars['Int'];
};


export type MutationBlockCommentArgs = {
  id: Scalars['Int'];
};


export type MutationReportCommentArgs = {
  id: Scalars['Int'];
};


export type MutationSendEmailArgs = {
  mail: MailInput;
};


export type MutationActiveUserEmailArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordEmailArgs = {
  email: Scalars['String'];
};

export type Otp = {
  __typename?: 'Otp';
  /** Hassed 6 digits code */
  hash?: Maybe<Scalars['String']>;
  /** Expiration time of the otp in miliseconds */
  exp?: Maybe<Scalars['Int']>;
};

/** Query definitions */
export type Query = {
  __typename?: 'Query';
  /** List of users registered in DB */
  users?: Maybe<ResultUsers>;
  /** Item of users selected */
  user?: Maybe<ResultUser>;
  /** User logged in */
  me?: Maybe<ResultUser>;
  /** Show stones */
  stones?: Maybe<ResultStones>;
  stone?: Maybe<ResultStone>;
};


/** Query definitions */
export type QueryUsersArgs = {
  page?: Maybe<Scalars['Int']>;
  itemsPage?: Maybe<Scalars['Int']>;
};


/** Query definitions */
export type QueryUserArgs = {
  id: Scalars['Int'];
};


/** Query definitions */
export type QueryStonesArgs = {
  page?: Maybe<Scalars['Int']>;
  itemsPage?: Maybe<Scalars['Int']>;
};


/** Query definitions */
export type QueryStoneArgs = {
  id: Scalars['Int'];
};

/** Interface to specify the required porperties in responses */
export type Result = {
  /** Operation status */
  status: Scalars['Boolean'];
  /** Operation feedback message */
  message: Scalars['String'];
};

export type ResultComment = Result & {
  __typename?: 'ResultComment';
  status: Scalars['Boolean'];
  /** Operation feedback message */
  message: Scalars['String'];
  /** List of stones registered in DB */
  comment?: Maybe<Comment>;
};

export type ResultInfo = {
  __typename?: 'ResultInfo';
  /** Current page */
  page: Scalars['Int'];
  /** Total items in the collection */
  total: Scalars['Int'];
  /** Number of items that we receive from the response */
  itemsPage: Scalars['Int'];
  /** Total of pages */
  pages: Scalars['Int'];
};

export type ResultMail = Result & {
  __typename?: 'ResultMail';
  status: Scalars['Boolean'];
  message: Scalars['String'];
  mail?: Maybe<Mail>;
};

export type ResultSignIn = Result & {
  __typename?: 'ResultSignIn';
  /** Operation status */
  status: Scalars['Boolean'];
  /** Operation feedback message */
  message: Scalars['String'];
  /** Signed in user token */
  token?: Maybe<Scalars['String']>;
};

export type ResultStone = Result & {
  __typename?: 'ResultStone';
  /** Operation status */
  status: Scalars['Boolean'];
  /** Operation feedback message */
  message: Scalars['String'];
  /** User Info */
  stone?: Maybe<Stone>;
};

export type ResultStones = Result & {
  __typename?: 'ResultStones';
  info?: Maybe<ResultInfo>;
  /** Operation status */
  status: Scalars['Boolean'];
  /** Operation feedback message */
  message: Scalars['String'];
  /** List of stones registered in DB */
  stones?: Maybe<Array<Maybe<Stone>>>;
};

export type ResultUser = Result & {
  __typename?: 'ResultUser';
  /** Operation status */
  status: Scalars['Boolean'];
  /** Operation feedback message */
  message: Scalars['String'];
  /** User Info */
  user?: Maybe<User>;
};

export type ResultUsers = Result & {
  __typename?: 'ResultUsers';
  /** Show info of the pagination system */
  info?: Maybe<ResultInfo>;
  /** Operation status */
  status: Scalars['Boolean'];
  /** Operation feedback message */
  message: Scalars['String'];
  /** List of users registered in DB */
  users: Array<User>;
};

export enum Role {
  Client = 'CLIENT',
  Admin = 'ADMIN'
}

export type Stone = {
  __typename?: 'Stone';
  id: Scalars['Int'];
  image: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  registerDate: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  user: User;
  active?: Maybe<Scalars['Boolean']>;
  abuse?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['String']>;
};

export type StoneInput = {
  image: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  userName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  registerDate: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  role: Role;
  active?: Maybe<Scalars['Boolean']>;
  otp?: Maybe<Otp>;
};

export type UserInput = {
  id?: Maybe<Scalars['ID']>;
  userName: Scalars['String'];
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
};

export type SendMailMutationVariables = Exact<{
  mail: MailInput;
}>;


export type SendMailMutation = { __typename?: 'Mutation', sendEmail?: Maybe<{ __typename?: 'ResultMail', status: boolean, message: string, mail?: Maybe<{ __typename?: 'Mail', from?: Maybe<string>, to: string, subject: string, html: string }> }> };

export type ActiveUserEmailMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ActiveUserEmailMutation = { __typename?: 'Mutation', activeUserEmail?: Maybe<{ __typename?: 'ResultMail', status: boolean, message: string, mail?: Maybe<{ __typename?: 'Mail', from?: Maybe<string>, to: string, subject: string, html: string }> }> };

export type ResetPasswordEmailMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ResetPasswordEmailMutation = { __typename?: 'Mutation', resetPasswordEmail?: Maybe<{ __typename?: 'ResultMail', status: boolean, message: string }> };

export type AddStoneMutationVariables = Exact<{
  stone: StoneInput;
}>;


export type AddStoneMutation = { __typename?: 'Mutation', addStone?: Maybe<{ __typename?: 'ResultStone', status: boolean, message: string, stone?: Maybe<{ __typename?: 'Stone', id: number, image: string, description?: Maybe<string>, latitude: number, longitude: number, registerDate: string, active?: Maybe<boolean>, abuse?: Maybe<boolean>, code?: Maybe<string>, user: { __typename?: 'User', id: string, userName: string, avatar?: Maybe<string> } }> }> };

export type UpdateStoneMutationVariables = Exact<{
  id: Scalars['Int'];
  stone: StoneInput;
}>;


export type UpdateStoneMutation = { __typename?: 'Mutation', updateStone?: Maybe<{ __typename?: 'ResultStone', status: boolean, message: string, stone?: Maybe<{ __typename?: 'Stone', id: number, image: string, description?: Maybe<string>, latitude: number, longitude: number, active?: Maybe<boolean>, abuse?: Maybe<boolean>, code?: Maybe<string>, user: { __typename?: 'User', id: string, userName: string, avatar?: Maybe<string> } }> }> };

export type DeleteStoneMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteStoneMutation = { __typename?: 'Mutation', deleteStone?: Maybe<{ __typename?: 'ResultStone', status: boolean, message: string }> };

export type BlockStoneMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type BlockStoneMutation = { __typename?: 'Mutation', blockStone?: Maybe<{ __typename?: 'ResultStone', status: boolean, message: string }> };

export type SigninMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SigninMutation = { __typename?: 'Mutation', signIn?: Maybe<{ __typename?: 'ResultSignIn', status: boolean, message: string, token?: Maybe<string> }> };

export type SignUpMutationVariables = Exact<{
  user: UserInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signup?: Maybe<{ __typename?: 'ResultUser', status: boolean, message: string, user?: Maybe<{ __typename?: 'User', id: string, userName: string, email: string, active?: Maybe<boolean>, otp?: Maybe<{ __typename?: 'Otp', hash?: Maybe<string>, exp?: Maybe<number> }> }> }> };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: Maybe<{ __typename?: 'ResultUser', status: boolean, message: string }> };

export type BlockUserMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type BlockUserMutation = { __typename?: 'Mutation', blockUser?: Maybe<{ __typename?: 'ResultUser', status: boolean, message: string }> };

export type UpdateUserMutationVariables = Exact<{
  user: UserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: Maybe<{ __typename?: 'ResultUser', status: boolean, message: string, user?: Maybe<{ __typename?: 'User', id: string, userName: string, email: string, avatar?: Maybe<string>, role: Role }> }> };

export type ActiveUserActionMutationVariables = Exact<{
  email: Scalars['String'];
  otp: Scalars['String'];
}>;


export type ActiveUserActionMutation = { __typename?: 'Mutation', activeUserAction?: Maybe<{ __typename?: 'ResultUser', status: boolean, message: string }> };

export type ResetPasswordActionMutationVariables = Exact<{
  email: Scalars['String'];
  otp: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
}>;


export type ResetPasswordActionMutation = { __typename?: 'Mutation', resetPasswordAction?: Maybe<{ __typename?: 'ResultUser', status: boolean, message: string }> };

export type StonesQueryVariables = Exact<{
  page: Scalars['Int'];
  itemsPage: Scalars['Int'];
}>;


export type StonesQuery = { __typename?: 'Query', stones?: Maybe<{ __typename?: 'ResultStones', status: boolean, message: string, info?: Maybe<{ __typename?: 'ResultInfo', page: number, total: number, itemsPage: number, pages: number }>, stones?: Maybe<Array<Maybe<{ __typename?: 'Stone', id: number, image: string, description?: Maybe<string>, latitude: number, longitude: number, registerDate: string, active?: Maybe<boolean>, abuse?: Maybe<boolean>, code?: Maybe<string>, user: { __typename?: 'User', id: string, userName: string, avatar?: Maybe<string> } }>>> }> };

export type StoneQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type StoneQuery = { __typename?: 'Query', stone?: Maybe<{ __typename?: 'ResultStone', status: boolean, message: string, stone?: Maybe<{ __typename?: 'Stone', id: number, image: string, description?: Maybe<string>, latitude: number, longitude: number, active?: Maybe<boolean>, abuse?: Maybe<boolean>, code?: Maybe<string>, user: { __typename?: 'User', id: string, userName: string, avatar?: Maybe<string> } }> }> };

export type UsersQueryVariables = Exact<{
  page: Scalars['Int'];
  itemsPage: Scalars['Int'];
}>;


export type UsersQuery = { __typename?: 'Query', users?: Maybe<{ __typename?: 'ResultUsers', status: boolean, message: string, info?: Maybe<{ __typename?: 'ResultInfo', page: number, total: number, itemsPage: number, pages: number }>, users: Array<{ __typename?: 'User', id: string, userName: string, email: string, active?: Maybe<boolean> }> }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: Maybe<{ __typename?: 'ResultUser', status: boolean, message: string, user?: Maybe<{ __typename?: 'User', id: string, userName: string, email: string, registerDate: string, avatar?: Maybe<string>, role: Role }> }> };

export type UserQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type UserQuery = { __typename?: 'Query', user?: Maybe<{ __typename?: 'ResultUser', status: boolean, message: string, user?: Maybe<{ __typename?: 'User', id: string, userName: string, email: string, avatar?: Maybe<string>, registerDate: string, role: Role, active?: Maybe<boolean> }> }> };


export const SendMailDocument = gql`
    mutation sendMail($mail: MailInput!) {
  sendEmail(mail: $mail) {
    status
    message
    mail {
      from
      to
      subject
      html
    }
  }
}
    `;
export type SendMailMutationFn = Apollo.MutationFunction<SendMailMutation, SendMailMutationVariables>;

/**
 * __useSendMailMutation__
 *
 * To run a mutation, you first call `useSendMailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMailMutation, { data, loading, error }] = useSendMailMutation({
 *   variables: {
 *      mail: // value for 'mail'
 *   },
 * });
 */
export function useSendMailMutation(baseOptions?: Apollo.MutationHookOptions<SendMailMutation, SendMailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendMailMutation, SendMailMutationVariables>(SendMailDocument, options);
      }
export type SendMailMutationHookResult = ReturnType<typeof useSendMailMutation>;
export type SendMailMutationResult = Apollo.MutationResult<SendMailMutation>;
export type SendMailMutationOptions = Apollo.BaseMutationOptions<SendMailMutation, SendMailMutationVariables>;
export const ActiveUserEmailDocument = gql`
    mutation activeUserEmail($email: String!) {
  activeUserEmail(email: $email) {
    status
    message
    mail {
      from
      to
      subject
      html
    }
  }
}
    `;
export type ActiveUserEmailMutationFn = Apollo.MutationFunction<ActiveUserEmailMutation, ActiveUserEmailMutationVariables>;

/**
 * __useActiveUserEmailMutation__
 *
 * To run a mutation, you first call `useActiveUserEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useActiveUserEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [activeUserEmailMutation, { data, loading, error }] = useActiveUserEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useActiveUserEmailMutation(baseOptions?: Apollo.MutationHookOptions<ActiveUserEmailMutation, ActiveUserEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ActiveUserEmailMutation, ActiveUserEmailMutationVariables>(ActiveUserEmailDocument, options);
      }
export type ActiveUserEmailMutationHookResult = ReturnType<typeof useActiveUserEmailMutation>;
export type ActiveUserEmailMutationResult = Apollo.MutationResult<ActiveUserEmailMutation>;
export type ActiveUserEmailMutationOptions = Apollo.BaseMutationOptions<ActiveUserEmailMutation, ActiveUserEmailMutationVariables>;
export const ResetPasswordEmailDocument = gql`
    mutation resetPasswordEmail($email: String!) {
  resetPasswordEmail(email: $email) {
    status
    message
  }
}
    `;
export type ResetPasswordEmailMutationFn = Apollo.MutationFunction<ResetPasswordEmailMutation, ResetPasswordEmailMutationVariables>;

/**
 * __useResetPasswordEmailMutation__
 *
 * To run a mutation, you first call `useResetPasswordEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordEmailMutation, { data, loading, error }] = useResetPasswordEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useResetPasswordEmailMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordEmailMutation, ResetPasswordEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordEmailMutation, ResetPasswordEmailMutationVariables>(ResetPasswordEmailDocument, options);
      }
export type ResetPasswordEmailMutationHookResult = ReturnType<typeof useResetPasswordEmailMutation>;
export type ResetPasswordEmailMutationResult = Apollo.MutationResult<ResetPasswordEmailMutation>;
export type ResetPasswordEmailMutationOptions = Apollo.BaseMutationOptions<ResetPasswordEmailMutation, ResetPasswordEmailMutationVariables>;
export const AddStoneDocument = gql`
    mutation addStone($stone: StoneInput!) {
  addStone(stone: $stone) {
    status
    message
    stone {
      id
      image
      description
      latitude
      longitude
      registerDate
      user {
        id
        userName
        avatar
      }
      active
      abuse
      code
    }
  }
}
    `;
export type AddStoneMutationFn = Apollo.MutationFunction<AddStoneMutation, AddStoneMutationVariables>;

/**
 * __useAddStoneMutation__
 *
 * To run a mutation, you first call `useAddStoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddStoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addStoneMutation, { data, loading, error }] = useAddStoneMutation({
 *   variables: {
 *      stone: // value for 'stone'
 *   },
 * });
 */
export function useAddStoneMutation(baseOptions?: Apollo.MutationHookOptions<AddStoneMutation, AddStoneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddStoneMutation, AddStoneMutationVariables>(AddStoneDocument, options);
      }
export type AddStoneMutationHookResult = ReturnType<typeof useAddStoneMutation>;
export type AddStoneMutationResult = Apollo.MutationResult<AddStoneMutation>;
export type AddStoneMutationOptions = Apollo.BaseMutationOptions<AddStoneMutation, AddStoneMutationVariables>;
export const UpdateStoneDocument = gql`
    mutation updateStone($id: Int!, $stone: StoneInput!) {
  updateStone(id: $id, stone: $stone) {
    status
    message
    stone {
      id
      image
      description
      latitude
      longitude
      user {
        id
        userName
        avatar
      }
      active
      abuse
      code
    }
  }
}
    `;
export type UpdateStoneMutationFn = Apollo.MutationFunction<UpdateStoneMutation, UpdateStoneMutationVariables>;

/**
 * __useUpdateStoneMutation__
 *
 * To run a mutation, you first call `useUpdateStoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStoneMutation, { data, loading, error }] = useUpdateStoneMutation({
 *   variables: {
 *      id: // value for 'id'
 *      stone: // value for 'stone'
 *   },
 * });
 */
export function useUpdateStoneMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStoneMutation, UpdateStoneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStoneMutation, UpdateStoneMutationVariables>(UpdateStoneDocument, options);
      }
export type UpdateStoneMutationHookResult = ReturnType<typeof useUpdateStoneMutation>;
export type UpdateStoneMutationResult = Apollo.MutationResult<UpdateStoneMutation>;
export type UpdateStoneMutationOptions = Apollo.BaseMutationOptions<UpdateStoneMutation, UpdateStoneMutationVariables>;
export const DeleteStoneDocument = gql`
    mutation deleteStone($id: Int!) {
  deleteStone(id: $id) {
    status
    message
  }
}
    `;
export type DeleteStoneMutationFn = Apollo.MutationFunction<DeleteStoneMutation, DeleteStoneMutationVariables>;

/**
 * __useDeleteStoneMutation__
 *
 * To run a mutation, you first call `useDeleteStoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStoneMutation, { data, loading, error }] = useDeleteStoneMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteStoneMutation(baseOptions?: Apollo.MutationHookOptions<DeleteStoneMutation, DeleteStoneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteStoneMutation, DeleteStoneMutationVariables>(DeleteStoneDocument, options);
      }
export type DeleteStoneMutationHookResult = ReturnType<typeof useDeleteStoneMutation>;
export type DeleteStoneMutationResult = Apollo.MutationResult<DeleteStoneMutation>;
export type DeleteStoneMutationOptions = Apollo.BaseMutationOptions<DeleteStoneMutation, DeleteStoneMutationVariables>;
export const BlockStoneDocument = gql`
    mutation blockStone($id: Int!) {
  blockStone(id: $id) {
    status
    message
  }
}
    `;
export type BlockStoneMutationFn = Apollo.MutationFunction<BlockStoneMutation, BlockStoneMutationVariables>;

/**
 * __useBlockStoneMutation__
 *
 * To run a mutation, you first call `useBlockStoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBlockStoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [blockStoneMutation, { data, loading, error }] = useBlockStoneMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBlockStoneMutation(baseOptions?: Apollo.MutationHookOptions<BlockStoneMutation, BlockStoneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BlockStoneMutation, BlockStoneMutationVariables>(BlockStoneDocument, options);
      }
export type BlockStoneMutationHookResult = ReturnType<typeof useBlockStoneMutation>;
export type BlockStoneMutationResult = Apollo.MutationResult<BlockStoneMutation>;
export type BlockStoneMutationOptions = Apollo.BaseMutationOptions<BlockStoneMutation, BlockStoneMutationVariables>;
export const SigninDocument = gql`
    mutation signin($email: String!, $password: String!) {
  signIn(email: $email, password: $password) {
    status
    message
    token
  }
}
    `;
export type SigninMutationFn = Apollo.MutationFunction<SigninMutation, SigninMutationVariables>;

/**
 * __useSigninMutation__
 *
 * To run a mutation, you first call `useSigninMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSigninMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signinMutation, { data, loading, error }] = useSigninMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSigninMutation(baseOptions?: Apollo.MutationHookOptions<SigninMutation, SigninMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SigninMutation, SigninMutationVariables>(SigninDocument, options);
      }
export type SigninMutationHookResult = ReturnType<typeof useSigninMutation>;
export type SigninMutationResult = Apollo.MutationResult<SigninMutation>;
export type SigninMutationOptions = Apollo.BaseMutationOptions<SigninMutation, SigninMutationVariables>;
export const SignUpDocument = gql`
    mutation signUp($user: UserInput!) {
  signup(user: $user) {
    status
    message
    user {
      id
      userName
      email
      active
      otp {
        hash
        exp
      }
    }
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const DeleteUserDocument = gql`
    mutation deleteUser($id: Int!) {
  deleteUser(id: $id) {
    status
    message
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const BlockUserDocument = gql`
    mutation blockUser($id: Int!) {
  blockUser(id: $id) {
    status
    message
  }
}
    `;
export type BlockUserMutationFn = Apollo.MutationFunction<BlockUserMutation, BlockUserMutationVariables>;

/**
 * __useBlockUserMutation__
 *
 * To run a mutation, you first call `useBlockUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBlockUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [blockUserMutation, { data, loading, error }] = useBlockUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBlockUserMutation(baseOptions?: Apollo.MutationHookOptions<BlockUserMutation, BlockUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BlockUserMutation, BlockUserMutationVariables>(BlockUserDocument, options);
      }
export type BlockUserMutationHookResult = ReturnType<typeof useBlockUserMutation>;
export type BlockUserMutationResult = Apollo.MutationResult<BlockUserMutation>;
export type BlockUserMutationOptions = Apollo.BaseMutationOptions<BlockUserMutation, BlockUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($user: UserInput!) {
  updateUser(user: $user) {
    status
    message
    user {
      id
      userName
      email
      avatar
      role
    }
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const ActiveUserActionDocument = gql`
    mutation activeUserAction($email: String!, $otp: String!) {
  activeUserAction(email: $email, otp: $otp) {
    status
    message
  }
}
    `;
export type ActiveUserActionMutationFn = Apollo.MutationFunction<ActiveUserActionMutation, ActiveUserActionMutationVariables>;

/**
 * __useActiveUserActionMutation__
 *
 * To run a mutation, you first call `useActiveUserActionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useActiveUserActionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [activeUserActionMutation, { data, loading, error }] = useActiveUserActionMutation({
 *   variables: {
 *      email: // value for 'email'
 *      otp: // value for 'otp'
 *   },
 * });
 */
export function useActiveUserActionMutation(baseOptions?: Apollo.MutationHookOptions<ActiveUserActionMutation, ActiveUserActionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ActiveUserActionMutation, ActiveUserActionMutationVariables>(ActiveUserActionDocument, options);
      }
export type ActiveUserActionMutationHookResult = ReturnType<typeof useActiveUserActionMutation>;
export type ActiveUserActionMutationResult = Apollo.MutationResult<ActiveUserActionMutation>;
export type ActiveUserActionMutationOptions = Apollo.BaseMutationOptions<ActiveUserActionMutation, ActiveUserActionMutationVariables>;
export const ResetPasswordActionDocument = gql`
    mutation resetPasswordAction($email: String!, $otp: String!, $password: String!, $confirmPassword: String!) {
  resetPasswordAction(
    email: $email
    otp: $otp
    password: $password
    confirmPassword: $confirmPassword
  ) {
    status
    message
  }
}
    `;
export type ResetPasswordActionMutationFn = Apollo.MutationFunction<ResetPasswordActionMutation, ResetPasswordActionMutationVariables>;

/**
 * __useResetPasswordActionMutation__
 *
 * To run a mutation, you first call `useResetPasswordActionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordActionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordActionMutation, { data, loading, error }] = useResetPasswordActionMutation({
 *   variables: {
 *      email: // value for 'email'
 *      otp: // value for 'otp'
 *      password: // value for 'password'
 *      confirmPassword: // value for 'confirmPassword'
 *   },
 * });
 */
export function useResetPasswordActionMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordActionMutation, ResetPasswordActionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordActionMutation, ResetPasswordActionMutationVariables>(ResetPasswordActionDocument, options);
      }
export type ResetPasswordActionMutationHookResult = ReturnType<typeof useResetPasswordActionMutation>;
export type ResetPasswordActionMutationResult = Apollo.MutationResult<ResetPasswordActionMutation>;
export type ResetPasswordActionMutationOptions = Apollo.BaseMutationOptions<ResetPasswordActionMutation, ResetPasswordActionMutationVariables>;
export const StonesDocument = gql`
    query stones($page: Int!, $itemsPage: Int!) {
  stones(page: $page, itemsPage: $itemsPage) {
    info {
      page
      total
      itemsPage
      pages
    }
    status
    message
    stones {
      id
      image
      description
      latitude
      longitude
      registerDate
      user {
        id
        userName
        avatar
      }
      active
      abuse
      code
    }
  }
}
    `;

/**
 * __useStonesQuery__
 *
 * To run a query within a React component, call `useStonesQuery` and pass it any options that fit your needs.
 * When your component renders, `useStonesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStonesQuery({
 *   variables: {
 *      page: // value for 'page'
 *      itemsPage: // value for 'itemsPage'
 *   },
 * });
 */
export function useStonesQuery(baseOptions: Apollo.QueryHookOptions<StonesQuery, StonesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StonesQuery, StonesQueryVariables>(StonesDocument, options);
      }
export function useStonesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StonesQuery, StonesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StonesQuery, StonesQueryVariables>(StonesDocument, options);
        }
export type StonesQueryHookResult = ReturnType<typeof useStonesQuery>;
export type StonesLazyQueryHookResult = ReturnType<typeof useStonesLazyQuery>;
export type StonesQueryResult = Apollo.QueryResult<StonesQuery, StonesQueryVariables>;
export const StoneDocument = gql`
    query stone($id: Int!) {
  stone(id: $id) {
    status
    message
    stone {
      id
      image
      description
      latitude
      longitude
      user {
        id
        userName
        avatar
      }
      active
      abuse
      code
    }
  }
}
    `;

/**
 * __useStoneQuery__
 *
 * To run a query within a React component, call `useStoneQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoneQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useStoneQuery(baseOptions: Apollo.QueryHookOptions<StoneQuery, StoneQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StoneQuery, StoneQueryVariables>(StoneDocument, options);
      }
export function useStoneLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StoneQuery, StoneQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StoneQuery, StoneQueryVariables>(StoneDocument, options);
        }
export type StoneQueryHookResult = ReturnType<typeof useStoneQuery>;
export type StoneLazyQueryHookResult = ReturnType<typeof useStoneLazyQuery>;
export type StoneQueryResult = Apollo.QueryResult<StoneQuery, StoneQueryVariables>;
export const UsersDocument = gql`
    query users($page: Int!, $itemsPage: Int!) {
  users(page: $page, itemsPage: $itemsPage) {
    info {
      page
      total
      itemsPage
      pages
    }
    status
    message
    users {
      id
      userName
      email
      active
    }
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      page: // value for 'page'
 *      itemsPage: // value for 'itemsPage'
 *   },
 * });
 */
export function useUsersQuery(baseOptions: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    status
    message
    user {
      id
      userName
      email
      registerDate
      avatar
      role
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const UserDocument = gql`
    query user($id: Int!) {
  user(id: $id) {
    status
    message
    user {
      id
      userName
      email
      avatar
      registerDate
      role
      active
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;