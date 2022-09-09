import React from "react";
import { accountRecordsInterface } from "./accountReducerInterface";
import { filterInterface } from "./filterInterface";

export interface accountListPropInterface {
  acc: string;
  setAcc: React.Dispatch<React.SetStateAction<string>>;
}

export interface filterPropInterface {
  filters: filterInterface;
  setFilters: React.Dispatch<React.SetStateAction<filterInterface>>;
}

export interface recordsListPropInterface {
  filteredRec: accountRecordsInterface[];
}
// To define props

export interface categoryPropInterface {
  cat?: string;
  setCat?: React.Dispatch<React.SetStateAction<string>>;
}
