import React from "react";

var eduQualification = () => {
    return (
        <div>
            <header>
                <h1>Educational Qualification</h1>
            </header>
            <section>
                <table className="eduqualification table table-responsive">
                    <tbody>
                        <tr>
                            <th>
                                Institution name
                            </th>
                            <th>
                                Degree level
                            </th>
                            <th>
                                Percentage/CGPA
                            </th>
                            <th>
                                Year of passing 
                            </th>
                        </tr>
                        <tr>
                            <td>
                                L.C.Shivrampant damale Prashala, Pune
                            </td>
                            <td>
                                SSC
                            </td>
                            <td>
                                94
                            </td>
                            <td>
                                2009
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Government Polytechnic, Pune 
                            </td>
                            <td>
                                Diploma
                            </td>
                            <td>
                                91.06
                            </td>
                            <td>
                                2012
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Vishwakarma Institute of Technology,Pune 
                            </td>
                            <td>
                                B.Tech
                            </td>
                            <td>
                            8.82
                            </td>
                            <td>
                                2015
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default eduQualification;