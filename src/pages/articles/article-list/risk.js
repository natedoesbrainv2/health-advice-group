import React from 'react';

function RisksPage() {
    return (
        <>
            <div id='article-container'>
                <h1>
                    Risks Assessment
                </h1>
                <p>
                    Use the checklists below to ensure that your home is risk free. For further knowledge on how these can affect you look at our articles.
                </p>
                <form id='risk-assessment-form'>
                    <input type="checkbox"/>
                    <label >No signs of vermin/unwanted animals (look for faeces)</label><br/>
                    <input type="checkbox"/>
                    <label > Home is in state of good repair</label><br/>
                    <input type="checkbox"/>
                    <label> There is no rubbish/cluuter which could pose a safety risk</label><br/>
                    <input type="checkbox"/>
                    <label > Good ventilation throughout the home</label><br/>
                    <input type="checkbox"/>
                    <label > smoke alarms/carbon monoxide alarms are in working order</label><br/>
                    <input type="checkbox"/>
                    <label > There are no unpleasant odours</label><br/>
                    <input type="checkbox"/>
                    <label > There are no signs of mould</label><br/>
                    <input type="checkbox"/>
                    <label > Furnishings and beds are clean and in a good state</label><br/>
                    <input type="checkbox"/>
                    <label > There are no minor/major infestations of insects</label><br/>
                    <input type="checkbox"/>
                    <label > Wood in the home is free of woodworm</label><br/>
                    <input type="checkbox"/>
                    <label > There are at least 2 real plants throughout the house</label><br/>
                </form>
            </div>
        </>
    )
}


export default RisksPage;