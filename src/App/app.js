import React, { Component } from 'react';
import logo from '.logo.svg';
import '.App.css';
import swal from 'sweetalert';
import { DatePicker, DatePickerInput } from 'rc-datepicker';
const date = '2020-11-28'
class App extends Component {
  constructor(){
    
    super();
    this.state={ 
	Temp- need to modify
      employeeList  [
        {
          firstName  Parth,
          lastName   Purohit,
          email  parthpurohit@gmail.com,
          salary  50,000,
          joinDate  04112020

        },
        {
          firstName  Ansh,
          lastName   Purohit,
          email  purohit@gmail.com,
          salary  60,000,
          joinDate  13112020

        },
        {
          firstName  ankit,
          lastName   Purohit,
          email  ankitpurohit@gmail.com,
          salary  80,000,
          joinDate  07112020

        }
      ],
      addEmployee  false,
      editIndex  null,
    }
    this.updateFirstName = this.updateFirstName.bind(this)
    this.updateLastName = this.updateLastName.bind(this)
    this.updateEmail = this.updateEmail.bind(this)
    this.updateSalary = this.updateSalary.bind(this)
    
  }

  Event Functions

  login() {
    const email = document.getElementById(`email`).value;
    const password = document.getElementById('password').value;
    email === admin@gmail.com && password === admin  this.setState({
      user{
        email  email,
        password  password    
      }
        })  swal(Access Deneid, Please Enter Correct Email And Password);
  }

  addEmployee() {
      this.setState({
          
          addEmployee  true,
        })
  }

  cancelAddEmployee(){
    this.setState({
      addEmployee  false,
    })
  }

  addEmployeeData(){
    
    const date = new Date();
    const firstName = document.getElementById(`firstName`).value;
    const lastName = document.getElementById(`lastName`).value;
    const email2 = document.getElementById(`email2`).value;
    const salary = document.getElementById(`salary`).value;
    const joinDate = date.getDate()++(+date.getMonth()+1)++date.getFullYear()
    this.state.employeeList.push(
      {
        firstName  firstName,
        lastName   lastName,
        email  email2,
        salary  salary,
        joinDate  joinDate

      },
    )
      this.setState({
        addEmployee  false,
      })
  }

  logOut(){
    this.setState({
      user  false
    })
    
  }

  deleteEmployee(index){
   const empList = this.state.employeeList;
    empList.splice(index, 1)
   this.setState({
     empList
   })
  }

  editEmployee(index){
    
    this.setState(
      {
        editIndex  index
      }
    )
  }

  canceleditEmployee(){
    this.setState({
      editIndex  null
    })
  }

  updateEmployee(){
    const edI = this.state.editIndex
    this.state.editedFirstName && (this.state.employeeList[edI].firstName = this.state.editedFirstName)
    this.state.editedLastName && (this.state.employeeList[edI].lastName = this.state.editedLastName)
    this.state.editedEmail && (this.state.employeeList[edI].email = this.state.editedEmail)
    this.state.editedSalary && (this.state.employeeList[edI].salary = this.state.editedSalary)
    this.setState({
       employeeList[edI].firstName  this.state.editedFirstName,
      I Tried This But It Throws An Error 
      editIndex  null
    })
  }

  updateFirstName(e){
  this.setState({
    editedFirstName  e.target.value
  }
  )
  }

  updateLastName(e){
    this.setState({
      editedLastName  e.target.value
    })
  }

  updateEmail(e){
    this.setState({
      editedEmail  e.target.value
    })
    }
    
  updateSalary(e){
    this.setState({
      editedSalary  e.target.value
    })
      }

  JSX Rendering Functions

  renderHeader(){
    return(
      header className=App-header
        img src={logo} className=App-logo alt=logo 
        h1 className=App-titleWelcome To Employee Management Systemh1
      header
    )
  }

  renderLogin(){
    return(
    div className=loginForm
      h1 className=loginFormHeaderbLoginbh1
      form
        div className=form-group
          label Email addresslabel
          input type=email className=form-control id=email aria-describedby=emailHelp placeholder=Enter email
        div
        div className=form-group
          label Passwordlabel
          input type=password className=form-control id=password placeholder=Password
        div
        button type=button className=btn btn-primary onClick={()={this.login()}}Loginbutton
      form
    div  
    )
  }

  rendertoDoList(){
    return(
      
        div className=renderTodoList
          h1 className=todoHeaderEmployee Listh1
          div className=employeeList
            table className=table table-striped table-dark
              thead
                tr
                  th scope=col className=centerAll#th
                  th scope=col className=centerAllFirst Nameth
                  th scope=col className=centerAllLast Nameth
                  th scope=col className=centerAllEmailth
                  th scope=col className=centerAllSalaryth
                  th scope=col className=centerAllJoin Dateth
                  th scope=col className=centerAllEditth
                  th scope=col className=centerAllDeleteth
                tr
              thead
              tbody
              {this.state.employeeList.map((value, index)={
                    return(
                      this.state.editIndex !== index  tr
                            th scope=row id={index+1}{index+1}th
                            td className=centerAll id={index+2}{value.firstName}td
                            td className=centerAll id={index+3}{value.lastName}td
                            td className=centerAll id={index+4}{value.email}td
                            td className=centerAll id={index+5}Rs.{value.salary}=td
                            td className=centerAll id={index+6}{value.joinDate}td
                            td className=centerAll id={index+7}button onClick={()={
                              this.editEmployee(index)
                            }} className=btn btn-primaryEditbuttontd
                            td className=centerAll id={index+8}button onClick={()={
                              this.deleteEmployee(index)
                            }} className=btn btn-dangerDeletebuttontd
                          tr
                           tr
                          th scope=row id={index+1}{index+1}th
                          td className=centerAll id={index+2+'edit'}input type=text defaultValue={value.firstName} onChange={this.updateFirstName}td
                          td className=centerAll id={index+3+'edit'}input type=text defaultValue={value.lastName} onChange={this.updateLastName}td
                          td className=centerAll id={index+4+'edit'}input type=text defaultValue={value.email} onChange={this.updateEmail} td
                          td className=centerAll id={index+5+'edit'}input type=text defaultValue={value.salary} onChange={this.updateSalary}td
                          td className=centerAll id={index+6+'edit'}input type=text defaultValue={value.joinDate}td
                          td className=centerAll id={index+7+'edit'}button onClick={()={
                            this.canceleditEmployee()
                          }} className=btn btn-primaryCancelbuttontd
                          td className=centerAll id={index+8}button onClick={()={
                            this.updateEmployee(index)
                          }} className=btn btn-infoUpdatebuttontd
                        tr
                    )
                  })}
              tbody
            table
          div
          a class=btn-floating btn-large waves-effect waves-light green onClick={()={
            this.addEmployee()
          }}i class=material-icons+ia
        div
    )
    
  }

  renderAddEmployee() {
    return(
      
      div className=loginForm
        h1 className=todoHeaderAdd Employeeh1
        form className=addEmployeeForm
        div className=form-group
          label Namelabel
          input type=text className=form-control id=Name aria-describedby=emailHelp placeholder=Enter Name
        div
        div className=form-group
          label Employee Codelabel
          input type=text className=form-control id=EmpCode aria-describedby=emailHelp placeholder=Employee Code
        div
        div className=form-group
          label Email addresslabel
          input type=email className=form-control id=email2 aria-describedby=emailHelp placeholder=Enter email
        div
        div className=form-group
          label DOBlabel
          input type=text className=form-control id=DOB aria-describedby=emailHelp placeholder=DOB
          
          DatePicker 
        div
        div className=form-group
          label DOBlabel
          input type=text className=form-control id=DOJ aria-describedby=emailHelp placeholder=DOJ
        div
        div className=form-group
          label Salarylabel
          input type=text className=form-control id=salary aria-describedby=emailHelp placeholder=Enter Salary
        div




        a class=btn-floating btn-large waves-effect waves-light blue   onClick={()={
        this.addEmployeeData()
        }}i class=material-icons+ia
        form
        button className=btn btn-danger addEmployeeForm onClick={()={
        this.cancelAddEmployee()
        }}Cancelbutton
      div
    )
  }

  renderLogOut(){
    return(
      div className=logOut
        button className=btn btn-warning onClick={()={
          this.logOut();
        }}Log Outbutton
      div
    )
  }

  render() {
    return (
      
      div className=App
      {this.renderHeader()}
      {!this.state.user && this.renderLogin()}
      {this.state.user && !this.state.addEmployee && this.rendertoDoList()}
      {this.state.addEmployee && this.renderAddEmployee()}
      {this.state.user && !this.state.addEmployee && this.renderLogOut()}
      

      div
    );
  }
}

export default App;
