import React from 'react';
import './createKids.scss';

const CreateKids = () => {
    return (
        <section id="createKids">
            <div className="container">
                <div className="createKids">
                    <img
                        src="https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
                        alt="img"/>
                    <div className="createKids--text">
                        <h1>Create profiles for <br/> kids.</h1>
                        <p>Send kids on adventures with their favorite <br/>
                            characters in a space made just for them—free <br/>
                            with your membership.
                        </p>
                    </div>
                </div>
            </div>
            <div style={{
                // marginTop: "1%",
                height: '0.5rem',
                backgroundColor: 'rgb(35,35,35)'
            }}></div>

        </section>
    );
};

export default CreateKids;