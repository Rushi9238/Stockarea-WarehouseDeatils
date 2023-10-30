import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { MdAccountCircle } from 'react-icons/md'
import Modal from 'react-bootstrap/Modal';
import { editDataAction } from '../Store/dataSlice';

const HouseDetails = () => {
  const dispatch=useDispatch()
  const { wearhouse } = useSelector((select) => select.dataSlice)
  const [editModal, setEditModal] = useState(false)
    const {id}=useParams()
    // console.log(id);
    const houseDetails=wearhouse.filter((item)=>{
      return item.id==id
    })
    const [SingleHouse,setSingleHouseDetails]=useState(houseDetails[0])
    
    const handelSubmitDetails=()=>{
      if(SingleHouse.name!=='' && SingleHouse.city!=='' && SingleHouse.cluster!=='' && SingleHouse.space_available!==''){
        console.log(SingleHouse);
        console.log('hello')
      }
      else{
        console.log('bye')
      }
    }
  return (
    <>
    <div className="detailsDiv">
      <div className="container-fluid">
      <div className="top d-flex justify-content-between">
              <div className="logo">
                Wearhouse Details
              </div>
              <div className="adminSide">
                <MdAccountCircle className='userIcons' />
                <p>Admin User</p>
              </div>
            </div>
            
              <div className="col-lg-5 mx-auto">
                <div className="details">
                  <div className="title">
                    Warehouse Name: {houseDetails[0].name}
                  </div>
                  
                    <div className="city commonClass">
                     City: {houseDetails[0].city}
                    </div>
                   <div className="l-details commonClass">
                   <div className="spece">
                    Space Available :{houseDetails[0].space_available}
                    </div>
                    <div className="clustor">
                    Cluster: {houseDetails[0].cluster}
                    </div>
                   </div>
                    <div className="type commonClass">
                    Warehouse Type: {houseDetails[0].type}
                    </div>
                  
                  <div className="houseResitor commonClass">
                  Warehouse Live: <input type="radio" name='live-type' value='yes' checked={houseDetails[0].is_live? 'checked':''} /> <label>Yes</label>  <input type="radio" name='live-type' value='no' checked={houseDetails[0].is_live? '':'checked'} /> <label>No</label> 
                  </div>
                  <div className="editButton">
                    <button onClick={()=>{
                      setEditModal(true)
                    }}>Edit</button>
                  </div>
              </div>
            </div>
      </div>
    </div>
    <Modal
            show={editModal}
            size="md"
            onHide={() => setEditModal(false)}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
              <div className="editDetails">
                <div className="edit-head">
                  Edit Warehouse Details
                </div>
                <div className="inputBoxWrapper">
                    <div className="inputBox">
                      <label>Warehouse Name :</label> <input type="text" className='inputText' value={SingleHouse && SingleHouse.name}
                      onChange={(e)=>setSingleHouseDetails({...SingleHouse,name:e.target.value})}
                      />
                    </div>
                    <div className="inputBox">
                      <label>City :</label><input type="text" className='inputText' value={SingleHouse && SingleHouse.city} 
                      onChange={(e)=>setSingleHouseDetails({...SingleHouse,city:e.target.value})}
                      />
                    </div>
                    <div className="inputBox">
                      <label>Cluster :</label> <input type="text" className='inputText' value={SingleHouse && SingleHouse.cluster}
                      onChange={(e)=>setSingleHouseDetails({...SingleHouse,cluster:e.target.value})}
                      />
                    </div>
                    <div className="inputBox">
                      <label>Space Available :</label> <input type="text" className='inputText' value={SingleHouse && SingleHouse.space_available}
                      onChange={(e)=>setSingleHouseDetails({...SingleHouse,space_available:e.target.value})}
                      />
                    </div>
                    <div className="inputBox">
                 <span> Warehouse Live:</span> <div className='radioDiv'><input type="radio" name='live_type' value='true' checked={SingleHouse.is_live?'checked':''}
                 onChange={(e)=>setSingleHouseDetails({...SingleHouse,is_live:e.target.value})}
                 /> <label>Yes</label>  <input type="radio" name='live_type' value='false' checked={SingleHouse.is_live?'':'checked'}
                 onChange={(e)=>setSingleHouseDetails({...SingleHouse,is_live:e.target.value})}
                 /> <label>No</label></div> 

                    </div>
                </div>
                <div className="submitBtn">
                  <button onClick={handelSubmitDetails}>Submit</button>
                </div>
              </div>
            </Modal.Body>

        </Modal>
    </>
  )
}

export default HouseDetails