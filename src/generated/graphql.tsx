import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  abuse: Scalars['Boolean'];
  active: Scalars['Boolean'];
  comment: Scalars['String'];
  id: Scalars['Int'];
  registerDate: Scalars['String'];
  stoneID: Scalars['Int'];
  userID: Scalars['Int'];
};

export type CommentInput = {
  comment: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  stoneID?: InputMaybe<Scalars['ID']>;
};

export type Like = {
  __typename?: 'Like';
  id: Scalars['Int'];
  registerDate: Scalars['String'];
  stoneID: Scalars['Int'];
  userID: Scalars['Int'];
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
  /** Body of the email in HTML */
  html: Scalars['String'];
  /** Subject of the email */
  subject: Scalars['String'];
  /** Receiver */
  to: Scalars['String'];
};

export type MailInput = {
  /** Sender email address */
  from?: InputMaybe<Scalars['String']>;
  /** Body of the email in HTML */
  html: Scalars['String'];
  /** Subject of the email */
  subject: Scalars['String'];
  /** Receiver */
  to: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  activeUserAction?: Maybe<ResultUser>;
  activeUserEmail?: Maybe<ResultMail>;
  /** Comment operations */
  addComment?: Maybe<ResultComment>;
  /** Likes operations */
  addLike?: Maybe<ResultLike>;
  /** Stone operations */
  addStone?: Maybe<ResultStone>;
  blockComment?: Maybe<ResultComment>;
  blockStone?: Maybe<ResultStone>;
  blockUser?: Maybe<ResultUser>;
  deleteComment?: Maybe<ResultComment>;
  deleteLike?: Maybe<ResultLike>;
  deleteStone?: Maybe<ResultStone>;
  deleteUser?: Maybe<ResultUser>;
  reportComment?: Maybe<ResultComment>;
  reportStone?: Maybe<ResultStone>;
  resetPasswordAction?: Maybe<ResultUser>;
  resetPasswordEmail?: Maybe<ResultMail>;
  /** Automatic emails sending */
  sendEmail?: Maybe<ResultMail>;
  signIn?: Maybe<ResultSignIn>;
  /** User operations */
  signup?: Maybe<ResultUser>;
  updateComment?: Maybe<ResultComment>;
  updateStone?: Maybe<ResultStone>;
  updateUser?: Maybe<ResultUser>;
};


export type MutationActiveUserActionArgs = {
  email: Scalars['String'];
  otp: Scalars['String'];
};


export type MutationActiveUserEmailArgs = {
  email: Scalars['String'];
};


export type MutationAddCommentArgs = {
  comment: CommentInput;
};


export type MutationAddLikeArgs = {
  id: Scalars['Int'];
};


export type MutationAddStoneArgs = {
  stone: StoneInput;
};


export type MutationBlockCommentArgs = {
  id: Scalars['Int'];
};


export type MutationBlockStoneArgs = {
  id: Scalars['Int'];
};


export type MutationBlockUserArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteLikeArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteStoneArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int'];
};


export type MutationReportCommentArgs = {
  id: Scalars['Int'];
};


export type MutationReportStoneArgs = {
  id: Scalars['Int'];
};


export type MutationResetPasswordActionArgs = {
  confirmPassword: Scalars['String'];
  email: Scalars['String'];
  otp: Scalars['String'];
  password: Scalars['String'];
};


export type MutationResetPasswordEmailArgs = {
  email: Scalars['String'];
};


export type MutationSendEmailArgs = {
  mail: MailInput;
};


export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignupArgs = {
  user: UserInput;
};


export type MutationUpdateCommentArgs = {
  comment: CommentInput;
  id: Scalars['Int'];
};


export type MutationUpdateStoneArgs = {
  id: Scalars['Int'];
  stone: StoneInput;
};


export type MutationUpdateUserArgs = {
  user: UserInput;
};

export type Otp = {
  __typename?: 'Otp';
  /** Expiration time of the otp in miliseconds */
  exp?: Maybe<Scalars['Int']>;
  /** Hassed 6 digits code */
  hash?: Maybe<Scalars['String']>;
};

/** Query definitions */
export type Query = {
  __typename?: 'Query';
  comment?: Maybe<ResultComment>;
  /** Comments */
  comments?: Maybe<ResultComments>;
  countComments?: Maybe<ResultsCountComments>;
  countLikes?: Maybe<ResultsCountLike>;
  isLike?: Maybe<ResultIsLike>;
  /** Likes */
  likes?: Maybe<ResultLikes>;
  /** User logged in */
  me?: Maybe<ResultUser>;
  stone?: Maybe<ResultStone>;
  /** Show stones */
  stones?: Maybe<ResultStones>;
  /** Item of users selected */
  user?: Maybe<ResultUser>;
  /** List of users registered in DB */
  users?: Maybe<ResultUsers>;
};


/** Query definitions */
export type QueryCommentArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


/** Query definitions */
export type QueryCommentsArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  stoneID?: InputMaybe<Scalars['Int']>;
};


/** Query definitions */
export type QueryCountCommentsArgs = {
  stoneID?: InputMaybe<Scalars['Int']>;
};


/** Query definitions */
export type QueryCountLikesArgs = {
  stoneID?: InputMaybe<Scalars['Int']>;
};


/** Query definitions */
export type QueryIsLikeArgs = {
  stoneID?: InputMaybe<Scalars['Int']>;
};


/** Query definitions */
export type QueryLikesArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  stoneID?: InputMaybe<Scalars['Int']>;
};


/** Query definitions */
export type QueryStoneArgs = {
  id: Scalars['Int'];
};


/** Query definitions */
export type QueryStonesArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


/** Query definitions */
export type QueryUserArgs = {
  id: Scalars['Int'];
};


/** Query definitions */
export type QueryUsersArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

/** Interface to specify the required porperties in responses */
export type Result = {
  /** Operation feedback message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
};

export type ResultComment = Result & {
  __typename?: 'ResultComment';
  /** List of stones registered in DB */
  comment?: Maybe<Comment>;
  /** Operation feedback message */
  message: Scalars['String'];
  status: Scalars['Boolean'];
};

export type ResultComments = Result & {
  __typename?: 'ResultComments';
  /** List of stones registered in DB */
  comments?: Maybe<Array<Maybe<Comment>>>;
  info?: Maybe<ResultInfo>;
  /** Operation feedback message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
};

export type ResultInfo = {
  __typename?: 'ResultInfo';
  /** Number of items that we receive from the response */
  itemsPage: Scalars['Int'];
  /** Current page */
  page: Scalars['Int'];
  /** Total of pages */
  pages: Scalars['Int'];
  /** Total items in the collection */
  total: Scalars['Int'];
};

export type ResultIsLike = Result & {
  __typename?: 'ResultIsLike';
  /** IsLiked stone by user */
  isLike?: Maybe<Scalars['Boolean']>;
  /** Operation feedback message */
  message: Scalars['String'];
  status: Scalars['Boolean'];
};

export type ResultLike = Result & {
  __typename?: 'ResultLike';
  /** List of stones registered in DB */
  like?: Maybe<Like>;
  /** Operation feedback message */
  message: Scalars['String'];
  status: Scalars['Boolean'];
};

export type ResultLikes = Result & {
  __typename?: 'ResultLikes';
  info?: Maybe<ResultInfo>;
  /** List of stones registered in DB */
  likes?: Maybe<Array<Maybe<Like>>>;
  /** Operation feedback message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
};

export type ResultMail = Result & {
  __typename?: 'ResultMail';
  mail?: Maybe<Mail>;
  message: Scalars['String'];
  status: Scalars['Boolean'];
};

export type ResultSignIn = Result & {
  __typename?: 'ResultSignIn';
  /** Operation feedback message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** Signed in user token */
  token?: Maybe<Scalars['String']>;
};

export type ResultStone = Result & {
  __typename?: 'ResultStone';
  /** Operation feedback message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** User Info */
  stone?: Maybe<Stone>;
};

export type ResultStones = Result & {
  __typename?: 'ResultStones';
  info?: Maybe<ResultInfo>;
  /** Operation feedback message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** List of stones registered in DB */
  stones?: Maybe<Array<Maybe<Stone>>>;
};

export type ResultUser = Result & {
  __typename?: 'ResultUser';
  /** Operation feedback message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** User Info */
  user?: Maybe<User>;
};

export type ResultUsers = Result & {
  __typename?: 'ResultUsers';
  /** Show info of the pagination system */
  info?: Maybe<ResultInfo>;
  /** Operation feedback message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** List of users registered in DB */
  users: Array<User>;
};

export type ResultsCountComments = Result & {
  __typename?: 'ResultsCountComments';
  /** Number of comments registered in DB */
  count?: Maybe<Scalars['Int']>;
  /** Operation feedback message */
  message: Scalars['String'];
  status: Scalars['Boolean'];
};

export type ResultsCountLike = Result & {
  __typename?: 'ResultsCountLike';
  /** List of stones registered in DB */
  count?: Maybe<Scalars['Int']>;
  /** Operation feedback message */
  message: Scalars['String'];
  status: Scalars['Boolean'];
};

export enum Role {
  Admin = 'ADMIN',
  Client = 'CLIENT'
}

export type Stone = {
  __typename?: 'Stone';
  abuse?: Maybe<Scalars['Boolean']>;
  active?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['String']>;
  commentCount?: Maybe<Scalars['Int']>;
  comments: Array<Maybe<Comment>>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  image: Scalars['String'];
  latitude: Scalars['Float'];
  likeCount?: Maybe<Scalars['Int']>;
  likes: Array<Maybe<Like>>;
  longitude: Scalars['Float'];
  registerDate: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  user: User;
};

export type StoneInput = {
  description?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  title?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  active?: Maybe<Scalars['Boolean']>;
  avatar?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['Int'];
  otp?: Maybe<Otp>;
  password: Scalars['String'];
  registerDate: Scalars['String'];
  role: Role;
  userName: Scalars['String'];
};

export type UserInput = {
  avatar?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
  userName: Scalars['String'];
};

export type CommentObjectFragment = { __typename: 'Comment', id: number, stoneID: number, userID: number, comment: string, registerDate: string, abuse: boolean, active: boolean };

export type AddCommentMutationVariables = Exact<{
  comment: CommentInput;
}>;


export type AddCommentMutation = { __typename?: 'Mutation', addComment?: { __typename?: 'ResultComment', status: boolean, message: string, comment?: { __typename: 'Comment', id: number, stoneID: number, userID: number, comment: string, registerDate: string, abuse: boolean, active: boolean } | null | undefined } | null | undefined };

export type UpdateCommentMutationVariables = Exact<{
  id: Scalars['Int'];
  comment: CommentInput;
}>;


export type UpdateCommentMutation = { __typename?: 'Mutation', updateComment?: { __typename?: 'ResultComment', status: boolean, message: string, comment?: { __typename: 'Comment', id: number, stoneID: number, userID: number, comment: string, registerDate: string, abuse: boolean, active: boolean } | null | undefined } | null | undefined };

export type DeleteCommentMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteCommentMutation = { __typename?: 'Mutation', deleteComment?: { __typename?: 'ResultComment', status: boolean, message: string, comment?: { __typename: 'Comment', id: number, stoneID: number, userID: number, comment: string, registerDate: string, abuse: boolean, active: boolean } | null | undefined } | null | undefined };

export type BlockCommentMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type BlockCommentMutation = { __typename?: 'Mutation', blockComment?: { __typename?: 'ResultComment', status: boolean, message: string, comment?: { __typename: 'Comment', id: number, stoneID: number, userID: number, comment: string, registerDate: string, abuse: boolean, active: boolean } | null | undefined } | null | undefined };

export type ReportCommentMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ReportCommentMutation = { __typename?: 'Mutation', reportComment?: { __typename?: 'ResultComment', status: boolean, message: string, comment?: { __typename: 'Comment', id: number, stoneID: number, userID: number, comment: string, registerDate: string, abuse: boolean, active: boolean } | null | undefined } | null | undefined };

export type CommentsQueryVariables = Exact<{
  stoneID: Scalars['Int'];
  page: Scalars['Int'];
  itemsPage: Scalars['Int'];
}>;


export type CommentsQuery = { __typename?: 'Query', comments?: { __typename?: 'ResultComments', status: boolean, message: string, info?: { __typename?: 'ResultInfo', page: number, pages: number, total: number, itemsPage: number } | null | undefined, comments?: Array<{ __typename: 'Comment', id: number, stoneID: number, userID: number, comment: string, registerDate: string, abuse: boolean, active: boolean } | null | undefined> | null | undefined } | null | undefined };

export type CommentQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type CommentQuery = { __typename?: 'Query', comment?: { __typename?: 'ResultComment', status: boolean, message: string, comment?: { __typename: 'Comment', id: number, stoneID: number, userID: number, comment: string, registerDate: string, abuse: boolean, active: boolean } | null | undefined } | null | undefined };

export type CountCommentsQueryVariables = Exact<{
  stoneID?: InputMaybe<Scalars['Int']>;
}>;


export type CountCommentsQuery = { __typename?: 'Query', countComments?: { __typename?: 'ResultsCountComments', status: boolean, message: string, count?: number | null | undefined } | null | undefined };

export type MailObjectFragment = { __typename?: 'Mail', from?: string | null | undefined, to: string, subject: string, html: string };

export type ResultInfoObjectFragment = { __typename?: 'ResultInfo', page: number, pages: number, total: number, itemsPage: number };

export type LikeObjectFragment = { __typename?: 'Like', id: number, stoneID: number, userID: number, registerDate: string };

export type AddLikeMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type AddLikeMutation = { __typename?: 'Mutation', addLike?: { __typename?: 'ResultLike', status: boolean, message: string, like?: { __typename?: 'Like', id: number, stoneID: number, userID: number, registerDate: string } | null | undefined } | null | undefined };

export type DeleteLikeMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteLikeMutation = { __typename?: 'Mutation', deleteLike?: { __typename?: 'ResultLike', status: boolean, message: string, like?: { __typename?: 'Like', id: number, stoneID: number, userID: number, registerDate: string } | null | undefined } | null | undefined };

export type LikesQueryVariables = Exact<{
  stoneID: Scalars['Int'];
  page: Scalars['Int'];
  itemsPage: Scalars['Int'];
}>;


export type LikesQuery = { __typename?: 'Query', likes?: { __typename?: 'ResultLikes', status: boolean, message: string, info?: { __typename?: 'ResultInfo', page: number, pages: number, total: number, itemsPage: number } | null | undefined, likes?: Array<{ __typename?: 'Like', id: number, stoneID: number, userID: number, registerDate: string } | null | undefined> | null | undefined } | null | undefined };

export type IsLikeQueryVariables = Exact<{
  stoneID: Scalars['Int'];
}>;


export type IsLikeQuery = { __typename?: 'Query', isLike?: { __typename?: 'ResultIsLike', status: boolean, message: string, isLike?: boolean | null | undefined } | null | undefined };

export type CountLikesQueryVariables = Exact<{
  stoneID: Scalars['Int'];
}>;


export type CountLikesQuery = { __typename?: 'Query', countLikes?: { __typename?: 'ResultsCountLike', status: boolean, message: string, count?: number | null | undefined } | null | undefined };

export type StoneObjectFragment = { __typename?: 'Stone', id: number, image: string, title?: string | null | undefined, description?: string | null | undefined, registerDate: string, latitude: number, longitude: number, active?: boolean | null | undefined, abuse?: boolean | null | undefined, code?: string | null | undefined, commentCount?: number | null | undefined, likeCount?: number | null | undefined, user: { __typename?: 'User', id: number, userName: string, email: string, password?: string, registerDate?: string, avatar?: string | null | undefined, role?: Role, active?: boolean | null | undefined, otp?: { __typename?: 'Otp', hash?: string | null | undefined, exp?: number | null | undefined } | null | undefined }, comments: Array<{ __typename: 'Comment', id: number, stoneID: number, userID: number, comment: string, registerDate: string, abuse: boolean, active: boolean } | null | undefined>, likes: Array<{ __typename?: 'Like', id: number, stoneID: number, userID: number, registerDate: string } | null | undefined> };

export type AddStoneMutationVariables = Exact<{
  stone: StoneInput;
  include: Scalars['Boolean'];
}>;


export type AddStoneMutation = { __typename?: 'Mutation', addStone?: { __typename?: 'ResultStone', status: boolean, message: string, stone?: { __typename?: 'Stone', id: number, image: string, title?: string | null | undefined, description?: string | null | undefined, registerDate: string, latitude: number, longitude: number, active?: boolean | null | undefined, abuse?: boolean | null | undefined, code?: string | null | undefined, commentCount?: number | null | undefined, likeCount?: number | null | undefined, user: { __typename?: 'User', id: number, userName: string, email: string, password?: string, registerDate?: string, avatar?: string | null | undefined, role?: Role, active?: boolean | null | undefined, otp?: { __typename?: 'Otp', hash?: string | null | undefined, exp?: number | null | undefined } | null | undefined }, comments: Array<{ __typename: 'Comment', id: number, stoneID: number, userID: number, comment: string, registerDate: string, abuse: boolean, active: boolean } | null | undefined>, likes: Array<{ __typename?: 'Like', id: number, stoneID: number, userID: number, registerDate: string } | null | undefined> } | null | undefined } | null | undefined };

export type UpdateStoneMutationVariables = Exact<{
  id: Scalars['Int'];
  stone: StoneInput;
  include: Scalars['Boolean'];
}>;


export type UpdateStoneMutation = { __typename?: 'Mutation', updateStone?: { __typename?: 'ResultStone', status: boolean, message: string, stone?: { __typename?: 'Stone', id: number, image: string, title?: string | null | undefined, description?: string | null | undefined, registerDate: string, latitude: number, longitude: number, active?: boolean | null | undefined, abuse?: boolean | null | undefined, code?: string | null | undefined, commentCount?: number | null | undefined, likeCount?: number | null | undefined, user: { __typename?: 'User', id: number, userName: string, email: string, password?: string, registerDate?: string, avatar?: string | null | undefined, role?: Role, active?: boolean | null | undefined, otp?: { __typename?: 'Otp', hash?: string | null | undefined, exp?: number | null | undefined } | null | undefined }, comments: Array<{ __typename: 'Comment', id: number, stoneID: number, userID: number, comment: string, registerDate: string, abuse: boolean, active: boolean } | null | undefined>, likes: Array<{ __typename?: 'Like', id: number, stoneID: number, userID: number, registerDate: string } | null | undefined> } | null | undefined } | null | undefined };

export type DeleteStoneMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteStoneMutation = { __typename?: 'Mutation', deleteStone?: { __typename?: 'ResultStone', status: boolean, message: string } | null | undefined };

export type BlockStoneMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type BlockStoneMutation = { __typename?: 'Mutation', blockStone?: { __typename?: 'ResultStone', status: boolean, message: string } | null | undefined };

export type StonesQueryVariables = Exact<{
  page: Scalars['Int'];
  itemsPage: Scalars['Int'];
  include: Scalars['Boolean'];
}>;


export type StonesQuery = { __typename?: 'Query', stones?: { __typename?: 'ResultStones', status: boolean, message: string, info?: { __typename?: 'ResultInfo', page: number, pages: number, total: number, itemsPage: number } | null | undefined, stones?: Array<{ __typename?: 'Stone', id: number, image: string, title?: string | null | undefined, description?: string | null | undefined, registerDate: string, latitude: number, longitude: number, active?: boolean | null | undefined, abuse?: boolean | null | undefined, code?: string | null | undefined, commentCount?: number | null | undefined, likeCount?: number | null | undefined, user: { __typename?: 'User', id: number, userName: string, email: string, password?: string, registerDate?: string, avatar?: string | null | undefined, role?: Role, active?: boolean | null | undefined, otp?: { __typename?: 'Otp', hash?: string | null | undefined, exp?: number | null | undefined } | null | undefined }, comments: Array<{ __typename: 'Comment', id: number, stoneID: number, userID: number, comment: string, registerDate: string, abuse: boolean, active: boolean } | null | undefined>, likes: Array<{ __typename?: 'Like', id: number, stoneID: number, userID: number, registerDate: string } | null | undefined> } | null | undefined> | null | undefined } | null | undefined };

export type StoneQueryVariables = Exact<{
  id: Scalars['Int'];
  include: Scalars['Boolean'];
}>;


export type StoneQuery = { __typename?: 'Query', stone?: { __typename?: 'ResultStone', status: boolean, message: string, stone?: { __typename?: 'Stone', id: number, image: string, title?: string | null | undefined, description?: string | null | undefined, registerDate: string, latitude: number, longitude: number, active?: boolean | null | undefined, abuse?: boolean | null | undefined, code?: string | null | undefined, commentCount?: number | null | undefined, likeCount?: number | null | undefined, user: { __typename?: 'User', id: number, userName: string, email: string, password?: string, registerDate?: string, avatar?: string | null | undefined, role?: Role, active?: boolean | null | undefined, otp?: { __typename?: 'Otp', hash?: string | null | undefined, exp?: number | null | undefined } | null | undefined }, comments: Array<{ __typename: 'Comment', id: number, stoneID: number, userID: number, comment: string, registerDate: string, abuse: boolean, active: boolean } | null | undefined>, likes: Array<{ __typename?: 'Like', id: number, stoneID: number, userID: number, registerDate: string } | null | undefined> } | null | undefined } | null | undefined };

export type UserObjectFragment = { __typename?: 'User', id: number, userName: string, email: string, password?: string, registerDate?: string, avatar?: string | null | undefined, role?: Role, active?: boolean | null | undefined, otp?: { __typename?: 'Otp', hash?: string | null | undefined, exp?: number | null | undefined } | null | undefined };

export type SendMailMutationVariables = Exact<{
  mail: MailInput;
}>;


export type SendMailMutation = { __typename?: 'Mutation', sendEmail?: { __typename?: 'ResultMail', status: boolean, message: string, mail?: { __typename?: 'Mail', from?: string | null | undefined, to: string, subject: string, html: string } | null | undefined } | null | undefined };

export type ActiveUserEmailMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ActiveUserEmailMutation = { __typename?: 'Mutation', activeUserEmail?: { __typename?: 'ResultMail', status: boolean, message: string, mail?: { __typename?: 'Mail', from?: string | null | undefined, to: string, subject: string, html: string } | null | undefined } | null | undefined };

export type ResetPasswordEmailMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ResetPasswordEmailMutation = { __typename?: 'Mutation', resetPasswordEmail?: { __typename?: 'ResultMail', status: boolean, message: string } | null | undefined };

export type SigninMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SigninMutation = { __typename?: 'Mutation', signIn?: { __typename?: 'ResultSignIn', status: boolean, message: string, token?: string | null | undefined } | null | undefined };

export type SignUpMutationVariables = Exact<{
  user: UserInput;
  include: Scalars['Boolean'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', signup?: { __typename?: 'ResultUser', status: boolean, message: string, user?: { __typename?: 'User', id: number, userName: string, email: string, password?: string, registerDate?: string, avatar?: string | null | undefined, role?: Role, active?: boolean | null | undefined, otp?: { __typename?: 'Otp', hash?: string | null | undefined, exp?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: { __typename?: 'ResultUser', status: boolean, message: string } | null | undefined };

export type BlockUserMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type BlockUserMutation = { __typename?: 'Mutation', blockUser?: { __typename?: 'ResultUser', status: boolean, message: string } | null | undefined };

export type UpdateUserMutationVariables = Exact<{
  user: UserInput;
  include: Scalars['Boolean'];
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'ResultUser', status: boolean, message: string, user?: { __typename?: 'User', id: number, userName: string, email: string, password?: string, registerDate?: string, avatar?: string | null | undefined, role?: Role, active?: boolean | null | undefined, otp?: { __typename?: 'Otp', hash?: string | null | undefined, exp?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type ActiveUserActionMutationVariables = Exact<{
  email: Scalars['String'];
  otp: Scalars['String'];
}>;


export type ActiveUserActionMutation = { __typename?: 'Mutation', activeUserAction?: { __typename?: 'ResultUser', status: boolean, message: string } | null | undefined };

export type ResetPasswordActionMutationVariables = Exact<{
  email: Scalars['String'];
  otp: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
}>;


export type ResetPasswordActionMutation = { __typename?: 'Mutation', resetPasswordAction?: { __typename?: 'ResultUser', status: boolean, message: string } | null | undefined };

export type UsersQueryVariables = Exact<{
  page: Scalars['Int'];
  itemsPage: Scalars['Int'];
  include: Scalars['Boolean'];
}>;


export type UsersQuery = { __typename?: 'Query', users?: { __typename?: 'ResultUsers', status: boolean, message: string, info?: { __typename?: 'ResultInfo', page: number, pages: number, total: number, itemsPage: number } | null | undefined, users: Array<{ __typename?: 'User', id: number, userName: string, email: string, password?: string, registerDate?: string, avatar?: string | null | undefined, role?: Role, active?: boolean | null | undefined, otp?: { __typename?: 'Otp', hash?: string | null | undefined, exp?: number | null | undefined } | null | undefined }> } | null | undefined };

export type MeQueryVariables = Exact<{
  include: Scalars['Boolean'];
}>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'ResultUser', status: boolean, message: string, user?: { __typename?: 'User', id: number, userName: string, email: string, password?: string, registerDate?: string, avatar?: string | null | undefined, role?: Role, active?: boolean | null | undefined, otp?: { __typename?: 'Otp', hash?: string | null | undefined, exp?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type UserQueryVariables = Exact<{
  id: Scalars['Int'];
  include: Scalars['Boolean'];
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'ResultUser', status: boolean, message: string, user?: { __typename?: 'User', id: number, userName: string, email: string, password?: string, registerDate?: string, avatar?: string | null | undefined, role?: Role, active?: boolean | null | undefined, otp?: { __typename?: 'Otp', hash?: string | null | undefined, exp?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export const MailObjectFragmentDoc = gql`
    fragment MailObject on Mail {
  from
  to
  subject
  html
}
    `;
export const ResultInfoObjectFragmentDoc = gql`
    fragment ResultInfoObject on ResultInfo {
  page
  pages
  total
  itemsPage
}
    `;
export const UserObjectFragmentDoc = gql`
    fragment UserObject on User {
  id
  userName
  email
  password @include(if: $include)
  registerDate @include(if: $include)
  avatar
  role @include(if: $include)
  active
  otp @include(if: $include) {
    hash
    exp
  }
}
    `;
export const CommentObjectFragmentDoc = gql`
    fragment CommentObject on Comment {
  __typename
  id
  stoneID
  userID
  comment
  registerDate
  abuse
  active
}
    `;
export const LikeObjectFragmentDoc = gql`
    fragment LikeObject on Like {
  id
  stoneID
  userID
  registerDate
}
    `;
export const StoneObjectFragmentDoc = gql`
    fragment StoneObject on Stone {
  id
  image
  title
  description
  registerDate
  latitude
  longitude
  active
  abuse
  code
  user {
    ...UserObject
  }
  commentCount
  likeCount
  comments {
    ...CommentObject
  }
  likes {
    ...LikeObject
  }
}
    ${UserObjectFragmentDoc}
${CommentObjectFragmentDoc}
${LikeObjectFragmentDoc}`;
export const AddCommentDocument = gql`
    mutation addComment($comment: CommentInput!) {
  addComment(comment: $comment) {
    status
    message
    comment {
      ...CommentObject
    }
  }
}
    ${CommentObjectFragmentDoc}`;
export type AddCommentMutationFn = Apollo.MutationFunction<AddCommentMutation, AddCommentMutationVariables>;

/**
 * __useAddCommentMutation__
 *
 * To run a mutation, you first call `useAddCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommentMutation, { data, loading, error }] = useAddCommentMutation({
 *   variables: {
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useAddCommentMutation(baseOptions?: Apollo.MutationHookOptions<AddCommentMutation, AddCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCommentMutation, AddCommentMutationVariables>(AddCommentDocument, options);
      }
export type AddCommentMutationHookResult = ReturnType<typeof useAddCommentMutation>;
export type AddCommentMutationResult = Apollo.MutationResult<AddCommentMutation>;
export type AddCommentMutationOptions = Apollo.BaseMutationOptions<AddCommentMutation, AddCommentMutationVariables>;
export const UpdateCommentDocument = gql`
    mutation updateComment($id: Int!, $comment: CommentInput!) {
  updateComment(id: $id, comment: $comment) {
    status
    message
    comment {
      ...CommentObject
    }
  }
}
    ${CommentObjectFragmentDoc}`;
export type UpdateCommentMutationFn = Apollo.MutationFunction<UpdateCommentMutation, UpdateCommentMutationVariables>;

/**
 * __useUpdateCommentMutation__
 *
 * To run a mutation, you first call `useUpdateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCommentMutation, { data, loading, error }] = useUpdateCommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useUpdateCommentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCommentMutation, UpdateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCommentMutation, UpdateCommentMutationVariables>(UpdateCommentDocument, options);
      }
export type UpdateCommentMutationHookResult = ReturnType<typeof useUpdateCommentMutation>;
export type UpdateCommentMutationResult = Apollo.MutationResult<UpdateCommentMutation>;
export type UpdateCommentMutationOptions = Apollo.BaseMutationOptions<UpdateCommentMutation, UpdateCommentMutationVariables>;
export const DeleteCommentDocument = gql`
    mutation deleteComment($id: Int!) {
  deleteComment(id: $id) {
    status
    message
    comment {
      ...CommentObject
    }
  }
}
    ${CommentObjectFragmentDoc}`;
export type DeleteCommentMutationFn = Apollo.MutationFunction<DeleteCommentMutation, DeleteCommentMutationVariables>;

/**
 * __useDeleteCommentMutation__
 *
 * To run a mutation, you first call `useDeleteCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentMutation, { data, loading, error }] = useDeleteCommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCommentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCommentMutation, DeleteCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCommentMutation, DeleteCommentMutationVariables>(DeleteCommentDocument, options);
      }
export type DeleteCommentMutationHookResult = ReturnType<typeof useDeleteCommentMutation>;
export type DeleteCommentMutationResult = Apollo.MutationResult<DeleteCommentMutation>;
export type DeleteCommentMutationOptions = Apollo.BaseMutationOptions<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const BlockCommentDocument = gql`
    mutation blockComment($id: Int!) {
  blockComment(id: $id) {
    status
    message
    comment {
      ...CommentObject
    }
  }
}
    ${CommentObjectFragmentDoc}`;
export type BlockCommentMutationFn = Apollo.MutationFunction<BlockCommentMutation, BlockCommentMutationVariables>;

/**
 * __useBlockCommentMutation__
 *
 * To run a mutation, you first call `useBlockCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBlockCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [blockCommentMutation, { data, loading, error }] = useBlockCommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBlockCommentMutation(baseOptions?: Apollo.MutationHookOptions<BlockCommentMutation, BlockCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BlockCommentMutation, BlockCommentMutationVariables>(BlockCommentDocument, options);
      }
export type BlockCommentMutationHookResult = ReturnType<typeof useBlockCommentMutation>;
export type BlockCommentMutationResult = Apollo.MutationResult<BlockCommentMutation>;
export type BlockCommentMutationOptions = Apollo.BaseMutationOptions<BlockCommentMutation, BlockCommentMutationVariables>;
export const ReportCommentDocument = gql`
    mutation reportComment($id: Int!) {
  reportComment(id: $id) {
    status
    message
    comment {
      ...CommentObject
    }
  }
}
    ${CommentObjectFragmentDoc}`;
export type ReportCommentMutationFn = Apollo.MutationFunction<ReportCommentMutation, ReportCommentMutationVariables>;

/**
 * __useReportCommentMutation__
 *
 * To run a mutation, you first call `useReportCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReportCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reportCommentMutation, { data, loading, error }] = useReportCommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useReportCommentMutation(baseOptions?: Apollo.MutationHookOptions<ReportCommentMutation, ReportCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReportCommentMutation, ReportCommentMutationVariables>(ReportCommentDocument, options);
      }
export type ReportCommentMutationHookResult = ReturnType<typeof useReportCommentMutation>;
export type ReportCommentMutationResult = Apollo.MutationResult<ReportCommentMutation>;
export type ReportCommentMutationOptions = Apollo.BaseMutationOptions<ReportCommentMutation, ReportCommentMutationVariables>;
export const CommentsDocument = gql`
    query comments($stoneID: Int!, $page: Int!, $itemsPage: Int!) {
  comments(stoneID: $stoneID, page: $page, itemsPage: $itemsPage) {
    info {
      ...ResultInfoObject
    }
    status
    message
    comments {
      ...CommentObject
    }
  }
}
    ${ResultInfoObjectFragmentDoc}
${CommentObjectFragmentDoc}`;

/**
 * __useCommentsQuery__
 *
 * To run a query within a React component, call `useCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsQuery({
 *   variables: {
 *      stoneID: // value for 'stoneID'
 *      page: // value for 'page'
 *      itemsPage: // value for 'itemsPage'
 *   },
 * });
 */
export function useCommentsQuery(baseOptions: Apollo.QueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, options);
      }
export function useCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, options);
        }
export type CommentsQueryHookResult = ReturnType<typeof useCommentsQuery>;
export type CommentsLazyQueryHookResult = ReturnType<typeof useCommentsLazyQuery>;
export type CommentsQueryResult = Apollo.QueryResult<CommentsQuery, CommentsQueryVariables>;
export const CommentDocument = gql`
    query comment($id: Int!) {
  comment(id: $id) {
    status
    message
    comment {
      ...CommentObject
    }
  }
}
    ${CommentObjectFragmentDoc}`;

/**
 * __useCommentQuery__
 *
 * To run a query within a React component, call `useCommentQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCommentQuery(baseOptions: Apollo.QueryHookOptions<CommentQuery, CommentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommentQuery, CommentQueryVariables>(CommentDocument, options);
      }
export function useCommentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentQuery, CommentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommentQuery, CommentQueryVariables>(CommentDocument, options);
        }
export type CommentQueryHookResult = ReturnType<typeof useCommentQuery>;
export type CommentLazyQueryHookResult = ReturnType<typeof useCommentLazyQuery>;
export type CommentQueryResult = Apollo.QueryResult<CommentQuery, CommentQueryVariables>;
export const CountCommentsDocument = gql`
    query countComments($stoneID: Int) {
  countComments(stoneID: $stoneID) {
    status
    message
    count
  }
}
    `;

/**
 * __useCountCommentsQuery__
 *
 * To run a query within a React component, call `useCountCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountCommentsQuery({
 *   variables: {
 *      stoneID: // value for 'stoneID'
 *   },
 * });
 */
export function useCountCommentsQuery(baseOptions?: Apollo.QueryHookOptions<CountCommentsQuery, CountCommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountCommentsQuery, CountCommentsQueryVariables>(CountCommentsDocument, options);
      }
export function useCountCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountCommentsQuery, CountCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountCommentsQuery, CountCommentsQueryVariables>(CountCommentsDocument, options);
        }
export type CountCommentsQueryHookResult = ReturnType<typeof useCountCommentsQuery>;
export type CountCommentsLazyQueryHookResult = ReturnType<typeof useCountCommentsLazyQuery>;
export type CountCommentsQueryResult = Apollo.QueryResult<CountCommentsQuery, CountCommentsQueryVariables>;
export const AddLikeDocument = gql`
    mutation addLike($id: Int!) {
  addLike(id: $id) {
    status
    message
    like {
      ...LikeObject
    }
  }
}
    ${LikeObjectFragmentDoc}`;
export type AddLikeMutationFn = Apollo.MutationFunction<AddLikeMutation, AddLikeMutationVariables>;

/**
 * __useAddLikeMutation__
 *
 * To run a mutation, you first call `useAddLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addLikeMutation, { data, loading, error }] = useAddLikeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAddLikeMutation(baseOptions?: Apollo.MutationHookOptions<AddLikeMutation, AddLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddLikeMutation, AddLikeMutationVariables>(AddLikeDocument, options);
      }
export type AddLikeMutationHookResult = ReturnType<typeof useAddLikeMutation>;
export type AddLikeMutationResult = Apollo.MutationResult<AddLikeMutation>;
export type AddLikeMutationOptions = Apollo.BaseMutationOptions<AddLikeMutation, AddLikeMutationVariables>;
export const DeleteLikeDocument = gql`
    mutation deleteLike($id: Int!) {
  deleteLike(id: $id) {
    status
    message
    like {
      ...LikeObject
    }
  }
}
    ${LikeObjectFragmentDoc}`;
export type DeleteLikeMutationFn = Apollo.MutationFunction<DeleteLikeMutation, DeleteLikeMutationVariables>;

/**
 * __useDeleteLikeMutation__
 *
 * To run a mutation, you first call `useDeleteLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLikeMutation, { data, loading, error }] = useDeleteLikeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteLikeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteLikeMutation, DeleteLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteLikeMutation, DeleteLikeMutationVariables>(DeleteLikeDocument, options);
      }
export type DeleteLikeMutationHookResult = ReturnType<typeof useDeleteLikeMutation>;
export type DeleteLikeMutationResult = Apollo.MutationResult<DeleteLikeMutation>;
export type DeleteLikeMutationOptions = Apollo.BaseMutationOptions<DeleteLikeMutation, DeleteLikeMutationVariables>;
export const LikesDocument = gql`
    query likes($stoneID: Int!, $page: Int!, $itemsPage: Int!) {
  likes(stoneID: $stoneID, page: $page, itemsPage: $itemsPage) {
    info {
      ...ResultInfoObject
    }
    status
    message
    likes {
      ...LikeObject
    }
  }
}
    ${ResultInfoObjectFragmentDoc}
${LikeObjectFragmentDoc}`;

/**
 * __useLikesQuery__
 *
 * To run a query within a React component, call `useLikesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLikesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLikesQuery({
 *   variables: {
 *      stoneID: // value for 'stoneID'
 *      page: // value for 'page'
 *      itemsPage: // value for 'itemsPage'
 *   },
 * });
 */
export function useLikesQuery(baseOptions: Apollo.QueryHookOptions<LikesQuery, LikesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LikesQuery, LikesQueryVariables>(LikesDocument, options);
      }
export function useLikesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LikesQuery, LikesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LikesQuery, LikesQueryVariables>(LikesDocument, options);
        }
export type LikesQueryHookResult = ReturnType<typeof useLikesQuery>;
export type LikesLazyQueryHookResult = ReturnType<typeof useLikesLazyQuery>;
export type LikesQueryResult = Apollo.QueryResult<LikesQuery, LikesQueryVariables>;
export const IsLikeDocument = gql`
    query isLike($stoneID: Int!) {
  isLike(stoneID: $stoneID) {
    status
    message
    isLike
  }
}
    `;

/**
 * __useIsLikeQuery__
 *
 * To run a query within a React component, call `useIsLikeQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsLikeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsLikeQuery({
 *   variables: {
 *      stoneID: // value for 'stoneID'
 *   },
 * });
 */
export function useIsLikeQuery(baseOptions: Apollo.QueryHookOptions<IsLikeQuery, IsLikeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsLikeQuery, IsLikeQueryVariables>(IsLikeDocument, options);
      }
export function useIsLikeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsLikeQuery, IsLikeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsLikeQuery, IsLikeQueryVariables>(IsLikeDocument, options);
        }
export type IsLikeQueryHookResult = ReturnType<typeof useIsLikeQuery>;
export type IsLikeLazyQueryHookResult = ReturnType<typeof useIsLikeLazyQuery>;
export type IsLikeQueryResult = Apollo.QueryResult<IsLikeQuery, IsLikeQueryVariables>;
export const CountLikesDocument = gql`
    query countLikes($stoneID: Int!) {
  countLikes(stoneID: $stoneID) {
    status
    message
    count
  }
}
    `;

/**
 * __useCountLikesQuery__
 *
 * To run a query within a React component, call `useCountLikesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountLikesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountLikesQuery({
 *   variables: {
 *      stoneID: // value for 'stoneID'
 *   },
 * });
 */
export function useCountLikesQuery(baseOptions: Apollo.QueryHookOptions<CountLikesQuery, CountLikesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountLikesQuery, CountLikesQueryVariables>(CountLikesDocument, options);
      }
export function useCountLikesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountLikesQuery, CountLikesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountLikesQuery, CountLikesQueryVariables>(CountLikesDocument, options);
        }
export type CountLikesQueryHookResult = ReturnType<typeof useCountLikesQuery>;
export type CountLikesLazyQueryHookResult = ReturnType<typeof useCountLikesLazyQuery>;
export type CountLikesQueryResult = Apollo.QueryResult<CountLikesQuery, CountLikesQueryVariables>;
export const AddStoneDocument = gql`
    mutation addStone($stone: StoneInput!, $include: Boolean!) {
  addStone(stone: $stone) {
    status
    message
    stone {
      ...StoneObject
    }
  }
}
    ${StoneObjectFragmentDoc}`;
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
 *      include: // value for 'include'
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
    mutation updateStone($id: Int!, $stone: StoneInput!, $include: Boolean!) {
  updateStone(id: $id, stone: $stone) {
    status
    message
    stone {
      ...StoneObject
    }
  }
}
    ${StoneObjectFragmentDoc}`;
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
 *      include: // value for 'include'
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
export const StonesDocument = gql`
    query stones($page: Int!, $itemsPage: Int!, $include: Boolean!) {
  stones(page: $page, itemsPage: $itemsPage) {
    info {
      ...ResultInfoObject
    }
    status
    message
    stones {
      ...StoneObject
    }
  }
}
    ${ResultInfoObjectFragmentDoc}
${StoneObjectFragmentDoc}`;

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
 *      include: // value for 'include'
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
    query stone($id: Int!, $include: Boolean!) {
  stone(id: $id) {
    status
    message
    stone {
      ...StoneObject
    }
  }
}
    ${StoneObjectFragmentDoc}`;

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
 *      include: // value for 'include'
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
export const SendMailDocument = gql`
    mutation sendMail($mail: MailInput!) {
  sendEmail(mail: $mail) {
    status
    message
    mail {
      ...MailObject
    }
  }
}
    ${MailObjectFragmentDoc}`;
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
      ...MailObject
    }
  }
}
    ${MailObjectFragmentDoc}`;
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
    mutation signUp($user: UserInput!, $include: Boolean!) {
  signup(user: $user) {
    status
    message
    user {
      ...UserObject
    }
  }
}
    ${UserObjectFragmentDoc}`;
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
 *      include: // value for 'include'
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
    mutation updateUser($user: UserInput!, $include: Boolean!) {
  updateUser(user: $user) {
    status
    message
    user {
      ...UserObject
    }
  }
}
    ${UserObjectFragmentDoc}`;
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
 *      include: // value for 'include'
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
export const UsersDocument = gql`
    query users($page: Int!, $itemsPage: Int!, $include: Boolean!) {
  users(page: $page, itemsPage: $itemsPage) {
    info {
      ...ResultInfoObject
    }
    status
    message
    users {
      ...UserObject
    }
  }
}
    ${ResultInfoObjectFragmentDoc}
${UserObjectFragmentDoc}`;

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
 *      include: // value for 'include'
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
    query Me($include: Boolean!) {
  me {
    status
    message
    user {
      ...UserObject
    }
  }
}
    ${UserObjectFragmentDoc}`;

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
 *      include: // value for 'include'
 *   },
 * });
 */
export function useMeQuery(baseOptions: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
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
    query user($id: Int!, $include: Boolean!) {
  user(id: $id) {
    status
    message
    user {
      ...UserObject
    }
  }
}
    ${UserObjectFragmentDoc}`;

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
 *      include: // value for 'include'
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
export const namedOperations = {
  Query: {
    comments: 'comments',
    comment: 'comment',
    countComments: 'countComments',
    likes: 'likes',
    isLike: 'isLike',
    countLikes: 'countLikes',
    stones: 'stones',
    stone: 'stone',
    users: 'users',
    Me: 'Me',
    user: 'user'
  },
  Mutation: {
    addComment: 'addComment',
    updateComment: 'updateComment',
    deleteComment: 'deleteComment',
    blockComment: 'blockComment',
    reportComment: 'reportComment',
    addLike: 'addLike',
    deleteLike: 'deleteLike',
    addStone: 'addStone',
    updateStone: 'updateStone',
    deleteStone: 'deleteStone',
    blockStone: 'blockStone',
    sendMail: 'sendMail',
    activeUserEmail: 'activeUserEmail',
    resetPasswordEmail: 'resetPasswordEmail',
    signin: 'signin',
    signUp: 'signUp',
    deleteUser: 'deleteUser',
    blockUser: 'blockUser',
    updateUser: 'updateUser',
    activeUserAction: 'activeUserAction',
    resetPasswordAction: 'resetPasswordAction'
  },
  Fragment: {
    CommentObject: 'CommentObject',
    MailObject: 'MailObject',
    ResultInfoObject: 'ResultInfoObject',
    LikeObject: 'LikeObject',
    StoneObject: 'StoneObject',
    UserObject: 'UserObject'
  }
}