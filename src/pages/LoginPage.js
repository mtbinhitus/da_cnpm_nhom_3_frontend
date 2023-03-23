import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import {GoogleLogin} from 'react-google-login';
import React from "react";
import { gapi } from 'gapi-script';
import { useNavigate } from "react-router-dom";


function LoginPage() {
    const clientId = '768128998994-6ltvdfgdgotov36pbbmqmv4apvjfsor5.apps.googleusercontent.com';
    const navigate = useNavigate();    
    const onSuccess = (res) =>{
        localStorage.setItem("currentUser", JSON.stringify(res.profileObj));
        navigate("/")
    };

    const onFailure= (res) =>{
    console.log('[Login Failed] res: ', res);
    };
    useEffect(()=>{
        gapi.load("client:auth2",()=>{ 
          gapi.auth2.init({clientId:clientId})
        })
    
      },[])
    

    return (
        <>
            <Grid style={{ justifyContent: "center" }} container>
                <Grid item xs={5}>
                    <div style={{ width: "100" }}>
                    <Card style={{ padding: "16px" }}>
                        <h2 style={{ fontSize: "1rem", marginBottom: "16px", fontWeight: "500", textAlign: "left" }}>
                                Đăng nhập ngay để bắt đầu trải nghiệm học tiếng Anh và luyện thi TOEIC/IELTS hiệu quả cùng hàng trăm ngàn học viên mỗi ngày.
                        </h2>
                        <div className="col-12" style={{ justifyContent: "center", marginTop:"20px"}}>
                            <h2 style={{ fontSize: "1rem", marginBottom: "5px",marginTop: "5px", fontWeight: "500", textAlign: "center", color: "red"}} onClick={()=>{}}>
                                <GoogleLogin
                                    variant="outlined"
                                    color="error"
                                    clientId={clientId}
                                    onSuccess={onSuccess}
                                    onFailure={onFailure}
                                    cookiePolicy={'single_host_origin'}
                                >
                                </GoogleLogin>
                            </h2>
                        </div>

                        <div className="col-12" style={{ justifyContent: "center", marginTop:"40px"}}>
                           <Card style={{ justifyContent: "center"}}>
                                <h2 style={{ fontSize: "1rem", marginBottom: "5px",marginTop: "5px", fontWeight: "500", textAlign: "center", color: "blue"}} onClick={()=>{}}>
                                    <Button><h2 style={{ fontSize: "0.8rem", fontWeight: "500", color: "blue"}}>Đăng nhập với Facebook</h2></Button>
                                </h2>
                            </Card>
                        </div>

                    </Card>
                
                    </div>
                </Grid>
            </Grid>
        </>
    );
}

export default LoginPage;
