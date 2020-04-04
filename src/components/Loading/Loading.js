import React from 'react';
import { connect } from 'react-redux'
import ReactLoading from 'react-loading';
import './Loading.scss';

const Loading = () => (
    <div className={"Loading__container"}>
        <ReactLoading type={"spin"} />
    </div>
);

export default Loading;