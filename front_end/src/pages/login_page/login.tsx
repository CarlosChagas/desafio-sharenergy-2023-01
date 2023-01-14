import React from "react"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import './styles.css'
const Login = () => {
    return (
        <div id="login">

            <Form>
                <h1>Sharenergy Challenge</h1>
                
                <FormGroup>
                    <Input id="usernameinput" placeholder="Username" type="text"></Input>
                </FormGroup>
                <FormGroup>
                    <Input id="passwordinput" placeholder="Password" type="password"></Input>
                </FormGroup>
                <Button color="primary" block>Login</Button>
                <div id="switchremember">
                    <FormGroup switch disabled>
                        <Label for="switchinput">Remember-me</Label>
                        <Input id="switchinput" disabled type="switch"></Input>
                    </FormGroup>
                </div>
            </Form>



        </div>
    )



}
export default Login