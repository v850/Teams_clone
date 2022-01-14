import React from 'react';
import Header from '../common/header';
import Sidebar from '../common/sidebar';
import LeftFold from './left-fold';
import './calls.css';

function Calls(props) {
    return ( <
        div className = 'calls-cotainer' >
        <
        Header / >
        <
        div className = 'calls-body' >
        <
        div className = 'calls-sidebar' >
        <
        Sidebar / >
        <
        /div> <
        div className = 'calls-leftfold' >
        <
        LeftFold / >
        <
        /div> <
        div className = 'calls-rightfold' >
        <
        RightFold / >
        <
        /div> < /
        div >

        <
        /div>);
    }

    export default Calls;