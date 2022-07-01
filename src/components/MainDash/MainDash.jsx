import React from "react";
import { Cards } from "../Cards/Cards";
import BasicTable, { Table } from "../Table/Table";
import "./MainDash.css"

export function MainDash() {
    return(
        <div className="MainDash">
            <h1>Dashboard</h1>
            <Cards/>
            <BasicTable/>
        </div>
    )
}