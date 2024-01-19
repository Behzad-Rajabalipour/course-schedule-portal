import React, { useState, useEffect } from 'react';
import style from "../../styles/style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useGetCoursesQuery } from "../../redux/services/coursesApi";
import { useGetStudentsQuery } from "../../redux/services/studentsApi";
import { useGetProfessorsQuery } from "../../redux/services/professorsApi";
import { useGetSelectUnitsQuery, useAddSelectUnitMutation, useRemoveSelectUnitMutation } from "../../redux/services/selectunitsApi";
import { select, unselect, getselect } from "../../redux/selectUnitCounterSlice";

const UnitsSelection = () => {
    // Fetching data from API using Redux Toolkit queries
    const { data: students } = useGetStudentsQuery();
    const { data: courses, isLoading } = useGetCoursesQuery();
    const { data: selectedUnits } = useGetSelectUnitsQuery();
    const { data : professors } = useGetProfessorsQuery();
    
    // Initializing mutation functions for adding and removing selected units
    const [addSelectUnit] = useAddSelectUnitMutation();
    const [removeSelectUnit] = useRemoveSelectUnitMutation();

    // Local state for managing student selection and displaying messages
    const [studentId, setStudentId] = useState(0);
    const [message, setMessage] = useState('');

    // Redux state management for selected units and count
    const { selectedList, count } = useSelector((state) => state.selectunit);
    const dispatch = useDispatch();

    // Function to add a course to the selected units
    const AddCourseToSelectedUnits = (course) => {
        if (studentId) {
            if (selectedList.filter(item => item.courseId === course.id).length === 0) {
                if (count + Number(course.numberOfUnits) <= 10) {
                    const selectedItem = {
                        "studentId": studentId,
                        "courseId": course.id,
                        "courseName": course.name,
                        "numberOfUnits": course.numberOfUnits,
                        "professorId": course.professorId
                    };
                    addSelectUnit(selectedItem);
                    dispatch(select({ selectedItem }));
                    setMessage("");
                } else {
                    setMessage("Course units exceed 10");
                }
            } else {
                setMessage("This course was already chosen");
            }
        } else {
            setMessage("You must choose a student first");
        }
    };

    // Function to remove a selected unit
    const removeSelectedUnit = (courseId) => {
        setMessage("");
        var result = selectedList.find(obj => obj.courseId === courseId);
        removeSelectUnit(result.id);
        const selectedItem = { "courseId": courseId };
        dispatch(unselect({ selectedItem }));
    };

    // Effect to update selected units and count when studentId or selectedUnits change
    useEffect(() => {
        setMessage("");
        if (studentId) {
            const list = selectedUnits.filter(item => item.studentId === studentId);
            let count = 0;
            if (list.length > 0) {
                count = list.map(item => Number(item.numberOfUnits)).reduce((sum, current) => sum + current);
            }
            dispatch(getselect({ list, count }));
        }
    }, [studentId, selectedUnits]);

    return (
        <div>
            <div>
                <h2>Student Name: </h2>
                {/* Dropdown for selecting a student */}
                <select value={studentId} onChange={(e) => setStudentId(e.target.value)}>
                    <option value="">Choose</option>
                    {
                        students?.length &&
                        students.map((student) => (<option value={student.id} key={student.id}>{student.name} {student.family}</option>))
                    }
                </select>
                {/* Displaying messages */}
                <div className={style["msg1"]}>{message}</div>
            </div>
            <div className={style['box2']}>
                {/* Displaying the list of available courses */}
                <div className={style["right-box"]}>
                    <h3 className={style["title3"]}>List of courses</h3>
                    <table border={1} className={style["table"]}>
                        <thead>
                            <tr>
                                <th>Course Id</th>
                                <th>Course Name</th>
                                <th>Course Units</th>
                                <th>Professor Name</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!isLoading && courses?.length &&
                                courses.map((course) => (
                                    <tr key={course.id}>
                                        <td>{course.id}</td>
                                        <td>{course.name}</td>
                                        <td>{course.numberOfUnits}</td>
                                        <td>{
                                                professors && professors.map((professor) => {
                                                    if (professor.id === course.professorId) {
                                                        // Display professor's full name if the professor is associated with the course
                                                        return `${professor.name} ${professor.family}`;
                                                    }
                                                    return null;    // Return null for professors without a match
                                                })
                                            }
                                        </td>
                                        <td>
                                            {/* Button to add a course to selected units */}
                                            <button className={`${style["btn"]} ${style["btn-success"]}`} onClick={() => AddCourseToSelectedUnits(course)}>Add</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                {/* Displaying the list of added courses and selected units count */}
                <div className={style["left-box"]}>
                    {
                        selectedList.length > 0 &&
                        <>
                            <h3 className={style["title3"]}>List of added courses</h3>
                            <div>
                                <table border={1} className={style['table']}>
                                    <thead>
                                        <tr>
                                            <th>Student Id</th>
                                            <th>Course Id</th>
                                            <th>Course Name</th>
                                            <th>Number of Units</th>
                                            <th>Professor Id</th>
                                            <th>#</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            selectedList.map((item) => (
                                                <tr key={item.id}>
                                                    <td>{item.studentId}</td>
                                                    <td>{item.courseId}</td>
                                                    <td>{item.courseName}</td>
                                                    <td>{item.numberOfUnits}</td>
                                                    <td>{item.professorId}</td>
                                                    <td>
                                                        {/* Button to remove a selected unit */}
                                                        <button className={`${style["btn"]} ${style["btn-danger"]}`} onClick={() => removeSelectedUnit(item.courseId)}>Delete</button>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* Displaying the count of selected units */}
                            <h4 className={style["title4"]}>Selected Units: <span>{count}</span></h4>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}

export default UnitsSelection;
