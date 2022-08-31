import React from "react";

export interface userStateInterface {
  _id?: string;
  defaultCurrency?: string;
  email?: string;
  friends?: object[];
  friendRequests?: object[];
}

export interface userActionInterface {
  type: string;
  payload?: userStateInterface;
}

export interface userContextInterface {
  userState?: userStateInterface;
  userDispatch?: React.Dispatch<userActionInterface>;
}
