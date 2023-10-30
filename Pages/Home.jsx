import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { MdAccountCircle } from 'react-icons/md'
import { BiSearch } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const { wearhouse } = useSelector((select) => select.dataSlice)
  const navigate=useNavigate()
  // console.log(wearhouse);
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

  const handelChangeCity=(e)=>{
    const cityName=e.target.value
    if(cityName !== ' '){
      const filterData=filterWearHouse.filter((ele)=>{
        return ele.city== cityName
      })
      setFilterWearHouse(filterData)
      console.log(filterData);

    }
    else{
      setFilterWearHouse(wearhouse)
    }
  }

  const handelChangeCluster=(e)=>{
    const clusterName=e.target.value
    if(clusterName !== ' '){
      const filterData=filterWearHouse.filter((ele)=>{
        return ele.cluster== clusterName
      })
      setFilterWearHouse(filterData)
      // console.log(filterData);

    }
    else{
      setFilterWearHouse(wearhouse)
    }
  }
  return (
    <>
      <div className="mainDiv">
        <div className="container-fluid">
          <div className="header sticky-top bg-white">
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
                      Array.from(new Set(filterWearHouse.map(item => item.city))).map((city, index) => {
                        return <option key={index} value={city}>{city}</option>
                      })
                    }
                  </select>
                </div>
                <div className="clusterBox">
                  <select name="" id="" onChange={handelChangeCluster}>
                    <option value="">Cluster</option>
                    {
                      Array.from(new Set(filterWearHouse.map(item => item.cluster))).map((cluster, index) => {
                        return <option key={index} value={cluster}>{cluster}</option>
                      })
                    }

                  </select>
                </div>

              </div>
            </div>

          </div>
          <div className="wearhouseList">
            <table>
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

                {/* <tr>
              <td>Warehouse-165</td>
              <td>Delhi</td>
              <td>1234</td>
              <td>cluster-a-32</td>
            </tr> */}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home