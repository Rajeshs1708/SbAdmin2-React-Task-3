import React from "react";
import Cards from "./Cards";
import Charts from "./Charts";
import ProjectCardIllustration from "./ProjectCard_Illustration"


function Dashboard() {
    const products = [
        {
            class1: "card border-left-primary shadow h-100 py-2  px-3",
            class2:"text-xs font-weight-bold text-primary text-uppercase mb-1",
            earnings: "Earnings (Monthly)",
            price:"$40,000",
            icon:"fas fa-calendar fa-2x text-gray-300",
            progressbar: "false"

        }, {
            class1: "card border-left-success shadow h-100 py-2 px-3",
            class2:"text-xs font-weight-bold text-success text-uppercase mb-1",
            earnings: 'Earnings (Annual)',
            price:"$215,000",
            icon:"fas fa-dollar-sign fa-2x text-gray-300",
            progressbar: "false"

        }, {
            class1: "card border-left-info shadow h-100 py-2 px-3",
            class2:"text-xs font-weight-bold text-info text-uppercase mb-1",
            earnings: 'Tasks',
            price:"50%",
            icon:"fas fa-clipboard-list fa-2x text-gray-300",
            progressbar: "true"


        }, {
            class1: "card border-left-warning shadow h-100 py-2 px-3",
            class2:"text-xs font-weight-bold text-warning text-uppercase mb-1",
            earnings: 'Pending Requests',
            price:"18",
            icon:"fas fa-comments fa-2x text-gray-300",
            progressbar: "false"


        }
    ];
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>

            <div className="row">
                {
                    products.map((product) => {
                        return <Cards productData={product}></Cards>
                    })
                }
            </div>

            <div className="row">
                <Charts />
            </div>

            <div className="row">
                <ProjectCardIllustration />
            </div>
        </>
    )
}
export default Dashboard