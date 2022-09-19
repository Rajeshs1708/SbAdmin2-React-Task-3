import React from "react";


function Cards(props) {
    return (
        <>
             <div className="col-xl-3 col-md-6 mb-4 ">
                            <div className={props.productData.class1}>
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className={props.productData.class2}>{props.productData.earnings}
                                            </div>
                                            <div className="row no-gutters align-items-center">
                                                <div className="col-auto">
                                                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800 p-2">{props.productData.price}</div>
                                                </div>
                                                {props.productData.progressbar=="true"? <div className="col">
                                                    <div className="progress progress-sm mr-2">
                                                        <div className="progress-bar bg-info" role="progressbar"
                                                            style={{width : "50%"}} aria-valuenow="50" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </div>:<div></div>}
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <i className={props.productData.icon}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

        </>
    )
}
export default Cards;