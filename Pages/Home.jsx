import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { MdAccountCircle } from 'react-icons/md'
import { BiSearch } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import {FaWarehouse} from 'react-icons/fa'
import {ImLocation2} from 'react-icons/im'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
const Home = () => {
  const { wearhouse } = useSelector((select) => select.dataSlice)
  const navigate = useNavigate()
  console.log(wearhouse);
  const [filterWearHouse, setFilterWearHouse] = useState(wearhouse)


  const handelSearchFilter = (e) => {
    const { name, value } = e.target;

    if (value !== '') {
      const filterData = wearhouse.filter((ele) => {
        return ele.name.toLowerCase().includes(value.toLowerCase());
      })
      // console.log(filterData);
      setFilterWearHouse(filterData)
    }
    else {
      setFilterWearHouse(wearhouse)
    }

  }

  const handelChangeCity = (e) => {
    const cityName = e.target.value
    if (cityName !== '') {
      const filterData = wearhouse.filter((ele) => {
        return ele.city == cityName
      })
      setFilterWearHouse(filterData)
      console.log(filterData);

    }
    else {
      setFilterWearHouse(wearhouse)
    }
  }

  const handelChangeCluster = (e) => {
    const clusterName = e.target.value
    if (clusterName !== ' ') {
      const filterData = wearhouse.filter((ele) => {
        return ele.cluster == clusterName
      })
      setFilterWearHouse(filterData)
      // console.log(filterData);

    }
    else {
      setFilterWearHouse(wearhouse)
    }
  }
  return (
    <>
      <div className="mainDiv">
        <div className="container-fluid">
          <div className="header sticky-top ">
            <div className="top d-flex justify-content-between">
              <div className="logo">
                Wearhouse
              </div>
              <div className="adminSide">
                <MdAccountCircle className='userIcons' />
                <p>Admin User</p>
              </div>
            </div>
            <div className="filterDiv d-flex justify-content-between">
              <div className="inputbox">
                <input type="text" placeholder='Search Wearhouse Name....' onChange={handelSearchFilter} />
                <button>
                  <BiSearch />
                </button>
              </div>
              <div className="selctetBox">
                <div className="cityBox">
                  <select name="" id="" onChange={handelChangeCity}>
                    <option value=" ">City Name</option>
                    {
                      Array.from(new Set(wearhouse.map(item => item.city))).map((city, index) => {
                        return <option key={index} value={city}>{city}</option>
                      })
                    }
                  </select>
                </div>
                <div className="clusterBox">
                  <select name="" id="" onChange={handelChangeCluster}>
                    <option value="">Cluster</option>
                    {
                      Array.from(new Set(wearhouse.map(item => item.cluster))).map((cluster, index) => {
                        return <option key={index} value={cluster}>{cluster}</option>
                      })
                    }

                  </select>
                </div>

              </div>
            </div>

          </div>
          <div className="wearhouseList">
            {/* <table>
              <thead className=''>
                <tr>
                  <th>
                    Wearhouse Name
                  </th>
                  <th>City</th>
                  <th>Space Available</th>
                  <th>Cluster</th>
                </tr>
              </thead>
              <tbody>
                {
                  filterWearHouse.map((item,index) => {
                    return <tr key={index} onClick={()=>navigate(`/warehouse/${item.id}`)}>
                      <td>{item.name}</td>
                      <td>{item.city}</td>
                      <td>{item.space_available}</td>
                      <td>{item.cluster}</td>
                    </tr>
                  })
                }

               
              </tbody>

            </table> */}
            <div className="container">
              <div className="row gy-4">
              {
                filterWearHouse.map((item,index)=>{
                  return <div className="col-lg-3" key={index}>
                  <div className="listCard">
                    <div className="img-div">
                      <img src={item.img} alt="" />
                    </div>

                    <div className="textDiv">
                      <h3> <FaWarehouse />{item.name}</h3>
                      <p><ImLocation2/> {item.city}</p>
                    </div>
                    <div className="textShowOverlay">
                    <h4>{item.name}</h4>
                    <p>City:{item.city}</p>
                      <p>Cluster: {item.cluster}</p>
                      <p>Space Avability :{item.space_available}</p>
                      <button onClick={()=>navigate(`/warehouse/${item.id}`)}>Details</button>
                    </div>
                  </div>
                </div>
                })
              }
                
              </div>
            </div>
          </div>
        </div>
        <div className="custom_fieldBtn">
          <button>Add field</button>
        </div>
      </div>
    </>
  )
}

export default Home