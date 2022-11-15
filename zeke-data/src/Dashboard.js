import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Pagination } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";

export default function Dashboard() {
  const [isData, setIsData] = useState(true);
  const [isQuery, setIsQuery] = useState(false);
  const [isTransform, setIsTransform] = useState(false);
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated &&
      <div className="dash_main_container">
          <div className="dash_nav_container">
            <Button size="large" variant="contained" onClick={() => {setIsData(true); setIsQuery(false); setIsTransform(false)}}>Data</Button>
            <Button size="large" variant="contained" onClick={() => {setIsQuery(true); setIsData(false); setIsTransform(false)}}>Query</Button>
            <Button size="large"variant="contained" onClick={() => {setIsTransform(true); setIsData(false); setIsQuery(false)}}>Transform</Button>
          </div>
          <div className="dash_main_content">
            {isData &&
            <div className="data_container">
              <div className="data_list_container">
                <ol>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ol>
              </div>
              <div className="data_btn_container">
                <Button size="large"variant="contained" sx={{marginRight: "4rem"}}>Create</Button>
                <Button size="large"variant="contained" sx={{marginRight: "4rem"}}>Delete</Button>
                <Button size="large"variant="contained" sx={{marginRight: "4rem"}}>Copy</Button>
              </div>
              <div className="pagination_container">
                <Pagination count={2} size="large" />
              </div>
              <div className="dynamic_data">
                <h6>Dynamic Data</h6>
              </div>
            </div>
            }
            {isQuery && 
              <>
                <h1>Data</h1>
              </>
            }
            {isTransform && 
              <>
                <h1>Transform</h1>
              </>
            }
          </div>
      </div>
  )
}
