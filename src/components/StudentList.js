import React, { Component } from 'react'

class StudentList extends Component {

  

  render() {
    return (
      <div className=" StudentList">
        <div className="header">
          <form>
            <input placeholder="students...." />
            <button type="submit"> Add Student </button>
          </form>
        </div>
      </div>
    )
  }
}
export default StudentList;