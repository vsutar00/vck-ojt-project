import React from "react";
import Header from "../Component/Header/Header"
import './CoursesPage.css'
import "../Component/Header/Header.css";
const CoursesPage = () => {
    return (
        <>
            <div><Header /></div>
            <div className="other">
                <section className="head">
                    <h1>Our Academic Programs</h1>
                    <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
                </section>
                <section className="video">
                    <video>
                        <source src="\videos\college-tour-FAmcnyfF.mp4" controls></source>
                    </video>
                </section>
                <section className="c-text">
                    <h2>Undergraduate Programs (UG)</h2>
                    <ul>
                        <li>*Bachelor of Science (B.Sc.)*
                            <ul>
                                <li>Computer Science (3 years)</li>
                                <li>Information Technology (3 years)</li>
                                <li>Biotechnology (3 years)</li>
                            </ul>
                        </li>
                        <li>*Bachelor of Commerce (B.Com)*
                            <ul>
                                <li>Accounting & Finance (3 years)</li>
                                <li>Banking & Insurance (3 years)</li>
                            </ul>
                        </li>
                        <li>*Bachelor of Arts (B.A.)*
                            <ul>
                                <li>English Literature (3 years)</li>
                                <li>Psychology (3 years)</li>
                            </ul>
                        </li>
                    </ul> <ul>
                        <li>*Bachelor of Science (B.Sc.)*
                            <ul>
                                <li>Computer Science (3 years)</li>
                                <li>Information Technology (3 years)</li>
                                <li>Biotechnology (3 years)</li>
                            </ul>
                        </li>
                        <li>*Bachelor of Commerce (B.Com)*
                            <ul>
                                <li>Accounting & Finance (3 years)</li>
                                <li>Banking & Insurance (3 years)</li>
                            </ul>
                        </li>
                        <li>*Bachelor of Arts (B.A.)*
                            <ul>
                                <li>English Literature (3 years)</li>
                                <li>Psychology (3 years)</li>
                            </ul>
                        </li>
                    </ul>
                </section>
                <section className="c-text2">
                    <h2>Postgraduate Programs (PG)</h2>
                    <ul>
                        <li>*Master of Science (M.Sc.)*
                            <ul>
                                <li>Computer Science (2 years)</li>
                                <li>Information Technology (2 years)</li>
                            </ul>
                        </li>
                        <li>*Master of Commerce (M.Com)* (2 years)</li>
                        <li>*Master of Arts (M.A.)* (2 years)</li>
                    </ul>
                </section>
                <section className="table">
                    <thead>
                        <tr>
                            <th>Program Type</th>
                            <th>Course Name</th>
                            <th>Duration</th>
                            <th>Annual Fee (INR)</th>
                            <th>Eligibility</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>UG</td>
                            <td>B.Sc. Computer Science</td>
                            <td>3 Years</td>
                            <td>₹ 85,000</td>
                            <td>10+2 with PCM (50%)</td>
                        </tr>
                        <tr>
                            <td>UG</td>
                            <td>B.Com. Accounting & Finance</td>
                            <td>3 Years</td>
                            <td>₹ 70,000</td>
                            <td>10+2 Commerce (45%)</td>
                        </tr>
                        <tr>
                            <td>PG</td>
                            <td>M.Sc. Information Technology</td>
                            <td>2 Years</td>
                            <td>₹ 95,000</td>
                            <td>B.Sc. IT/CS (50%)</td>
                        </tr>
                    </tbody>
                </section>
                <section className="c-text3">
                    <h2>Specialized & Vocational Courses</h2>
                    <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital  Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement</p>
                </section>
                <section className="c-bottom">
                    <h4>Explore detailed syllabi and admission criteria on our Admissions page.</h4>
                    <button>Inquire About Courses</button>
                </section>
            </div>
        </>
    )
}
export default CoursesPage;