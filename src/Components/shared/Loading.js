import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loading() {
    return (
        <div className="loadercenter">
            <CircularProgress size="60" color="secondary" disableShrink />
        </div>
    );
}